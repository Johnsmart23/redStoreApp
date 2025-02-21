import { Link } from 'react-router-dom'; 

const Brand = () => {
  return (
    <div className="offer">
      <div className="small-container">
        <div className="row">
          <div className="col-2 image-container">
            <img src="/images/exclusive 1.png" className="offer-img" alt="Smart Band 4" />
          </div>
          <div className="col-2 text-container">
            <p>Exclusive Available on Redstore</p>
            <h1>Smart Band 4</h1>
            <small>
              The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with
              adjustable brightness, so everything is clear as can be.
            </small>
            <Link to="/product" className="btn">
              Buy Now &#8594;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
