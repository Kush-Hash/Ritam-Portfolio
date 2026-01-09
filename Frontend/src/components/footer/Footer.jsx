import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
    const navigate = useNavigate();

    const handleNavClick = (sectionId) => {
        navigate("/");

        setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    return (
        <footer className="footer">
            <motion.div
                className="footer-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Left */}
                <div className="footer-left">
                    <h2>RITAM</h2>
                    <p>Crafting visuals that tell your story.</p>
                </div>

                {/* Center */}
                <div className="footer-center">
                    <ul>
                        <li>
                            <button onClick={() => handleNavClick("hero")}>
                                Home
                            </button>
                        </li>

                        <li>
                            <button onClick={() => handleNavClick("about")}>
                                About
                            </button>
                        </li>

                        <li>
                            <button onClick={() => navigate("/projects")}>
                                Projects
                            </button>
                        </li>

                        <li>
                            <button onClick={() => handleNavClick("services")}>
                                Services
                            </button>
                        </li>

                        <li>
                            <button onClick={() => navigate("/contact")}>
                                Contact Me
                            </button>
                        </li>

                        <li>
                            <button onClick={() => navigate("/admin")}>
                                Admin
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Right */}
                <div className="footer-right">
                    <p>Follow Me</p>
                    <div className="social-icons">
                        <a
                            href="https://www.instagram.com/anotherittam"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/instagram.png" alt="Instagram" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ritam-mondal-04951134b"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/linkedin.png" alt="LinkedIn" />
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Bottom */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} ANKUSH. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
