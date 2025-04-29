import React from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/aos.css'
import bg1 from '../assets/images/bg1.png'
import me from '../assets/images/me.png'
import icon from '../assets/images/icon.svg'
import sign from '../assets/images/sign.png'
import myworks from '../assets/images/my-works.png'
import gfonts from '../assets/images/gfonts.png'
import icon2 from '../assets/images/icon2.png'
import star from '../assets/images/star1.svg'


const home = () => {
    return (
        <>

            <div class="about-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6" data-aos="zoom-in">
                            <div class="about-me-box shadow-box">
                                <a class="overlay-link" href="/about"></a>
                                <img src={bg1} alt="BG" class="bg-img" />
                                <div class="img-box">
                                    <img src={me} alt="About Me" />
                                </div>
                                <div class="infos">
                                    <h4>A SOFTWARE ENGINEER</h4>
                                    <h1>Sandith Kariyawasam.</h1>
                                    <p>I am a Software Engineer based in sri lanka.</p>
                                    <a href="#" class="about-btn">
                                        <img src={icon} alt="Button" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="about-credentials-wrap">
                                <div data-aos="zoom-in">
                                    <div class="banner shadow-box">
                                        <div class="marquee">
                                            <div>
                                                <span><img src={star} alt="Star" /> I’m currently working on <b>Mobile app</b> & <b>chat web app</b> <img src={star} alt="Star" />I’m currently working on <b>Mobile app</b> & <b>chat web app</b> <img src={star} alt="Star" />I’m currently working on <b>Mobile app</b> & <b>chat web app</b> <img src={star} alt="Star" /></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="gx-row d-flex gap-24">
                                    <div data-aos="zoom-in">
                                        <div class="about-crenditials-box info-box shadow-box h-full">
                                            <a class="overlay-link" href="./credentials"></a>
                                            <img src={bg1} alt="BG" class="bg-img" />
                                            <img src={sign} alt="Sign" />
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="infos">
                                                    <h4>more about me</h4>
                                                    <h1>Credentials</h1>
                                                </div>

                                                <a href="./credentials" class="about-btn">
                                                    <img src={icon} alt="Button" />
                                                </a>

                                            </div>
                                        </div>
                                    </div>

                                    <div data-aos="zoom-in">
                                        <div class="about-project-box info-box shadow-box h-full">
                                            <a class="overlay-link" href="./works"></a>
                                            <img src={bg1} alt="BG" class="bg-img" />
                                            <img src={myworks} alt="My Works" />
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="infos">
                                                    <h4>SHOWCASE</h4>
                                                    <h1>Projects</h1>
                                                </div>

                                                <a href="#" class="about-btn">
                                                    <img src={icon} alt="Button" />
                                                </a>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-24">
                        <div class="col-md-12">
                            <div class="blog-service-profile-wrap d-flex gap-24">
                                <div data-aos="zoom-in">
                                    <div class="about-blog-box info-box shadow-box h-full">
                                        <a href="./blog" class="overlay-link"></a>
                                        <img src={bg1} alt="BG" class="bg-img" />
                                        <img src={gfonts} alt="GFonts" />
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="infos">
                                                <h4>Blog</h4>
                                                <h1>GFonts</h1>
                                            </div>

                                            <a href="./blog" class="about-btn">
                                                <img src={icon} alt="Button" />
                                            </a>

                                        </div>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" class="flex-1">
                                    <div class="about-services-box info-box shadow-box h-full">
                                        <a href="./service" class="overlay-link"></a>
                                        <img src={bg1} alt="BG" class="bg-img" />
                                        <div class="icon-boxes">
                                            <i class="iconoir-code"></i>              
                                            <i class="iconoir-smartphone-device"></i> 
                                            <i class="iconoir-cloud"></i>             
                                            <i class="iconoir-design-pencil"></i>     
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="infos">
                                                <h4>specialization</h4>
                                                <h1>Services Offering</h1>
                                            </div>

                                            <a href="./service" class="about-btn">
                                                <img src={icon} alt="Button" />
                                            </a>

                                        </div>
                                    </div>
                                </div>

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

                                            <a href="./contact" class="about-btn">
                                                <img src={icon} alt="Button" />
                                            </a>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="row mt-24">
                        <div class="col-md-6" data-aos="zoom-in">

                            <div class="about-client-box info-box shadow-box">
                                <img src={bg1} alt="BG" class="bg-img" />
                                <div class="clients d-flex align-items-start gap-24 justify-content-center">
                                    <div class="client-item">
                                        <h1>02</h1>
                                        <p>Years <br />Experience</p>
                                    </div>

                                    <div class="client-item">
                                        <h1>+5</h1>
                                        <p>CLIENTS <br />WORLDWIDE</p>
                                    </div>

                                    <div class="client-item">
                                        <h1>+12</h1>
                                        <p>Total <br />Projects</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6" data-aos="zoom-in">

                            <div class="about-contact-box info-box shadow-box">
                                <a class="overlay-link" href="./contact"></a>
                                <img src={bg1} alt="BG" class="bg-img" />
                                <img src={icon2} alt="Icon" class="star-icon" />
                                <h1>Let's <br />work <span>together.</span></h1>
                                <a href="#" class="about-btn">
                                    <img src={icon} alt="Button" />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default home
