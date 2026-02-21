import React from "react";
import HeadingBar from "./HeadingBar";
import "./about.css";
import rphLogo from "../img/RPH.jpg";

function PositionsOfResponsibility() {
    return (
        <div className="about-main">
            <HeadingBar text="POSITIONS OF RESPONSIBILITY" />
            <div className="about-section">
                <div className="experience-list">
                    <div className="experience-item">
                        {/* Placeholder for the Rapid Programming Hub Logo */}
                        <div className="experience-logo-placeholder">
                            <img src={rphLogo} alt="Rapid Programming Hub Logo" className="experience-logo" style={{ filter: "grayscale(100%)", opacity: 0.3 }} />
                        </div>
                        <div className="experience-details">
                            <div className="experience-header">
                                <div className="experience-role">Coordinator @ Rapid Programming Hub, CP Club of JIIT</div>
                                <div className="experience-duration">Jan 2023 - Present</div>
                            </div>
                            <ul className="experience-work">
                                <li>Conducted hiring drives, personally leading <strong>15+ coding interviews</strong> to select new coordinators.</li>
                                <li>Led the technical team in setting up problems and ensuring a smooth contest experience during college fests.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PositionsOfResponsibility;
