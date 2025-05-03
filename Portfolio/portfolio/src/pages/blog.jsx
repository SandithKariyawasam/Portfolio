import React from 'react'
import str2 from '../assets/images/star-2.png'
import blo1 from '../assets/images/blog1.jpg'
import blo2 from '../assets/images/blog2.jpg'
import blo3 from '../assets/images/blog3.png'

const blog = () => {
    return (
        <>
            <div class="breadcrumb-area">
                <div class="container">
                    <div class="breadcrumb-content" data-aos="fade-up">
                        <p>HOME - BLOG</p>
                        <h1 class="section-heading"><img src={str2} alt="Star" /> Blog with rightsidebar <img src={str2} alt="Star" /></h1>
                    </div>
                </div>
            </div>


            <div class="blog-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="blog-items">
                                <div class="blog-item" data-aos="zoom-in">
                                    <div class="img-box">
                                        <img src={blo1} alt="Blog" />
                                    </div>
                                    <div class="content">
                                        <span class="meta">25 March 2025</span>
                                        <h1><a href="/blog-details">🔎 QA vs Tester -- What's the Difference?🤔</a></h1>
                                        <p>In the world of software development, the terms Quality Assurance (QA) and Testing are often used interchangeably-but they play distinct roles in delivering a high-quality product.<br />🛡️ QA Engineer
                                            Focuses on the entire process. They build frameworks, define standards, and ensure quality is baked in from....</p>
                                        <a href="blog-details.html" class="theme-btn">Read More</a>
                                    </div>
                                </div>

                                <div class="blog-item" data-aos="zoom-in">
                                    <div class="img-box">
                                        <img src={blo2} alt="Blog" />
                                    </div>
                                    <div class="content">
                                        <span class="meta">25 March 2025</span>
                                        <h1><a href="blog-details.html">Technologies In JavaScript 🔥</a></h1>
                                        <p>
                                            Whether you're just starting out or looking to go full-stack,
                                            <br/>
                                            Here’s a crisp breakdown of essential JavaScript technologies that can supercharge your dev career:
                                            <br/>
                                            ✅ Basics: HTML | CSS | JS<br/>
                                            🎨 Frontend: React.js | Angular.js | Vue.js<br/>
                                            ⚙️ Backend: Nest.js | Node.js | Express.js<br/>
                                            📱 Hybrid Apps: Ionic | Electron | React Native.....<br/></p>
                                        <a href="blog-details.html" class="theme-btn">Read More</a>
                                    </div>
                                </div>

                                <div class="blog-item" data-aos="zoom-in">
                                    <div class="img-box">
                                        <img src={blo3} alt="Blog" />
                                    </div>
                                    <div class="content">
                                        <span class="meta">25 March 2025</span>
                                        <h1><a href="blog-details.html">32 JAVASCRIPT Project ideas</a></h1>
                                        <p>🟢 Beginner projects like To-Do List ✅, Calculator ➗, and Quiz App 🎯 focus on basic DOM manipulation, local storage, and simple API use.<br/>
                                        🟡🔴 Intermediate and Pro projects like Weather App 🌦️, Chat Application 💬, and API Data Table 📊 involve real-time APIs,......</p>
                                        <a href="blog-details.html" class="theme-btn">Read More</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="blog-sidebar">
                                <div class="blog-sidebar-inner">

                                    <div class="blog-sidebar-widget search-widget">
                                        <div class="blog-sidebar-widget-inner" data-aos="zoom-in">
                                            <form class="shadow-box">
                                                <input type="text" placeholder="Search Here..." />
                                                <button class="theme-btn">Search</button>
                                            </form>
                                        </div>
                                    </div>

                                    <div class="blog-sidebar-widget recent-post-widget" data-aos="zoom-in">
                                        <div class="blog-sidebar-widget-inner shadow-box">
                                            <h3>Recent Posts</h3>

                                            <ul>
                                                <li><a href="blog-details.html">CV එකේ Skills Section එක: Hard Skills සහ Soft Skills එකට වෙන් කරන්න ඕනද?</a></li>
                                                <li><a href="blog-details.html">Ready to skyrocket your UI/UX design skills?</a></li>
                                                <li><a href="blog-details.html">💵 Stop manually formatting currency in JavaScript</a></li>
                                                <li><a href="blog-details.html">📝 FULL-STACK Web Developer Roadmap for Easy Learning!</a></li>
                                            </ul>

                                        </div>
                                    </div>

                                    <div class="blog-sidebar-widget categories-widget" data-aos="zoom-in">
                                        <div class="blog-sidebar-widget-inner shadow-box">
                                            <h3>Categories</h3>

                                            <ul>
                                                <li><a href="blog-details.html">-Analysis</a></li>
                                                <li><a href="blog-details.html">-Firewall</a></li>
                                                <li><a href="blog-details.html">-IT Solutions</a></li>
                                                <li><a href="blog-details.html">-Security</a></li>
                                                <li><a href="blog-details.html">-Technology</a></li>
                                            </ul>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default blog
