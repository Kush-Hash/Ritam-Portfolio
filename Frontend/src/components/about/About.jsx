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
                                I’m a young creative professional from Kalyani, focused on growing my craft and telling meaningful stories through visuals.
                            </p>
                            <div className="tags">
                                <span>Events</span>
                                <span>Brand films</span>
                                <span>Reels</span>
                                <span>Product Videos</span>
                            </div>
                        </div>
                        <hr />
                        <div className="info-box">
                            <h3>What I Do</h3>
                            <p>
                                Im a video editor and visual storyteller who creates clean, cinematic content for brands. I focus on real emotion, strong visuals, and storytelling that feels natural and engaging.
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
                                My vision is to turn real moments into timeless visual stories focusing on emotion, detail, and storytelling that people can truly feel.
                            </p>
                            <div className="tags">
                                <span>Commercial</span>
                                <span>Brand films</span>
                                <span>Reels</span>
                                <span>Product Videos</span>
                            </div>
                        </div>
                    </div>

                    <div className="image-section">
                        <img
                            src="https://res.cloudinary.com/dwnoyi7gc/image/upload/q_auto,f_auto,w_600/profile_nmxaw0.jpg"
                            alt="Profile"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;