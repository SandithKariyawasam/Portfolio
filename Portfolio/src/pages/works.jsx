import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import star2 from "../assets/images/star-2.png";
import icon from "../assets/images/icon.svg";
import bg1 from "../assets/images/bg1.png"; 

const Works = () => {
  const [projects, setProjects] = useState([]);

  // 1. Fetch Data
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://portfolio-backend-tau-rouge.vercel.app/projects");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();

    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
      window.AOS.refresh();
    }
  }, []);

  return (
    <div className="projects-area">
      <div className="container">

        {/* Title Section */}
        <h1 className="section-heading" data-aos="fade-up" style={{ marginBottom: '40px' }}>
          <img src={star2} alt="Star" /> All Projects <img src={star2} alt="Star" />
        </h1>

        {/* Dynamic Grid */}
        <div className="row">
          {projects.length === 0 ? (
            <div></div>
          ) : (
            projects.map((project, index) => (
              <div className="col-md-6" key={project.id} data-aos="zoom-in">
                <div className="project-item shadow-box">

                  <Link to={`/work-details/${project.id}`} className="overlay-link"></Link>

                  <img src={bg1} alt="BG" className="bg-img" />

                  <div className="project-img">
                    <img
                      src={project.coverUrl}
                      alt={project.coverName}
                      style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <div className="project-info">
                      <p>{project.service || "Service"}</p>
                      <h1>{project.coverName}</h1>
                    </div>

                    <Link to={`/work-details/${project.id}`} className="project-btn">
                      <img src={icon} alt="Button" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default Works;
