import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Display from './components/Display';
import Product from './components/Product';
import Brand from './components/Brand';
import Testimonial from './components/Testimonial';
import Sponsor from './components/Sponsor';
import Footer from './components/Footer';
import CartPage from './components/CartPage';
import Account from './components/Account'; 
import CheckoutPage from './components/CheckoutPage'; 
import Contact from './components/Contact';
import AboutUs from './components/AboutUs'; 

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems");
    }
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleIncreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <Router>
      <Header cartCount={cartItems.length} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Display onAddToCart={handleAddToCart} />
                <Brand />
                <Testimonial />
                <Sponsor />
                <Footer />
              </>
            }
          />

          <Route
            path="/product"
            element={
              <>
                <Product onAddToCart={handleAddToCart} />
                <Footer />
              </>
            }
          />

          <Route
            path="/cart"
            element={
              <>
                <CartPage
                  cartItems={cartItems}
                  onRemoveFromCart={handleRemoveFromCart}
                  onIncreaseQuantity={handleIncreaseQuantity}
                  onDecreaseQuantity={handleDecreaseQuantity}
                />
                <Footer />
              </>
            }
          />

          <Route
            path="/account"
            element={
              <>
                <Account />
                <Footer />
              </>
            }
          />

          <Route
            path="/checkout"
            element={
              <>
                <CheckoutPage />
                <Footer />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <Contact />
                <Footer />
              </>
            }
          />
          
          <Route
            path="/about-us"
            element={
              <>
                <AboutUs />
                <Footer />
              </>
            }
          />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
