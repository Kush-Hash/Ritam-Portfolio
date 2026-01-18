import { motion } from "framer-motion";
import "./gallery.scss";
import { useNavigate } from "react-router-dom";

const data = [
    {
        src: "https://res.cloudinary.com/dwnoyi7gc/video/upload/q_auto,f_auto/reel1_puqua7.mp4",
        title: "Whispers of Mind",
    },
    {
        src: "https://res.cloudinary.com/dwnoyi7gc/video/upload/q_auto,f_auto/reel2_ye22pm.mp4",
        title: "Embracing Yourself",
    },
    {
        src: "https://res.cloudinary.com/dwnoyi7gc/video/upload/q_auto,f_auto/reel3_qq5wlb.mp4",
        title: "Creative Block",
    },
    {
        src: "https://res.cloudinary.com/dwnoyi7gc/video/upload/q_auto,f_auto/reel4_x7riok.mp4",
        title: "Chasing the Dream",
    },
];


export default function Gallery() {
    const navigate = useNavigate();

    return (
        <div className="main-container">
            {/* Intro Section */}
            <div className="intro">
                <div className="intro-left">
                    <h1>
                        As a creative video editor, I specialize in crafting
                        visually compelling content that speaks to the heart and sparks emotion.
                    </h1>
                    <p>
                        My passion lies in capturing the essence of every brand, idea, or vision
                        and transforming it into powerful narratives that resonate with audiences.
                    </p>
                    <button onClick={() => navigate("/works")}>
                        See my Videos
                    </button>
                </div>

                <div className="intro-right">
                    <div className="intro-list">
                        <div><span>01.</span> Creativity Without Limits</div>
                        <div><span>02.</span> Authentic Storytelling</div>
                        <div><span>03.</span> Excellence in Every Frame</div>
                        <div><span>04.</span> Passion-Driven Work</div>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="gallery">
                {data.map((item, i) => (
                    <motion.div
                        className="card"
                        key={i}
                        style={{
                            rotate: i % 2 === 0 ? -3 : 3,
                            zIndex: data.length - i,
                        }}
                    >
                        <video
                            src={item.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            loading="lazy"
                            controls={false}
                            disablePictureInPicture
                        />
                        <p>{item.title}</p>
                    </motion.div>
                ))}
            </div>

        </div>
    );
}
