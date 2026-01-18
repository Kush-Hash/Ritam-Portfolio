import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    formRef.current.reset();
                    setLoading(false);
                },
                (error) => {
                    console.error(error);
                    alert("Failed to send message. Try again.");
                    setLoading(false);
                }
            );
    };

    return (
        <section className="contact">
            <div className="contact-inner">
                {/* LEFT */}
                <div className="left">
                    <h1 className="title">
                        Let’s <span>Talk</span>
                    </h1>

                    <p className="intro">
                        Feel free to reach out for projects,
                        collaborations or just a simple hello.
                    </p>

                    <div className="details">
                        <p><span>Email</span> : ritammondal738@gmail.com</p>
                        <p><span>Address</span> : Kalyani, Nadia</p>
                        <p><span>Phone</span> : +91 6290683175</p>
                    </div>
                </div>

                {/* RIGHT */}
                <form ref={formRef} className="form" onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="tel" name="phone" placeholder="Phone" />
                    <textarea name="message" placeholder="Message" rows="4" required />

                    <button type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Submit"}
                    </button>
                </form>
            </div>

            {/* subtle lines */}
            <div className="lines">
                <span />
                <span />
            </div>
        </section>
    );
};

export default Contact;
