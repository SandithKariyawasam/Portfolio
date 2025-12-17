import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bg1 from "../assets/images/bg1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import star2 from "../assets/images/star-2.png";
import pd1 from "../assets/images/project-dt-1.png";
import pro3 from "../assets/images/prodt1.png";

const WorkDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  // 1. Fetch Project Data
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`https://portfolio-backend-tau-rouge.vercel.app/projects/${id}`);
        const data = await res.json();
        if (res.ok) {
          setProject(data);
        } else {
          console.error("Project not found");
        }
      } catch (err) {
        console.error("Error fetching project:", err);
      }
    };

    fetchProject();

    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
      });
      window.AOS.refresh();
    }
  }, [id]);

  if (!project) {
    return (
      <div className="container" style={{ padding: "100px", textAlign: "center", color: "white" }}>
        <div></div>
      </div>
    );
  }

  const getGalleryImage = (index) => {
    if (project.galleryUrls && project.galleryUrls[index]) {
      return project.galleryUrls[index];
    }
    return pro3;
  };

  return (
    <>
      {/* --- BREADCRUMB SECTION --- */}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content" data-aos="fade-up">
            <p>{project.service} - {project.coverName}</p>
            <h1 className="section-heading">
              <img src={star2} alt="Star" /> {project.title} <img src={star2} alt="Star" />
            </h1>
          </div>
        </div>
      </div>

      <div className="project-details-wrap">

        {/* --- TOP 1:5 SCALE IMAGE --- */}
        <div className="project-details-img" data-aos="zoom-in">
          <img src={project.image1_5Url || pd1} alt="Banner 1" />
        </div>

        <div className="container">
          <div data-aos="zoom-in">
            <div className="d-flex project-infos-wrap shadow-box mb-24">
              <img src={bg1} alt="BG" className="bg-img" />
              <img src={icon2} alt="Icon" />

              <div className="project-details-info flex-1">
                <h3>Team BravoScript</h3>
                <p>
                  Bravoscript is a web design company founded by me and my
                  university friends from NSBM. What started as a shared passion
                  for design and development has grown into a dedicated team
                  focused on creating modern, responsive, and user-friendly
                  websites for businesses and individuals.
                </p>
              </div>

              {/* --- DYNAMIC ABOUT SECTION --- */}
              <div className="project-details-info flex-1">
                <h3>About</h3>
                <p style={{ whiteSpace: 'pre-line' }}>
                  {project.about || "No about info available."}
                </p>
              </div>
            </div>
          </div>

          {/* --- MIDDLE 1:5 SCALE IMAGE --- */}
          <div className="project-details-2-img mb-24" data-aos="zoom-in">
            <img src={project.image1_5Url || pd1} alt="Banner 2" />
          </div>

          {/* --- GALLERY GRID (4 IMAGES - 1:1) --- */}
          <div className="row mb-24">
            <div className="col-md-6" data-aos="zoom-in">
              <div className="project-details-3-img">
                <img src={getGalleryImage(0)} alt="Gallery 1" />
              </div>
            </div>
            <div className="col-md-6" data-aos="zoom-in">
              <div className="project-details-3-img">
                <img src={getGalleryImage(1)} alt="Gallery 2" />
              </div>
            </div>
          </div>

          <div className="row mb-24">
            <div className="col-md-6" data-aos="zoom-in">
              <div className="project-details-3-img">
                <img src={getGalleryImage(2)} alt="Gallery 3" />
              </div>
            </div>
            <div className="col-md-6" data-aos="zoom-in">
              <div className="project-details-3-img">
                <img src={getGalleryImage(3)} alt="Gallery 4" />
              </div>
            </div>
          </div>

          {/* --- PROJECT INFO & DESCRIPTION --- */}
          <div data-aos="zoom-in">
            <div className="project-about-2 d-flex shadow-box mb-24">
              <img src={bg1} alt="BG" className="bg-img" />
              <div className="left-details">
                <img src={icon3} alt="Icon" />
                <ul>
                  <li>
                    <p>Year</p>
                    <h4>{project.year}</h4>
                  </li>
                  <li>
                    <p>Client</p>
                    <h4>{project.client}</h4>
                  </li>
                  <li>
                    <p>Services</p>
                    <h4>{project.service}</h4>
                  </li>
                  <li>
                    <p>Project Type</p>
                    <h4>{project.type}</h4>
                  </li>
                </ul>
              </div>
              <div className="right-details">
                <h3>Description</h3>
                <p style={{ whiteSpace: 'pre-line' }}>
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM 1:5 SCALE IMAGE --- */}
        <div className="project-details-img" data-aos="zoom-in">
          <img src={project.image1_5Url || pd1} alt="Banner 3" />
        </div>
      </div>
    </>
  );
};

export default WorkDetails;