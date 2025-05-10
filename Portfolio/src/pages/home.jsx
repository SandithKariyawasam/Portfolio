import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/style.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/aos.css';

import bg1 from '../assets/images/bg1.png';
import me from '../assets/images/me.png';
import icon from '../assets/images/icon.svg';
import sign from '../assets/images/sign.png';
import myworks from '../assets/images/my-works.png';
import gfonts from '../assets/images/gfonts.png';
import icon2 from '../assets/images/icon2.png';
import star from '../assets/images/star1.svg';

const Home = () => {
  return (
    <div className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6" data-aos="zoom-in">
            <div className="about-me-box shadow-box">
              <Link className="overlay-link" to="/about" />
              <img src={bg1} alt="BG" className="bg-img" />
              <div className="img-box">
                <img src={me} alt="About Me" />
              </div>
              <div className="infos">
                <h4>A SOFTWARE ENGINEER</h4>
                <h1>Sandith Kariyawasam.</h1>
                <p>I am a Software Engineer based in Sri Lanka.</p>
                <Link to="/about" className="about-btn">
                  <img src={icon} alt="Button" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="about-credentials-wrap">
              <div data-aos="zoom-in">
                <div className="banner shadow-box">
                  <div className="marquee">
                    <div>
                      <span>
                        <img src={star} alt="Star" /> I’m currently working on <b>Mobile app</b> & <b>chat web app</b>{' '}
                        <img src={star} alt="Star" />I’m currently working on <b>Mobile app</b> & <b>chat web app</b>{' '}
                        <img src={star} alt="Star" />I’m currently working on <b>Mobile app</b> & <b>chat web app</b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gx-row d-flex gap-24">
                <div data-aos="zoom-in">
                  <div className="about-crenditials-box info-box shadow-box h-full">
                    <Link className="overlay-link" to="/credentials" />
                    <img src={bg1} alt="BG" className="bg-img" />
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

                <div data-aos="zoom-in">
                  <div className="about-project-box info-box shadow-box h-full">
                    <Link className="overlay-link" to="/works" />
                    <img src={bg1} alt="BG" className="bg-img" />
                    <img src={myworks} alt="My Works" />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>SHOWCASE</h4>
                        <h1>Projects</h1>
                      </div>
                      <Link to="/works" className="about-btn">
                        <img src={icon} alt="Button" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-24">
          <div className="col-md-12">
            <div className="blog-service-profile-wrap d-flex gap-24">
              <div data-aos="zoom-in">
                <div className="about-blog-box info-box shadow-box h-full">
                  <Link to="/blog" className="overlay-link" />
                  <img src={bg1} alt="BG" className="bg-img" />
                  <img src={gfonts} alt="GFonts" />
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="infos">
                      <h4>Blog</h4>
                      <h1>GFonts</h1>
                    </div>
                    <Link to="/blog" className="about-btn">
                      <img src={icon} alt="Button" />
                    </Link>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in" className="flex-1">
                <div className="about-services-box info-box shadow-box h-full">
                  <Link to="/service" className="overlay-link" />
                  <img src={bg1} alt="BG" className="bg-img" />
                  <div className="icon-boxes">
                    <i className="iconoir-code"></i>
                    <i className="iconoir-smartphone-device"></i>
                    <i className="iconoir-cloud"></i>
                    <i className="iconoir-design-pencil"></i>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="infos">
                      <h4>specialization</h4>
                      <h1>Services Offering</h1>
                    </div>
                    <Link to="/service" className="about-btn">
                      <img src={icon} alt="Button" />
                    </Link>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in">
                <div className="about-profile-box info-box shadow-box h-full">
                  <img src={bg1} alt="BG" className="bg-img" />
                  <div className="inner-profile-icons shadow-box">
                    <a href="#"><i className="iconoir-linkedin"></i></a>
                    <a href="#"><i className="iconoir-facebook"></i></a>
                    <a href="#"><i className="iconoir-instagram"></i></a>
                    <a href="#"><i className="iconoir-github"></i></a>
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
            </div>
          </div>
        </div>

        <div className="row mt-24">
          <div className="col-md-6" data-aos="zoom-in">
            <div className="about-client-box info-box shadow-box">
              <img src={bg1} alt="BG" className="bg-img" />
              <div className="clients d-flex align-items-start gap-24 justify-content-center">
                <div className="client-item">
                  <h1>02</h1>
                  <p>Years <br />Experience</p>
                </div>
                <div className="client-item">
                  <h1>+5</h1>
                  <p>CLIENTS <br />WORLDWIDE</p>
                </div>
                <div className="client-item">
                  <h1>+12</h1>
                  <p>Total <br />Projects</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6" data-aos="zoom-in">
            <div className="about-contact-box info-box shadow-box">
              <Link className="overlay-link" to="/contact" />
              <img src={bg1} alt="BG" className="bg-img" />
              <img src={icon2} alt="Icon" className="star-icon" />
              <h1>Let's <br />work <span>together.</span></h1>
              <Link to="/contact" className="about-btn">
                <img src={icon} alt="Button" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

