import React from 'react'
import { Link, useLocation } from "react-router-dom";
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
                            <img src={logo} alt="Logo" />
                        </a>
                        <ul className="footer-menu">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/works">Works</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
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
