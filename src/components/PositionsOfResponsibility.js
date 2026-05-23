import React from "react";
import HeadingBar from "./HeadingBar";
import "./about.css";
import rphLogo from "../img/RPH.jpg";
import tleLogo from "../img/tle.jpg";

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
                    <div className="experience-item">
                        <img src={tleLogo} alt="TLE Eliminators Logo" className="experience-logo" />
                        <div className="experience-details">
                            <div className="experience-header">
                                <div className="experience-role">Problem Setter Intern @ TLE Eliminators</div>
                                <div className="experience-duration">Aug 2024 - Nov 2024</div>
                            </div>
                            <ul className="experience-work">
                                <li>Resolved <strong>more than 150 doubts</strong> in Competitive Programming, ensuring students received AC verdicts on their problems.</li>
                                <li>Worked very closely with students on their challenges, providing 1-on-1 mentorship until they fully understood the concepts.</li>
                                <li><strong>Tech Stack</strong> : C++, Python</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PositionsOfResponsibility;
