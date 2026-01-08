import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Subtle fade-up animation
const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Services = () => {
    const navigate = useNavigate();
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    // Function to open link in new tab
    const handleOpenLink = (link) => {
        window.open(link, "_blank");
    };

    return (
        <div className="services" ref={ref}>
            {/* Text Section */}
            <motion.div
                className="textContainer"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <p>
                    I bring your thoughts in my video <br /> to relive the moments later.
                </p>
                <hr />
            </motion.div>

            {/* Title Section */}
            <motion.div
                className="titleContainer"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <div className="title">
                    <video
                        src="https://res.cloudinary.com/dwnoyi7gc/video/upload/v1767890825/kiss4_kraaes.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="titleVideo"
                    />
                    <h1>
                        <b>Unique</b> Ideas
                    </h1>
                </div>

                <div className="title">
                    <h1>
                        <b>For Your</b> Videos
                    </h1>
                    <button onClick={() => navigate("/works")}>
                        more WORKS
                    </button>
                </div>
            </motion.div>

            {/* List Section */}
            <motion.div
                className="listContainer"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <div className="box">
                    <h2>Branding</h2>
                    <p>
                        Turning ideas into identities. I craft visual stories that define your brand and make it instantly recognizable.
                    </p>
                    <button onClick={() => handleOpenLink("https://drive.google.com/branding-demo-link")}>
                        Go
                    </button>
                </div>

                <div className="box">
                    <h2>Video Editing</h2>
                    <p>
                        Where raw footage becomes emotion. Every cut, beat, and frame is shaped to tell a powerful story.
                    </p>
                    <button onClick={() => handleOpenLink("https://drive.google.com/video-editing-demo-link")}>
                        See More
                    </button>
                </div>

                <div className="box">
                    <h2>Content Creation</h2>
                    <p>
                        Ideas that capture attention and content that keeps audiences watching, feeling, and coming back for more.
                    </p>
                    <button onClick={() => handleOpenLink("https://www.instagram.com/anotherittam?igsh=MW9jZ2NpZjN1dnRubw==")}>
                        Discover
                    </button>
                </div>

                <div className="box">
                    <h2>Motion Graphics</h2>
                    <p>
                        Motion with purpose. Clean animations and stylish visuals that bring energy, clarity, and impact to every frame.
                    </p>
                    <button onClick={() => handleOpenLink("https://drive.google.com/motion-graphics-demo-link")}>
                        Explore
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Services;
