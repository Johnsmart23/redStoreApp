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
      <div className="product-page">
        <div className="header-with-search">
          <h2>Products</h2>
            <input
              className="searchInput"
              type="text"
              name=""
              placeholder="Search something"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="searchButton" onClick={(e) => e.preventDefault()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                <g clipPath="url(#clip0_2_17)">
                  <g filter="url(#filter0_d_2_17)">
                    <path d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" shapeRendering="crispEdges"></path>
                  </g>
                </g>
                <defs>
                  <filter id="filter0_d_2_17" x="-0.418549" y="3.70435" width="29.7139" height="29.7139" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_17"></feBlend>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_17" result="shape"></feBlend>
                  </filter>
                  <clipPath id="clip0_2_17">
                    <rect width="28.0702" height="28.0702" fill="white" transform="translate(0.403503 0.526367)"></rect>
                  </clipPath>
                </defs>
              </svg>
            </button>
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
    </div>
  );
};

export default Product;
