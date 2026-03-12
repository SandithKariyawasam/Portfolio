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

  const blogPosts = [
    {
      id: 1,
      img: blo1,
      date: "25 March 2025",
      title: "🔎 QA vs Tester -- What's the Difference?🤔",
      desc: "In the world of software development, the terms Quality Assurance (QA) and Testing are often used interchangeably-but they play distinct roles in delivering a high-quality product. 🛡️ QA Engineer Focuses on the entire process. They build frameworks, define standards, and ensure quality is baked in from....",
      link: "/blog-details"
    },
    {
      id: 2,
      img: blo2,
      date: "20 March 2025",
      title: "Technologies In JavaScript 🔥",
      desc: "Whether you're just starting out or looking to go full-stack, here’s a crisp breakdown of essential JavaScript technologies that can supercharge your dev career: ✅ Basics: HTML | CSS | JS 🎨 Frontend: React.js | Angular.js | Vue.js ⚙️ Backend: Nest.js | Node.js...",
      link: "/blog-details"
    },
    {
      id: 3,
      img: blo3,
      date: "15 March 2025",
      title: "32 JAVASCRIPT Project ideas",
      desc: "🟢 Beginner projects like To-Do List ✅, Calculator ➗, and Quiz App 🎯 focus on basic DOM manipulation, local storage, and simple API use. 🟡🔴 Intermediate and Pro projects like Weather App 🌦️, Chat Application 💬, and API Data Table 📊 involve real-time APIs,......",
      link: "/blog-details"
    }
  ];

  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content" data-aos="fade-up">
            <p style={{ letterSpacing: '2px', color: 'var(--primary_color)', fontWeight: 'bold' }}>HOME - BLOG</p>
            <h1 className="section-heading" style={{ fontSize: '48px', marginTop: '10px' }}>
              <img src={str2} alt="Star" /> My Latest Articles{" "}
              <img src={str2} alt="Star" />
            </h1>
          </div>
        </div>
      </div>

      <div className="blog-area" style={{ padding: '60px 0 100px 0' }}>
        <div className="container">
          <div className="row" style={{ rowGap: '40px' }}>
            
            {/* Main Blog Grid */}
            <div className="col-lg-8 col-md-12">
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
                  gap: '30px' 
                }}
              >
                {blogPosts.map((post, idx) => (
                  <div 
                    key={post.id} 
                    className="shadow-box" 
                    data-aos="fade-up" 
                    data-aos-delay={idx * 100}
                    style={{ 
                      borderRadius: '24px', 
                      backgroundColor: 'var(--card-bg)', 
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      border: '1px solid rgba(255,255,255,0.03)',
                      transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
                      e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                    }}
                  >
                    <div style={{ width: '100%', height: '240px', overflow: 'hidden', position: 'relative' }}>
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease'
                        }} 
                      />
                      <div style={{ position: 'absolute', top: '15px', right: '15px', backgroundColor: 'rgba(15, 15, 15, 0.75)', backdropFilter: 'blur(10px)', padding: '6px 14px', borderRadius: '20px', color: '#fff', fontSize: '13px', fontWeight: 'bold', border: '1px solid rgba(255,255,255,0.1)' }}>
                        {post.date}
                      </div>
                    </div>
                    
                    <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <h2 style={{ fontSize: '22px', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '15px', color: 'var(--icon-color)' }}>
                        <Link to={post.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {post.title}
                        </Link>
                      </h2>
                      <p style={{ color: 'var(--text-color)', fontSize: '15px', lineHeight: '1.7', marginBottom: '25px', flex: 1 }}>
                        {post.desc}
                      </p>
                      
                      <Link 
                        to={post.link} 
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '8px', 
                          color: 'var(--primary_color)', 
                          fontWeight: 'bold', 
                          textDecoration: 'none',
                          fontSize: '15px',
                          textTransform: 'uppercase',
                          letterSpacing: '1px'
                        }}
                      >
                        Read Article <i className="iconoir-arrow-up-right" style={{ fontSize: '18px' }}></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12">
              <div style={{ position: 'sticky', top: '30px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                
                {/* Search Widget */}
                <div 
                  className="shadow-box" 
                  data-aos="fade-left"
                  style={{ 
                    padding: '30px', 
                    borderRadius: '24px', 
                    backgroundColor: 'var(--card-bg)', 
                    border: '1px solid rgba(255,255,255,0.03)' 
                  }}
                >
                  <h3 style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--icon-color)', fontWeight: 'bold' }}>Search</h3>
                  <form style={{ display: 'flex', gap: '10px' }} onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="text" 
                      placeholder="Type here..." 
                      style={{ 
                        flex: 1, 
                        padding: '14px 20px', 
                        borderRadius: '12px', 
                        border: 'none', 
                        backgroundColor: 'rgba(255,255,255,0.05)', 
                        color: 'var(--text-color)',
                        outline: 'none',
                        fontSize: '15px'
                      }} 
                    />
                    <button 
                      style={{ 
                        padding: '0 20px', 
                        borderRadius: '12px', 
                        border: 'none', 
                        backgroundColor: 'var(--primary_color)', 
                        color: '#fff', 
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease'
                      }}
                    >
                      <i className="iconoir-search" style={{ fontSize: '20px' }}></i>
                    </button>
                  </form>
                </div>

                {/* Recent Posts Widget */}
                <div 
                  className="shadow-box" 
                  data-aos="fade-left"
                  data-aos-delay="100"
                  style={{ 
                    padding: '30px', 
                    borderRadius: '24px', 
                    backgroundColor: 'var(--card-bg)', 
                    border: '1px solid rgba(255,255,255,0.03)' 
                  }}
                >
                  <h3 style={{ fontSize: '20px', marginBottom: '25px', color: 'var(--icon-color)', fontWeight: 'bold' }}>Recent Posts</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {[
                      "CV එකේ Skills Section එක: Hard Skills සහ Soft Skills එකට වෙන් කරන්න ඕනද?",
                      "Ready to skyrocket your UI/UX design skills?",
                      "💵 Stop manually formatting currency in JavaScript",
                      "📝 FULL-STACK Web Developer Roadmap for Easy Learning!"
                    ].map((title, i) => (
                      <li key={i} style={{ borderBottom: i !== 3 ? '1px solid rgba(255,255,255,0.05)' : 'none', paddingBottom: i !== 3 ? '15px' : '0' }}>
                        <Link 
                          to="/blog-details" 
                          style={{ 
                            color: 'var(--text-color)', 
                            textDecoration: 'none', 
                            fontSize: '15px', 
                            lineHeight: '1.5',
                            display: 'block',
                            transition: 'color 0.3s ease'
                          }}
                          onMouseEnter={(e) => e.target.style.color = 'var(--primary_color)'}
                          onMouseLeave={(e) => e.target.style.color = 'var(--text-color)'}
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
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
