// Utils
import { useState } from "react";
import { User, Mail, MessageCircle, Send } from "react-feather";

// Assets
import styles from "./contactUs.module.css";

// Components
import { Navbar } from "../Global/Navbar/Navbar";

export default function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendMail = function (event) {
        event.preventDefault();

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <>
            <Navbar />

            <section className={styles.container}>
                <h1 className={styles.heading}>Contact Us</h1>

                <form onSubmit={sendMail} className={styles.form}>
                    <div className={styles.field}>
                        <div className={styles.svg_wrapper}>
                            <User />
                        </div>
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            className={styles.entry}
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <div className={styles.field}>
                        <div className={styles.svg_wrapper}>
                            <Mail />
                        </div>
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            className={styles.entry}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <div className={`${styles.field} ${styles.message}`}>
                        <div className={styles.svg_wrapper}>
                            <MessageCircle />
                        </div>
                        <textarea
                            rows="5"
                            name="message"
                            placeholder="Your Message"
                            className={styles.entry}
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                            required></textarea>
                    </div>
                    <button type="submit" className={styles.btn}>
                        <span className={styles.text}>Send Mail</span>
                        <div className={styles.svg_wrapper}>
                            <Send />
                        </div>
                    </button>
                </form>
            </section>
        </>
    );
}
