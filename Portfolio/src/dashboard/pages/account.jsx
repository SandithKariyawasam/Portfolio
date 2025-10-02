import React, { useEffect, useState } from "react";
import '../assets/css/account.css'
import me from '../../assets/images/me2.jpeg'



const account = () => {

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

          <div className="transaction-section">
            <div className="transaction-card">
              <h3 className="section-title">New Users</h3>

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
                      <button className='liked-btn'>View</button>
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
                      <button className='liked-btn'>View</button>
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
                      <button className='liked-btn'>View</button>
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
                      <button className='liked-btn'>View</button>
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
                      <button className='liked-btn'>View</button>
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
                      <button className='liked-btn'>View</button>
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
                      <button className='liked-btn'>View</button>
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
                      <button className='liked-btn'>View</button>
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
                      <button className='liked-btn'>View</button>
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
                      <button className='liked-btn'>View</button>
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
              <form id="consultation-form" className="feed-form" action="#">
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
              <form id="consultation-form" className="feed-form" action="#">
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

                <button className="button_submit">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default account
