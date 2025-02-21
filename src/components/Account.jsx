import React, { useState } from 'react';

const AccountPage = () => {
  const [isRegister, setIsRegister] = useState(false);

  const handleTabClick = (tab) => {
    if (tab === 'login') {
      setIsRegister(false);
    } else if (tab === 'register') {
      setIsRegister(true);
    }
  };

  return (
    <div id="login-page">
      <div className="image-section">
        <img src="images/image1.png" alt="Account Illustration" />
      </div>
      <div className="form-section">
        <div className="form-container">
          <div className="tab-titles">
            <p
              className={`tab-link ${!isRegister ? 'active' : ''}`}
              onClick={() => handleTabClick('login')}
            >
              Log in
            </p>
            <p
              className={`tab-link ${isRegister ? 'active' : ''}`}
              onClick={() => handleTabClick('register')}
            >
              Register
            </p>
          </div>

          <div className="form-content-container">
            {!isRegister && (
              <form id="login-form" className="form-content">
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
                <p>
                  Don't have an account? <a href="" onClick={() => handleTabClick('register')}>Register</a>
                </p>
              </form>
            )}

            {isRegister && (
              <form id="register-form" className="form-content">
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
