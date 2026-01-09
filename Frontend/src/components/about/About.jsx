import React from "react";
import "./about.scss";

const About = () => {
    const handleFollowClick = () => {
        window.open("https://www.instagram.com/notrittam", "_blank");
    };

    return (
        <section className="about">
            <div className="about-wrapper">
                {/* Top Row */}
                <div className="about-header">
                    <h2>About Me .</h2>
                    <button onClick={handleFollowClick}>Follow Me</button>
                </div>

                {/* Bottom Row */}
                <div className="about-content">
                    <div className="info-section">
                        <div className="info-box">
                            <h3>Who I Am</h3>
                            <p>
                                Iâ€™m a creative developer passionate about crafting smooth,
                                visually engaging digital experiences with a focus on precision
                                and detail.
                            </p>
                            <div className="tags">
                                <span>Commercial</span>
                                <span>Brand films</span>
                                <span>Corporate</span>
                                <span>Product Videos</span>
                            </div>
                        </div>
                        <hr />
                        <div className="info-box">
                            <h3>What I Do</h3>
                            <p>
                                I specialize in front-end development using React, GSAP, and
                                Three.js to build interactive and responsive user interfaces.
                            </p>
                            <div className="tags">
                                <span>Commercial</span>
                                <span>Brand films</span>
                                <span>Corporate</span>
                                <span>Product Videos</span>
                            </div>
                        </div>
                        <hr />
                        <div className="info-box">
                            <h3>My Vision</h3>
                            <p>
                                My goal is to merge design and technology to create experiences
                                that inspire and connect with people globally.
                            </p>
                            <div className="tags">
                                <span>Commercial</span>
                                <span>Brand films</span>
                                <span>Corporate</span>
                                <span>Product Videos</span>
                            </div>
                        </div>
                    </div>

                    <div className="image-section">
                        <img src="https://res.cloudinary.com/dwnoyi7gc/image/upload/v1767938391/profile_nmxaw0.jpg" alt="Profile" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;