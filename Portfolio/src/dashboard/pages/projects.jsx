import React, { useEffect, useState } from "react";
import '../assets/css/projects.css'
import ex from '../../assets/images/project-dt-1.png'
import pr1 from '../../assets/images/project1.png'
import pr2 from '../../assets/images/project2.png'
import pr3 from '../../assets/images/project3.png'

const projects = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="dashboard-container">

        <div className="dashboard-main">

          <div className="promo-card-account">
            <h3 className="section-title">Project Details</h3>
            <div className="section_form">
              <form id="consultation-form" className="feed-form" action="#">
                <input required="" placeholder="Cover Name" type="text" />

                <div className="file-upload-form">
                  <label htmlFor="file" className="file-upload-label">
                    <div className="file-upload-design">
                      <svg viewBox="0 0 640 512" height="1em">
                        <path
                          d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                        ></path>
                      </svg>
                      <p>Drag and Drop Cover Photo</p>
                      <p>or</p>
                      <span class="browse-button">Browse Cover Photo</span>
                    </div>
                    <input id="file" type="file" />
                  </label>
                  <img src={pr1} alt="profile pic" />
                </div>

                <input required="" placeholder="Title" type="text" />

                <textarea required placeholder="About" rows="4" cols="50"></textarea>

                <div className="file-upload-form">
                  <label htmlFor="file" className="file-upload-label">
                    <div className="file-upload-design">
                      <svg viewBox="0 0 640 512" height="1em">
                        <path
                          d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                        ></path>
                      </svg>
                      <p>Drag and Drop 1:5 Image</p>
                      <p>or</p>
                      <span class="browse-button">Browse for 1:5 Image</span>
                    </div>
                    <input id="file" type="file" />
                  </label>
                  <img src={ex} alt="profile pic" />
                </div>

                <div className="file-upload-form">
                  <label htmlFor="file" className="file-upload-label">
                    <div className="file-upload-design">
                      <svg viewBox="0 0 640 512" height="1em">
                        <path
                          d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                        ></path>
                      </svg>
                      <p>Drag and Drop 4 Images</p>
                      <p>or</p>
                      <span class="browse-button">Browse for 4 Images</span>
                    </div>
                    <input id="file" type="file" />
                  </label>
                  <img src={pr1} alt="profile pic" />
                  <img src={pr1} alt="profile pic" />
                  <img src={pr1} alt="profile pic" />
                  <img src={pr1} alt="profile pic" />
                </div>

                <input required="" placeholder="Year" type="number" />

                <input required="" placeholder="Client" type="text" />

                <select name="cars" id="service">
                  <option value="WEB DESIGNING">WEB DESIGNING</option>
                  <option value="APP DESIGNING">APP DESIGNING</option>
                  <option value="CLOUD SERVICES">CLOUD SERVICES</option>
                  <option value="UI/UX DESIGN">UI/UX DESIGN</option>
                </select>

                <select name="cars" id="type">
                  <option value="Front-End">Front-End</option>
                  <option value="Back-End">Back-End</option>
                  <option value="Full-Stack">Full-Stack</option>
                </select>

                <textarea required placeholder="Description" rows="10" cols="50"></textarea>

                <button className="button_submit">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>


        <div className="dashboard-sidebar">


          <div className="transaction-card">
            <h3 className="section-title">All Projects</h3>

            <div class="group">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
                <g>
                  <path
                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                  ></path>
                </g>
              </svg>
              <input class="input" type="search" placeholder="Search Project" />
            </div>

            <br/>

            <div class="book" onClick={() => setShowPopup(true)}>
              <p>AutoBid</p>
              <div class="cover">
                <img src={pr1} alt="profile pic" />
              </div>
            </div>

            <div class="book" onClick={() => setShowPopup(true)}>
              <p>HelaFix</p>
              <div class="cover">
                <img src={pr2} alt="profile pic" />
              </div>
            </div>

            <div class="book" onClick={() => setShowPopup(true)}>
              <p>Helaya</p>
              <div class="cover">
                <img src={pr3} alt="profile pic" />
              </div>
            </div>


          </div>


        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay-projects" onClick={() => setShowPopup(false)}>
          <div className="popup-box-projects" onClick={(e) => e.stopPropagation()}>
            <form id="consultation-form" className="feed-form" action="#">
              <p>AutoBid</p>

              <input required="" placeholder="Cover Name" type="text" defaultValue={"AutoBid"}/>

              <div className="file-upload-form">
                <label htmlFor="file" className="file-upload-label">
                  <div className="file-upload-design">
                    <svg viewBox="0 0 640 512" height="1em">
                      <path
                        d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                      ></path>
                    </svg>
                    <p>Drag and Drop Cover Photo</p>
                    <p>or</p>
                    <span class="browse-button">Browse Cover Photo</span>
                  </div>
                  <input id="file" type="file" />
                </label>
                <img src={pr1} alt="profile pic" />
              </div>

              <input required="" placeholder="Title" type="text" defaultValue={"Aesthetic design for brand vehicle auction web application"}/>

              <textarea required placeholder="About" rows="4" cols="50" defaultValue={"🚀 Excited to share our Software Architecture group project - AutoBid, an online auction platform built from the ground up!"}></textarea>

              <div className="file-upload-form">
                <label htmlFor="file" className="file-upload-label">
                  <div className="file-upload-design">
                    <svg viewBox="0 0 640 512" height="1em">
                      <path
                        d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                      ></path>
                    </svg>
                    <p>Drag and Drop 1:5 Image</p>
                    <p>or</p>
                    <span class="browse-button">Browse for 1:5 Image</span>
                  </div>
                  <input id="file" type="file" />
                </label>
                <img src={ex} alt="profile pic" />
              </div>

              <div className="file-upload-form">
                <label htmlFor="file" className="file-upload-label">
                  <div className="file-upload-design">
                    <svg viewBox="0 0 640 512" height="1em">
                      <path
                        d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                      ></path>
                    </svg>
                    <p>Drag and Drop 4 Images</p>
                    <p>or</p>
                    <span class="browse-button">Browse for 4 Images</span>
                  </div>
                  <input id="file" type="file" />
                </label>
                <img src={pr1} alt="profile pic" />
                <img src={pr1} alt="profile pic" />
                <img src={pr1} alt="profile pic" />
                <img src={pr1} alt="profile pic" />
              </div>

              <input required="" placeholder="Year" type="number" defaultValue={"2024"}/>

              <input required="" placeholder="Client" type="text" defaultValue={"None"}/>

              <select name="cars" id="service">
                <option value="WEB DESIGNING">WEB DESIGNING</option>
                <option value="APP DESIGNING">APP DESIGNING</option>
                <option value="CLOUD SERVICES">CLOUD SERVICES</option>
                <option value="UI/UX DESIGN">UI/UX DESIGN</option>
              </select>

              <select name="cars" id="type">
                <option value="Front-End">Front-End</option>
                <option value="Back-End">Back-End</option>
                <option value="Full-Stack">Full-Stack</option>
              </select>

              <textarea required placeholder="Description" rows="10" cols="50" defaultValue={"AutoBid is an online auction platform developed as part of our Software Architecture group project. Built from the ground up, it features a responsive frontend using HTML, CSS, and JavaScript, a robust backend powered by C# with ASP.NET, and a reliable SQL Server (SSMS) database. The platform allows users to engage in real-time bidding with a streamlined interface and smooth user experience. From implementing user authentication to managing live bid tracking, this project gave us valuable hands-on experience in applying key architectural principles in a real-world context."}></textarea>

              <button className="button_submit">SUBMIT</button>
              <br />
              <button type="button" className="button_submit" onClick={() => setShowPopup(false)} style={{ backgroundColor: 'red' }}>CANCEL</button>
              <br />
              <button type="button" className="button_submit" style={{ backgroundColor: '#fd6161' }} ><i className="fa-solid fa-trash"></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default projects
