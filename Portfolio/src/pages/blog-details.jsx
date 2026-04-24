import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import star2 from "../assets/images/star-2.png";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Comment Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!loading) {
      const initAOS = () => {
        if (window.AOS) {
          window.AOS.init({ duration: 800, once: true });
          setTimeout(() => window.AOS.refreshHard(), 100);
        } else {
          setTimeout(initAOS, 100);
        }
      };
      initAOS();
    }
  }, [loading]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const [blogRes, recentRes] = await Promise.all([
          fetch(`https://portfolio-backend-tau-rouge.vercel.app/blogs/${id}`),
          fetch(`https://portfolio-backend-tau-rouge.vercel.app/blogs`)
        ]);

        if (blogRes.ok) {
          const blogData = await blogRes.json();
          setBlog(blogData);
        }
        if (recentRes.ok) {
          const recentData = await recentRes.json();
          // Exclude the current blog from recent posts
          setRecentBlogs(recentData.filter(b => b.id !== id).slice(0, 4));
        }
      } catch (err) {
        console.error("Failed to fetch blog data:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogData();
    }
  }, [id]);

  const handleLike = async () => {
    try {
      // Using localhost so you can test it locally before deploying the new backend route
      const res = await fetch(`https://portfolio-backend-tau-rouge.vercel.app/blogs/${id}/like`, { method: "POST" });
      if (res.ok) {
        const data = await res.json();
        setBlog(prev => ({
          ...prev,
          likes: data.likes
        }));
      }
    } catch (err) {
      console.error("Failed to like blog:", err);
    }
  };



  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blog?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) return alert("Please fill all fields.");

    setIsSubmitting(true);
    try {
      const res = await fetch(`https://portfolio-backend-tau-rouge.vercel.app/blogs/${id}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });
      if (res.ok) {
        const data = await res.json();
        setBlog(prev => ({
          ...prev,
          comments: [...(prev.comments || []), data.comment]
        }));
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to post comment.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to post comment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <p style={{ letterSpacing: '2px', color: 'var(--primary_color)', fontWeight: 'bold' }}>HOME - BLOG DETAILS</p>
            <h1 className="section-heading" style={{ fontSize: '48px', marginTop: '10px' }}>
              <img src={star2} alt="Star" /> Article <img src={star2} alt="Star" />
            </h1>
          </div>
        </div>
      </div>

      <div className="blog-details-area" style={{ padding: '60px 0 100px 0' }}>
        <div className="container">
          <div className="row" style={{ rowGap: '40px' }}>

            {/* Main Content Area */}
            <div className="col-lg-8 col-md-12">
              <div
                className="blog-details-content shadow-box"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  padding: '40px',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.03)'
                }}
              >
                {loading ? (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '100px 0' }}>
                    <div className="custom-spinner"></div>
                  </div>
                ) : !blog ? (
                  <div style={{ textAlign: "center", padding: "100px 0", color: "var(--text-color)" }}>Blog not found.</div>
                ) : (
                  <>
                <Link
                  to="/blog"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'var(--primary_color)',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    fontSize: '16px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.gap = '15px'}
                  onMouseLeave={(e) => e.currentTarget.style.gap = '10px'}
                >
                  <i className="iconoir-arrow-left" style={{ fontSize: '20px' }}></i> Back to Blogs
                </Link>

                <div
                  className="img-box"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    marginBottom: '30px'
                  }}
                >
                  <img src={blog.coverUrl} alt="Blog" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '25px' }}>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <span
                      className="meta"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(91, 120, 246, 0.1)',
                        color: 'var(--primary_color)',
                        padding: '0 16px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        border: '1px solid rgba(91, 120, 246, 0.2)',
                        height: '38px',
                        boxSizing: 'border-box',
                        lineHeight: '1',
                        margin: '0'
                      }}
                    >
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </span>

                    <span
                      className="meta"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: 'var(--text-color)',
                        padding: '0 16px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        height: '38px',
                        boxSizing: 'border-box',
                        lineHeight: '1',
                        margin: '0',
                        gap: '8px'
                      }}
                    >
                      <i className="iconoir-eye" style={{ fontSize: '18px' }}></i> {blog.views || 1} Views
                    </span>
                  </div>

                  <button
                    onClick={handleLike}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      backgroundColor: 'rgba(255, 60, 60, 0.1)',
                      color: '#ff3c3c',
                      border: '1px solid rgba(255, 60, 60, 0.2)',
                      padding: '0 16px',
                      borderRadius: '20px',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      height: '38px',
                      boxSizing: 'border-box',
                      lineHeight: '1',
                      margin: '0',
                      outline: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 60, 60, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 60, 60, 0.1)';
                    }}
                  >
                    <i className="iconoir-heart-solid" style={{ fontSize: '18px' }}></i>
                    {blog.likes || 0} Likes
                  </button>
                </div>

                <h1 style={{ fontSize: '32px', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '30px', color: 'var(--icon-color)' }}>
                  {blog.title}
                </h1>

                <div 
                  className="blog-html-content"
                  style={{ color: 'var(--text-color)', fontSize: '16px', lineHeight: '1.8' }}
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                />

                {/* Display Comments */}
                {blog.comments && blog.comments.length > 0 && (
                  <div style={{ marginTop: '50px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--icon-color)', marginBottom: '25px' }}>Comments ({blog.comments.length})</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      {blog.comments.map((c) => (
                        <div key={c.id} style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
                            <strong style={{ color: 'var(--icon-color)', fontSize: '16px' }}>{c.name}</strong>
                            <span style={{ fontSize: '12px', color: '#888' }}>{new Date(c.createdAt).toLocaleDateString()}</span>
                          </div>
                          <p style={{ color: 'var(--text-color)', margin: 0, fontSize: '15px', lineHeight: '1.6' }}>{c.message}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Comment Form */}
                <div style={{ marginTop: '50px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--icon-color)', marginBottom: '25px' }}>Leave A Reply</h2>
                  <form onSubmit={handleCommentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <input
                        type="text"
                        placeholder="Name*"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ padding: '16px 20px', borderRadius: '12px', border: 'none', backgroundColor: 'rgba(255,255,255,0.03)', color: 'var(--text-color)', outline: 'none', fontSize: '15px' }}
                      />
                      <input
                        type="email"
                        placeholder="Email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ padding: '16px 20px', borderRadius: '12px', border: 'none', backgroundColor: 'rgba(255,255,255,0.03)', color: 'var(--text-color)', outline: 'none', fontSize: '15px' }}
                      />
                    </div>
                    <textarea
                      placeholder="Your Message*"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      style={{ padding: '20px', borderRadius: '12px', border: 'none', backgroundColor: 'rgba(255,255,255,0.03)', color: 'var(--text-color)', outline: 'none', fontSize: '15px', minHeight: '150px', resize: 'vertical' }}
                    ></textarea>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{ padding: '16px 30px', borderRadius: '12px', border: 'none', backgroundColor: 'var(--primary_color)', color: '#fff', fontSize: '16px', fontWeight: 'bold', cursor: isSubmitting ? 'not-allowed' : 'pointer', transition: 'transform 0.2s', width: 'fit-content', opacity: isSubmitting ? 0.7 : 1 }}
                      onMouseEnter={(e) => !isSubmitting && (e.target.style.transform = 'translateY(-2px)')}
                      onMouseLeave={(e) => e.target.style.transform = 'none'}
                    >
                      {isSubmitting ? "Posting..." : "Post Comment"}
                    </button>
                  </form>
                </div>
                </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12">
              <div style={{ position: 'sticky', top: '30px', display: 'flex', flexDirection: 'column', gap: '30px' }}>

                {/* Search Widget */}
                <div
                  className="shadow-box"
                  style={{
                    padding: '30px',
                    borderRadius: '24px',
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid rgba(255,255,255,0.03)'
                  }}
                >
                  <h3 style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--icon-color)', fontWeight: 'bold' }}>Search</h3>
                  <form style={{ display: 'flex', gap: '10px' }} onSubmit={handleSearch}>
                    <input
                      type="text"
                      placeholder="Type here..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{
                        flex: 1,
                        padding: '14px 20px',
                        borderRadius: '12px',
                        border: 'none',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        color: 'var(--text-color)',
                        outline: 'none',
                        fontSize: '15px'
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        padding: '0 20px',
                        borderRadius: '12px',
                        border: 'none',
                        backgroundColor: 'var(--primary_color)',
                        color: '#fff',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease'
                      }}
                    >
                      <i className="iconoir-search" style={{ fontSize: '20px' }}></i>
                    </button>
                  </form>
                </div>

                {/* Recent Posts Widget */}
                <div
                  className="shadow-box"
                  style={{
                    padding: '30px',
                    borderRadius: '24px',
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid rgba(255,255,255,0.03)'
                  }}
                >
                  <h3 style={{ fontSize: '20px', marginBottom: '25px', color: 'var(--icon-color)', fontWeight: 'bold' }}>Recent Posts</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {recentBlogs.map((post, i) => (
                      <li key={post.id} style={{ borderBottom: i !== 3 ? '1px solid rgba(255,255,255,0.05)' : 'none', paddingBottom: i !== 3 ? '15px' : '0' }}>
                        <Link
                          to={`/blog-details/${post.id}`}
                          style={{
                            color: 'var(--text-color)',
                            textDecoration: 'none',
                            fontSize: '15px',
                            lineHeight: '1.5',
                            display: 'block',
                            transition: 'color 0.3s ease'
                          }}
                          onMouseEnter={(e) => e.target.style.color = 'var(--primary_color)'}
                          onMouseLeave={(e) => e.target.style.color = 'var(--text-color)'}
                        >
                          {post.title.length > 50 ? post.title.substring(0, 50) + "..." : post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
