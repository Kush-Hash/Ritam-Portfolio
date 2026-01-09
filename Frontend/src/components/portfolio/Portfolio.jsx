import { useRef, useEffect, useState } from "react";
import "./portfolio.scss";
import axios from "axios";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Single = ({ item, index }) => {
    const sectionRef = useRef();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    return (
        <section className="portfolio-section" ref={sectionRef}>
            <div className="container">
                <div className={`wrapper ${index % 2 !== 0 ? "reversed" : ""}`}>

                    {/* 🎥 VIDEO WITH HOVER SOUND */}
                    <motion.div className="video-container" style={{ scale }}>
                        <video
                            src={item.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls
                            className="video"
                            onMouseEnter={(e) => (e.currentTarget.muted = false)}
                            onMouseLeave={(e) => (e.currentTarget.muted = true)}
                        />
                    </motion.div>

                    <motion.div className="textContainer" style={{ y }}>
                        <motion.h1 className="parallaxTitle" style={{ x }}>
                            {item.title.repeat(3)}
                        </motion.h1>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button onClick={() => window.open(item.demoLink, "_blank")}>
                            See Demo
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();
    const [items, setItems] = useState([]);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_BASE_URL}/api/featured`)
            .then((res) => {
                setItems(res.data.slice(0, 3));
            })
            .catch((err) => console.error("Featured fetch error:", err));
    }, []);

    return (
        <div className="Portfolio" id="portfolio" ref={ref}>
            <div className="progress">
                <h1>BEST WORKS</h1>
                <motion.div style={{ scaleX }} className="progressBar" />
            </div>

            {items.map((item, index) => (
                <Single item={item} key={item._id} index={index} />
            ))}
        </div>
    );
};

export default Portfolio;
