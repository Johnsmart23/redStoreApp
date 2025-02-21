const Display = ({ onAddToCart }) => {
    return (
      <div id="display" className="display">
        <div className="big-container">
          <div className="roll">
            <div className="coll-3">
              <img src="/images/category-1 1.png" alt="Category 1" />
            </div>
            <div className="coll-3">
              <img src="/images/category-2 1.png" alt="Category 2" />
            </div>
            <div className="coll-3">
              <img src="/images/category-3 1.png" alt="Category 3" />
            </div>
          </div>
        </div>
        <div className="small-container">
          <h2 className="title">Featured Products</h2>
          <div className="row">
            {[ 
              { img: "/images/buy-1 1.png", title: "Red T-shirt", price: "$50.00" },
              { img: "/images/buy-2 1.png", title: "Snickers", price: "$50.00" },
              { img: "/images/buy-3.png", title: "Long pants", price: "$50.00" },
              { img: "/images/product-4 1.png", title: "Black printed T-shirt", price: "$50.00" }
            ].map((product, index) => (
              <div key={index} className="col-4">
                <img src={product.img} alt={product.title} />
                <h4>{product.title}</h4>
                <div className="rating">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
          <h2 className="title">Latest Products</h2>
          <div className="row">
            {[ 
              { img: "/images/product-5.png", title: "Airforce Snickers", price: "$50.00" },
              { img: "/images/product-6.png", title: "Black polo", price: "$50.00" },
              { img: "/images/product-7.png", title: "Socks", price: "$50.00" },
              { img: "/images/product-8.png", title: "Black wrist watch", price: "$50.00" }
            ].map((product, index) => (
              <div key={index} className="col-4">
                <img src={product.img} alt={product.title} />
                <h4>{product.title}</h4>
                <div className="rating">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>☆</span>
                </div>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Display;
  