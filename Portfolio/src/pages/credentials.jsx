import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import bg1 from "../assets/images/bg1.png";
import me from "../assets/images/me.png";
import { ThemeContext } from "../context/ThemeContext";

const Credentials = () => {
  const { theme } = useContext(ThemeContext);

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
      <section className="credential-area">
        <div className="container">
          <div className="gx-row d-flex">
            <div className="credential-sidebar-wrap">
              <div className="credential-sidebar text-center">
                <div className="shadow-box">
                  <img src={bg1} alt="BG" className="bg-img" />
                  <div className="img-box">
                    <img src={me} alt="About Me" />
                  </div>
                  <h2>{theme.name}</h2>
                  <p>@{theme.name.replace(/\s+/g, '.').toLowerCase()}</p>

                  <ul className="social-links d-flex justify-content-center">
                    <li>
                      <Link to={theme.socialLinkedin || "https://www.linkedin.com/in/sandith-kariyawasam-352069255/"}>
                        <i className="iconoir-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={theme.socialGithub || "https://github.com/SandithKariyawasam"}>
                        <i className="iconoir-github"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={theme.socialInstagram || "https://www.instagram.com/sandith.kariyawasam/"}>
                        <i className="iconoir-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={theme.socialFacebook || "https://www.facebook.com/sandith.kariyawasam.2025"}>
                        <i className="iconoir-facebook-tag"></i>
                      </Link>
                    </li>
                  </ul>

                  <Link to="/contact" className="theme-btn">
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>

            <div className="credential-content flex-1">
              <div 
                className="credential-about shadow-box" 
                style={{
                  backgroundColor: 'var(--card-bg)',
                  padding: '40px',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.03)',
                  marginBottom: '40px'
                }}
              >
                <h2 style={{ fontSize: '32px', marginBottom: '20px', color: 'var(--icon-color)', fontWeight: 'bold' }}>About Me</h2>
                <div style={{ color: 'var(--text-color)', fontSize: '16px', lineHeight: '1.8' }}>
                  <p style={{ marginBottom: '15px' }}>{theme.credentialsText1}</p>
                  <p>{theme.credentialsText2}</p>
                </div>
              </div>

              <div 
                className="shadow-box credential-experience" 
                style={{
                  backgroundColor: 'var(--card-bg)',
                  padding: '40px',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.03)',
                  marginBottom: '40px'
                }}
              >
                <h2 style={{ fontSize: '32px', marginBottom: '30px', color: 'var(--icon-color)', fontWeight: 'bold' }}>Experience</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  {theme.experience.map((exp, idx) => (
                    <div 
                      key={exp.id} 
                      className="credential-edc-exp-item" 
                      style={{
                        paddingBottom: idx !== theme.experience.length - 1 ? '30px' : '0',
                        borderBottom: idx !== theme.experience.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'
                      }}
                    >
                      <h4 style={{ color: 'var(--primary_color)', fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>{exp.date}</h4>
                      <h3 style={{ color: 'var(--icon-color)', fontSize: '22px', fontWeight: 'bold', marginBottom: '5px' }}>{exp.title}</h3>
                      <h5 style={{ color: 'var(--text-color)', fontSize: '16px', opacity: 0.8, marginBottom: '15px' }}>{exp.company}</h5>
                      <p style={{ color: 'var(--text-color)', fontSize: '15px', lineHeight: '1.7' }}>{exp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div 
                className="shadow-box credential-education" 
                style={{
                  backgroundColor: 'var(--card-bg)',
                  padding: '40px',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.03)',
                  marginBottom: '40px'
                }}
              >
                <h2 style={{ fontSize: '32px', marginBottom: '30px', color: 'var(--icon-color)', fontWeight: 'bold' }}>Education</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  {theme.education.map((edu, idx) => (
                    <div 
                      key={edu.id} 
                      className="credential-edc-exp-item" 
                      style={{
                        paddingBottom: idx !== theme.education.length - 1 ? '30px' : '0',
                        borderBottom: idx !== theme.education.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'
                      }}
                    >
                      <h4 style={{ color: 'var(--primary_color)', fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>{edu.date}</h4>
                      <h3 style={{ color: 'var(--icon-color)', fontSize: '22px', fontWeight: 'bold', marginBottom: '5px' }}>{edu.degree}</h3>
                      <h5 style={{ color: 'var(--text-color)', fontSize: '16px', opacity: 0.8, marginBottom: '15px' }}>{edu.institution}</h5>
                      <p style={{ color: 'var(--text-color)', fontSize: '15px', lineHeight: '1.7' }}>{edu.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div 
                className="skills-wrap shadow-box" 
                style={{
                  backgroundColor: 'var(--card-bg)',
                  padding: '40px',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.03)'
                }}
              >
                <h2 style={{ fontSize: '32px', marginBottom: '30px', color: 'var(--icon-color)', fontWeight: 'bold' }}>Skills</h2>
                  <div 
                    style={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px'
                    }}
                  >
                    {theme.skills.map((skill, idx) => (
                      <div 
                        key={skill.id} 
                        className="skill-item" 
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.02)',
                          borderRadius: '30px',
                          display: 'flex',
                          alignItems: 'center',
                          border: '1px solid rgba(255,255,255,0.05)',
                          position: 'relative',
                          overflow: 'hidden',
                          height: '60px'
                        }}
                      >
                        {/* Progress Background Fill */}
                        <div 
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            height: '100%',
                            width: skill.percent,
                            backgroundColor: 'rgba(91, 120, 246, 0.15)', // var(--primary_color) with opacity
                            zIndex: 1,
                            transition: 'width 1.5s ease-out'
                          }}
                        ></div>

                        {/* Content overlapping the fill */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '0 30px',
                            width: '100%',
                            zIndex: 2,
                            position: 'relative'
                          }}
                        >
                          <span style={{ fontSize: '18px', color: 'var(--icon-color)', fontWeight: 'bold', width: '120px' }}>
                            {skill.name}
                          </span>
                          <div style={{ 
                            color: 'var(--primary_color)', 
                            fontSize: '15px', 
                            fontWeight: 'bold' 
                          }}>
                            {skill.percent}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Credentials;
