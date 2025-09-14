// About.js
import React from "react";
import "./about.css";

import googleLogo from "../img/google.webp";
import tleLogo from "../img/tle.jpg";

import codechefLogo from "../img/codechef.png";
import codeforcesLogo from "../img/codeforces.png";
import leetcodeLogo from "../img/leetcode.webp";
import othersLogo from "../img/others.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGraduationCap,
    faCode,
    faTrophy,
    faTasks,
    faBriefcase, // Import the new icon for experience
} from "@fortawesome/free-solid-svg-icons";
import HeadingBar from "./HeadingBar";

function About() {
    return (
        <div>
            <HeadingBar text="ABOUT ME"> </HeadingBar>

            <div className="about-main">
                <div className="about-section">
                    <div className="section-heading">
                        <FontAwesomeIcon
                            icon={faBriefcase}
                            className="section-icon"
                        />
                        EXPERIENCE
                    </div>
                    <div className="experience-list">
                        <div className="experience-item">
                            <img
                                src={googleLogo}
                                alt="Google Logo"
                                className="experience-logo"
                            />
                            <div className="experience-details">
                                <div className="experience-header">
                                    <div className="experience-role">
                                        SWE Intern @ Google
                                    </div>
                                    <div className="experience-duration">
                                        May 2025 - Aug 2025
                                    </div>
                                </div>
                                <ul className="experience-work">
                                    <li>
                                        A part of <strong>GCP Looker and AI Services</strong> team.
                                    </li>
                                    <li>
                                        I proposed and implemented a solution for a bidirectional pagination system in the Looker platform, improving page
load time by more than <strong>90%</strong>.
                                    </li>
                                    <li>
                                        I used token-based pagination to enhance performance and consistency, and introduced a tiebreaker mechanism to
ensure accurate navigation in the presence of duplicates.
                                    </li>
                                    <li>As an additional project, I developed a feature from scratch to import schedules from Looker Studio Pro to Looker,
with a load time of <strong>less than 1s</strong>.</li>
                                    <li><strong>Tech Stack</strong> : Java, FluentSQL, Spanner, JUnit4, and Mockito</li>
                                </ul>
                            </div>
                        </div>

                        <div className="experience-item">
                            <img
                                src={tleLogo}
                                alt="TLE Eliminators Logo"
                                className="experience-logo"
                            />
                            <div className="experience-details">
                                <div className="experience-header">
                                    <div className="experience-role">
                                        Problem Setter Intern @ TLE Eliminators
                                    </div>
                                    <div className="experience-duration">
                                        Jan 2024 - April 2024
                                    </div>
                                </div>
                                <ul className="experience-work">
                                    <li>
                                        I resolved <strong>more than 150 doubts</strong> in Competitive Programming, ensuring students received AC verdicts on their problems.
                                    </li>
                                    <li>
                                        I worked very closely with students on their challenges, providing 1-on-1 mentorship until they fully understood the concepts.
                                    </li>
                                    <li>
                                        <strong>Tech Stack</strong> : C++, Python
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-section">
                    <div className="section-heading">
                        <FontAwesomeIcon
                            icon={faGraduationCap}
                            className="section-icon"
                        />
                        EDUCATION
                    </div>
                    <div className="section-content">
                        <div className="education-details">
                            <div className="education-degree">
                                Bachelor of Technology, Computer Science and
                                Engineering
                            </div>
                            <div className="experience-duration">Nov 2022 - June 2026</div>
                        </div>
                        <div className="education-institution">
                            Jaypee Institute of Information Technology (JIIT),
                            Noida
                        </div>
                    </div>
                </div>

                <div className="about-section">
                    <div className="section-heading">
                        <FontAwesomeIcon
                            icon={faTasks}
                            className="section-icon"
                        />
                        SKILLS
                    </div>
                    <div className="skills-list">
                        <div className="bullet-point">
                            <strong>Programming Languages:</strong> C/C++, Java, Python, JavaScript
                        </div>
                        <div className="bullet-point">
                            <strong>Backend:</strong> NodeJS, ExpressJS, MongoDB, MySQL, Spanner
                        </div>
                        <div className="bullet-point">
                            <strong>Frontend:</strong> ReactJS, HTML5, CSS3
                        </div>
                        <div className="bullet-point">
                            <strong>Testing/Tools:</strong> JUnit4, Mockito, Git, Linux
                        </div>
                        <div className="bullet-point">
                            <strong>CS Fundamentals:</strong> DSA, OOPS, OS, CN, System Design
                        </div>
                    </div>
                </div>

                <div className="about-section">
                    <div className="section-heading">
                        <FontAwesomeIcon
                            icon={faCode}
                            className="section-icon"
                        />
                        COMPETITIVE PROGRAMMING
                    </div>
                    <div className="cp-container">
                        <div className="cp-row">
                            <div className="cp-box">
                                <img
                                    src={codechefLogo}
                                    className="cp-logo"
                                    alt="CodeChef Logo"
                                />
                                <div className="cp-details">
                                    <a href="https://www.codechef.com/users/pandeygrocks">
                                        @pandeygrocks
                                    </a>
                                    <div className="cp-rating">
                                        <p className="rating-text">
                                            Current Rating: 2007
                                        </p>
                                        <p className="rating-star">5★</p>
                                    </div>
                                    <p>
                                        Highest rating of{" "}
                                        <strong>
                                            2041 (Top 0.5 percentile)
                                        </strong>
                                    </p>
                                    <p>
                                        Best Ranks: 24, 43, 44,... all among
                                        2000+ people
                                    </p>
                                </div>
                            </div>
                            <div className="cp-box">
                                <img
                                    src={codeforcesLogo}
                                    className="cp-logo"
                                    alt="Codeforces Logo"
                                />
                                <div className="cp-details">
                                    <a href="https://codeforces.com/profile/pandeyGRocks">
                                        @pandeyGRocks
                                    </a>
                                    <div className="cp-rating">
                                        <p className="rating-text">
                                            Current Rating: 1683
                                        </p>
                                        <p className="rating-expert">Expert</p>
                                    </div>
                                    <p>
                                        Achieved a highest rating of{" "}
                                        <strong>1702</strong>
                                    </p>
                                    <p>
                                        Among{" "}
                                        <strong>Top 800 of 80,000+</strong>{" "}
                                        people in India
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cp-row">
                            <div className="cp-box">
                                <img
                                    src={leetcodeLogo}
                                    className="cp-logo"
                                    alt="LeetCode Logo"
                                />
                                <div className="cp-details">
                                    <a href="https://leetcode.com/pandeyGRocks/">
                                        @pandeyGRocks
                                    </a>
                                    <div className="cp-rating">
                                        <p className="rating-text">
                                            Current Rating: 2064
                                        </p>
                                    </div>
                                    <p>
                                        Received the <strong>Knight</strong>{" "}
                                        batch for my performance
                                    </p>
                                    <p>
                                        Among <strong>top 2</strong>{" "}
                                        percentile people in India
                                    </p>
                                </div>
                            </div>
                            <div className="cp-box">
                                <img
                                    src={othersLogo}
                                    className="cp-logo"
                                    alt="Others Logo"
                                />
                                <div className="cp-details">
                                    <a href="https://leetcode.com/pandeyGRocks/">
                                        Hackerrank
                                    </a>
                                    <br />
                                    <a href="https://cses.fi/user/183013">
                                        CSES
                                    </a>
                                    <br />
                                    <a href="https://www.stopstalk.com/user/profile/pandeygrocks">
                                        StopStalk
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-section">
                    <div className="section-heading">
                        <FontAwesomeIcon
                            icon={faTrophy}
                            className="section-icon"
                        />
                        KEY ACHIEVEMENTS
                    </div>

                    <ul className="achievements-list">
                        <li>
                            ACM ICPC 2024-25 Preliminary Round{" "}
                            <a href="https://drive.google.com/file/d/1vRy9EdUNS_5Ab1VcyukNP2mOYgZEPEx-/view">
                                (Ranked <strong>72 out of 3500</strong>)
                            </a>
                        </li>
                        <li>
                            ACM ICPC 2023-24 Kanpur and Amritapuri Regionalist{" "}
                            <a href="https://codedrills.io/contests/icpc-india-preliminary-2023/scoreboard">
                                (Ranked <strong>157 out of ∼2400</strong>)
                            </a>
                            <a href="https://drive.google.com/file/d/1obHSYlLz4Uij-okmO-zXiKZ4RLffHZ4o/view?usp=sharing">
                                [Certificate]
                            </a>
                        </li>
                        <li>
                            Selected as part of Amazon ML Summer School, 2024, which has a selection rate of{" "}
                            <strong>less than 4%</strong>.
                        </li>
                        <li>
                            Secured <strong>1st place among 200+</strong> participants in Code Rage, Runtime Terror, and Execute '24, coding rounds held at JIIT.
                        </li>
                        <li>
                            Qualified for the Indian National Olympiad in Informatics, 2021.{" "}
                            <a href="https://www.iarcs.org.in/inoi/2021/zio2021/results_zio2021.php#Lucknow">
                                [Reference]
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;