import React from 'react'
import "../assets/css/form.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/aos.css";

const Login = () => {
    return (
        <>
            <div className="page-container">
                <div class="form-container">
                    <p class="title">Login</p>
                    <form class="form">
                        <div class="input-group">
                            <label for="username">Username</label>
                            <input type="text" name="username" id="username" placeholder="" />
                        </div>
                        <div class="input-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="" />
                            <div class="forgot">
                                <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                            </div>
                        </div>
                        <button class="sign">Sign in</button>
                    </form>
                    <div class="social-message">
                        <div class="line"></div>
                        <p class="message">Only admin can login here.Users does not allow to login</p>
                        <div class="line"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
