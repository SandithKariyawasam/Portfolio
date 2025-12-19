import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext, AuthProvider } from "../context/AuthContext.jsx";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/aos.css";
import logo from "../assets/images/signature.png";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <div className="header-area">
      <div className="container">
        <div className="gx-row d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Link to="/" className="logo">
            <img
              src={logo}
              style={{ marginLeft: "-35px", transform: "translateY(30%)", width: "250px" }}
              alt="Logo"
            />
          </Link>

          {/* Navbar */}
          <nav className="navbar">
            <ul className="menu">
              <li className={isActive("/")}>
                <Link to="/">Home</Link>
              </li>
              <li className={isActive("/about")}>
                <Link to="/about">About</Link>
              </li>
              <li className={isActive("/works")}>
                <Link to="/works">Works</Link>
              </li>
              <li className={isActive("/contact")}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Conditional Buttons */}
          {user ? (
            <Link to="/dashboard" className="theme-btn">
              Dashboard
            </Link>
          ) : (
            <Link to="/login" className="theme-btn">
              Login
            </Link>
          )}

          {/* Mobile Menu Icon */}
          <div className="show-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
