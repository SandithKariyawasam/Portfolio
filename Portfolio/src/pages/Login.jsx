import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/form.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/aos.css";

import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await fetch("https://portfolio-backend-tau-rouge.vercel.app/admins/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed");
      } else {
        setMessage("✅ Login successful!");
        console.log("Admin:", data.admin);

        login(data.token, data.admin);

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <>
      <div className="page-container">
        <form className="form" onSubmit={handleSubmit}>
          <p className="title">Login</p>
          <p className="message">SignIn now and get full access to our web.</p>

          <label>
            <input
              className="input"
              type="email"
              id="email"
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
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span>Password</span>
          </label>

          <label>
            {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}
            {message && <p style={{ color: "green", fontSize: "0.9rem" }}>{message}</p>}
          </label>

          <button type="submit" className="submit">
            SignIn
          </button>
          <br />
          <p className="signin">
            Only admin can login here. Still users are not allowed to login.
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
