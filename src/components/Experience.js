import React from "react";
import googleLogo from "../img/google.webp";
import zomatoLogo from "../img/zomatoLogo.png";
import tleLogo from "../img/tle.jpg";
import HeadingBar from "./HeadingBar";
import "./about.css";

function Experience() {
    return (
        <div className="about-main">
            <HeadingBar text="EXPERIENCE" />
            <div className="about-section">
                <div className="experience-list">
                    <div className="experience-item">
                        <img src={zomatoLogo} alt="Zomato Logo" className="experience-logo" />
                        <div className="experience-details">
                            <div className="experience-header">
                                <div className="experience-role">SDE Intern @ Zomato</div>
                                <div className="experience-duration">Oct 2025 - Present</div>
                            </div>
                            <ul className="experience-work">
                                <li>Working as part of the <strong>Catalog team</strong> responsible for the menu experience of both merchants and consumers.</li>
                                <li>Built a <strong>real-time WhatsApp & Email notification system</strong> to alert restaurant partners during menu replications.</li>
                                <li>Engineered backend services for a <strong>menu recommendation feature</strong>, enabling price optimization options for partner restaurants. Now scaled to <strong>more than a million restaurant partners</strong> worldwide.</li>
                                <li>Automated a four-step image enhancement process down to a single step, saving significant manual effort.</li>
                                <li>Developed a bulk processing feature that can enhance up to <strong>50,000 food images</strong> in one go.</li>
                                <li>Migrated several APIs from PHP to <strong>Golang</strong> to improve performance and keep the codebase consistent.</li>
                                <li>Built a system that lets merchants request professional photoshoots for their menu items based on their city.</li>
                                <li><strong>Tech Stack</strong>: Golang, DynamoDB, Redis, Kafka, SQS, Datadog, Grafana.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-item">
                        <img src={googleLogo} alt="Google Logo" className="experience-logo" />
                        <div className="experience-details">
                            <div className="experience-header">
                                <div className="experience-role">SWE Intern @ Google</div>
                                <div className="experience-duration">May 2025 - Aug 2025</div>
                            </div>
                            <ul className="experience-work">
                                <li>Part of the <strong>GCP Looker and AI Services</strong> team.</li>
                                <li>Proposed and implemented a solution for a bidirectional pagination system in the Looker platform, improving page load time by more than <strong>90%</strong>.</li>
                                <li>Utilized token-based pagination to enhance performance and consistency, and introduced a tiebreaker mechanism to ensure accurate navigation in the presence of duplicates.</li>
                                <li>Developed an additional feature from scratch to import schedules from Looker Studio Pro to Looker, achieving a load time of <strong>less than 1s</strong>.</li>
                                <li><strong>Tech Stack</strong> : Java, Spanner, FluentSQL, JUnit4, and Mockito</li>
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

export default Experience;
