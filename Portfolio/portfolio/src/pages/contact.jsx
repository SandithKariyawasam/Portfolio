import React from 'react'
import bg1 from '../assets/images/bg1.png'
import icon3 from '../assets/images/icon3.png'

const contact = () => {
    return (
        <>
            <div class="contact-area">
                <div class="container">
                    <div class="gx-row d-flex justify-content-between gap-24">
                        <div class="contact-infos">
                            <h3 data-aos="fade-up">Contact Info</h3>
                            <ul class="contact-details">
                                <li class="d-flex align-items-center" data-aos="zoom-in">
                                    <div class="icon-box shadow-box">
                                        <i class="iconoir-mail"></i>
                                    </div>
                                    <div class="right">
                                        <span>MAIL ME</span>
                                        <h4>sandithkariyawasam2001@gmail.com</h4>
                                    </div>
                                </li>

                                <li class="d-flex align-items-center" data-aos="zoom-in">
                                    <div class="icon-box shadow-box">
                                        <i class="iconoir-phone"></i>
                                    </div>
                                    <div class="right">
                                        <span>Contact ME</span>
                                        <h4>+94 76 942 3847</h4>
                                    </div>
                                </li>

                                <li class="d-flex align-items-center" data-aos="zoom-in">
                                    <div class="icon-box shadow-box">
                                        <i class="iconoir-pin-alt"></i>
                                    </div>
                                    <div class="right">
                                        <span>Location</span>
                                        <h4>22 Horana Road, Panadura <br />Sri Lanka <br />12500</h4>
                                    </div>
                                </li>
                            </ul>

                            <h3 data-aos="fade-up">Social Info</h3>
                            <ul class="social-links d-flex align-center" data-aos="zoom-in">
                                <li><a class="shadow-box" href=""><i class="iconoir-linkedin"></i></a></li>
                                <li><a class="shadow-box" href=""><i class="iconoir-facebook"></i></a></li>
                                <li><a class="shadow-box" href=""><i class="iconoir-instagram"></i></a></li>
                            </ul>
                        </div>

                        <div data-aos="zoom-in" class="contact-form">
                            <div class="shadow-box">
                                <img src={bg1} alt="BG" class="bg-img" />
                                <img src={icon3} alt="Icon" />
                                <h1>Let’s work <span>together.</span></h1>
                                <form method="POST">
                                    <div class="input-group">
                                        <input type="text" name="full-name" id="full-name" placeholder="Name *" />
                                    </div>
                                    <div class="input-group">
                                        <input type="email" name="email" id="email" placeholder="Email *" />
                                    </div>
                                    <div class="input-group">
                                        <input type="text" name="subject" id="subject" placeholder="Your Subject *" />
                                    </div>
                                    <div class="input-group">
                                        <textarea name="message" id="message" placeholder="Your Message *"></textarea>
                                    </div>
                                    <div class="input-group">
                                        <button class="theme-btn submit-btn" name="submit" type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default contact
