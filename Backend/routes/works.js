import express from "express";
import upload from "../config/multer.js";
import Work from "../models/work.js";

const router = express.Router();

// Upload video with better error handling
router.post("/", upload.single("video"), async (req, res) => {
    try {
        // Check if file was uploaded
        if (!req.file) {
            return res.status(400).json({
                error: "No video file uploaded"
            });
        }

        // Check if required fields are present
        if (!req.body.title || !req.body.link) {
            return res.status(400).json({
                error: "Title and link are required"
            });
        }

        const newWork = new Work({
            title: req.body.title,
            link: req.body.link,
            src: req.file.path, // Cloudinary MP4 URL
        });

        await newWork.save();
        res.status(201).json(newWork);
    } catch (err) {
        console.error("Upload error:", err);
        res.status(500).json({
            error: err.message || "Failed to upload video"
        });
    }
});

// Get all videos
router.get("/", async (req, res) => {
    try {
        const works = await Work.find().sort({ _id: -1 }); // Latest first
        res.json(works);
    } catch (err) {
        console.error("Fetch error:", err);
        res.status(500).json({
            error: "Failed to fetch videos"
        });
    }
});

export default router;