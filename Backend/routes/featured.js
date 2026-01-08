import express from "express";
import upload from "../config/multer.js";
import FeaturedProject from "../models/FeaturedProject.js";

const router = express.Router();

// add featured project (max 3)
router.post("/", upload.single("video"), async (req, res) => {
    try {
        const count = await FeaturedProject.countDocuments();
        if (count >= 3) {
            return res.status(400).json({ error: "Only 3 featured projects allowed" });
        }

        const project = new FeaturedProject({
            title: req.body.title,
            description: req.body.description,
            demoLink: req.body.demoLink,
            video: req.file.path,
        });

        await project.save();
        res.status(201).json(project);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// get featured projects
router.get("/", async (req, res) => {
    const projects = await FeaturedProject.find().sort({ createdAt: -1 });
    res.json(projects);
});

export default router;
