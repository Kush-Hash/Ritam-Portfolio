import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./preloader.scss";

const Preloader = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setShow(false), 2500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
                >
                    <div className="preloader-content">
                        <div className="geometry">
                            {/* Layered symmetric shapes */}
                            <div className="outer-circle"></div>
                            <div className="middle-circle"></div>
                            <div className="inner-circle"></div>
                            <div className="outer-square"></div>
                            <div className="inner-square"></div>
                            <div className="diamond"></div>

                            {/* diagonal lines */}
                            <div className="line diag1"></div>
                            <div className="line diag2"></div>
                            <div className="line horiz1"></div>
                            <div className="line horiz2"></div>
                            <div className="line vert1"></div>
                            <div className="line vert2"></div>

                            {/* decorative triangles */}
                            <div className="triangle top"></div>
                            <div className="triangle bottom"></div>
                            <div className="triangle left"></div>
                            <div className="triangle right"></div>

                            {/* text core */}
                            <div className="text">R I T A M</div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
