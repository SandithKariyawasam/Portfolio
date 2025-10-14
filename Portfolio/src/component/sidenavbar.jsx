import React, { useEffect } from "react";
import '../dashboard/assets/css/dashboard.css'
import logo from '../assets/images/logo.png'

import { Link, useLocation } from "react-router-dom";

const sidenavbar = () => {

    const isActive = (path) => (location.pathname === path ? "active" : "");

    const handleLogout = () => {
        localStorage.removeItem("token");
    };

    return (
        <>
            <div class="sidebar">
                <div class="logo">
                    <img src={logo} />
                </div>

                <div class="nav-menu">
                    <button class={`nav-item ${isActive("/dashboard")}`}>
                        <i class="fas fa-home"></i>
                        <span><Link to="/dashboard">Home</Link></span>
                    </button>
                    <button class={`nav-item ${isActive("/dashboard/account")} && nav-item ${isActive("/dashboard/profile")}`}>
                        <i class="fas fa-user-circle"></i>
                        <span><Link to="/dashboard/account">Account</Link></span>
                    </button>
                    <button class={`nav-item ${isActive("/dashboard/projects")}`}>
                        <i class="fas fa-wallet"></i>
                        <span><Link to="/dashboard/projects">Projects</Link></span>
                    </button>
                    <button class={`nav-item ${isActive("/dashboard/blogs")}`}>
                        <i class="fas fa-sliders-h"></i>
                        <span><Link to="/dashboard/blogs">Blogs</Link></span>
                    </button>
                    <button class={`nav-item ${isActive("/dashboard/inbox")}`}>
                        <i class="fas fa-comment-dots"></i>
                        <span><Link to="/dashboard/inbox">Inbox</Link></span>
                    </button>
                    <button class={`nav-item ${isActive("/dashboard/insights")}`}>
                        <i class="fas fa-chart-line"></i>
                        <span><Link to="/dashboard/insights">Insights</Link></span>
                    </button>
                    <button class={`nav-item ${isActive("/dashboard/customize")}`}>
                        <i class="fas fa-life-ring"></i>
                        <span><Link to="/dashboard/customize">Customize</Link></span>
                    </button>
                    <button class={`nav-item ${isActive("/dashboard/live")}`}>
                        <i class="fa-solid fa-eye"></i>
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
