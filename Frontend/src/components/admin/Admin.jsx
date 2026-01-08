import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./admin.scss";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Admin = () => {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!video) {
            alert("Please select a video file");
            return;
        }

        const maxSize = 100 * 1024 * 1024;
        if (video.size > maxSize) {
            alert("Video file is too large. Maximum size is 100MB");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("link", link);
        formData.append("video", video);

        try {
            setLoading(true);
            setUploadProgress(0);

            await axios.post(
                `${API_BASE_URL}/api/works`,
                formData,
                {
                    withCredentials: true,
                    timeout: 600000,
                    onUploadProgress: (progressEvent) => {
                        if (!progressEvent.total) return;
                        const percentCompleted = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                        setUploadProgress(percentCompleted);
                    },
                }
            );

            alert("Work added successfully!");
            setTitle("");
            setLink("");
            setVideo(null);
            setUploadProgress(0);
            e.target.reset();

        } catch (err) {
            console.error("Upload error:", err);
            alert("Upload failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin">
            <div className="admin-card">
                <h1>Admin Panel</h1>
                <p>Upload a new project video</p>

                <button
                    type="button"
                    className="admin-nav-btn"
                    onClick={() => navigate("/admin/featured")}
                >
                    Manage Featured Projects
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

                    <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => setVideo(e.target.files[0])}
                        required
                        disabled={loading}
                    />

                    {video && (
                        <p style={{ fontSize: "14px", color: "#666" }}>
                            Selected: {video.name} ({(video.size / (1024 * 1024)).toFixed(2)} MB)
                        </p>
                    )}

                    <input
                        type="text"
                        placeholder="Project Link"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        required
                        disabled={loading}
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? `Uploading... ${uploadProgress}%` : "Add Work"}
                    </button>

                    {loading && (
                        <div className="progress">
                            <span style={{ width: `${uploadProgress}%` }} />
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Admin;
