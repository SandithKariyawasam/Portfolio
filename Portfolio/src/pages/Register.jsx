import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import "../assets/css/form.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/aos.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (password !== confirmPassword) {
        setError("Passwords do not match!");
        return;
    }

    try {
      const response = await fetch("https://portfolio-backend-tau-rouge.vercel.app/admins/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Registration failed");
      } else {
        setMessage("✅ Registration successful! Redirecting...");
        
        setTimeout(() => {
            navigate("/login"); 
        }, 2000);
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
      console.error("Registration error:", err);
    }
  };

  return (
    <>
      <div className="page-container">
        <form className="form" onSubmit={handleSubmit}>
          <p className="title">Register</p>
          <p className="message">Create a new admin account.</p>

          <label>
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span>Email</span>
          </label>

          <label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span>Password</span>
          </label>

          <label>
            <input
              className="input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span>Confirm Password</span>
          </label>

          <label>
            {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}
            {message && <p style={{ color: "green", fontSize: "0.9rem" }}>{message}</p>}
          </label>

          <button type="submit" className="submit">
            Register
          </button>
          
          <p className="signin">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;