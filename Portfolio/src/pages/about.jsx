import React from 'react';
import { Link } from 'react-router-dom';
import bg1 from '../assets/images/bg1.png';
import me2 from '../assets/images/me2.png';
import str2 from '../assets/images/star-2.png';
import icon2 from '../assets/images/icon2.png';
import icon from '../assets/images/icon.svg';
import sign from '../assets/images/sign.png';

const About = () => {
    return (
        <div className="about-area">
            <div className="container">
                <div className="d-flex about-me-wrap align-items-start gap-24">
                    <div data-aos="zoom-in">
                        <div className="about-image-box shadow-box">
                            <img src={bg1} alt="Background design" className="bg-img" />
                            <div className="image-inner">
                                <img src={me2} alt="About Me" />
                            </div>
                        </div>
                    </div>

                    <div className="about-details" data-aos="zoom-in">
                        <h1 className="section-heading" data-aos="fade-up">
                            <img src={str2} alt="Star decoration icon" /> Self-summary <img src={str2} alt="Star decoration icon" />
                        </h1>
                        <div className="about-details-inner shadow-box">
                            <img src={icon2} alt="Icon" />
                            <h1>Sandith Kariyawasam</h1>
                            <p>I am a Sri Lankan-based software engineer with a focus on web design, mobile app development, and UI/UX design. I have a diverse range of experience having worked across various fields and industries.</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-24">
                    <div className="col-md-6" data-aos="zoom-in">
                        <div className="about-edc-exp about-experience shadow-box">
                            <img src={bg1} alt="Background design" className="bg-img" />
                            <h3>EXPERIENCE</h3>

                            <ul>
                                <li>
                                    <p className="date">2022 - Present</p>
                                    <h2>Full-stack Developer</h2>
                                    <p className="type">Freelancer</p>
                                </li>
                                <li>
                                    <p className="date">2023 - Present</p>
                                    <h2>Front-End Developer</h2>
                                    <p className="type">Bravoscript</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="zoom-in">
                        <div className="about-edc-exp about-education shadow-box">
                            <img src={bg1} alt="Background design" className="bg-img" />
                            <h3>EDUCATION</h3>

                            <ul>
                                <li>
                                    <p className="date">2020</p>
                                    <h2>G.C.E. Advanced Level (C, C, C) - 2020 <br />
                                        (Mathematical Stream - Combined Mathematics, Physics, ICT)</h2>
                                    <p className="type">Sri Sumangala College, Panadura, Sri Lanka</p>
                                </li>
                                <li>
                                    <p className="date">2022 - Present</p>
                                    <h2>BSc. (Honours) in Software Engineering</h2>
                                    <p className="type">NSBM Green University</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row mt-24">
                    <div className="col-md-12">
                        <div className="d-flex profile-contact-credentials-wrap gap-24">

                            <div data-aos="zoom-in">
                                <div className="about-profile-box info-box shadow-box h-full">
                                    <img src={bg1} alt="Background design" className="bg-img" />
                                    <div className="inner-profile-icons shadow-box">
                                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                            <i className="iconoir-linkedin"></i>
                                        </a>
                                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                            <i className="iconoir-facebook"></i>
                                        </a>
                                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                            <i className="iconoir-instagram"></i>
                                        </a>
                                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
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

                            <div data-aos="zoom-in" className="flex-1">
                                <div className="about-contact-box info-box shadow-box">
                                    <Link to="/contact" className="overlay-link"></Link>
                                    <img src={bg1} alt="Background design" className="bg-img" />
                                    <img src={icon2} alt="Icon" className="star-icon" />
                                    <h1>Let's <br />work <span>together.</span></h1>
                                    <Link to="/contact" className="about-btn">
                                        <img src={icon} alt="Button" />
                                    </Link>
                                </div>
                            </div>

                            <div data-aos="zoom-in" className="h-full">
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
}

export default About;
