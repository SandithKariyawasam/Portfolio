import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import str2 from "../assets/images/star-2.png";
import blo1 from "../assets/images/blog1.jpg";
import blo2 from "../assets/images/blog2.jpg";
import blo3 from "../assets/images/blog3.png";

const Blog = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
      });
      window.AOS.refresh();
    }
  }, []);
  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content" data-aos="fade-up">
            <p>HOME - BLOG</p>
            <h1 className="section-heading">
              <img src={str2} alt="Star" /> Blog with rightsidebar{" "}
              <img src={str2} alt="Star" />
            </h1>
          </div>
        </div>
      </div>

      <div className="blog-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="blog-items">
                <div className="blog-item" data-aos="zoom-in">
                  <div className="img-box">
                    <img src={blo1} alt="Blog" />
                  </div>
                  <div className="content">
                    <span className="meta">25 March 2025</span>
                    <h1>
                      <Link to="/blog-details">
                        🔎 QA vs Tester -- What's the Difference?🤔
                      </Link>
                    </h1>
                    <p>
                      In the world of software development, the terms Quality
                      Assurance (QA) and Testing are often used
                      interchangeably-but they play distinct roles in delivering
                      a high-quality product.
                      <br />
                      🛡️ QA Engineer Focuses on the entire process. They build
                      frameworks, define standards, and ensure quality is baked
                      in from....
                    </p>
                    <Link to="/blog-details" className="theme-btn">
                      Read More
                    </Link>
                  </div>
                </div>

                {/* <div className="blog-item" data-aos="zoom-in">
                  <div className="img-box">
                    <img src={blo2} alt="Blog" />
                  </div>
                  <div className="content">
                    <span className="meta">25 March 2025</span>
                    <h1>
                      <Link to="/blog-details">
                        Technologies In JavaScript 🔥
                      </Link>
                    </h1>
                    <p>
                      Whether you're just starting out or looking to go
                      full-stack,
                      <br />
                      Here’s a crisp breakdown of essential JavaScript
                      technologies that can supercharge your dev career:
                      <br />
                      ✅ Basics: HTML | CSS | JS
                      <br />
                      🎨 Frontend: React.js | Angular.js | Vue.js
                      <br />
                      ⚙️ Backend: Nest.js | Node.js | Express.js
                      <br />
                      📱 Hybrid Apps: Ionic | Electron | React Native.....
                      <br />
                    </p>
                    <Link to="/blog-details" className="theme-btn">
                      Read More
                    </Link>
                  </div>
                </div> */}

                {/* <div className="blog-item" data-aos="zoom-in">
                  <div className="img-box">
                    <img src={blo3} alt="Blog" />
                  </div>
                  <div className="content">
                    <span className="meta">25 March 2025</span>
                    <h1>
                      <Link to="/blog-details">
                        32 JAVASCRIPT Project ideas
                      </Link>
                    </h1>
                    <p>
                      🟢 Beginner projects like To-Do List ✅, Calculator ➗,
                      and Quiz App 🎯 focus on basic DOM manipulation, local
                      storage, and simple API use.
                      <br />
                      🟡🔴 Intermediate and Pro projects like Weather App 🌦️,
                      Chat Application 💬, and API Data Table 📊 involve
                      real-time APIs,......
                    </p>
                    <Link to="/blog-details" className="theme-btn">
                      Read More
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-md-4">
              <div className="blog-sidebar">
                <div className="blog-sidebar-inner">
                  <div className="blog-sidebar-widget search-widget">
                    <div
                      className="blog-sidebar-widget-inner"
                      data-aos="zoom-in"
                    >
                      <form className="shadow-box">
                        <input type="text" placeholder="Search Here..." />
                        <button className="theme-btn">Search</button>
                      </form>
                    </div>
                  </div>

                  <div
                    className="blog-sidebar-widget recent-post-widget"
                    data-aos="zoom-in"
                  >
                    <div className="blog-sidebar-widget-inner shadow-box">
                      <h3>Recent Posts</h3>

                      <ul>
                        <li>
                          <Link to="/blog-details">
                            CV එකේ Skills Section එක: Hard Skills සහ Soft Skills
                            එකට වෙන් කරන්න ඕනද?
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-details">
                            Ready to skyrocket your UI/UX design skills?
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-details">
                            💵 Stop manually formatting currency in JavaScript
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-details">
                            📝 FULL-STACK Web Developer Roadmap for Easy
                            Learning!
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    className="blog-sidebar-widget categories-widget"
                    data-aos="zoom-in"
                  >
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
