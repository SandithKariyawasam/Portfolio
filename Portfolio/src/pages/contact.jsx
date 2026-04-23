import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg1 from "../assets/images/bg1.png";
import icon3 from "../assets/images/icon3.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
      });
      window.AOS.refresh();
    }
  }, []);

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    try {
      const res = await fetch("https://portfolio-backend-tau-rouge.vercel.app/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", message: "✅ Email sent successfully!" });
        setFormData({ fullName: "", email: "", subject: "", message: "" }); // clear form
      } else {
        setStatus({ type: "error", message: data.error || "Failed to send." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong." });
    }
  };

  return (
    <>
      <div className="contact-area">
        <div className="container">
          <div className="gx-row d-flex justify-content-between gap-24">
            <div className="contact-infos" style={{ display: 'flex', flexDirection: 'column', gap: '25px', minWidth: 0, flex: '0 0 auto' }}>
              
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--icon-color)', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact Info</h3>
                <ul className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0, listStyle: 'none' }}>
                  
                  <li className="d-flex align-items-center" style={{ padding: '20px', backgroundColor: 'var(--card-bg)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.03)', gap: '20px' }}>
                    <div 
                      className="icon-box shadow-box" 
                      style={{ 
                        width: '60px', 
                        height: '60px', 
                        borderRadius: '16px', 
                        backgroundColor: 'rgba(255,255,255,0.03)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.05)'
                      }}
                    >
                      <i className="iconoir-mail" style={{ fontSize: '24px', color: 'var(--primary_color)' }}></i>
                    </div>
                    <div className="right" style={{ minWidth: 0, flex: 1 }}>
                      <span style={{ fontSize: '13px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>MAIL ME</span>
                      <h4 style={{ fontSize: '15px', color: 'var(--text-color)', fontWeight: 'bold', margin: 0, wordBreak: 'break-all' }}>sandithkariyawasam2001@gmail.com</h4>
                    </div>
                  </li>

                  <li className="d-flex align-items-center" style={{ padding: '20px', backgroundColor: 'var(--card-bg)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.03)', gap: '20px' }}>
                    <div 
                      className="icon-box shadow-box" 
                      style={{ 
                        width: '60px', 
                        height: '60px', 
                        borderRadius: '16px', 
                        backgroundColor: 'rgba(255,255,255,0.03)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.05)'
                      }}
                    >
                      <i className="iconoir-phone" style={{ fontSize: '24px', color: 'var(--primary_color)' }}></i>
                    </div>
                    <div className="right">
                      <span style={{ fontSize: '13px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Contact ME</span>
                      <h4 style={{ fontSize: '16px', color: 'var(--text-color)', fontWeight: 'bold', margin: 0 }}>+94 76 942 3847</h4>
                    </div>
                  </li>

                  <li className="d-flex align-items-center" style={{ padding: '20px', backgroundColor: 'var(--card-bg)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.03)', gap: '20px' }}>
                    <div 
                      className="icon-box shadow-box" 
                      style={{ 
                        width: '60px', 
                        height: '60px', 
                        borderRadius: '16px', 
                        backgroundColor: 'rgba(255,255,255,0.03)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.05)'
                      }}
                    >
                      <i className="iconoir-pin-alt" style={{ fontSize: '24px', color: 'var(--primary_color)' }}></i>
                    </div>
                    <div className="right">
                      <span style={{ fontSize: '13px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Location</span>
                      <h4 style={{ fontSize: '16px', color: 'var(--text-color)', lineHeight: '1.5', margin: 0 }}>
                        22 Horana Road, Panadura <br />
                        Sri Lanka, 12500
                      </h4>
                    </div>
                  </li>
                  
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--icon-color)', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '1px' }}>Social Info</h3>
                <ul
                  className="social-links d-flex align-items-center"
                  style={{ padding: 0, margin: 0, listStyle: 'none', gap: '15px' }}
                >
                  {[
                    { icon: 'iconoir-linkedin', link: 'https://www.linkedin.com/in/sandith-kariyawasam-352069255/' },
                    { icon: 'iconoir-facebook', link: 'https://www.facebook.com/sandith.kariyawasam.2025' },
                    { icon: 'iconoir-instagram', link: 'https://www.instagram.com/sandith.kariyawasam/' }
                  ].map((social, idx) => (
                    <li key={idx}>
                      <Link 
                        className="shadow-box" 
                        to={social.link}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '65px',
                          height: '65px',
                          backgroundColor: 'var(--card-bg)',
                          borderRadius: '50%',
                          border: '1px solid rgba(255,255,255,0.03)',
                          color: 'var(--icon-color)',
                          fontSize: '24px',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--primary_color)';
                          e.currentTarget.style.color = '#fff';
                          e.currentTarget.style.transform = 'translateY(-5px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--card-bg)';
                          e.currentTarget.style.color = 'var(--icon-color)';
                          e.currentTarget.style.transform = 'none';
                        }}
                      >
                        <i className={social.icon}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="contact-form">
              <div className="shadow-box">
                <img src={bg1} alt="BG" className="bg-img" />
                <img src={icon3} alt="Icon" />
                <h1>
                  Let’s work <span>together.</span>
                </h1>

                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input
                      type="text"
                      name="fullName"
                      id="full-name"
                      placeholder="Name *"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Your Subject *"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your Message *"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="input-group">
                    <button
                      className="theme-btn submit-btn"
                      name="submit"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>

                {/* status message */}
                {status.message && (
                  <p
                    style={{
                      marginTop: "10px",
                      color:
                        status.type === "success"
                          ? "green"
                          : status.type === "error"
                            ? "red"
                            : "white",
                    }}
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

