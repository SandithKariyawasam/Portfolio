import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import '../assets/css/account.css'
import me from '../../assets/images/me2.jpeg'



const account = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showAdminPopup, setShowAdminPopup] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showConfirmAddPopup, setShowAddPopup] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmPopup(true);
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    setShowAddPopup(true);
  };


  return (
    <>
      <div className="dashboard-container">

        <div className="dashboard-main">

          <div className="transfer-cards">
            <div className="transfer-card">
              <div className="card-icon">
                <i className="fa-duotone fa-solid fa-users"></i>
              </div>
              <p className="card-title">Total Users</p>
              <h2 className="card-amount">212</h2>
            </div>
            <div className="transfer-card">
              <div className="card-icon">
                <i className="fa-duotone fa-solid fa-users"></i>
              </div>
              <p className="card-title">Admins Count</p>
              <h2 className="card-amount">2</h2>
            </div>
            <div className="transaction-card">
              <h3 className="section-title">Admins</h3>

              <div className="transaction-item" onClick={() => setShowAdminPopup(true)}>
                <div className="transaction-icon">
                  <img
                    src={me}
                    alt="Sandith Kariyawasam"
                  />
                </div>
                <div className="transaction-content">
                  <div className="transaction-title">Sandith Kariyawasam</div>
                </div>
              </div>
              <div className="transaction-item">
                <div className="transaction-icon">
                  <img
                    src={me}
                    alt="Sandith Kariyawasam"
                  />
                </div>
                <div className="transaction-content">
                  <div className="transaction-title">Sandith Kariyawasam</div>
                </div>
              </div>

            </div>
          </div>

          <div className="transaction-section">
            <div className="transaction-card">
              <h3 className="section-title">New Users</h3>

              <div className="transaction-item" onClick={() => setShowPopup(true)}>
                <div className="transaction-icon">
                  <img
                    src={me}
                    alt="Sandith Kariyawasam"
                  />
                </div>
                <div className="transaction-content">
                  <div className="transaction-title">Sandith Kariyawasam</div>
                </div>
              </div>
              <div className="transaction-item">
                <div className="transaction-icon">
                  <img
                    src={me}
                    alt="Sandith Kariyawasam"
                  />
                </div>
                <div className="transaction-content">
                  <div className="transaction-title">Sandith Kariyawasam</div>
                </div>
              </div>
              <div className="transaction-item">
                <div className="transaction-icon">
                  <img
                    src={me}
                    alt="Sandith Kariyawasam"
                  />
                </div>
                <div className="transaction-content">
                  <div className="transaction-title">Sandith Kariyawasam</div>
                </div>
              </div>
              <div className="transaction-item">
                <div className="transaction-icon">
                  <img
                    src={me}
                    alt="Sandith Kariyawasam"
                  />
                </div>
                <div className="transaction-content">
                  <div className="transaction-title">Sandith Kariyawasam</div>
                </div>
              </div>
              <div className="transaction-item">
                <div className="transaction-icon">
                  <img
                    src={me}
                    alt="Sandith Kariyawasam"
                  />
                </div>
                <div className="transaction-content">
                  <div className="transaction-title">Sandith Kariyawasam</div>
                </div>
              </div>
            </div>

            <div className="transaction-card">
              <h3 className="section-title-Account">Removed Users</h3>

              <div className="transaction-item">
                <div className="transaction-icon">
                  <img
                    src={me}
                    alt="Sandith Kariyawasam"
                  />
                </div>
                <div className="transaction-content">
                  <div className="transaction-title">Sandith Kariyawasam</div>
                </div>
              </div>
              <div className="transaction-item">
                <div className="transaction-icon">
                  <img
                    src={me}
                    alt="Sandith Kariyawasam"
                  />
                </div>
                <div className="transaction-content">
                  <div className="transaction-title">Sandith Kariyawasam</div>
                </div>
              </div>
              <div className="transaction-item">
                <div className="transaction-icon">
                  <img
                    src={me}
                    alt="Sandith Kariyawasam"
                  />
                </div>
                <div className="transaction-content">
                  <div className="transaction-title">Sandith Kariyawasam</div>
                </div>
              </div>
              <div className="transaction-item">
                <div className="transaction-icon">
                  <img
                    src={me}
                    alt="Sandith Kariyawasam"
                  />
                </div>
                <div className="transaction-content">
                  <div className="transaction-title">Sandith Kariyawasam</div>
                </div>
              </div>
            </div>
          </div>

          <div className="promo-card-account">
            <h3 className="section-title">All Users</h3>
            <div className="table-card">
              <table className="data-table">
                <tbody>
                  <tr>
                    <td>00001</td>
                    <td>John Smith</td>
                    <td>15 Mar 2025</td>
                    <td><img src={me} alt="Sandith Kariyawasam" /></td>
                    <td>
                      <span className="status active">User</span>
                    </td>
                    <td>
                      <button
                        className="liked-btn"
                        onClick={() => setShowPopup(true)}
                      >View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>00002</td>
                    <td>Emma Johnson</td>
                    <td>14 Mar 2025</td>
                    <td><img src={me} alt="Sandith Kariyawasam" /></td>
                    <td>
                      <span className="status pending">Admin</span>
                    </td>
                    <td>
                      <button
                        className="liked-btn"
                        onClick={() => setShowPopup(true)}
                      >View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>00003</td>
                    <td>Michael Brown</td>
                    <td>13 Mar 2025</td>
                    <td><img src={me} alt="Sandith Kariyawasam" /></td>
                    <td>
                      <span className="status active">User</span>
                    </td>
                    <td>
                      <button
                        className="liked-btn"
                        onClick={() => setShowPopup(true)}
                      >View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>00004</td>
                    <td>Sarah Davis</td>
                    <td>12 Mar 2025</td>
                    <td><img src={me} alt="Sandith Kariyawasam" /></td>
                    <td>
                      <span className="status cancelled">Blogger</span>
                    </td>
                    <td>
                      <button
                        className="liked-btn"
                        onClick={() => setShowPopup(true)}
                      >View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>00005</td>
                    <td>David Wilson</td>
                    <td>11 Mar 2025</td>
                    <td><img src={me} alt="Sandith Kariyawasam" /></td>
                    <td>
                      <span class="status active">User</span>
                    </td>
                    <td>
                      <button
                        className="liked-btn"
                        onClick={() => setShowPopup(true)}
                      >View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>00006</td>
                    <td>David Wilson</td>
                    <td>11 Mar 2025</td>
                    <td><img src={me} alt="Sandith Kariyawasam" /></td>
                    <td>
                      <span class="status active">User</span>
                    </td>
                    <td>
                      <button
                        className="liked-btn"
                        onClick={() => setShowPopup(true)}
                      >View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>00007</td>
                    <td>David Wilson</td>
                    <td>11 Mar 2025</td>
                    <td><img src={me} alt="Sandith Kariyawasam" /></td>
                    <td>
                      <span class="status active">User</span>
                    </td>
                    <td>
                      <button
                        className="liked-btn"
                        onClick={() => setShowPopup(true)}
                      >View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>00008</td>
                    <td>David Wilson</td>
                    <td>11 Mar 2025</td>
                    <td><img src={me} alt="Sandith Kariyawasam" /></td>
                    <td>
                      <span class="status active">User</span>
                    </td>
                    <td>
                      <button
                        className="liked-btn"
                        onClick={() => setShowPopup(true)}
                      >View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>00009</td>
                    <td>David Wilson</td>
                    <td>11 Mar 2025</td>
                    <td><img src={me} alt="Sandith Kariyawasam" /></td>
                    <td>
                      <span class="status active">User</span>
                    </td>
                    <td>
                      <button
                        className="liked-btn"
                        onClick={() => setShowPopup(true)}
                      >View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>00010</td>
                    <td>David Wilson</td>
                    <td>11 Mar 2025</td>
                    <td><img src={me} alt="Sandith Kariyawasam" /></td>
                    <td>
                      <span class="status active">User</span>
                    </td>
                    <td>
                      <button
                        className="liked-btn"
                        onClick={() => setShowPopup(true)}
                      >View</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>


        <div className="dashboard-sidebar">
          <div className="transaction-card">
            <h3 className="section-title">Edit Your Details</h3>

            <div className="section_form">
              <form id="consultation-form" className="feed-form" action="#">
                <input required="" placeholder="Username" type="text" />
                <input name="email" required="" placeholder="E-mail" type="email" />
                <input required="" placeholder="Password" type="password" />
                <input required="" placeholder="Confirm Password" type="password" />

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

                <button className="button_submit">SAVE</button>
              </form>
            </div>
          </div>

          <div className="transaction-card">
            <h3 className="section-title">Add New Admin</h3>

            <div className="section_form">
              <form id="consultation-form" className="feed-form" action="#" onSubmit={handleAdminSubmit}>
                <input required="" placeholder="Admin Username" type="text" />
                <input name="email" required="" placeholder="E-mail" type="email" />
                <input required="" placeholder="Password" type="password" />
                <input required="" placeholder="Confirm Password" type="password" />

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
            <h3 className="section-title">Add New User</h3>

            <div className="section_form">
              <form id="consultation-form" className="feed-form" action="#" >
                <input required="" placeholder="New User Username" type="text" />
                <input name="email" required="" placeholder="E-mail" type="email" />
                <input required="" placeholder="Password" type="password" />
                <input required="" placeholder="Confirm Password" type="password" />

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

                <button type="submit" className="button_submit" >SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showAdminPopup && (
        <div className="popup-overlay">
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <form id="consultation-form" className="feed-form" action="#" onSubmit={handleSubmit}>
              <p>Admin Id: 00001</p>
              <input required="" placeholder="Sandith Kariyawasam" type="text" defaultValue="Sandith Kariyawasam" />
              <input name="email" required="" placeholder="E-mail" type="email" defaultValue="sandithkariyawasam2001@gmail.com" />


              <div style={{ position: "relative", width: "250px" }}>
                <input required placeholder="Password" type={showPassword ? "text" : "password"} defaultValue="abcd@1234" />

                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-80%)",
                    cursor: "pointer",
                    color: "#000000ff"
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

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
                    <span className="browse-button">Browse file</span>
                  </div>
                  <input id="file" type="file" hidden />
                </label>
                <img src={me} alt="profile pic" />
              </div>

              <button type="submit" className="button_submit">UPDATE</button>
              <br />
              <button type="button" className="button_submit" onClick={() => setShowAdminPopup(false)} style={{ backgroundColor: 'red' }}>CANCEL</button>
              <br />
              <button type="button" className="button_submit" style={{ backgroundColor: '#fd6161' }} onClick={() => setShowDeletePopup(true)}             >
                <i className="fa-solid fa-trash"></i>
              </button>


            </form>
          </div>
        </div>
      )}


      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <form id="consultation-form" className="feed-form" action="#" onSubmit={handleSubmit}>
              <p>Id: 00001</p>
              <input required="" placeholder="Sandith Kariyawasam" type="text" defaultValue="Sandith Kariyawasam" />
              <input name="email" required="" placeholder="E-mail" type="email" defaultValue="sandithkariyawasam2001@gmail.com" />


              <div style={{ position: "relative", width: "250px" }}>
                <input required placeholder="Password" type={showPassword ? "text" : "password"} defaultValue="abcd@1234" />

                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-80%)",
                    cursor: "pointer",
                    color: "#000000ff"
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>


              <select name="cars" id="role">
                <option value="WEB DESIGNING">User</option>
                <option value="APP DESIGNING">Blogger</option>
                <option value="CLOUD SERVICES">Admin</option>
              </select>

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
                    <span className="browse-button">Browse file</span>
                  </div>
                  <input id="file" type="file" hidden />
                </label>
                <img src={me} alt="profile pic" />
              </div>

              <button type="submit" className="button_submit">UPDATE</button>
              <br />
              <button type="button" className="button_submit" style={{ backgroundColor: '#15ff00ff', color: '#000000ff' }}>Visit Profile</button>
              <br />
              <button type="button" className="button_submit" onClick={() => setShowPopup(false)} style={{ backgroundColor: 'red' }}>CANCEL</button>
              <br />
              <button type="button" className="button_submit" style={{ backgroundColor: '#fd6161' }} onClick={() => setShowDeletePopup(true)}             >
                <i className="fa-solid fa-trash"></i>
              </button>


            </form>
          </div>
        </div>
      )}

      {showConfirmPopup && (
        <div className="popup-overlay" onClick={() => setShowConfirmPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <p>Are you sure you want to update this user?</p>
            <button
              className="button_submit"
              onClick={() => {
                setShowConfirmPopup(false);
                alert("✅ Updated successfully!");
              }}
            >
              Yes, Update
            </button>
            <br />
            <br />
            <button
              className="button_submit"
              style={{ backgroundColor: 'red' }}
              onClick={() => setShowConfirmPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showDeletePopup && (
        <div className="popup-overlay" onClick={() => setShowDeletePopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <p>Are you sure you want to delete this user?</p>
            <button
              className="button_submit"
              style={{ backgroundColor: "red" }}
              onClick={() => {
                setShowDeletePopup(false);
                alert("🗑️ Deleted successfully!");
                setShowPopup(false);
                setShowAdminPopup(false);
              }}
            >
              Yes, Delete
            </button>
            <br /><br />
            <button
              className="button_submit"
              onClick={() => setShowDeletePopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showConfirmAddPopup && (
        <div className="popup-overlay" onClick={() => setShowAddPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <p>Are you sure you want to add this Admin?</p>
            <button
              className="button_submit"
              onClick={() => {
                setShowAddPopup(false);
                alert("✅ Added successfully!");
              }}
            >
              Yes, Add
            </button>
            <br />
            <br />
            <button
              className="button_submit"
              style={{ backgroundColor: 'red' }}
              onClick={() => setShowAddPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

    </>
  )
}

export default account
