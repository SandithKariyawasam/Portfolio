import React, { useEffect, useState } from "react";
import '../assets/css/projects.css';
import ex from '../../assets/images/project-dt-1.png';
import pr1 from '../../assets/images/project1.png';

const Projects = () => {
  // --- UI STATES ---
  const [showPopup, setShowPopup] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const [coverFile, setCoverFile] = useState(null);
  const [image1_5File, setImage1_5File] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);

  const [formData, setFormData] = useState({
    coverName: "",
    title: "",
    about: "",
    year: "",
    client: "",
    service: "WEB DESIGNING",
    type: "Front-End",
    description: ""
  });

  const fetchProjects = async () => {
    try {
      const res = await fetch("https://portfolio-backend-tau-rouge.vercel.app/projects");
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCoverChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCoverFile(e.target.files[0]);
    }
  };

  const handle1_5Change = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage1_5File(e.target.files[0]);
    }
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 4) {
      alert("You can only upload a maximum of 4 gallery images.");
      return;
    }
    setGalleryFiles(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        const res = await fetch(`https://portfolio-backend-tau-rouge.vercel.app/projects/${currentId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          alert("Project updated successfully!");
          closePopup();
          fetchProjects();
        } else {
          const err = await res.json();
          alert("Update failed: " + err.error);
        }

      } else {
        if (!coverFile) return alert("Please upload the Cover Image (1:1).");
        if (!image1_5File) return alert("Please upload the 1:5 Scale Image.");
        if (galleryFiles.length !== 4) return alert(`You must upload exactly 4 gallery images. You selected ${galleryFiles.length}.`);

        const data = new FormData();

        Object.keys(formData).forEach((key) => {
          data.append(key, formData[key]);
        });

        data.append("cover", coverFile);
        data.append("image1_5", image1_5File);
        galleryFiles.forEach((file) => {
          data.append("gallery", file);
        });

        // Send Request
        const res = await fetch("https://portfolio-backend-tau-rouge.vercel.app/projects", {
          method: "POST",
          body: data,
        });

        if (res.ok) {
          alert("Project created successfully with all images!");
          closePopup();
          fetchProjects();
        } else {
          const err = await res.json();
          alert("Creation failed: " + err.error);
        }
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong. Check console.");
    }
  };

  // 3. DELETE PROJECT
  const handleDelete = async () => {
    if (!currentId) return;
    if (!window.confirm("Are you sure you want to delete this project? This cannot be undone.")) return;

    try {
      const res = await fetch(`https://portfolio-backend-tau-rouge.vercel.app/projects/${currentId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Project deleted!");
        closePopup();
        fetchProjects();
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const handleAddNew = () => {
    resetForm();
    setIsEditing(false);
    setShowPopup(true);
  };

  const handleEdit = (project) => {
    setFormData({
      coverName: project.coverName || "",
      title: project.title || "",
      about: project.about || "",
      year: project.year || "",
      client: project.client || "",
      service: project.service || "WEB DESIGNING",
      type: project.type || "Front-End",
      description: project.description || ""
    });

    setCoverFile(null);
    setImage1_5File(null);
    setGalleryFiles([]);
    setCurrentId(project.id);
    setIsEditing(true);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      coverName: "",
      title: "",
      about: "",
      year: "",
      client: "",
      service: "WEB DESIGNING",
      type: "Front-End",
      description: ""
    });
    setCoverFile(null);
    setImage1_5File(null);
    setGalleryFiles([]);
    setCurrentId(null);
  };

  return (
    <>
      <div className="dashboard-container">

        {/* MAIN AREA */}
        <div className="dashboard-main">
          <div className="promo-card-account">
            <h3 className="section-title">Manage Projects</h3>
            <div className="section_form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px', textAlign: 'center' }}>
              <p style={{ marginBottom: '20px', color: '#666' }}>
                Upload new projects with required 6 images (Cover, Banner, 4 Gallery).
              </p>
              <button className="button_submit" onClick={handleAddNew} style={{ maxWidth: '300px' }}>
                + Add New Project
              </button>
            </div>
          </div>
        </div>

        {/* SIDEBAR LIST */}
        <div className="dashboard-sidebar">
          <div className="transaction-card">
            <h3 className="section-title">All Projects</h3>

            <div className="group">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input className="input" type="search" placeholder="Search Project" />
            </div>

            <br />

            <div className="projects-list" style={{ overflowY: 'auto', maxHeight: '500px' }}>
              {projects.length === 0 ? (
                <p style={{ textAlign: "center", color: "#888" }}>No projects found.</p>
              ) : (
                projects.map((proj) => (
                  <div key={proj.id} className="book" onClick={() => handleEdit(proj)} style={{ cursor: 'pointer' }}>
                    <p>{proj.coverName || proj.title}</p>
                    <div className="cover">
                      {/* Show uploaded cover or fallback */}
                      <img
                        src={proj.coverUrl || pr1}
                        alt="cover"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* POPUP FORM */}
      {showPopup && (
        <div className="popup-overlay-projects" onClick={closePopup}>
          <div className="popup-box-projects" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit} className="feed-form">
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '15px' }}>
                {isEditing ? "Edit Project Details" : "Create New Project"}
              </p>

              {/* === UPLOAD SECTION (Visible ONLY when creating) === */}
              {!isEditing && (
                <>
                  {/* 1. COVER IMAGE (1:1) */}
                  <div className="file-upload-form">
                    <label className="file-upload-label">
                      <div className="file-upload-design">
                        <svg viewBox="0 0 640 512" height="1em"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path></svg>
                        <p>1. Cover Image (1:1)</p>
                      </div>
                      <input type="file" accept="image/*" onChange={handleCoverChange} />
                    </label>
                    {coverFile && <p style={{ color: 'green', fontSize: '12px' }}>Selected: {coverFile.name}</p>}
                  </div>

                  {/* 2. SCALE IMAGE (1:5) */}
                  <div className="file-upload-form">
                    <label className="file-upload-label">
                      <div className="file-upload-design">
                        <svg viewBox="0 0 640 512" height="1em"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path></svg>
                        <p>2. Long Banner (1:5 Scale)</p>
                      </div>
                      <input type="file" accept="image/*" onChange={handle1_5Change} />
                    </label>
                    {image1_5File && <p style={{ color: 'green', fontSize: '12px' }}>Selected: {image1_5File.name}</p>}
                  </div>

                  {/* 3. GALLERY IMAGES (Select 4) */}
                  <div className="file-upload-form">
                    <label className="file-upload-label">
                      <div className="file-upload-design">
                        <svg viewBox="0 0 640 512" height="1em"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path></svg>
                        <p>3. Gallery Images (Select 4)</p>
                      </div>
                      <input type="file" accept="image/*" multiple onChange={handleGalleryChange} />
                    </label>
                    <p style={{ color: galleryFiles.length === 4 ? 'green' : 'red', fontSize: '12px', textAlign: 'center' }}>
                      {galleryFiles.length} / 4 Images Selected
                    </p>
                  </div>
                </>
              )}

              {/* === COMMON TEXT FIELDS === */}
              <input required name="coverName" placeholder="Cover Name" type="text" value={formData.coverName} onChange={handleChange} />

              <input required name="title" placeholder="Project Title" type="text" value={formData.title} onChange={handleChange} />

              <textarea required name="about" placeholder="Short About" rows="3" value={formData.about} onChange={handleChange}></textarea>

              <div style={{ display: 'flex', gap: '10px' }}>
                <input required name="year" placeholder="Year" type="number" value={formData.year} onChange={handleChange} style={{ flex: 1 }} />
                <input required name="client" placeholder="Client" type="text" value={formData.client} onChange={handleChange} style={{ flex: 1 }} />
              </div>

              <select name="service" value={formData.service} onChange={handleChange}>
                <option value="WEB DESIGNING">WEB DESIGNING</option>
                <option value="APP DESIGNING">APP DESIGNING</option>
                <option value="CLOUD SERVICES">Cloud / DevOps</option>
                <option value="UI/UX DESIGN">UI/UX DESIGN</option>
              </select>

              <select name="type" value={formData.type} onChange={handleChange}>
                <option value="Front-End">Front-End</option>
                <option value="Back-End">Back-End</option>
                <option value="Full-Stack">Full-Stack</option>
                <option value="DevOps">DevOps</option>
              </select>

              <textarea required name="description" placeholder="Full Project Description" rows="6" value={formData.description} onChange={handleChange}></textarea>

              <button className="button_submit">
                {isEditing ? "UPDATE DETAILS" : "UPLOAD PROJECT"}
              </button>

              <br />

              <button type="button" className="button_submit" onClick={closePopup} style={{ backgroundColor: '#555' }}>
                CANCEL
              </button>

              {isEditing && (
                <>
                  <br />
                  <button type="button" className="button_submit" onClick={handleDelete} style={{ backgroundColor: '#fd6161' }}>
                    <i className="fa-solid fa-trash"></i> DELETE PROJECT
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;