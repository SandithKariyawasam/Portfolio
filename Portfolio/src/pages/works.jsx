import React from 'react'
import bg1 from '../assets/images/bg1.png'
import pro1 from '../assets/images/project1.png'
import icon from '../assets/images/icon.svg'
import pro2 from '../assets/images/project2.png'
import star2 from '../assets/images/star-2.png'
import pro3 from '../assets/images/project3.png'
import pro4 from '../assets/images/project4.png'
import pro5 from '../assets/images/project5.png'
import pro6 from '../assets/images/project6.png'

const works = () => {
    return (
        <>
            <div className="projects-area">
                <div className="container">
                    <h1 className="section-heading" data-aos="fade-up"><img src={star2} alt="Star" /> All Projects <img src={star2} alt="Star" /></h1>
                    <div className="row">
                        <div className="col-md-4">
                            <div data-aos="zoom-in">
                                <div className="project-item shadow-box">
                                    <a className="overlay-link" href="./work-details"></a>
                                    <img src={bg1} alt="BG" className="bg-img" />
                                    <div className="project-img">
                                        <img src={pro1} alt="Project" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="project-info">
                                            <p>WEB DESIGN</p>
                                            <h1>AutoBid</h1>
                                        </div>
                                        <a href="work-details" className="project-btn">
                                            <img src={icon} alt="Button" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div data-aos="zoom-in">
                                <div className="project-item shadow-box">
                                    <a className="overlay-link" href="./work-details"></a>
                                    <img src={bg1} alt="BG" className="bg-img" />
                                    <div className="project-img">
                                        <img src={pro3} alt="Project" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="project-info">
                                            <p>UI/UX Design</p>
                                            <h1>Helaya</h1>
                                        </div>
                                        <a href="work-details" className="project-btn">
                                            <img src={icon} alt="Button" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1 className="section-heading" data-aos="fade-up"><img src={star2} alt="Star" /> All Projects <img src={star2} alt="Star" /></h1>

                            <div className="d-flex align-items-start gap-24">
                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="project-item shadow-box">
                                        <a className="overlay-link" href="./work-details"></a>
                                        <img src={bg1} alt="BG" className="bg-img" />
                                        <div className="project-img">
                                            <img src={pro2} alt="Project" />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="project-info">
                                                <p>MOBILE APP DESIGN</p>
                                                <h1>HelaFix</h1>
                                            </div>
                                            <a href="work-details" className="project-btn">
                                                <img src={icon} alt="Button" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="project-item shadow-box">
                                        <a className="overlay-link" href="./work-details"></a>
                                        <img src={bg1} alt="BG" className="bg-img" />
                                        <div className="project-img">
                                            <img src={pro4} alt="Project" />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="project-info">
                                                <p>WEB DESIGN</p>
                                                <h1>BravoScript</h1>
                                            </div>
                                            <a href="work-details" className="project-btn">
                                                <img src={icon} alt="Button" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex align-items-start gap-24">
                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="project-item shadow-box">
                                        <a className="overlay-link" href="./work-details"></a>
                                        <img src={bg1} alt="BG" className="bg-img" />
                                        <div className="project-img">
                                            <img src={pro6} alt="Project" />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="project-info">
                                                <p>WEB DESIGNING</p>
                                                <h1>Digital පංචිකාවත්ත</h1>
                                            </div>
                                            <a href="work-details" className="project-btn">
                                                <img src={icon} alt="Button" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="project-item shadow-box">
                                        <a className="overlay-link" href="./work-details"></a>
                                        <img src={bg1} alt="BG" className="bg-img" />
                                        <div className="project-img">
                                            <img src={pro5} alt="Project" />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="project-info">
                                                <p>UI/UX DESIGN</p>
                                                <h1>Panchikawatta</h1>
                                            </div>
                                            <a href="work-details" className="project-btn">
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
        </>
    )
}

export default works
