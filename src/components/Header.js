import React from "react";
import "./Header.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import me from "../img/me.png";

function Header() {
    return (
        <div className="header-container">
            <img src={me} className="header-image" alt="Me" />

            <div className="header-details">
                <div className="intro-text">
                    <p>Hi there...Myself Saurabh Pandey, aka @pandeygrocks</p>
                    <p>I socialize on...</p>
                    <br />
                </div>
                <div className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/pandey-saurabh/"
                        className="social-link"
                    >
                        <FaLinkedin className="social-icon" alt="LinkedIn" style={{ color: '#0077b5' }} />
                    </a>
                    <a
                        href="https://github.com/Pandey-SaurabhP"
                        className="social-link"
                    >
                        <FaGithub className="social-icon" alt="GitHub" style={{ color: '#333' }} />
                    </a>
                    <a
                        href="https://twitter.com/SaurabhPan21446"
                        className="social-link"
                    >
                        <FaTwitter className="social-icon" alt="Twitter" style={{ color: '#1da1f2' }} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
