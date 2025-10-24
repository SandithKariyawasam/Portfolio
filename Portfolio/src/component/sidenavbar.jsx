import React, { useContext } from "react";
import "../dashboard/assets/css/dashboard.css";
import logo from "../assets/images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const sidenavbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext); // 👈 get logout from context

    const isActive = (path) => (location.pathname === path ? "active" : "");

    const handleLogout = () => {
        logout(); // removes token + updates state
        navigate("/login"); // redirect to login
    };

    return (
        <>
            <div className="sidebar">
                <div className="logo">
                    <img src={logo} />
                </div>

                <div className="nav-menu">
                    <button className={`nav-item ${isActive("/dashboard")}`}>
                        <i className="fas fa-chart-line"></i>
                        <span><Link to="/dashboard">Overview</Link></span>
                    </button>
                    <button className={`nav-item ${isActive("/")}`}>
                        <i className="fas fa-home"></i>
                        <span><Link to="/">Home</Link></span>
                    </button>
                    <button className={`nav-item ${isActive("/dashboard/account")} && nav-item ${isActive("/dashboard/profile")}`}>
                        <i className="fas fa-user-circle"></i>
                        <span><Link to="/dashboard/account">Account</Link></span>
                    </button>
                    <button className={`nav-item ${isActive("/dashboard/projects")}`}>
                        <i className="fas fa-wallet"></i>
                        <span><Link to="/dashboard/projects">Projects</Link></span>
                    </button>
                    <button className={`nav-item ${isActive("/dashboard/blogs")}`}>
                        <i className="fas fa-sliders-h"></i>
                        <span><Link to="/dashboard/blogs">Blogs</Link></span>
                    </button>
                    <button className={`nav-item ${isActive("/dashboard/inbox")}`}>
                        <i className="fas fa-comment-dots"></i>
                        <span><Link to="/dashboard/inbox">Inbox</Link></span>
                    </button>
                    <button className={`nav-item ${isActive("/dashboard/customize")}`}>
                        <i className="fas fa-life-ring"></i>
                        <span><Link to="/dashboard/customize">Customize</Link></span>
                    </button>
                    <button className={`nav-item ${isActive("/dashboard/live")}`}>
                        <i className="fa-solid fa-eye"></i>
                        <span><Link to="/dashboard/live">Live View</Link></span>
                    </button>
                    <button onClick={handleLogout} className="nav-item">
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <span><Link style={{ color: "red" }} to="/login">Logout</Link></span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default sidenavbar
