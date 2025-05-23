import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="login-page">
      <div className="image-section">
        <img src="images/image1.png" alt="Account Illustration" />
      </div>
      <form className="form-section" onSubmit={handleLogin}>
        <div className="form-container">
          <div className="tab-titles">
            <p className="tab-link active">Log in</p>
            <p className="tab-link" onClick={() => navigate("/signup")}>
              Register
            </p>
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
              <button type="submit" disabled={loading}>
                {loading ? "Signing in..." : "Login"}
              </button>
              <p>
                Don't have an account? <a href="/signup">Register</a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
