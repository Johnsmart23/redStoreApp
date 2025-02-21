
const ContactUs = () => {
    return (
      <div className="contact-us">
        <div className="contact-us-header">
          <h1>Contact Us</h1>
          <p>We're here to help. Reach out to us with any questions or concerns!</p>
        </div>
  
        <div className="contact-us-container">
          <div className="contact-us-info">
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> CodeSyndicate@gmail.com</p>
            <p><strong>Phone:</strong> +2349027368017</p>
            <p><strong>Address:</strong> 123 E-commerce Street, Online City, Webland</p>
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/facebook.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/twitter.png" alt="Twitter" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram.png" alt="Instagram" />
              </a>
            </div>
          </div>
  
          <div className="contact-us-form">
            <h2>Send Us a Message</h2>
            <form>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
              <input type="email" id="email" name="email" placeholder="Email" required />
              <input type="text" id="subject" name="subject" placeholder="Subject" required />
              <textarea id="message" name="message" placeholder="Write your message here..." required></textarea>
  
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactUs;
  