import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <motion.div
                className="footer-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Left Section */}
                <div className="footer-left">
                    <h2>RITAM</h2>
                    <p>Crafting visuals that tell your story.</p>
                </div>

                {/* Center Section — Links */}
                <div className="footer-center">
                    <ul>
                        <li><a href="#HomePage">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Best Works</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>

                    </ul>
                </div>

                {/* Right Section — Socials */}
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

            {/* Bottom Copyright */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} ANKUSH. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
