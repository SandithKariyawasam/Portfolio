import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import star2 from "../assets/images/star-2.png";
import blog3 from "../assets/images/blog3.jpg";

const BlogDetails = () => {
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
            <p style={{ letterSpacing: '2px', color: 'var(--primary_color)', fontWeight: 'bold' }}>HOME - BLOG DETAILS</p>
            <h1 className="section-heading" style={{ fontSize: '48px', marginTop: '10px' }}>
              <img src={star2} alt="Star" /> Article <img src={star2} alt="Star" />
            </h1>
          </div>
        </div>
      </div>

      <div className="blog-details-area" style={{ padding: '60px 0 100px 0' }}>
        <div className="container">
          <div className="row" style={{ rowGap: '40px' }}>
            
            {/* Main Content Area */}
            <div className="col-lg-8 col-md-12">
              <div 
                className="blog-details-content shadow-box" 
                data-aos="fade-up"
                style={{ 
                  backgroundColor: 'var(--card-bg)', 
                  padding: '40px', 
                  borderRadius: '24px', 
                  border: '1px solid rgba(255,255,255,0.03)' 
                }}
              >
                <div 
                  className="img-box" 
                  style={{ 
                    width: '100%', 
                    height: '400px', 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    marginBottom: '30px' 
                  }}
                >
                  <img src={blog3} alt="Blog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                
                <span 
                  className="meta" 
                  style={{ 
                    display: 'inline-block', 
                    backgroundColor: 'rgba(91, 120, 246, 0.1)', 
                    color: 'var(--primary_color)', 
                    padding: '8px 16px', 
                    borderRadius: '20px', 
                    fontSize: '14px', 
                    fontWeight: 'bold', 
                    marginBottom: '20px' 
                  }}
                >
                  25 March 2025 - 12:35 PM
                </span>
                
                <h1 style={{ fontSize: '32px', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '30px', color: 'var(--icon-color)' }}>
                  💡 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗶𝗻𝗴 𝗧𝗶𝗽 - 𝗦𝗻𝗮𝗸𝗲 𝗖𝗮𝘀𝗲 vs 𝗞𝗲𝗯𝗮𝗯 𝗖𝗮𝘀𝗲 vs 𝗖𝗮𝗺𝗲𝗹 𝗖𝗮𝘀𝗲 vs 𝗣𝗮𝘀𝗰𝗮𝗹 𝗖𝗮𝘀𝗲
                </h1>
                
                <div style={{ color: 'var(--text-color)', fontSize: '16px', lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '20px' }}>
                    🔥 In the programming world, consistent and clear code is
                    essential. This extends beyond code structure to how you name
                    elements like variables, methods, functions, classes and
                    files. Naming conventions provide rules or guidelines
                    developers follow to ensure code consistency and clarity.
                  </p>
                  <p style={{ marginBottom: '30px', fontWeight: 'bold', color: 'var(--icon-color)' }}>
                    Let's explore four common naming conventions:
                  </p>

                  <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <li style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', borderLeft: '4px solid var(--primary_color)' }}>
                      <strong style={{ color: 'var(--icon-color)', fontSize: '18px' }}>✅ Snake Case</strong><br />
                      Words are separated by underscores (_), each in lowercase. It's commonly used in languages like Python for variable and function names.<br />
                      <span style={{ color: '#888', fontStyle: 'italic', marginTop: '10px', display: 'block' }}>Ex: customer_name, user_name</span>
                    </li>
                    <li style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', borderLeft: '4px solid var(--primary_color)' }}>
                      <strong style={{ color: 'var(--icon-color)', fontSize: '18px' }}>✅ Kebab Case</strong><br />
                      Words are separated by hyphens (-) and each word is in lowercase. It's often used in URLs and CSS selectors.<br />
                      <span style={{ color: '#888', fontStyle: 'italic', marginTop: '10px', display: 'block' }}>Ex: to-do-list</span>
                    </li>
                    <li style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', borderLeft: '4px solid var(--primary_color)' }}>
                      <strong style={{ color: 'var(--icon-color)', fontSize: '18px' }}>✅ Camel Case</strong><br />
                      Words are concatenated without spaces, and each word after the first starts with a capital letter. It's prevalent in languages like JavaScript and Java.<br />
                      <span style={{ color: '#888', fontStyle: 'italic', marginTop: '10px', display: 'block' }}>Ex: customerName, emailAddress</span>
                    </li>
                    <li style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', borderLeft: '4px solid var(--primary_color)' }}>
                      <strong style={{ color: 'var(--icon-color)', fontSize: '18px' }}>✅ Pascal Case</strong><br />
                      Similar to Camel Case, but the first word also starts with a capital letter. It's commonly used for class and method names in languages like C# and Ruby.<br />
                      <span style={{ color: '#888', fontStyle: 'italic', marginTop: '10px', display: 'block' }}>Ex: Customer, GetById()</span>
                    </li>
                  </ul>

                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--icon-color)', textAlign: 'center', margin: '40px 0' }}>
                    ❓ Which <i>naming convention</i> do you prefer?
                  </p>
                </div>

                {/* Comment Form */}
                <div style={{ marginTop: '50px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--icon-color)', marginBottom: '25px' }}>Leave A Reply</h2>
                  <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <input 
                        type="text" 
                        placeholder="Name*" 
                        style={{ padding: '16px 20px', borderRadius: '12px', border: 'none', backgroundColor: 'rgba(255,255,255,0.03)', color: 'var(--text-color)', outline: 'none', fontSize: '15px' }} 
                      />
                      <input 
                        type="email" 
                        placeholder="Email*" 
                        style={{ padding: '16px 20px', borderRadius: '12px', border: 'none', backgroundColor: 'rgba(255,255,255,0.03)', color: 'var(--text-color)', outline: 'none', fontSize: '15px' }} 
                      />
                    </div>
                    <textarea 
                      placeholder="Your Message*" 
                      style={{ padding: '20px', borderRadius: '12px', border: 'none', backgroundColor: 'rgba(255,255,255,0.03)', color: 'var(--text-color)', outline: 'none', fontSize: '15px', minHeight: '150px', resize: 'vertical' }}
                    ></textarea>
                    <button 
                      type="submit" 
                      style={{ padding: '16px 30px', borderRadius: '12px', border: 'none', backgroundColor: 'var(--primary_color)', color: '#fff', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s', width: 'fit-content' }}
                      onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                      onMouseLeave={(e) => e.target.style.transform = 'none'}
                    >
                      Post Comment
                    </button>
                  </form>
                </div>
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

export default BlogDetails;
