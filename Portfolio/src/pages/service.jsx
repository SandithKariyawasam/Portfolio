import React from 'react'
import { Link } from 'react-router-dom'
import bg1 from '../assets/images/bg1.png'
import icon from '../assets/images/icon.svg'
import sign from '../assets/images/sign.png'
import icon2 from '../assets/images/icon2.png'
import star2 from '../assets/images/star-2.png'

const service = () => {
    return (
        <>
            <div className="service-area">
                <div className="container">
                    <h1 className="section-heading" data-aos="fade-up"><img src={star2} alt="Star" /> My Offerings <img src={star2} alt="Star" /></h1>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-sidebar" data-aos="fade-right">
                                <div className="service-sidebar-inner shadow-box">
                                    <ul>
                                        <li>
                                            <i className="iconoir-code"></i>
                                            WEB DESIGNING
                                        </li>
                                        <li>
                                            <i className="iconoir-smartphone-device"></i>
                                            APP DESIGNING
                                        </li>
                                        <li>
                                            <i className="iconoir-cloud"></i>
                                            CLOUD SERVICES
                                        </li>
                                        <li>
                                            <i className="iconoir-design-pencil"></i>
                                            UI/UX DESIGN
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1 className="section-heading" data-aos="fade-up"><img src={star2} alt="Star" /> My Offerings <img src={star2} alt="Star" /></h1>

                            <div className="service-content-wrap" data-aos="zoom-in">
                                <div className="service-content-inner shadow-box">
                                    <div className="service-items">
                                        <div className="service-item">
                                            <h3>WEB DESIGNING</h3>
                                            <p>I design responsive and visually engaging websites that reflect each client’s brand and purpose. Whether it’s a personal site, business page, or online store, I make sure the design is clean, functional, and optimized for all devices to create a seamless user experience.</p>
                                        </div>
                                        <div className="service-item">
                                            <h3>APP DESIGNING</h3>
                                            <p>I craft user-friendly and attractive app interfaces for both mobile and web platforms. My focus is on usability and consistency, ensuring every design follows platform standards while providing an intuitive experience from the first tap to the last interaction.</p>
                                        </div>
                                        <div className="service-item">
                                            <h3>CLOUD SERVICES</h3>
                                            <p>I offer cloud solutions that help individuals and businesses run more efficiently and securely. From setting up cloud infrastructure to handling deployments and backups, I make sure everything is scalable, reliable, and tailored to your specific needs.</p>
                                        </div>
                                        <div className="service-item">
                                            <h3>UI/UX DESIGN</h3>
                                            <p>I create user interfaces and experiences that are not only visually appealing but also simple and effective to use. My design process is based on understanding real user behavior, which allows me to build digital products that are both functional and engaging.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="row mt-24">
                        <div className="col-md-12">
                            <div className="d-flex profile-contact-credentials-wrap gap-24">

                                <div data-aos="zoom-in">
                                    <div className="about-profile-box info-box shadow-box h-full">
                                        <img src={bg1} alt="BG" className="bg-img" />
                                        <div className="inner-profile-icons shadow-box">
                                            <Link to="#">
                                                <i className="iconoir-linkedin"></i>
                                            </Link>
                                            <Link to="#">
                                                <i className="iconoir-facebook"></i>
                                            </Link>
                                            <Link to="#">
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

                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="about-contact-box info-box shadow-box">
                                        <Link className="overlay-link" to="./contact"></Link>
                                        <img src={bg1} alt="BG" className="bg-img" />
                                        <img src={icon2} alt="Icon" className="star-icon" />
                                        <h1>Let's <br />work <span>together.</span></h1>
                                        <Link to="./contact" className="about-btn">
                                            <img src={icon} alt="Button" />
                                        </Link>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" className="h-full">
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
    )
}

export default service

