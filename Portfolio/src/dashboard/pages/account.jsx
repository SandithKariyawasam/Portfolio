import React, { useEffect, useState } from "react";
import '../assets/css/account.css'
import me from '../../assets/images/me2.jpeg'



const account = () => {

  return (
    <>
      <div class="dashboard-container">

        <div class="dashboard-main">

          <div class="transfer-cards">
            <div class="transfer-card">
              <div class="card-icon">
                <i class="fa-duotone fa-solid fa-users"></i>
              </div>
              <p class="card-title">Total Users</p>
              <h2 class="card-amount">212</h2>
            </div>
            <div class="transfer-card">
              <div class="card-icon">
                <i class="fa-duotone fa-solid fa-users"></i>
              </div>
              <p class="card-title">Admins Count</p>
              <h2 class="card-amount">2</h2>
            </div>
            <div class="transaction-card">
              <h3 class="section-title">Admins</h3>

              <div class="transaction-item">
                <div class="transaction-icon">
                  <img
                    src={me}
                    alt="Sandith Kariyawasam"
                  />
                </div>
                <div class="transaction-content">
                  <div class="transaction-title">Sandith Kariyawasam</div>
                </div>
              </div>
              <div class="transaction-item">
                <div class="transaction-icon">
                  <img
                    src={me}
                    alt="Sandith Kariyawasam"
                  />
                </div>
                <div class="transaction-content">
                  <div class="transaction-title">Sandith Kariyawasam</div>
                </div>
              </div>

            </div>
          </div>

          <div class="transaction-section">
            <div class="transaction-card">
              <h3 class="section-title">New Users</h3>

              <div class="transaction-item">
                <div class="transaction-icon">
                  <img
                    src={me}
                    alt="Sandith Kariyawasam"
                  />
                </div>
                <div class="transaction-content">
                  <div class="transaction-title">Sandith Kariyawasam</div>
                </div>
              </div>
              <div class="transaction-item">
                <div class="transaction-icon">
                  <img
                    src={me}
                    alt="Sandith Kariyawasam"
                  />
                </div>
                <div class="transaction-content">
                  <div class="transaction-title">Sandith Kariyawasam</div>
                </div>
              </div>
            </div>

            <div class="transaction-card">
              <h3 class="section-title">Removed Users</h3>

              <div class="transaction-item">
                <div class="transaction-icon">
                  <img
                    src={me}
                    alt="Sandith Kariyawasam"
                  />
                </div>
                <div class="transaction-content">
                  <div class="transaction-title">Sandith Kariyawasam</div>
                </div>
              </div>
              <div class="transaction-item">
                <div class="transaction-icon">
                  <img
                    src={me}
                    alt="Sandith Kariyawasam"
                  />
                </div>
                <div class="transaction-content">
                  <div class="transaction-title">Sandith Kariyawasam</div>
                </div>
              </div>
            </div>
          </div>

          <div class="promo-card-account">
            <h3 class="section-title">All Users</h3>
            <div class="table-card">
              <table class="data-table">
                <tbody>
                  <tr>
                    <td>00001</td>
                    <td>John Smith</td>
                    <td>15 Mar 2025</td>
                    <td><img src={me} alt="Sandith Kariyawasam" /></td>
                    <td>
                      <span class="status active">User</span>
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
                      <span class="status pending">Admin</span>
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
                      <span class="status active">User</span>
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
                      <span class="status cancelled">Blogger</span>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>


        <div class="dashboard-sidebar">
          <div class="transaction-card">
            <h3 class="section-title">Edit Your Details</h3>

            <div class="transaction-item">

            </div>
          </div>

          <div class="transaction-card">
            <h3 class="section-title">Add New Admin</h3>

            <div class="transaction-item">

            </div>
          </div>

          <div class="transaction-card">
            <h3 class="section-title">Add New User</h3>

            <div class="transaction-item">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default account
