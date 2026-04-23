import React, { useEffect, useState } from "react";
import '../assets/css/blog.css'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Create Form State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);

  // Edit Form State
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editCover, setEditCover] = useState(null);
  const [editCoverPreview, setEditCoverPreview] = useState(null);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("https://portfolio-backend-tau-rouge.vercel.app/blogs");
      if (res.ok) {
        const data = await res.json();
        setBlogs(data);
      }
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleFileChange = (e, isEdit = false) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      if (isEdit) {
        setEditCover(file);
        setEditCoverPreview(preview);
      } else {
        setCover(file);
        setCoverPreview(preview);
      }
    }
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    if (!title || !description || !cover) return alert("Please fill all fields and upload an image.");

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("cover", cover);

    try {
      const res = await fetch("https://portfolio-backend-tau-rouge.vercel.app/blogs", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        alert("Blog created successfully!");
        setTitle("");
        setDescription("");
        setCover(null);
        setCoverPreview(null);
        fetchBlogs();
      } else {
        const errorData = await res.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to create blog.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditClick = (blog) => {
    setCurrentBlog(blog);
    setEditTitle(blog.title);
    setEditDescription(blog.description);
    setEditCover(null);
    setEditCoverPreview(blog.coverUrl);
    setShowPopup(true);
  };

  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("title", editTitle);
    formData.append("description", editDescription);
    if (editCover) {
      formData.append("cover", editCover);
    }

    try {
      const res = await fetch(`https://portfolio-backend-tau-rouge.vercel.app/blogs/${currentBlog.id}`, {
        method: "PUT",
        body: formData,
      });
      if (res.ok) {
        alert("Blog updated successfully!");
        setShowPopup(false);
        fetchBlogs();
      } else {
        const errorData = await res.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to update blog.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteBlog = async () => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    setIsSubmitting(true);
    try {
      const res = await fetch(`https://portfolio-backend-tau-rouge.vercel.app/blogs/${currentBlog.id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        alert("Blog deleted successfully!");
        setShowPopup(false);
        fetchBlogs();
      } else {
        alert("Failed to delete blog.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to delete blog.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="dashboard-container" style={{ display: 'block' }}>
        <div className="dashboard-main" style={{ marginBottom: '30px' }}>

          <div className="transaction-section">
            <div className="transaction-card">
              <h3 className="section-title">New Blogs</h3>
              {loading ? <p>Loading...</p> : blogs.slice(0, 3).map((blog) => (
                <div className="transaction-item" key={blog.id}>
                  <div className="transaction-icon">
                    <img src={blog.coverUrl} alt="cover" style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover' }} />
                  </div>
                  <div className="transaction-content">
                    <div className="transaction-title">{blog.title.substring(0, 30)}...</div>
                    <div className="transaction-time">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <button className='liked-btn' onClick={() => handleEditClick(blog)}>View</button>
                </div>
              ))}
            </div>

            <div className="transaction-card" style={{ padding: '30px' }}>
              <h3 className="section-title">Total Analytics</h3>
              <div className="transfer-cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', marginBottom: '40px', gap: '20px' }}>
                <div className="transfer-card" style={{ padding: '20px' }}>
                  <div className="card-icon" style={{ marginBottom: '10px', height: '40px', width: '40px', fontSize: '18px' }}>
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                  <p className="card-title" style={{ fontSize: '14px' }}>Total Likes</p>
                  <h2 className="card-amount" style={{ fontSize: '22px' }}>12,563</h2>
                </div>

                <div className="transfer-card" style={{ padding: '20px' }}>
                  <div className="card-icon" style={{ marginBottom: '10px', height: '40px', width: '40px', fontSize: '18px' }}>
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <p className="card-title" style={{ fontSize: '14px' }}>Total Views</p>
                  <h2 className="card-amount" style={{ fontSize: '22px' }}>168,025</h2>
                </div>

                <div className="transfer-card" style={{ padding: '20px' }}>
                  <div className="card-icon" style={{ marginBottom: '10px', height: '40px', width: '40px', fontSize: '18px' }}>
                    <i className="fa-solid fa-pen-nib"></i>
                  </div>
                  <p className="card-title" style={{ fontSize: '14px' }}>Total Blogs</p>
                  <h2 className="card-amount" style={{ fontSize: '22px' }}>{blogs.length}</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="promo-card-account">
            <h3 className="section-title">All Blogs</h3>
            <div className="group">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input className="input" type="search" placeholder="Search Blog Here" />
            </div>
            <br />

            <div className="table-card" style={{ maxHeight: "490px", overflowY: "auto" }}>
              <table className="data-table">
                <tbody>
                  {loading ? <tr><td>Loading...</td></tr> : blogs.map((blog, idx) => (
                    <tr key={blog.id}>
                      <td>{(idx + 1).toString().padStart(5, '0')}</td>
                      <td>Admin</td>
                      <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
                      <td>{blog.title.substring(0, 40)}...</td>
                      <td>
                        <button className="liked-btn" onClick={() => handleEditClick(blog)}>View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="dashboard-sidebar" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginTop: '30px' }}>

          <div className="transaction-card">
            <h3 className="section-title">Create New Blog</h3>
            <div className="section_form">
              <form onSubmit={handleCreateBlog} className="feed-form">
                <input required placeholder="Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea required placeholder="Description" rows="10" cols="50" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                <div className="file-upload-form">
                  <label htmlFor="file-create" className="file-upload-label">
                    <div className="file-upload-design">
                      <svg viewBox="0 0 640 512" height="1em">
                        <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
                      </svg>
                      <p>Drag and Drop or <span className="browse-button">Browse file</span></p>
                    </div>
                    <input id="file-create" type="file" accept="image/*" onChange={(e) => handleFileChange(e, false)} />
                  </label>
                  {coverPreview && <img src={coverPreview} alt="preview" style={{ marginTop: '10px', borderRadius: '10px', maxHeight: '150px', objectFit: 'cover' }} />}
                </div>

                <button type="submit" className="button_submit" disabled={isSubmitting}>
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                </button>
              </form>
            </div>
          </div>

          <div className="transaction-card">
            <h3 className="section-title">My Blogs</h3>
            <div className="group">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input className="input" type="search" placeholder="Search Personal Blog Here" />
            </div>
            <br />

            <div style={{ maxHeight: "350px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
              {blogs.map(blog => (
                <div className="transaction-item" key={`myblog-${blog.id}`} style={{ padding: "10px", margin: "0" }}>
                  <div className="transaction-icon" style={{ flexShrink: 0 }}>
                    <img src={blog.coverUrl} alt="cover" style={{ width: '45px', height: '45px', borderRadius: '8px', objectFit: 'cover' }} />
                  </div>
                  <div className="transaction-content">
                    <div className="transaction-title" style={{ fontSize: "14px", fontWeight: "600", color: "#333" }}>{blog.title.substring(0, 25)}...</div>
                    <div className="transaction-time" style={{ fontSize: "12px" }}>
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <button className='liked-btn' onClick={() => handleEditClick(blog)}>Edit</button>
                </div>
              ))}
              {blogs.length === 0 && !loading && (
                <p style={{ textAlign: 'center', color: '#888', marginTop: '20px' }}>No blogs found.</p>
              )}
            </div>
          </div>

        </div>
      </div>

      {showPopup && currentBlog && (
        <div className="popup-overlay-projects" onClick={() => setShowPopup(false)}>
          <div className="popup-box-projects" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleUpdateBlog} className="feed-form">
              <h4>Edit Blog: {currentBlog.id}</h4>
              <input required placeholder="Title" type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
              <textarea required placeholder="Description" rows="10" cols="50" value={editDescription} onChange={(e) => setEditDescription(e.target.value)}></textarea>

              <div className="file-upload-form">
                <label htmlFor="file-edit" className="file-upload-label">
                  <div className="file-upload-design">
                    <svg viewBox="0 0 640 512" height="1em">
                      <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
                    </svg>
                    <p>Drag and Drop or <span className="browse-button">Browse new file</span></p>
                  </div>
                  <input id="file-edit" type="file" accept="image/*" onChange={(e) => handleFileChange(e, true)} />
                </label>
                {editCoverPreview && <img src={editCoverPreview} alt="preview" style={{ marginTop: '10px', borderRadius: '10px', maxHeight: '150px', objectFit: 'cover' }} />}
              </div>

              <button type="submit" className="button_submit" disabled={isSubmitting}>
                {isSubmitting ? "SAVING..." : "SAVE CHANGES"}
              </button>
              <br />
              <button type="button" className="button_submit" onClick={() => setShowPopup(false)} style={{ backgroundColor: 'red' }} disabled={isSubmitting}>CANCEL</button>
              <br />
              <button type="button" className="button_submit" onClick={handleDeleteBlog} style={{ backgroundColor: '#fd6161' }} disabled={isSubmitting}>
                <i className="fa-solid fa-trash"></i> DELETE
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Blogs;

