import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from 'react'; 

const Header = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);  
    } else {
      setIsScrolled(false);  
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);  
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}> 
      <div className="logo">
        <img src="/images/logo 2.png" alt="Logo" className="logo-img" />
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Products</Link></li>
          <li><Link to="/about-us">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/account"> <FaUserCircle size={30} /></Link></li>
         
        </ul>
      </nav>
      

      <div className="cart-icon">
        <Link to="/cart">
          <FaShoppingCart />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;
