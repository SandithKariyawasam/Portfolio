import React from 'react'
import bg1 from '../assets/images/bg1.png'
import me2 from '../assets/images/me2.png'
import str2 from '../assets/images/star-2.png'
import icon2 from '../assets/images/icon2.png'
import icon from '../assets/images/icon.svg'
import sign from '../assets/images/sign.png'

const about = () => {
    return (
        <div class="about-area">
            <div class="container">
                <div class="d-flex about-me-wrap align-items-start gap-24">
                    <div data-aos="zoom-in">
                        <div class="about-image-box shadow-box">
                            <img src={bg1} alt="BG" class="bg-img" />
                            <div class="image-inner">
                                <img src={me2} alt="About Me" />
                            </div>
                        </div>
                    </div>

                    <div class="about-details" data-aos="zoom-in">
                        <h1 class="section-heading" data-aos="fade-up"><img src={str2} alt="Star" /> Self-summary <img src={str2} alt="Star" /></h1>
                        <div class="about-details-inner shadow-box">
                            <img src={icon2} alt="Star" />
                            <h1>Sandith Kariyawasam</h1>
                            <p>I am a Sri lankan-based software engineer with a focus on web design, mobile app development, a ui/ux design. I have a diverse range of experience having worked across various fields and industries.</p>
                        </div>

                    </div>
                </div>

                <div class="row mt-24">
                    <div class="col-md-6" data-aos="zoom-in">
                        <div class="about-edc-exp about-experience shadow-box">
                            <img src={bg1} alt="BG" class="bg-img" />
                            <h3>EXPERIENCE</h3>

                            <ul>
                                <li>
                                    <p class="date">2022 - Present</p>
                                    <h2>Full-stack Developer</h2>
                                    <p class="type">Freelancer</p>
                                </li>
                                <li>
                                    <p class="date">2023 - Present</p>
                                    <h2>Front-End Developer</h2>
                                    <p class="type">Bravoscript</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6" data-aos="zoom-in">
                        <div class="about-edc-exp about-education shadow-box">
                            <img src={bg1} alt="BG" class="bg-img" />
                            <h3>EDUCATION</h3>

                            <ul>
                                <li>
                                    <p class="date">2020</p>
                                    <h2> G.C.E. Advanced Level (C, C, C) - 2015 <br />
                                        (Mathematical Stream - Combined Mathematics, Physics, ICT)</h2>
                                    <p class="type"> Sri Sumangala College, Panadura, Sri Lanka</p>
                                </li>
                                <li>
                                    <p class="date">2022 - Present</p>
                                    <h2>BSc. (Honours) in Software Engineer</h2>
                                    <p class="type">NSBM Green University</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row mt-24">
                    <div class="col-md-12">
                        <div class="d-flex profile-contact-credentials-wrap gap-24">

                            <div data-aos="zoom-in">
                                <div class="about-profile-box info-box shadow-box h-full">
                                    <img src={bg1} alt="BG" class="bg-img" />
                                    <div class="inner-profile-icons shadow-box">
                                        <a href="#">
                                            <i class="iconoir-linkedin"></i>
                                        </a>
                                        <a href="#">
                                            <i class="iconoir-facebook"></i>
                                        </a>
                                        <a href="#">
                                            <i class="iconoir-instagram"></i>
                                        </a>
                                        <a href="#">
                                            <i class="iconoir-github"></i>
                                        </a>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="infos">
                                            <h4>Stay with me</h4>
                                            <h1>Profiles</h1>
                                        </div>

                                        <a href="" class="about-btn">
                                            <img src={icon} alt="Button" />
                                        </a>

                                    </div>
                                </div>
                            </div>

                            <div data-aos="zoom-in" class="flex-1">
                                <div class="about-contact-box info-box shadow-box">
                                    <a class="overlay-link" href=""></a>
                                    <img src={bg1} alt="BG" class="bg-img" />
                                    <img src={icon2} alt="Icon" class="star-icon" />
                                    <h1>Let's <br />work <span>together.</span></h1>
                                    <a href="" class="about-btn">
                                        <img src={icon} alt="Button" />
                                    </a>
                                </div>
                            </div>

                            <div data-aos="zoom-in" class="h-full">
                                <div class="about-crenditials-box info-box shadow-box">
                                    <a class="overlay-link" href=""></a>
                                    <img src={bg1} alt="BG" class="bg-img" />
                                    <img src={sign} alt="Sign" />
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="infos">
                                            <h4>more about me</h4>
                                            <h1>Credentials</h1>
                                        </div>

                                        <a href="" class="about-btn">
                                            <img src={icon} alt="Button" />
                                        </a>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about
