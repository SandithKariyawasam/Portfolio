import React from 'react'
import '../dashboard/assets/css/dashboard.css'
import logo from '../assets/images/logo.png'

const sidenavbar = () => {
    return (
        <>
            <div class="sidebar">
                <div class="logo">
                    <img src={logo} />
                </div>

                <div class="nav-menu">
                    <a href="#" class="nav-item active">
                        <i class="fas fa-home"></i>
                        <span>Home</span>
                    </a>
                    <a href="#" class="nav-item">
                        <i class="fas fa-user-circle"></i>
                        <span>Account</span>
                    </a>
                    <a href="#" class="nav-item">
                        <i class="fas fa-wallet"></i>
                        <span>Projects</span>
                    </a>
                    <a href="#" class="nav-item">
                        <i class="fas fa-sliders-h"></i>
                        <span>Blogs</span>
                    </a>
                    <a href="#" class="nav-item">
                        <i class="fas fa-comment-dots"></i>
                        <span>Inbox</span>
                    </a>
                    <a href="#" class="nav-item">
                        <i class="fas fa-chart-line"></i>
                        <span>Insights</span>
                    </a>
                    <a href="#" class="nav-item">
                        <i class="fas fa-life-ring"></i>
                        <span>Customize</span>
                    </a>
                    <a href="#" class="nav-item">
                        <i class="fa-solid fa-eye"></i>
                        <span>Live View</span>
                    </a>
                    <a href="#" class="nav-item">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        <span>Logout</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default sidenavbar
