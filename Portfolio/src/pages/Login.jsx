import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../context/AuthContext";
import bg1 from "../assets/images/bg1.png";
import star2 from "../assets/images/star-2.png";
import icon2 from "../assets/images/icon2.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsSubmitting(true);

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
        login(data.token, data.admin);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
      console.error("Login error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-area" style={{ padding: '100px 0', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8" data-aos="zoom-in">
            <div
              className="shadow-box"
              style={{
                position: 'relative',
                padding: '50px 40px',
                borderRadius: '30px',
                backgroundColor: 'var(--card-bg)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                overflow: 'hidden'
              }}
            >
              <img src={bg1} alt="BG" className="bg-img" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, zIndex: -1 }} />

              <div className="text-center mb-40">
                <img src={icon2} alt="Icon" style={{ width: '40px', marginBottom: '20px' }} />
                <h1 className="section-heading" style={{ fontSize: '32px', marginBottom: '10px', justifyContent: 'center' }}>
                  <img src={star2} alt="Star" /> Admin Login <img src={star2} alt="Star" />
                </h1>
                <p style={{ color: 'var(--text-color)', fontSize: '15px' }}>
                  Sign in to manage your blog posts.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="email" style={{ color: 'var(--icon-color)', fontSize: '14px', fontWeight: 'bold', marginLeft: '5px' }}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      padding: '16px 20px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      color: 'var(--text-color)',
                      outline: 'none',
                      fontSize: '15px',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary_color)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.05)'}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="password" style={{ color: 'var(--icon-color)', fontSize: '14px', fontWeight: 'bold', marginLeft: '5px' }}>Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                      padding: '16px 20px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      color: 'var(--text-color)',
                      outline: 'none',
                      fontSize: '15px',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary_color)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.05)'}
                  />
                </div>

                {error && (
                  <div style={{ padding: '12px', borderRadius: '10px', backgroundColor: 'rgba(255, 60, 60, 0.1)', color: '#ff3c3c', fontSize: '14px', textAlign: 'center', border: '1px solid rgba(255, 60, 60, 0.2)' }}>
                    {error}
                  </div>
                )}

                {message && (
                  <div style={{ padding: '12px', borderRadius: '10px', backgroundColor: 'rgba(91, 246, 120, 0.1)', color: '#5bf678', fontSize: '14px', textAlign: 'center', border: '1px solid rgba(91, 246, 120, 0.2)' }}>
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    marginTop: '10px',
                    padding: '16px',
                    borderRadius: '12px',
                    border: 'none',
                    backgroundColor: 'var(--primary_color)',
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  onMouseEnter={(e) => !isSubmitting && (e.target.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => e.target.style.transform = 'none'}
                >
                  {isSubmitting ? "Signing In..." : "Sign In"}
                </button>

                <p style={{ marginTop: '20px', color: 'rgba(255, 255, 255, 0.4)', fontSize: '13px', textAlign: 'center', lineHeight: '1.6' }}>
                  Access is restricted to authorized administrators only. <br />
                  <Link to="/" style={{ color: 'var(--primary_color)', fontWeight: 'bold' }}>Back to Home</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
