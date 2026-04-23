import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import bg1 from "../assets/images/bg1.png";
import icon from "../assets/images/icon.svg";
import sign from "../assets/images/sign.png";
import icon2 from "../assets/images/icon2.png";
import star2 from "../assets/images/star-2.png";
import { ThemeContext } from "../context/ThemeContext";

const Service = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
      window.AOS.refresh();
    }
  }, []);

  return (
    <>
      <div className="service-area">
        <div className="container">
          <h1 className="section-heading">
            <img src={star2} alt="Star" /> My Offerings{" "}
            <img src={star2} alt="Star" />
          </h1>

          <div className="row">
            <div className="col-md-4">
              <div className="service-sidebar">
                <div className="service-sidebar-inner shadow-box">
                  <ul>
                    {(theme.services || []).map(svc => (
                      <li key={svc.id}>
                        <i className={svc.icon}></i>
                        {svc.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <h1 className="section-heading">
                <img src={star2} alt="Star" /> My Offerings{" "}
                <img src={star2} alt="Star" />
              </h1>

              <div className="service-content-wrap">
                <div className="service-content-inner shadow-box">
                  <div className="service-items">
                    {(theme.services || []).map(svc => (
                      <div key={svc.id} className="service-item">
                        <h3>{svc.title}</h3>
                        <p>{svc.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-24">
            <div className="col-md-12">
              <div className="d-flex profile-contact-credentials-wrap gap-24">
                <div>
                  <div className="about-profile-box info-box shadow-box h-full">
                    <img src={bg1} alt="BG" className="bg-img" />
                    <div className="inner-profile-icons shadow-box">
                      <Link to={theme.socialLinkedin || '#'}>
                        <i className="iconoir-linkedin"></i>
                      </Link>
                      <Link to={theme.socialFacebook || '#'}>
                        <i className="iconoir-facebook"></i>
                      </Link>
                      <Link to={theme.socialInstagram || '#'}>
                        <i className="iconoir-instagram"></i>
                      </Link>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>Stay with me</h4>
                        <h1>Profiles</h1>
                      </div>
                      <Link to="./contact" className="about-btn">
                        <img src={icon} alt="Button" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="about-contact-box info-box shadow-box">
                    <Link className="overlay-link" to="./contact"></Link>
                    <img src={bg1} alt="BG" className="bg-img" />
                    <img src={icon2} alt="Icon" className="star-icon" />
                    <h1>
                      Let's <br />
                      work <span>together.</span>
                    </h1>
                    <Link to="./contact" className="about-btn">
                      <img src={icon} alt="Button" />
                    </Link>
                  </div>
                </div>

                <div className="h-full">
                  <div className="about-crenditials-box info-box shadow-box">
                    <Link className="overlay-link" to="./credentials"></Link>
                    <img src={bg1} alt="BG" className="bg-img" />
                    <img src={sign} alt="Sign" />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>more about me</h4>
                        <h1>Credentials</h1>
                      </div>
                      <Link to="./credentials" className="about-btn">
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
    </>
  );
};

export default Service;
