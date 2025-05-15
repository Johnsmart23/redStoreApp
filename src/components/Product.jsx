import { useState } from "react";

const Product = ({ onAddToCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const products = [
    { id: 1, name: 'Red Printed T-shirt', price: 50, images: '/images/buy-1 1.png' },
    { id: 6, name: 'Snickers', price: 50, images: '/images/Gray sport shoe.jpg' },
    { id: 7, name: 'Long Pants', price: 50, images: '/images/buy-3.png' },
    { id: 8, name: 'Black Printed T-shirt', price: 50, images: '/images/product-4 1.png' },
    { id: 9, name: 'AirForce Snickers', price: 50, images: '/images/product-5.png' },
    { id: 10, name: 'Black Polo', price: 50, images: '/images/product-6.png' },
    { id: 11, name: 'Socks', price: 50, images: '/images/product-7.png' },
    { id: 12, name: 'Black Wrist Watch', price: 50, images: '/images/product-8.png' },
    { id: 13, name: 'Flat Snickers', price: 50, images: '/images/product-11.png' },
    { id: 14, name: 'Black Pants', price: 50, images: '/images/product-12.png' },
    { id: 15, name: 'Gray Watch', price: 50, images: '/images/product-9.png' },
    { id: 16, name: 'Black Joggers', price: 50, images: '/images/product-10.png' },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query as the user types
  };

  return (
    <div id="product">
        <div className="header-with-search">
          <h2>Products</h2>
            <input className="searchInput" type="text" name=""placeholder="Search something" value={searchQuery}
              onChange={handleSearchChange}
            />
        </div>

        <div className="products">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.images} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <div className="rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p>Price: ${product.price}</p>
              <button onClick={() => onAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Product;
