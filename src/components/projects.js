import "./projects.css";
import githubLogo from "../img/github.svg";
import externalLogo from "../img/externalLogo.svg";

import pslogin from "../img/pslogin.png";
import psdash from "../img/psdash.png";
import psupload from "../img/psupload.png";
import snake from "../img/snake.png";
import HeadingBar from "./HeadingBar";
import mainMenu from "../img/mainMenu.jpeg";

import psdashgif from "../img/gifs/psdash.gif";
import psdashcomment from "../img/gifs/pscomment.gif";
import snakegif from "../img/gifs/snake.gif";
import playlistLoad from "../img/gifs/playlistLoad.gif";
import playlistSearch from "../img/gifs/playlistSearch.gif";

function Projects() {
    return (
        <>
            <HeadingBar text="PROJECTS" />
            <div className="projects-container">
                <div className="project-card">
                    <div>
                        <div className="project-header">
                            <div className="project-title">
                                Petbuddy - A pethouse booking platform
                            </div>
                            <div className="project-links">
                                <a
                                    href="https://github.com/companionconnect-pvt/petbuddy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={githubLogo}
                                        alt="Github Repository"
                                        className="project-logo"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="project-description">
                            In a team, we developed a full-stack web application to facilitate pet adoption, report lost & found pets, and connect users with local pet services. The business idea was reviewed at JIIT and ultimately we received an investment offer from the college. 
                        </div>
                        <div className="project-description">
                            <strong>Technologies used:</strong> MongoDB, ExpressJS, ReactJS, NodeJS, JSON Web Tokens, Socket.IO, Cloudinary, Gemini API
                        </div>
                        <div className="project-description">
                            <strong>Features:</strong>
                            <ul>
                                <li>
                                    User Authentication: Secure registration and login system for users, vets, and admins using JSON Web Tokens (JWT).
                                </li>
                                <li>
                                    Comprehensive Pet Listings: Users can create, view, and filter listings for pet adoption and report lost or found animals.
                                </li>
                                <li>
                                    AI-Powered Chatbot: Implemented an intelligent chatbot using the OpenAI API to provide instant answers to user queries.
                                </li>
                                <li>
                                    Real-time Messaging: Integrated a chat system using Socket.IO to enable direct communication between users.
                                </li>
                                <li>
                                    Cloud Media Management: Handled all image uploads for pet profiles and service listings via Cloudinary.
                                </li>
                                <li>
                                    Interactive Geolocation: Implemented maps with Leaflet to display the location of pets and available services.
                                </li>
                                <li>
                                    Admin Dashboard: A dedicated interface for site administrators to manage users, listings, and site-wide content.
                                </li>
                            </ul>
                        </div>
                        <div>** Screenshots to be added **</div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-header">
                        <div className="project-title">
                            Image-Sharing Platform
                        </div>
                        <div className="project-links">
                            <a
                                href="https://github.com/Pandey-SaurabhP/photoshare.me"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={githubLogo}
                                    alt="Github Repository"
                                    className="project-logo"
                                />
                            </a>
                            <a
                                href="https://photoshared.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={externalLogo}
                                    alt="External Link"
                                    className="project-logo"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="project-description">
                        I built a web platform where users can share, view, and
                        comment on images. The project includes user
                        authentication, image storage, and a responsive
                        interface.
                    </div>
                    <div className="project-description">
                        <strong>Technologies used:</strong> MySQL, ExpressJS,
                        ReactJS, NodeJS, JSON Web Tokens
                    </div>
                    <div className="project-description">
                        <strong>Features:</strong>
                        <ul>
                            <li>
                                User Authentication: Secure login and
                                registration using JSON Web Tokens (JWT).
                            </li>
                            <li>
                                Image Upload and Storage: Store images using
                                Cloudinary.
                            </li>
                            <li>
                                Database Management: Manage user data and images
                                with MySQL and Cloud-Clever.
                            </li>
                            <li>
                                API Development: Handle requests and user
                                sessions with ExpressJS.
                            </li>
                            <li>
                                Frontend Development: Create a responsive user
                                interface with ReactJS.
                            </li>
                            <li>
                                Comment System: Allow users to comment on images
                                and display comments in real-time.
                            </li>
                        </ul>
                    </div>
                    <div className="project-screenshots">
                        <img src={psdashgif} alt="Screenshot 3" />
                        <img src={psdashcomment} alt="Screenshot 3" />
                        <img src={pslogin} alt="Screenshot 1" />
                        <img src={psdash} alt="Screenshot 2" />
                        <img src={psupload} alt="Screenshot 3" />
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-header">
                        <div className="project-title">
                            Music Playlist Manager
                        </div>
                        <div className="project-links">
                            <a
                                href="https://github.com/Pandey-SaurabhP/Music-Playlist-Manager"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={githubLogo}
                                    alt="Github Repository"
                                    className="project-logo"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="project-description">
                        Created an interactive Music Playlist Manager entirely
                        utilising C++
                    </div>
                    <div className="project-description">
                        <strong>Technologies used:</strong> C++
                    </div>
                    <div className="project-description">
                        <strong>Features:</strong>
                        <ul>
                            <li>
                                Visually Appealing and efficient searching of
                                songs using trie data structure.
                            </li>
                            <li>
                                Ability to filter songs by name with high
                                performance.
                            </li>
                            <li>
                                User-friendly interface for managing playlists.
                            </li>
                        </ul>
                    </div>
                    <div className="project-screenshots">
                        <img src={playlistLoad} alt="Screenshot 1" />
                        <img src={playlistSearch} alt="Screenshot 2" />
                        <img src={mainMenu} alt="Screenshot 2" />
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-header">
                        <div className="project-title">Snake Web Game</div>
                        <div className="project-links">
                            <a
                                href="https://github.com/Pandey-SaurabhP/Snakes-WebGame"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={githubLogo}
                                    alt="Github Repository"
                                    className="project-logo"
                                />
                            </a>
                            <a
                                href="https://relaxed-truffle-8f5456.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={externalLogo}
                                    alt="External Link"
                                    className="project-logo"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="project-description">
                        Developed an interactive web-based Snake game using
                        HTML, CSS, and JavaScript.
                    </div>
                    <div className="project-description">
                        <strong>Technologies used:</strong> JavaScript, HTML,
                        CSS
                    </div>
                    <div className="project-description">
                        <strong>Features:</strong>
                        <ul>
                            <li>
                                Engaging gameplay where players control the
                                snake using keyboard inputs.
                            </li>
                            <li>
                                Smooth animations and visually appealing
                                graphics created with HTML and CSS.
                            </li>
                        </ul>
                    </div>
                    <div className="project-screenshots">
                        <img src={snake} alt="Screenshot 3" />
                        <img src={snakegif} alt="Screenshot 3" />
                    </div>
                </div>

            </div>
        </>
    );
}

export default Projects;
