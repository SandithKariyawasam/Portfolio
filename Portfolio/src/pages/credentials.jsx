import React from 'react'
import { Link } from 'react-router-dom'
import bg1 from '../assets/images/bg1.png'
import me from '../assets/images/me.png'

const credentials = () => {
    return (
        <>
            <section className="credential-area">
                <div className="container">
                    <div className="gx-row d-flex">
                        <div className="credential-sidebar-wrap" data-aos="zoom-in">
                            <div className="credential-sidebar text-center">
                                <div className="shadow-box">
                                    <img src={bg1} alt="BG" className="bg-img"/>
                                        <div className="img-box">
                                            <img src={me} alt="About Me"/>
                                        </div>
                                        <h2>Sandith Kariyawasam</h2>
                                        <p>@Sandith.kariyawasam</p>

                                        <ul className="social-links d-flex justify-content-center">
                                            <li><Link to="#"><i className="iconoir-linkedin"></i></Link></li>
                                            <li><Link to="#"><i className="iconoir-tiktok"></i></Link></li>
                                            <li><Link to="#"><i className="iconoir-instagram"></i></Link></li>
                                            <li><Link to="#"><i className="iconoir-facebook-tag"></i></Link></li>
                                        </ul>

                                        <Link to="./contact" className="theme-btn">Contact Me</Link>
                                </div>
                            </div>
                        </div>

                        <div className="credential-content flex-1">
                            <div className="credential-about" data-aos="zoom-in">
                                <h2>About Me</h2>
                                <p>I'm Sandith, a passionate and detail-oriented web developer focused on building modern, responsive, and user-friendly web applications. With a strong foundation in front-end technologies and growing experience in tools like Flutter, I enjoy crafting seamless digital experiences that not only look great but also perform well. I have a natural curiosity for learning and enjoy diving into new frameworks, design systems, and development practices to continuously improve my skills.</p>
                                <p>Beyond coding, I’m driven by a desire to solve real-world problems through technology. Whether working independently or as part of a team, I bring a proactive mindset and a commitment to delivering high-quality solutions. I value clean, maintainable code and take pride in building applications that are both functional and intuitive. As I grow in the tech industry, I aim to contribute to impactful projects and stay on the cutting edge of web development trends.</p>
                            </div>

                            <div className="credential-edc-exp credential-experience">
                                <h2 data-aos="fade-up">Experience</h2>
                                <div className="credential-edc-exp-item" data-aos="zoom-in">
                                    <h4>2022 - Present</h4>
                                    <h3>Full stack Developer</h3>
                                    <h5>Freelancer</h5>
                                    <p>I started my freelancing career in 2022, focusing on web development. Since then, I have worked with diverse clients, helping them bring their ideas to life through custom websites and applications. My expertise spans front-end and back-end technologies, and I strive to deliver high-quality solutions tailored to my clients' needs.</p>
                                </div>
                                <div className="credential-edc-exp-item" data-aos="zoom-in">
                                    <h4>2023 - Present</h4>
                                    <h3>Front-End Developer</h3>
                                    <h5>Bravoscript</h5>
                                    <p>As a front-end developer at Bravoscript, I specialize in creating dynamic and user-friendly interfaces. I work closely with design and back-end teams to build responsive, efficient, and visually appealing web applications. My role involves utilizing cutting-edge technologies to ensure a seamless and engaging user experience.</p>
                                </div>
                            </div>

                            <div className="credential-edc-exp credential-education">
                                <h2 data-aos="fade-up">Education</h2>
                                <div className="credential-edc-exp-item" data-aos="zoom-in">
                                    <h4>2020</h4>
                                    <h3>G.C.E. Advanced Level (C, C, C) - 2015 <br/>
                                    (Mathematical Stream - Combined Mathematics, Physics, ICT)</h3>
                                    <h5>Sri Sumangala College, Panadura, Sri Lanka</h5>
                                    <p>I completed my G.C.E. Advanced Level in 2020, achieving grades C, C, and C in the Mathematical Stream, with a focus on Combined Mathematics, Physics, and ICT. This academic foundation has provided me with strong problem-solving skills and a solid understanding of technical subjects.</p>
                                </div>
                                <div className="credential-edc-exp-item" data-aos="zoom-in">
                                    <h4>2022 - Present</h4>
                                    <h3>BSc. (Honours) in Software Engineer</h3>
                                    <h5>NSBM Green University</h5>
                                    <p>Since 2022, I have been pursuing a BSc. (Honours) in Software Engineering at NSBM Green University. This program has equipped me with a deep understanding of software development, algorithms, and system design, enhancing my technical skills and preparing me for a successful career in the tech industry.</p>
                                </div>
                            </div>

                            <div className="skills-wrap">
                                <h2 data-aos="fade-up">Skills</h2>
                                <div className="d-grid skill-items gap-24 flex-wrap">
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">90%</span>
                                        <h3 className="name">JavaScript</h3>
                                        <p>Non enim praesent</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">78%</span>
                                        <h3 className="name">C#</h3>
                                        <p>Non enim praesent</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">92%</span>
                                        <h3 className="name">Figma</h3>
                                        <p>Non enim praesent</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">75%</span>
                                        <h3 className="name">Java</h3>
                                        <p>Non enim praesent</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">95%</span>
                                        <h3 className="name">React</h3>
                                        <p>Non enim praesent</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">60%</span>
                                        <h3 className="name">Node Js</h3>
                                        <p>Non enim praesent</p>
                                    </div>

                                </div>
                            </div>

                            

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default credentials
