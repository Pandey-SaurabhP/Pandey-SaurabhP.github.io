import React from "react";
import HeadingBar from "./HeadingBar";
import "./about.css";

function Achievements() {
    return (
        <div className="about-main">
            <HeadingBar text="KEY ACHIEVEMENTS" />
            <div className="about-section">
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
    );
}

export default Achievements;
