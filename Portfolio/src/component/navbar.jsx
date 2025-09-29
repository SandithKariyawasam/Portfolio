import React from 'react'
import img from '../assets/images/me2.jpeg'

const navbar = () => {
    return (
        <>
            <div class="header">
                <div class="welcome-section">
                    <p class="greeting">Good afternoon, Sandith</p>
                    <h1 class="welcome-title">Your Website Overview</h1>
                </div>

                <div class="header-right">
                    {/* <div class="notification-bell">
                        <i class="fas fa-bell"></i>
                        <div class="notification-indicator"></div>
                    </div> */}

                    {/* <div class="user-profile">
                        <img
                            src={img}
                            alt="Alex Morgan"
                            class="profile-pic"
                        />
                    </div> */}


                </div>
            </div>
        </>
    )
}

export default navbar
