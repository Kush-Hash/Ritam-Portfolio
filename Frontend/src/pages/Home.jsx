import React, { useState, useEffect } from "react";
import Hero from "../components/hero/Hero";
import Gallery from "../components/gallery/Gallery";
import Services from "../components/services/Services";
import Filler from "../components/filler/Filler";
import DomeGallery from "../components/domeGallery/DomeGallery";
import Portfolio from "../components/portfolio/Portfolio";
import About from "../components/about/About";

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <>
            <section id="HomePage"><Hero /></section>
            <section className="gallery-section" id="gallery"><Gallery /></section>
            <section className="about-section" id="about"><About /></section>
            <section className="filler-Section"><Filler /></section>
            <Portfolio />
            <section className="service1" id="services"><Services /></section>


            {/* ✅ Only show Services2 on desktop */}
            {!isMobile && (
                <div style={{ width: '100%', height: '110vh', marginBottom: '50px' }}>
                    <DomeGallery
                        fit={1}
                        minRadius={1000}
                        maxVerticalRotationDeg={10}
                        dragDampening={10}
                    />
                </div>
            )}
        </>
    );
}
