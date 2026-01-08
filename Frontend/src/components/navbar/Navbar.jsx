import "./navbar.scss";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Shuffle from './Shuffle.jsx';

const Navbar = () => {
    const location = useLocation();
    const isWorksPage = location.pathname === "/works";

    return (
        <div className="navbar">
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={isWorksPage ? "black-text" : ""}
                >
                    <Link to="/" className="logo-link">
                        <Shuffle
                            text="Ritam"
                            shuffleDirection="right"
                            duration={0.35}
                            animationMode="evenodd"
                            shuffleTimes={1}
                            ease="power3.out"
                            stagger={0.03}
                            threshold={0.1}
                            triggerOnce={true}
                            triggerOnHover={true}
                            respectReducedMotion={true}
                        />
                    </Link>
                </motion.span>

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
    );
};

export default Navbar;
