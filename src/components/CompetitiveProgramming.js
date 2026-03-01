import React from "react";
import HeadingBar from "./HeadingBar";
import "./about.css";

function CompetitiveProgramming() {
    return (
        <div className="about-main">
            <HeadingBar text="COMPETITIVE PROGRAMMING" />
            <div className="about-section">
                <ul className="achievements-list">
                    <li>
                        <strong>CodeChef:</strong> Rated <strong>2041 (5★)</strong> — AIR 690 out of 2,50,000+ participants (Top 0.25%ile) <a href="https://www.codechef.com/users/pandeygrocks">[Profile]</a>
                    </li>
                    <li>
                        <strong>Codeforces:</strong> Achieved <strong>1702 (Expert)</strong> — Ranked 800 of 80,000+ participants in India (Top 1%ile) <a href="https://codeforces.com/profile/pandeyGRocks">[Profile]</a>
                    </li>
                    <li>
                        <strong>LeetCode:</strong> Rated <strong>2064 (Knight)</strong> — Among top 2 percentile people in India <a href="https://leetcode.com/pandeyGRocks/">[Profile]</a>
                    </li>
                    <li>
                        <strong>Other Profiles:</strong> <a href="https://www.hackerrank.com">Hackerrank</a> | <a href="https://cses.fi/user/183013">CSES</a> | <a href="https://www.stopstalk.com/user/profile/pandeygrocks">StopStalk</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CompetitiveProgramming;
