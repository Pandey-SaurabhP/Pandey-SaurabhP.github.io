import React from "react";
import "./header.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import me from "../img/me.png";

function Header() {
    return (
        <div className="header-container">
            <div className="header-main-content">
                <img src={me} className="header-image-new" alt="Me" />
                <div className="header-text-content">
                    <h1 className="header-intro">
                        Hi, myself <strong>Saurabh Pandey</strong> <br />
                        and I socialize on ...<br />
                    </h1>
                    <div className="social-icons">
                        <a href="mailto:saurabhpandey59373@gmail.com" className="social-link contact-item" title="Email">
                            <FaEnvelope className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/pandey-saurabh/" className="social-link contact-item" title="LinkedIn">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://github.com/Pandey-SaurabhP" className="social-link contact-item" title="GitHub">
                            <FaGithub className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
            <hr className="header-divider" />
        </div>
    );
}

export default Header;
