import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./works.scss";

const Works = () => {
    const navigate = useNavigate();
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWorks = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_API_BASE_URL}/api/works`,
                    { withCredentials: true }
                );
                setVideos(res.data);
            } catch (err) {
                console.error("Failed to fetch works:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchWorks();
    }, []);

    return (
        <div className="works">
            <div className="wrapper">

                <div className="text-section">
                    <div className="text-left">
                        <h2>Where vision meets the frame</h2>
                        <h1>Bringing stories to life, one frame at a time</h1>
                        <p>Every frame tells a story.</p>
                    </div>

                    <div className="text-right">
                        <button onClick={() => navigate("/contact")}>
                            Get in Touch
                        </button>
                    </div>
                </div>

                <div className="video-grid">
                    {loading && <p>Loading works...</p>}

                    {!loading && videos.length === 0 && (
                        <p>No projects uploaded yet.</p>
                    )}

                    {videos.map((video) => (
                        <a
                            key={video._id}
                            href={video.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="video-card"
                        >
                            <video
                                src={video.src}
                                muted
                                loop
                                preload="metadata"
                                playsInline
                                onMouseEnter={(e) => e.currentTarget.play()}
                                onMouseLeave={(e) => e.currentTarget.pause()}
                            />
                            <div className="title">{video.title}</div>
                        </a>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Works;
