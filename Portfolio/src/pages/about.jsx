import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import bg1 from "../assets/images/bg1.png";
import me2 from "../assets/images/me.png";
import str2 from "../assets/images/star-2.png";
import icon2 from "../assets/images/icon2.png";
import icon from "../assets/images/icon.svg";
import sign from "../assets/images/sign.png";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
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
    <div className="about-area">
      <div className="container">
        <div className="d-flex about-me-wrap align-items-start gap-24">
          <div>
            <div className="about-image-box shadow-box">
              <img src={bg1} alt="Background design" className="bg-img" />
              <div className="image-inner">
                <img src={me2} alt="About Me" />
              </div>
            </div>
          </div>

          <div className="about-details">
            <h1 className="section-heading">
              <img src={str2} alt="Star decoration icon" /> Self-summary{" "}
              <img src={str2} alt="Star decoration icon" />
            </h1>
            <div className="about-details-inner shadow-box">
              <img src={icon2} alt="Icon" />
              <h1>{theme.name}</h1>
              <p>
                {theme.aboutText}
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-24">
          <div className="col-md-6">
            <div className="about-edc-exp about-experience shadow-box">
              <img src={bg1} alt="Background design" className="bg-img" />
              <h3>EXPERIENCE</h3>

              <ul>
                {theme.experience.map(exp => (
                  <li key={exp.id}>
                    <p className="date">{exp.date}</p>
                    <h2>{exp.title}</h2>
                    <p className="type">{exp.company}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-edc-exp about-education shadow-box">
              <img src={bg1} alt="Background design" className="bg-img" />
              <h3>EDUCATION</h3>

              <ul>
                {theme.education.map(edu => (
                  <li key={edu.id}>
                    <p className="date">{edu.date}</p>
                    <h2>{edu.degree}</h2>
                    <p className="type">{edu.institution}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-24">
          <div className="col-md-12">
            <div className="d-flex profile-contact-credentials-wrap gap-24">
              <div>
                <div className="about-profile-box info-box shadow-box h-full">
                  <img src={bg1} alt="Background design" className="bg-img" />
                  <div className="inner-profile-icons shadow-box">
                    <a
                      href={theme.socialLinkedin || "https://www.linkedin.com/in/sandith-kariyawasam-352069255/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="iconoir-linkedin"></i>
                    </a>
                    <a
                      href={theme.socialFacebook || "https://www.facebook.com/sandith.kariyawasam.2025"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="iconoir-facebook"></i>
                    </a>
                    <a
                      href={theme.socialInstagram || "https://www.instagram.com/sandith.kariyawasam/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="iconoir-instagram"></i>
                    </a>
                    <a
                      href={theme.socialGithub || "https://github.com/SandithKariyawasam"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="iconoir-github"></i>
                    </a>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="infos">
                      <h4>Stay with me</h4>
                      <h1>Profiles</h1>
                    </div>

                    <Link to="/contact" className="about-btn">
                      <img src={icon} alt="Button" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="about-contact-box info-box shadow-box">
                  <Link to="/contact" className="overlay-link"></Link>
                  <img src={bg1} alt="Background design" className="bg-img" />
                  <img src={icon2} alt="Icon" className="star-icon" />
                  <h1>
                    Let's <br />
                    work <span>together.</span>
                  </h1>
                  <Link to="/contact" className="about-btn">
                    <img src={icon} alt="Button" />
                  </Link>
                </div>
              </div>

              <div className="h-full">
                <div className="about-crenditials-box info-box shadow-box">
                  <Link to="/credentials" className="overlay-link"></Link>
                  <img src={bg1} alt="Background design" className="bg-img" />
                  <img src={sign} alt="Sign" />
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="infos">
                      <h4>more about me</h4>
                      <h1>Credentials</h1>
                    </div>

                    <Link to="/credentials" className="about-btn">
                      <img src={icon} alt="Button" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;