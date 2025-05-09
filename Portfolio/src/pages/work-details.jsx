import React from 'react'
import bg1 from '../assets/images/bg1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import star2 from '../assets/images/star-2.png'
import pro3 from '../assets/images/prodt1.png'
import pro4 from '../assets/images/prodt2.png'
import pro5 from '../assets/images/prodt3.png'
import pro6 from '../assets/images/prodt4.png'
import pd1 from '../assets/images/project-dt-1.png'

const WorkDetails = () => {
    return (
        <>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content" data-aos="fade-up">
                        <p>WEB DESIGN - AutoBid</p>
                        <h1 className="section-heading">
                            <img src={star2} alt="Star" /> Aesthetic design for brand <br /> vehicle auction web application <img src={star2} alt="Star" />
                        </h1>
                    </div>
                </div>
            </div>

            <div className="project-details-wrap">
                <div className="project-details-img" data-aos="zoom-in">
                    <img src={pd1} alt="Project Details" />
                </div>

                <div className="container">
                    <div data-aos="zoom-in">
                        <div className="d-flex project-infos-wrap shadow-box mb-24">
                            <img src={bg1} alt="BG" className="bg-img" />
                            <img src={icon2} alt="Icon" />
                            <div className="project-details-info flex-1">
                                <h3>Team BravoScript</h3>
                                <p>Bravoscript is a web design company founded by me and my university friends from NSBM. What started as a shared passion for design and development has grown into a dedicated team focused on creating modern, responsive, and user-friendly websites for businesses and individuals.</p>
                            </div>
                            <div className="project-details-info flex-1">
                                <h3>About</h3>
                                <p>🚀 Excited to share our Software Architecture group project - AutoBid, an online auction platform built from the ground up!<br /><br />
                                    💻 Frontend: HTML/CSS/JS<br />
                                    🖥️ Backend: C# with ASP.NET<br />
                                    🗄️ Database: SQL Server (SSMS)<br /><br />
                                    AutoBid enables users to participate in real-time bidding with a clean interface and smooth user experience. From user authentication to bid tracking, this project helped us apply core architectural concepts in a practical way.</p>
                            </div>
                        </div>
                    </div>

                    <div className="project-details-2-img mb-24" data-aos="zoom-in">
                        <img src={pd1} alt="Project" />
                    </div>

                    <div className="row mb-24">
                        <div className="col-md-6" data-aos="zoom-in">
                            <div className="project-details-3-img">
                                <img src={pro3} alt="Project" />
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="zoom-in">
                            <div className="project-details-3-img">
                                <img src={pro4} alt="Project" />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-24">
                        <div className="col-md-6" data-aos="zoom-in">
                            <div className="project-details-3-img">
                                <img src={pro5} alt="Project" />
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="zoom-in">
                            <div className="project-details-3-img">
                                <img src={pro6} alt="Project" />
                            </div>
                        </div>
                    </div>

                    <div data-aos="zoom-in">
                        <div className="project-about-2 d-flex shadow-box mb-24">
                            <img src={bg1} alt="BG" className="bg-img" />
                            <div className="left-details">
                                <img src={icon3} alt="Icon" />
                                <ul>
                                    <li><p>Year</p><h4>2024</h4></li>
                                    <li><p>Client</p><h4>.....</h4></li>
                                    <li><p>Services</p><h4>Web Design</h4></li>
                                    <li><p>Project</p><h4>Dynamic</h4></li>
                                </ul>
                            </div>
                            <div className="right-details">
                                <h3>Description</h3>
                                <p>AutoBid is an online auction platform developed as part of our Software Architecture group project. Built from the ground up, it features a responsive frontend using HTML, CSS, and JavaScript, a robust backend powered by C# with ASP.NET, and a reliable SQL Server (SSMS) database. The platform allows users to engage in real-time bidding with a streamlined interface and smooth user experience. From implementing user authentication to managing live bid tracking, this project gave us valuable hands-on experience in applying key architectural principles in a real-world context.
                                    <br /><br/>
                                    🔗 GitHub Repositories:<br/>
                                    Frontend:<a href='https://github.com/SandithKariyawasam/SA-Final-Project-Frontend'>Click Here...</a><br/>
                                    Backend:<a href='https://github.com/SandithKariyawasam/SA-Final-Project-Backend'>Click Here...</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project-details-img" data-aos="zoom-in">
                    <img src={pd1} alt="Project Details" />
                </div>
            </div>
        </>
    )
}

export default WorkDetails
