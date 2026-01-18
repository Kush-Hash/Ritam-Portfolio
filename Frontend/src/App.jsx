import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./app.scss";

import Sidebar from "./components/sidebar/Sidebar";
import Preloader from "./components/preloader/Preloader";
import Contact from "./components/contact/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Admin from "./components/admin/Admin";
import AdminFeatured from "./components/admin/AdminFeatured";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorScale, setCursorScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const hoverSoundRef = useRef(null);

  // ✅ Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ Preloader timer (visual only)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Unlock audio on first interaction
  useEffect(() => {
    const enableSound = () => {
      if (hoverSoundRef.current) {
        hoverSoundRef.current
          .play()
          .then(() => {
            hoverSoundRef.current.pause();
            hoverSoundRef.current.currentTime = 0;
          })
          .catch(() => { });
      }
      window.removeEventListener("click", enableSound);
      window.removeEventListener("mousemove", enableSound);
      window.removeEventListener("keydown", enableSound);
    };

    window.addEventListener("click", enableSound);
    window.addEventListener("mousemove", enableSound);
    window.addEventListener("keydown", enableSound);

    return () => {
      window.removeEventListener("click", enableSound);
      window.removeEventListener("mousemove", enableSound);
      window.removeEventListener("keydown", enableSound);
    };
  }, []);

  // ✅ Cursor tracking
  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e) =>
      setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  // ✅ Hover sound (buttons & links)
  useEffect(() => {
    if (isMobile) return;

    const handleMouseOver = (e) => {
      if (["BUTTON", "A"].includes(e.target.tagName)) {
        if (hoverSoundRef.current) {
          const clone = hoverSoundRef.current.cloneNode();
          clone.volume = 0.5;
          clone.play().catch(() => { });
        }
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, [isMobile]);

  // ✅ Hover scaling (images & videos)
  useEffect(() => {
    if (isMobile) return;

    const handleMouseOver = (e) => {
      if (["IMG", "VIDEO"].includes(e.target.tagName)) {
        setCursorScale(2.5);
      }
    };

    const handleMouseOut = (e) => {
      if (["IMG", "VIDEO"].includes(e.target.tagName)) {
        setCursorScale(1);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isMobile]);

  return (
    <>
      {/* 🎵 Hidden Audio */}
      <audio ref={hoverSoundRef} src="/click.mp3" preload="auto" />

      <Sidebar />
      <Navbar />

      {/* ✅ Preloader (visual only) */}
      <Preloader isLoading={isLoading} />

      {/* ✅ App content is ALWAYS mounted */}
      <motion.div
        key={location.pathname}
        style={{
          visibility: isLoading ? "hidden" : "visible",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {!isMobile && (
          <button className="connectBtn" onClick={() => navigate("/contact")}>
            Hire Me
          </button>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/featured" element={<AdminFeatured />} />
        </Routes>

        <Footer />
      </motion.div>

      {/* ✅ Custom Cursor */}
      {!isMobile && (
        <div
          className="custom-cursor"
          style={{
            transform: `translate(${cursorPos.x - 10}px, ${cursorPos.y - 10
              }px) scale(${cursorScale})`,
            transition: "transform 0s, scale 0.25s ease-out",
          }}
        />
      )}
    </>
  );
};

export default App;
