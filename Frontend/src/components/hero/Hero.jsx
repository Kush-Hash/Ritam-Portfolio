import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./hero.scss";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            className="hero"
            id="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
        >
            {/* Background Video */}
            <motion.video
                className="backgroundVideo"
                src="https://res.cloudinary.com/dwnoyi7gc/video/upload/q_auto,f_auto/hero2_kpdtfx.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
            />

            {/* Left Content Only */}
            <div className="heroContent">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Every Minute an Impact
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    Crafting Visual Stories That Inspire.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    As a dynamic video studio agency, we craft high-quality content
                    that engages, inspires, and leaves a lasting impression.
                </motion.p>

                <motion.div
                    className="buttons"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <button
                        className="primary"
                        onClick={() => navigate("/contact")}
                    >
                        Get in Touch
                    </button>
                    <button
                        className="secondary"
                        onClick={() =>
                            document
                                .getElementById("about")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        About Me
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Hero;
