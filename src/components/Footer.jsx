
const Footer = () => {
    return (
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col-1">
              <h3>Download Our App</h3>
              <p>Download App for Android and iOS mobile phones.</p>
              <div className="app-logo">
                <a href="https://www.googleplay.com">
                  <img src="images/google play logo.png" />
                </a>
                <a href="https://www.applestore.com">
                  <img src="images/app store logo.png" />
                </a>
              </div>
            </div>
            <div className="footer-col-2">
              <img src="images/logo 2.png" />
              <p>
                Our Purpose Is To Sustainably Make The Pleasure And Benefits Of
                Sports Accessible To The Many
              </p>
            </div>
            <div className="footer-col-3">
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <a href="">Coupons</a>
                </li>
                <li>
                  <a href="">Blog Post</a>
                </li>
                <li>
                  <a href="">Return Policy</a>
                </li>
                <li>
                  <a href="">Join Affiliate</a>
                </li>
              </ul>
            </div>
            <div className="footer-col-4">
              <h3>Follow Us</h3>
              <ul>
                <li>
                    <a href="">Facebook</a>
                </li>
                <li>
                  <a href="">Twitter</a>
                </li>
                <li>
                    <a href="">Instagram</a>
                </li>
                <li>
                    <a href="">YouTube</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">Copyright ©2024</p>
        </div>
      </div>
    );
  };
  
  export default Footer;
  