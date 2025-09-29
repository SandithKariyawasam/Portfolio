import React, { useEffect } from "react";
import '../dashboard/assets/css/dashboard.css'
import logo from '../assets/images/logo.png'

import { Link, useLocation } from "react-router-dom";

const sidenavbar = () => {

    const handleLogout = () => {
        localStorage.removeItem("token");
        <Navigate to="/login" />;
    };

    return (
        <>
            <div class="sidebar">
                <div class="logo">
                    <img src={logo} />
                </div>

                <div class="nav-menu">
                    <button class="nav-item active">
                        <i class="fas fa-home"></i>
                        <span>Home</span>
                    </button>
                    <button class="nav-item">
                        <i class="fas fa-user-circle"></i>
                        <span>Account</span>
                    </button>
                    <button class="nav-item">
                        <i class="fas fa-wallet"></i>
                        <span>Projects</span>
                    </button>
                    <button class="nav-item">
                        <i class="fas fa-sliders-h"></i>
                        <span>Blogs</span>
                    </button>
                    <button class="nav-item">
                        <i class="fas fa-comment-dots"></i>
                        <span>Inbox</span>
                    </button>
                    <button class="nav-item">
                        <i class="fas fa-chart-line"></i>
                        <span>Insights</span>
                    </button>
                    <button class="nav-item">
                        <i class="fas fa-life-ring"></i>
                        <span>Customize</span>
                    </button>
                    <button class="nav-item">
                        <i class="fa-solid fa-eye"></i>
                        <span>Live View</span>
                    </button>
                    <button onClick={handleLogout} className="nav-item">
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default sidenavbar
