import React from "react";
import "./contact.css";
import HeadingBar from "./HeadingBar";

function ContactUs() {
    return (
        <>
            <HeadingBar text="CONTACT" />

            <div className="main-container">
                <div className="contact-section">
                    <div className="contact-info">

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
