import "./navbar.scss";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Shuffle from "./Shuffle.jsx";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogoClick = () => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document
                    .getElementById("hero")
                    ?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="navbar">
            <div className="nav-wrapper">
                {/* LOGO */}
                <motion.span
                    onClick={handleLogoClick}
                    style={{ cursor: "pointer" }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Shuffle
                        text="Ritam"
                        shuffleDirection="right"
                        duration={0.35}
                        animationMode="evenodd"
                        shuffleTimes={1}
                        ease="power3.out"
                        stagger={0.03}
                        triggerOnce
                        triggerOnHover
                        respectReducedMotion
                    />
                </motion.span>

                {/* RIGHT SIDE */}
                <div className="nav-right">
                    {/* PROJECTS LINK */}
                    <Link to="/projects" className="works-link">
                        Projects
                    </Link>

                    {/* SOCIAL ICONS */}
                    <div className="social">
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
            </div>
        </div>
    );
};

export default Navbar;
