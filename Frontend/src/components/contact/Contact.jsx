import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const leftFade = {
    initial: { x: -80, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const rightFade = {
    initial: { x: 80, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState(""); // success / error / sending

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs
            .sendForm("service_xh3ari8", "template_vkswime", formRef.current, {
                publicKey: "H4srVxa2EWjxB5sWJ",
            })
            .then(
                () => {
                    setStatus("success");
                    formRef.current.reset(); // clear inputs
                    setTimeout(() => setStatus(""), 3000); // hide after 3s
                },
                (error) => {
                    console.error("FAILED...", error.text);
                    setStatus("error");
                    setTimeout(() => setStatus(""), 3000);
                }
            );
    };

    return (
        <motion.div
            className="contact"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Background Video */}
            <video
                className="backgroundVideo"
                src="https://res.cloudinary.com/dwnoyi7gc/video/upload/v1767890733/contact_oznkjd.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            <motion.div className="textContainer" variants={leftFade}>
                <h1>Let's Work Together</h1>
                <div className="item">
                    <h2>Mail</h2>
                    <span>ritammail@gmail.com</span>
                </div>
                <div className="item">
                    <h2>Address</h2>
                    <span>Kalyani, Nadia</span>
                </div>
                <div className="item">
                    <h2>Phone</h2>
                    <span>9145326897</span>
                </div>
            </motion.div>

            <motion.div className="formContainer" variants={rightFade}>
                <motion.form ref={formRef} onSubmit={sendEmail}>
                    <input type="text" required placeholder="Your Name" name="name" />
                    <input type="email" required placeholder="Your Email" name="email" />
                    <textarea rows={8} placeholder="Message" name="message" />
                    <button disabled={status === "sending"}>
                        {status === "sending" ? "Sending..." : "Submit"}
                    </button>
                </motion.form>

                {/* Status Message */}
                {status === "success" && (
                    <motion.p
                        className="status success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        Message sent successfully!
                    </motion.p>
                )}
                {status === "error" && (
                    <motion.p
                        className="status error"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        Failed to send. Try again!
                    </motion.p>
                )}
            </motion.div>
        </motion.div>
    );
};

export default Contact;
