import multer from "multer";
import pkg from "multer-storage-cloudinary";
const { CloudinaryStorage } = pkg;
import cloudinary from "./cloudinary.js";

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "works",
        resource_type: "video",
        allowed_formats: ["mp4", "mov", "webm"],
        chunk_size: 6000000 // 6MB chunks for large files
    }
});

const upload = multer({
    storage,
    limits: {
        fileSize: 100 * 1024 * 1024 // 100MB max file size
    }
});

export default upload;