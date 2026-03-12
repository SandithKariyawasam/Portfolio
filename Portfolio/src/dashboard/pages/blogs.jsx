import React, { useEffect, useState } from "react";

import '../assets/css/blog.css'
import me from '../../assets/images/me2.jpeg'
import pr1 from '../../assets/images/project1.png'
import pr2 from '../../assets/images/project2.png'
import pr3 from '../../assets/images/project3.png'


const blogs = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);

  return (
    <>
      <div className="dashboard-container" style={{ display: 'block' }}>

        <div className="dashboard-main" style={{ marginBottom: '30px' }}>



          <div className="transaction-section">
            <div class="transaction-card">
              <h3 class="section-title">New Blogs</h3>

              <div class="transaction-item">
                <div class="transaction-icon">
                  <i class="fa-solid fa-heart"></i>
                </div>
                <div class="transaction-content">
                  <div class="transaction-title">How to Make a Food Website w...</div>
                  <div class="transaction-time">
                    <i class="fa-sharp fa-solid fa-heart"></i> 356
                  </div>
                </div>
                <button className='liked-btn' onClick={() => setShowUserPopup(true)}>View</button>
              </div>

              <div class="transaction-item">
                <div class="transaction-icon">
                  <i class="fa-solid fa-heart"></i>
                </div>
                <div class="transaction-content">
                  <div class="transaction-title">Create a Stunning Dashboard w...</div>
                  <div class="transaction-time">
                    <i class="fa-sharp fa-solid fa-heart"></i> 236
                  </div>
                </div>
                <button className='liked-btn'>View</button>
              </div>

              <div class="transaction-item">
                <div class="transaction-icon">
                  <i class="fa-solid fa-heart"></i>
                </div>
                <div class="transaction-content">
                  <div class="transaction-title">Create a Stunning Dashboard w...</div>
                  <div class="transaction-time">
                    <i class="fa-sharp fa-solid fa-heart"></i> 236
                  </div>
                </div>
                <button className='liked-btn'>View</button>
              </div>
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
                  <h2 className="card-amount" style={{ fontSize: '22px' }}>78</h2>
                </div>
              </div>

              <h3 className="section-title" style={{ marginTop: "10px" }}>My Analytics</h3>

              <div className="transfer-cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', marginBottom: '0', gap: '20px' }}>
                <div className="transfer-card" style={{ padding: '20px' }}>
                  <div className="card-icon" style={{ marginBottom: '10px', height: '40px', width: '40px', fontSize: '18px' }}>
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                  <p className="card-title" style={{ fontSize: '14px' }}>My Likes</p>
                  <h2 className="card-amount" style={{ fontSize: '22px' }}>158</h2>
                </div>

                <div className="transfer-card" style={{ padding: '20px' }}>
                  <div className="card-icon" style={{ marginBottom: '10px', height: '40px', width: '40px', fontSize: '18px' }}>
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <p className="card-title" style={{ fontSize: '14px' }}>My Views</p>
                  <h2 className="card-amount" style={{ fontSize: '22px' }}>1,200</h2>
                </div>

                <div className="transfer-card" style={{ padding: '20px' }}>
                  <div className="card-icon" style={{ marginBottom: '10px', height: '40px', width: '40px', fontSize: '18px' }}>
                    <i className="fa-solid fa-pen-nib"></i>
                  </div>
                  <p className="card-title" style={{ fontSize: '14px' }}>My Blogs</p>
                  <h2 className="card-amount" style={{ fontSize: '22px' }}>6</h2>
                </div>
              </div>
            </div>

          </div>

          <div className="promo-card-account">
            <h3 className="section-title">All Blogs</h3>

            <div class="group">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
                <g>
                  <path
                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                  ></path>
                </g>
              </svg>
              <input class="input" type="search" placeholder="Search Blog Here" />
            </div>

            <br />

            <div className="table-card" style={{ maxHeight: "490px", overflowY: "auto" }}>
              <table className="data-table">
                <tbody>
                  <tr>
                    <td>00001</td>
                    <td>John Smith</td>
                    <td>15 Mar 2025</td>
                    <td>🔎 QA vs Tester -- What's the Difference?🤔</td>
                    <td>
                      <button
                        className="liked-btn"
                        onClick={() => setShowUserPopup(true)}
                      >View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>00002</td>
                    <td>Emma Johnson</td>
                    <td>14 Mar 2025</td>
                    <td>🔎 QA vs Tester -- What's the Difference?🤔</td>
                    <td>
                      <button
                        className="liked-btn"
                      >View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>00003</td>
                    <td>Michael Brown</td>
                    <td>13 Mar 2025</td>
                    <td>🔎 QA vs Tester -- What's the Difference?🤔</td>
                    <td>
                      <button
                        className="liked-btn"
                      >View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>00004</td>
                    <td>Sarah Davis</td>
                    <td>12 Mar 2025</td>
                    <td>🔎 QA vs Tester -- What's the Difference?🤔</td>
                    <td>
                      <button
                        className="liked-btn"
                      >View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>00005</td>
                    <td>David Wilson</td>
                    <td>11 Mar 2025</td>
                    <td>🔎 QA vs Tester -- What's the Difference?🤔</td>
                    <td>
                      <button
                        className="liked-btn"
                      >View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>00006</td>
                    <td>David Wilson</td>
                    <td>11 Mar 2025</td>
                    <td>🔎 QA vs Tester -- What's the Difference?🤔</td>
                    <td>
                      <button
                        className="liked-btn"
                      >View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>00007</td>
                    <td>David Wilson</td>
                    <td>11 Mar 2025</td>
                    <td>🔎 QA vs Tester -- What's the Difference?🤔</td>
                    <td>
                      <button
                        className="liked-btn"
                      >View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>00008</td>
                    <td>David Wilson</td>
                    <td>11 Mar 2025</td>
                    <td>🔎 QA vs Tester -- What's the Difference?🤔</td>
                    <td>
                      <button
                        className="liked-btn"
                      >View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>00009</td>
                    <td>David Wilson</td>
                    <td>11 Mar 2025</td>
                    <td>🔎 QA vs Tester -- What's the Difference?🤔</td>
                    <td>
                      <button
                        className="liked-btn"
                      >View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>00010</td>
                    <td>David Wilson</td>
                    <td>11 Mar 2025</td>
                    <td>🔎 QA vs Tester -- What's the Difference?🤔</td>
                    <td>
                      <button
                        className="liked-btn"
                      >View</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>


        <div className="dashboard-sidebar" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginTop: '30px' }}>
          <div className="transaction-card">
            <h3 className="section-title">Create New Blog</h3>

            <div className="section_form">
              <form id="consultation-form" className="feed-form" action="#">
                <input required="" placeholder="Title" type="text" />

                <textarea required placeholder="Description" rows="10" cols="50"></textarea>

                <div className="file-upload-form">
                  <label htmlFor="file" className="file-upload-label">
                    <div className="file-upload-design">
                      <svg viewBox="0 0 640 512" height="1em">
                        <path
                          d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                        ></path>
                      </svg>
                      <p>Drag and Drop</p>
                      <p>or</p>
                      <span class="browse-button">Browse file</span>
                    </div>
                    <input id="file" type="file" />
                  </label>
                  <img src={me} alt="profile pic" />
                </div>

                <button className="button_submit">SUBMIT</button>
              </form>
            </div>
          </div>

          <div className="transaction-card">
            <h3 className="section-title">My Blogs</h3>

            <div class="group">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
                <g>
                  <path
                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                  ></path>
                </g>
              </svg>
              <input class="input" type="search" placeholder="Search Personal Blog Here" />
            </div>

            <br />

            <div class="book" onClick={() => setShowPopup(true)}>
              <p>AutoBid</p>
              <div class="cover">
                <img src={pr1} alt="profile pic" />
              </div>
            </div>

            <div class="book">
              <p>HelaFix</p>
              <div class="cover">
                <img src={pr2} alt="profile pic" />
              </div>
            </div>

            <div class="book">
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
              <h4>AutoBid</h4>
              <input required="" placeholder="Title" type="text" value={("💡𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗶𝗻𝗴 𝗧𝗶𝗽 - 𝗦𝗻𝗮𝗸𝗲 𝗖𝗮𝘀𝗲 vs 𝗞𝗲𝗯𝗮𝗯 𝗖𝗮𝘀𝗲 vs 𝗖𝗮𝗺𝗲𝗹 𝗖𝗮𝘀𝗲 vs 𝗣𝗮𝘀𝗰𝗮𝗹 𝗖𝗮𝘀𝗲")}/>

              <textarea required placeholder="Description" rows="10" cols="50" value={("🔥In the programming world, consistent and clear code is essential. This extends beyond code structure to how you name elements like variables, methods, functions, classes and files. Naming conventions provide rules or guidelines developers follow to ensure code consistency and clarity.Let's explore four common naming conventions:✅ Snake Case: Words are separated by underscores (_), each in lowercase. It's commonly used in languages like Python for variable and function names.Ex: customer_name, user_name")}></textarea>

              <div className="file-upload-form">
                <label htmlFor="file" className="file-upload-label">
                  <div className="file-upload-design">
                    <svg viewBox="0 0 640 512" height="1em">
                      <path
                        d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                      ></path>
                    </svg>
                    <p>Drag and Drop</p>
                    <p>or</p>
                    <span class="browse-button">Browse file</span>
                  </div>
                  <input id="file" type="file" />
                </label>
                <img src={me} alt="profile pic" />
              </div>

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

      {showUserPopup && (
        <div className="popup-overlay-projects" onClick={() => setShowUserPopup(false)}>
          <div className="popup-box-projects" onClick={(e) => e.stopPropagation()}>
            <form id="consultation-form" className="feed-form" action="#">
              <h4>Id: 00001</h4>
              <input required="" placeholder="Title" type="text" value={("💡𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗶𝗻𝗴 𝗧𝗶𝗽 - 𝗦𝗻𝗮𝗸𝗲 𝗖𝗮𝘀𝗲 vs 𝗞𝗲𝗯𝗮𝗯 𝗖𝗮𝘀𝗲 vs 𝗖𝗮𝗺𝗲𝗹 𝗖𝗮𝘀𝗲 vs 𝗣𝗮𝘀𝗰𝗮𝗹 𝗖𝗮𝘀𝗲")}/>

              <textarea required placeholder="Description" rows="10" cols="50" value={("🔥In the programming world, consistent and clear code is essential. This extends beyond code structure to how you name elements like variables, methods, functions, classes and files. Naming conventions provide rules or guidelines developers follow to ensure code consistency and clarity.Let's explore four common naming conventions:✅ Snake Case: Words are separated by underscores (_), each in lowercase. It's commonly used in languages like Python for variable and function names.Ex: customer_name, user_name")}></textarea>

              <div className="file-upload-form">
                <label htmlFor="file" className="file-upload-label">
                  <div className="file-upload-design">
                    <svg viewBox="0 0 640 512" height="1em">
                      <path
                        d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                      ></path>
                    </svg>
                    <p>Drag and Drop</p>
                    <p>or</p>
                    <span class="browse-button">Browse file</span>
                  </div>
                  <input id="file" type="file" />
                </label>
                <img src={me} alt="profile pic" />
              </div>

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

export default blogs
