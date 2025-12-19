import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg1 from "../assets/images/bg1.png";
import icon3 from "../assets/images/icon3.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
      });
      window.AOS.refresh();
    }
  }, []);

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    try {
      const res = await fetch("https://portfolio-backend-tau-rouge.vercel.app/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", message: "✅ Email sent successfully!" });
        setFormData({ fullName: "", email: "", subject: "", message: "" }); // clear form
      } else {
        setStatus({ type: "error", message: data.error || "Failed to send." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong." });
    }
  };

  return (
    <>
      <div className="contact-area">
        <div className="container">
          <div className="gx-row d-flex justify-content-between gap-24">
            <div className="contact-infos">
              <h3 data-aos="fade-up">Contact Info</h3>
              <ul className="contact-details">
                <li className="d-flex align-items-center" data-aos="zoom-in">
                  <div className="icon-box shadow-box">
                    <i className="iconoir-mail"></i>
                  </div>
                  <div className="right">
                    <span>MAIL ME</span>
                    <h4>sandithkariyawasam2001@gmail.com</h4>
                  </div>
                </li>

                <li className="d-flex align-items-center" data-aos="zoom-in">
                  <div className="icon-box shadow-box">
                    <i className="iconoir-phone"></i>
                  </div>
                  <div className="right">
                    <span>Contact ME</span>
                    <h4>+94 76 942 3847</h4>
                  </div>
                </li>

                <li className="d-flex align-items-center" data-aos="zoom-in">
                  <div className="icon-box shadow-box">
                    <i className="iconoir-pin-alt"></i>
                  </div>
                  <div className="right">
                    <span>Location</span>
                    <h4>
                      22 Horana Road, Panadura <br />
                      Sri Lanka <br />
                      12500
                    </h4>
                  </div>
                </li>
              </ul>

              <h3 data-aos="fade-up">Social Info</h3>
              <ul
                className="social-links d-flex align-center"
                data-aos="zoom-in"
              >
                <li>
                  <Link className="shadow-box" to="https://www.linkedin.com/in/sandith-kariyawasam-352069255/">
                    <i className="iconoir-linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link className="shadow-box" to="https://www.facebook.com/sandith.kariyawasam.2025">
                    <i className="iconoir-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link className="shadow-box" to="https://www.instagram.com/sandith.kariyawasam/">
                    <i className="iconoir-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>

            <div data-aos="zoom-in" className="contact-form">
              <div className="shadow-box">
                <img src={bg1} alt="BG" className="bg-img" />
                <img src={icon3} alt="Icon" />
                <h1>
                  Let’s work <span>together.</span>
                </h1>

                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input
                      type="text"
                      name="fullName"
                      id="full-name"
                      placeholder="Name *"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Your Subject *"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your Message *"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="input-group">
                    <button
                      className="theme-btn submit-btn"
                      name="submit"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>

                {/* status message */}
                {status.message && (
                  <p
                    style={{
                      marginTop: "10px",
                      color:
                        status.type === "success"
                          ? "green"
                          : status.type === "error"
                            ? "red"
                            : "white",
                    }}
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

