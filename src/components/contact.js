import React, { useState } from "react";
import "./contact.css";
import HeadingBar from "./HeadingBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        axios
            .post(
                "https://messageserver-jxis.onrender.com/save-message",
                formData
            )
            .then((response) => {
                alert("Message Sent Successful!");
            })
            .catch((error) => {
                alert("Failed to send message");
            });
    };

    return (
        <>
            <HeadingBar text="CONTACT" />

            <div className="main-container">
                <div className="contact-section">
                    <form className="message-form" onSubmit={handleSubmit}>
                        <div className="form-heading">
                            <FontAwesomeIcon
                                icon={faPaperPlane}
                                style={{
                                    color: "#58696d",
                                    fontSize: "18px",
                                    marginRight: "4px",
                                }}
                            />{" "}
                            DROP A MESSAGE
                        </div>
                        <p className="form-description">
                            It would be my pleasure to hear from you.
                            <br /> I'll try to get back as soon as possible.
                        </p>
                        <br />

                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>

                    <div className="contact-info">
                        <p className="info-heading">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                style={{
                                    color: "#58696d",
                                    fontSize: "18px",
                                    marginRight: "4px",
                                }}
                            />{" "}
                            CONTACT INFO
                        </p>
                        <div className="info-description">
                            <strong>Phone:</strong> +91 9026112038
                        </div>
                        <div className="info-description">
                            <strong>Email:</strong>{" "}saurabhpandey59373@gmail.com
                        </div>
                        <div className="info-description">
                            <strong>Home:</strong> Indira Nagar, Lucknow
                        </div>
                        <div className="info-description">
                            <strong>College:</strong> Jaypee Institute of
                            Information Technology
                        </div>

                        <iframe
                            className="map-view"
                            title="Google Maps - Jaypee Institute of Information Technology"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.68594246444!2d77.36284727495253!3d28.51909518922392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce63ce7fae835%3A0x5714a74a5abdf3e6!2sJaypee%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1702534101930!5m2!1sen!2sin"
                            width="325"
                            height="300"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <br />
                <script
                    type="text/javascript"
                    src="https://www.freevisitorcounters.com/auth.php?id=dbd4b3a30b9de676359dffc28f08bbf6de23598d"
                ></script>
                <script
                    type="text/javascript"
                    src="https://www.freevisitorcounters.com/en/home/counter/1205076/t/3"
                ></script>
            </div>
        </>
    );
}

export default ContactUs;
