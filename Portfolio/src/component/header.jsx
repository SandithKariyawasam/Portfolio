import React from 'react'
import { Link, useLocation } from 'react-router-dom' 
import '../assets/css/style.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/aos.css'
import logo from '../assets/images/logo.png'

const Header = () => {
  const location = useLocation(); 

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className="header-area">
      <div className="container">
        <div className="gx-row d-flex align-items-center justify-content-between">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>

          <nav className="navbar">
            <ul className="menu">
              <li className={isActive('/')}><Link to="/">Home</Link></li>
              <li className={isActive('/about')}><Link to="/about">About</Link></li>
              <li className={isActive('/works')}><Link to="/works">Works</Link></li>
              <li className={isActive('/contact')}><Link to="/contact">Contact</Link></li>
            </ul>
            <a href="./contact.html" class="theme-btn">Let's talk</a>
          </nav>

          <a href="./contact.html" class="theme-btn">Let's talk</a>

          <div className="show-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header