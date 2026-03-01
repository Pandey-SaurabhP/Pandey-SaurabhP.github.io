import React from "react";
import HeadingBar from "./HeadingBar";
import "./about.css";
import jiitLogo from "../img/jiit_logo.png";

function Education() {
    return (
        <div className="about-main">
            <HeadingBar text="EDUCATION" />
            <div className="about-section">
                <div className="experience-list">
                    <div className="experience-item">
                        <img src={jiitLogo} alt="JIIT Logo" className="experience-logo" />
                        <div className="experience-details">
                            <div className="experience-header">
                                <div className="experience-role">Jaypee Institute of Information Technology (JIIT), Noida</div>
                                <div className="experience-duration">Nov 2022 - June 2026</div>
                            </div>
                            <div className="experience-role" style={{ marginTop: "4px" }}>
                                Bachelor of Technology in Computer Science and Engineering
                            </div>
                            <div style={{ marginTop: "6px", fontSize: "12px", color: "#333", lineHeight: "1.4" }}>
                                Data Structures and Algorithms, Object-Oriented Programming, Operating Systems, 
                                Computer Networks, Database Management Systems, Software Engineering, Digital Systems, 
                                Computer Organization and Architecture, Foundations of Machine Learning, 
                                Introduction to Devops, Information Retrieval and Semantic Web
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
