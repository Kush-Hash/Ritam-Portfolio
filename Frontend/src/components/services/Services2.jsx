import { useRef } from "react";
import "./services2.scss";
import { motion, useInView } from "framer-motion";

const Services2 = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-300px" });

    const works = [
        { id: 1, title: "Video Block 1", src: "/file.mp4" },
        { id: 2, title: "Video Block 2", src: "/file2.mp4" },
        { id: 3, title: "Video Block 3", src: "/file3.mp4" },
        { id: 4, title: "Video Block 4", src: "/file4.mp4" },
        { id: 5, title: "Video Block 5", src: "/file5.mp4" },
    ];

    // Unified smooth animation settings
    const smoothTransition = {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier ease
    };

    // Variants
    const fadeInLeft = {
        initial: { opacity: 0, x: -150 },
        animate: { opacity: 1, x: 0, transition: smoothTransition },
    };

    const fadeInBottom = {
        initial: { opacity: 0, y: 150 },
        animate: { opacity: 1, y: 0, transition: smoothTransition },
    };

    const fadeInRight = {
        initial: { opacity: 0, x: 150 },
        animate: { opacity: 1, x: 0, transition: smoothTransition },
    };

    const fadeInCenter = {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1, transition: { ...smoothTransition, duration: 1.5 } },
    };

    return (
        <motion.div className="services2" ref={ref}>
            <motion.div
                className="gridContainer"
                initial="initial"
                animate={isInView ? "animate" : "initial"}
            >
                <motion.div className="gridItem item1" variants={fadeInLeft}>
                    <video src={works[0].src} autoPlay loop muted playsInline />
                </motion.div>

                <motion.div className="gridItem item2" variants={fadeInBottom}>
                    <video src={works[1].src} autoPlay loop muted playsInline />
                </motion.div>

                <motion.div className="gridItem item3" variants={fadeInRight}>
                    <video src={works[2].src} autoPlay loop muted playsInline />
                </motion.div>

                <motion.div className="gridItem item4" variants={fadeInBottom}>
                    <video src={works[3].src} autoPlay loop muted playsInline />
                </motion.div>

                <motion.div className="gridItem centerText" variants={fadeInCenter}>
                    <h1>CAPTURED IN MOTION.</h1>
                </motion.div>

                <motion.div className="gridItem item5" variants={fadeInRight}>
                    <video src={works[4].src} autoPlay loop muted playsInline />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services2;
