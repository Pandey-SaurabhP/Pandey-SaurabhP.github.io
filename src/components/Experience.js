import React from "react";
import googleLogo from "../img/google.webp";
import zomatoLogo from "../img/zomatoLogo.png";
import HeadingBar from "./HeadingBar";
import "./about.css";

function Experience() {
    return (
        <div className="about-main">
            <HeadingBar text="EXPERIENCE" />
            <div className="about-section">
                <div className="experience-list">
                    <div className="experience-item">
                        <img
                            src={zomatoLogo}
                            alt="Zomato Logo"
                            className="experience-logo"
                        />
                        <div className="experience-details">
                            <div className="experience-header">
                                <div className="experience-role">
                                    SDE Intern @ Zomato
                                </div>
                                <div className="experience-duration">
                                    Oct 2025 - Present
                                </div>
                            </div>
                            <ul className="experience-work">
                                <li>
                                    Working as part of the{" "}
                                    <strong>Catalog team</strong> responsible
                                    for the menu experience of both merchants
                                    and consumers.
                                </li>
                                <li>
                                    Built an async{" "}
                                    <strong>super-resolution pipeline</strong>{" "}
                                    that upgrades menu image quality across all
                                    flows, with <strong>98%</strong> of new menu
                                    images now served as super-resolved versions
                                    to end users.
                                </li>
                                <li>
                                    Engineered backend services for a{" "}
                                    <strong>menu recommendation feature</strong>
                                    , enabling price optimization options for
                                    partner restaurants. Now scaled to{" "}
                                    <strong>
                                        more than a million restaurant partners
                                    </strong>{" "}
                                    worldwide.
                                </li>
                                <li>
                                    Exposed APIs powering a{" "}
                                    <strong>chatbot</strong> that lets
                                    restaurant partners update menus via natural
                                    language, driving merchant self-serve
                                    adoption and reducing dependency on KAMs.
                                </li>
                                <li>
                                    Developed <strong>Exclusive Promos</strong>{" "}
                                    for end consumers — a discount type unlocked
                                    once an order crosses a defined minimum
                                    order value (MOV) threshold.
                                </li>
                                <li>
                                    Automated a three-step image enhancement
                                    process down to a single step, saving
                                    significant manual effort.
                                </li>
                                <li>
                                    Developed a bulk processing feature that can
                                    enhance up to{" "}
                                    <strong>50,000 food images</strong> in one
                                    go.
                                </li>
                                <li>
                                    Built{" "}
                                    <strong>one-click image enhancement</strong>{" "}
                                    for moderators, enabling them to generate a
                                    fully enhanced version when a super-resolved
                                    image falls short of menu quality.
                                </li>
                                <li>
                                    Built a{" "}
                                    <strong>
                                        real-time WhatsApp & Email notification
                                        system
                                    </strong>{" "}
                                    to alert restaurant partners during menu
                                    replications.
                                </li>
                                <li>
                                    Migrated several APIs from PHP to{" "}
                                    <strong>Golang</strong> to improve
                                    performance and keep the codebase
                                    consistent.
                                </li>
                                <li>
                                    Built a system that sends an alert to the
                                    concerned Zomato team, allowing them to take
                                    prompt action in case no photoshoot slots
                                    are available in their city.
                                </li>
                                {/* Bypassed validation for overriding packaging charges for select restaurants. */}
                                <li>
                                    <strong>Tech Stack</strong>: Golang,
                                    DynamoDB, Redis, Kafka, SQS, Datadog,
                                    Grafana.
                                </li>
                            </ul>
                        </div>
                    </div>
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
                                    Part of the{" "}
                                    <strong>GCP Looker and AI Services</strong>{" "}
                                    team.
                                </li>
                                <li>
                                    Designed and implemented a{" "}
                                    <strong>
                                        bidirectional pagination system
                                    </strong>{" "}
                                    in the Looker platform, improving page load
                                    time by more than <strong>90%</strong>.
                                </li>
                                <li>
                                    Built the system on a{" "}
                                    <strong>token-based scheme</strong>{" "}
                                    encoding the first and last entries of each
                                    page into prev/next tokens, with a
                                    tiebreaker mechanism to guarantee consistent
                                    navigation in the presence of duplicates.
                                </li>
                                <li>
                                    Contributed to a cross-team initiative to
                                    enable end-to-end migration of reports from{" "}
                                    <strong>Looker Studio Pro to Looker</strong>
                                    .
                                </li>
                                <li>
                                    Owned the <strong>Copy Schedules</strong>{" "}
                                    workflow within this migration, designing
                                    and implementing it from scratch while
                                    adding{" "}
                                    <strong>less than 50ms</strong> of additional
                                    load time to the overall flow.
                                </li>
                                <li>
                                    <strong>Tech Stack</strong> : Java, Spanner,
                                    FluentSQL, JUnit4, and Mockito
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
