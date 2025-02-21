import { Link } from 'react-router-dom'; 

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="row">
        {/* Left Column */}
        <div className="col-2">
          <h1>
            Give Your Workout
            <br /> A New Style!
          </h1>
          <p>
            Success isn't always about greatness. It's about consistency. Consistent hard work gains success. Greatness will come.
          </p>
          <Link to="/product" className="btn">
            Explore Now &#8594;
          </Link>
        </div>
        {/* Right Column */}
        <div className="col-2">
          <img src="/images/image1.png" alt="Workout Style" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
