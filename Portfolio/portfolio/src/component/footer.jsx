import React from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/aos.css'
import logo from '../assets/images/logo.png'

const footer = () => {
  return (
    <>
      <div class="footer-area">
            <div class="container">
                <div class="footer-content text-center">
                    <a href="./index.html" class="logo">
                        <img src={logo} alt="Logo"/>
                    </a>
                    <ul class="footer-menu">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="works.html">Works</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default footer
