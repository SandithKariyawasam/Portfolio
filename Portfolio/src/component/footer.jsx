import React from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/aos.css'
import logo from "../assets/images/signature.png";

const footer = () => {
  return (
    <>
      <div className="footer-area">
            <div className="container">
                <div className="footer-content text-center">
                    <a href="./index.html" className="logo">
                        <img src={logo} alt="Logo"/>
                    </a>
                    <ul className="footer-menu">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="works.html">Works</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    <p className="copyright">
                        &copy; All rights reserved by <span>BravoScript</span>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default footer
