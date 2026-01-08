import mongoose from "mongoose";

const FeaturedProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    video: String,   // Cloudinary MP4 URL
    demoLink: String,
}, { timestamps: true });

export default mongoose.model("FeaturedProject", FeaturedProjectSchema);
