import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./admin.scss";

const AdminFeatured = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [demoLink, setDemoLink] = useState("");
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!video) {
            alert("Please select a video");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("demoLink", demoLink);
        formData.append("video", video);

        try {
            setLoading(true);
            setProgress(0);

            await axios.post(
                "http://localhost:5000/api/featured",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    timeout: 600000,
                    onUploadProgress: (e) => {
                        if (e.total) {
                            setProgress(Math.round((e.loaded * 100) / e.total));
                        }
                    },
                }
            );

            alert("Featured project uploaded successfully");

            setTitle("");
            setDescription("");
            setDemoLink("");
            setVideo(null);
            setProgress(0);
            e.target.reset();
        } catch (err) {
            console.error("Featured upload error:", err);
            alert("Upload failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin">
            <div className="admin-card">
                <h1>Featured Projects</h1>
                <p>These appear on the Home page (max 3 recommended)</p>

                {/* 🔙 Back button */}
                <button
                    type="button"
                    className="admin-nav-btn"
                    onClick={() => navigate("/admin")}
                >
                    ← Back to Admin Panel
                </button>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Project Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        disabled={loading}
                    />

                    <textarea
                        placeholder="Project Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        disabled={loading}
                    />

                    <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => setVideo(e.target.files[0])}
                        required
                        disabled={loading}
                    />

                    <input
                        type="text"
                        placeholder="Demo Link (Google Drive / Live link)"
                        value={demoLink}
                        onChange={(e) => setDemoLink(e.target.value)}
                        required
                        disabled={loading}
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? `Uploading ${progress}%` : "Add Featured Project"}
                    </button>

                    {loading && (
                        <div className="progress">
                            <span style={{ width: `${progress}%` }} />
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AdminFeatured;
