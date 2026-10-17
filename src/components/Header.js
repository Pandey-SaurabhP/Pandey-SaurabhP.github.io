import React from 'react';
import './header.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import me from '../img/me.png';

export default function Header() {
    return (
        <header className="header-container">
            <div className="header-main-content">
                <div className="header-text-content">
                    <p className="header-eyebrow">SOFTWARE ENGINEER · PROBLEM SOLVER</p>
                    <h1 className="header-intro">Saurabh<br /><em>Pandey.</em></h1>
                    <p className="header-description">Building thoughtful software.<br />Driven by curiosity and impact.</p>
                    <div className="social-icons">
                        <a href="mailto:saurabhpandey59373@gmail.com" className="social-link contact-item" aria-label="Email" title="Email"><FaEnvelope /></a>
                        <a href="https://www.linkedin.com/in/pandey-saurabh/" className="social-link contact-item" aria-label="LinkedIn" title="LinkedIn"><FaLinkedin /></a>
                        <a href="https://github.com/Pandey-SaurabhP" className="social-link contact-item" aria-label="GitHub" title="GitHub"><FaGithub /></a>
                    </div>
                </div>
                <div className="header-photo-frame"><img src={me} className="header-image-new" alt="Saurabh Pandey" width="615" height="615" /><span>THE PERSON BEHIND THE CODE</span></div>
            </div>
        </header>
    );
}
