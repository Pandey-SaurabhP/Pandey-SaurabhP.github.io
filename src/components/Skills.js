import React from "react";
import HeadingBar from "./HeadingBar";
import "./about.css";

function Skills() {
    return (
        <div className="about-main">
            <HeadingBar text="SKILLS" />
            <div className="about-section">
                <ul className="achievements-list">
                    <li>
                        <strong>Programming Languages:</strong> C++, Golang, Python, Java, JavaScript
                    </li>
                    <li>
                        <strong>Databases:</strong> MySQL, DynamoDB, MongoDB, Google Spanner, Redis
                    </li>
                    <li>
                        <strong>Frontend:</strong> ReactJS, HTML, CSS
                    </li>
                    <li>
                        <strong>Tools:</strong> Git, Linux, Kafka, SQS, Datadog, Grafana, Redash
                    </li>
                    <li>
                        <strong>Others:</strong> NodeJS, ExpressJS, Flask
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;
