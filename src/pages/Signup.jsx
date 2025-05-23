import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/login`,
        },
      });
      if (error) throw error;
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div id="login-page">
        <div className="image-section">
          <img src="images/image1.png" alt="Account Illustration" />
        </div>
        <div className="form-section">
          <div className="form-container">
            <div className="form-content-container">
              <div className="form-content">
                <div className="success-message">
                  <h2>Check your email</h2>
                  <p>We've sent a confirmation link to {email}</p>
                  <p>
                    Please check your email and click the link to confirm your
                    account.
                  </p>
                  <button onClick={() => navigate("/login")} className="btn">
                    Go to Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="login-page">
      <div className="image-section">
        <img src="images/image1.png" alt="Account Illustration" />
      </div>
      <form className="form-section" onSubmit={handleSignup}>
        <div className="form-container">
          <div className="tab-titles">
            <p className="tab-link" onClick={() => navigate("/login")}>
              Log in
            </p>
            <p className="tab-link active">Register</p>
          </div>

          <div className="form-content-container">
            <div className="form-content">
              {error && <div className="error-message">{error}</div>}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? "Creating account..." : "Sign Up"}
              </button>
              <p>
                Already have an account? <a href="/login">Log in</a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
