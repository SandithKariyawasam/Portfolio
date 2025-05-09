import React from 'react'
import star2 from '../assets/images/star-2.png'
import blog3 from '../assets/images/blog3.jpg'

const blogdetails = () => {
    return (
        <>
            <div class="breadcrumb-area">
                <div class="container">
                    <div class="breadcrumb-content" data-aos="fade-up">
                        <p>HOME - BLOG DETAILS</p>
                        <h1 class="section-heading"><img src={star2} alt="Star"/> Blog Details <img src={star2} alt="Star"/></h1>
                        </div>
                    </div>
            </div>


            <div class="blog-details-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="blog-details-content">
                                <div class="img-box">
                                    <img src={blog3} alt="Blog"/>
                                </div>
                                <span class="meta">25 March 2022 - Share (7)</span>
                                <h1>💡𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗶𝗻𝗴 𝗧𝗶𝗽 - 𝗦𝗻𝗮𝗸𝗲 𝗖𝗮𝘀𝗲 vs 𝗞𝗲𝗯𝗮𝗯 𝗖𝗮𝘀𝗲 vs 𝗖𝗮𝗺𝗲𝗹 𝗖𝗮𝘀𝗲 vs 𝗣𝗮𝘀𝗰𝗮𝗹 𝗖𝗮𝘀𝗲</h1>
                                <p>🔥In the programming world, consistent and clear code is essential. This extends beyond code structure to how you name elements like variables, methods, functions, classes and files. Naming conventions provide rules or guidelines developers follow to ensure code consistency and clarity.</p>
                                <p>Let's explore four common naming conventions:</p>
                                
                                <ul class="list">
                                    <li>✅ <b>Snake Case</b>: Words are separated by underscores (_), each in lowercase. It's commonly used in languages like Python for variable and function names.<br/>
                                    Ex: <i>customer_name, user_name</i></li>
                                    <li>✅ <b>Kebab Case</b>: Words are separated by hyphens (-) and each word is in lowercase. It's often used in URLs and CSS selectors.<br/>
                                    Ex: <i>to-do-list</i></li>
                                    <li>✅ <b>Camel Case</b>: Words are concatenated without spaces, and each word after the first starts with a capital letter. It's prevalent in languages like JavaScript and Java for variable and function names.<br/>
                                    Ex: <i>customerName, emailAddress</i></li>
                                    <li>✅ <b>Pascal Case</b>: Similar to Camel Case, but the first word also starts with a capital letter. It's commonly used for class and method names in languages like C# and Ruby.<br/>
                                    Ex: <i>Customer, GetById()</i></li>
                                </ul>

                                <p>❓Which <b><i>naming convention</i></b> do you prefer?</p>

                                <div class="comments-and-form-wrap">
                                    <div class="comments-and-form-wrap-inner shadow-box">
                                        

                                        <div class="comment-form">
                                            <h2>Leave A Reply</h2>

                                            <form>
                                                <div class="input-group">
                                                    <input type="text" name="name" placeholder="Name*"/>
                                                </div>
                                                <div class="input-group">
                                                    <input type="text" name="email" placeholder="Email*"/>
                                                </div>
                                                <div class="input-group">
                                                    <textarea name="message" placeholder="Your Message*"></textarea>
                                                </div>
                                                <div class="input-group">
                                                    <button class="theme-btn" type="submit">Send Message</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="blog-sidebar">
                                <div class="blog-sidebar-inner">


                                    <div class="blog-sidebar-widget recent-post-widget" data-aos="zoom-in">
                                        <div class="blog-sidebar-widget-inner shadow-box">
                                            <h3>Recent Posts</h3>

                                            <ul>
                                                <li><a href="/blog-details">Consulted admitting is power acuteness.</a></li>
                                                <li><a href="/blog-details">Unsatiable entreaties may collecting Power.</a></li>
                                                <li><a href="/blog-details">Discovery incommode earnestly no he commanded</a></li>
                                                <li><a href="/blog-details">Unsatiable entreaties may collecting Power.</a></li>
                                            </ul>

                                        </div>
                                    </div>

                                    <div class="blog-sidebar-widget categories-widget" data-aos="zoom-in">
                                        <div class="blog-sidebar-widget-inner shadow-box">
                                            <h3>Categories</h3>

                                            <ul>
                                                <li><a href="/blog-details">-Analysis</a></li>
                                                <li><a href="/blog-details">-Firewall</a></li>
                                                <li><a href="/blog-details">-IT Solutions</a></li>
                                                <li><a href="/blog-details">-Security</a></li>
                                                <li><a href="/blog-details">-Technology</a></li>
                                            </ul>

                                        </div>
                                    </div>

                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default blogdetails
