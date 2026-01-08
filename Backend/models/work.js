import mongoose from "mongoose";

const WorkSchema = new mongoose.Schema({
    title: String,
    link: String,
    src: String, // MP4 URL
});

export default mongoose.model("Work", WorkSchema);
