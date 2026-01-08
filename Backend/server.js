import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import worksRoute from "./routes/works.js";
import featuredRoute from "./routes/featured.js";

dotenv.config();

const app = express();

/* ---------------- CORS (CRITICAL FIX) ---------------- */
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://ritam-portfolio-w6tt.onrender.com"
    ],
    credentials: true,
}));

/* ---------------- BODY LIMITS ---------------- */
app.use(express.json({ limit: "150mb" }));
app.use(express.urlencoded({ extended: true, limit: "150mb" }));

/* ---------------- TIMEOUTS ---------------- */
app.use((req, res, next) => {
    req.setTimeout(600000);
    res.setTimeout(600000);
    next();
});

/* ---------------- ROUTES ---------------- */
app.use("/api/works", worksRoute);
app.use("/api/featured", featuredRoute);

/* ---------------- DATABASE ---------------- */
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB error:", err));

/* ---------------- SERVER ---------------- */
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

server.timeout = 600000;
