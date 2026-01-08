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
        "HomePage",
        "Gallery",
        "About",
        "Portfolio",
        "Services",
        "Works",
        "Contact"
    ];

    const handleClick = (item) => {
        if (item === "Contact") {
            navigate("/contact");
        } else if (item === "Works") {
            navigate("/works");
        } else {
            const targetId = item.toLowerCase();
            if (window.location.pathname === "/") {
                const section = document.getElementById(targetId);
                if (section) section.scrollIntoView({ behavior: "smooth" });
            } else {
                navigate(`/#${targetId}`);
            }
        }

        // ✅ Close sidebar automatically (especially for mobile)
        if (window.innerWidth <= 768) {
            setTimeout(() => setOpen(false), 300); // small delay for smoother UX
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
