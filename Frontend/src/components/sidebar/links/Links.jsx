import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const variants = {
    open: { transition: { staggerChildren: 0.1 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
};

const itemVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: 50, opacity: 0 }
};

const Links = ({ setOpen }) => { // ✅ Accept setOpen prop
    const navigate = useNavigate();

    const items = [
        "Home",
        "About",
        "Portfolio",
        "Services",
        "Works",
        "Contact"
    ];

    const handleClick = (item) => {
        const lowerItem = item.toLowerCase();

        // Contact page
        if (item === "Contact") {
            navigate("/contact");
        }

        // Works page
        else if (item === "Works") {
            navigate("/works");
        }

        // Home (go only to "/")
        else if (item === "Home") {
            navigate("/");
        }

        // All section-based navigation (Gallery, About, Services, etc.)
        else {
            const targetId = lowerItem;

            if (window.location.pathname !== "/") {
                // First go to home, then scroll
                navigate(`/#${targetId}`);
            } else {
                // Already on home, just scroll
                const section = document.getElementById(targetId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }
        }

        // ✅ Close sidebar (mobile)
        if (window.innerWidth <= 768) {
            setTimeout(() => setOpen(false), 300);
        }
    };

    return (
        <motion.div className="links" variants={variants}>
            {items.map(item => (
                <motion.a
                    key={item}
                    onClick={() => handleClick(item)}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ cursor: "pointer" }}
                >
                    {item}
                </motion.a>
            ))}
        </motion.div>
    );
};

export default Links;
