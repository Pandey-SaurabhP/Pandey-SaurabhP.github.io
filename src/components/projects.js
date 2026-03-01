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

import pbBookingGif from "../img/gifs/pb_booking.gif";
import pbVetGif from "../img/gifs/pb_vet.gif";
import pbHome from "../img/pb_home.png";
import pbProfile from "../img/pb_profile.png";
import pbListings from "../img/pb_listings.png";

function Projects() {
    return (
        <>
            <HeadingBar text="PROJECTS" />
            <div className="projects-container">
                <div className="project-card">
                    <div className="project-header">
                        <div className="project-title">
                                PetBuddy
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
                                <a
                                    href="https://petbuddy-frontend.vercel.app/"
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
                        Built a full-stack pethouse booking platform connecting pet owners with local pet houses. Winner at RIDEHacks JIIT hackathon — awarded INR 25,000 cash prize and received an investment offer of <strong>INR 10 Lakhs</strong>.
                    </div>
                    <div className="project-description">
                        <strong>Technologies used:</strong> MongoDB, ExpressJS, ReactJS, NodeJS, Socket.IO, Cloudinary, Gemini API
                    </div>
                    <div className="project-description">
                        <strong>Features:</strong>
                        <ul>
                            <li>Owners can book stays for their pets, book vet appointments, and schedule video consultations with vets.</li>
                            <li>Real-time chat between pet owners and pet house owners.</li>
                            <li>AI-powered chatbot to assist users with pet-related queries.</li>
                            <li>Interactive maps to find nearby pet houses.</li>
                            <li>JWT-based auth for pet owners, hosts, and admins with cloud image management via Cloudinary.</li>
                        </ul>
                    </div>
                    <div className="project-screenshots">
                        <img src={pbBookingGif} alt="PetBuddy Booking Flow" />
                        <img src={pbVetGif} alt="PetBuddy Vet Booking" />
                        <img src={pbHome} alt="PetBuddy Homepage" />
                        <img src={pbProfile} alt="PetBuddy User Dashboard" />
                        <img src={pbListings} alt="PetBuddy Listings" />
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-header">
                        <div className="project-title">GAN-Sight</div>
                    </div>
                    <div className="project-description">
                        Built a multi-stage deep learning pipeline that sequentially applies three GANs to transform a low-fidelity input into a photorealistic, super-resolved image and automatically detect anomalies.
                    </div>
                    <div className="project-description">
                        <strong>Technologies used:</strong> Python, PyTorch, Pix2Pix, ESRGAN, GANomaly
                    </div>
                    <div className="project-description">
                        <strong>Features:</strong>
                        <ul>
                            <li><strong>Image Translation (Pix2Pix):</strong> U-Net generator + PatchGAN discriminator converts sketches/diagrams into photorealistic images.</li>
                            <li><strong>Super-Resolution (ESRGAN):</strong> RRDB generator upscales the translated image, hallucinating fine-grained details.</li>
                            <li><strong>Anomaly Detection (GANomaly):</strong> Trained on normal images; uses reconstruction error to generate an anomaly score and heatmap localizing flaws.</li>
                        </ul>
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
                        Built a web platform where users can share, view, and comment on images, with user authentication and cloud image storage.
                    </div>
                    <div className="project-description">
                        <strong>Technologies used:</strong> MySQL, ExpressJS, ReactJS, NodeJS, JSON Web Tokens, Cloudinary
                    </div>
                    <div className="project-description">
                        <strong>Features:</strong>
                        <ul>
                            <li>Secure JWT-based login and registration.</li>
                            <li>Image upload and storage via Cloudinary.</li>
                            <li>Real-time comment system on images.</li>
                            <li>Responsive user interface built with ReactJS.</li>
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
                        Built an interactive Music Playlist Manager in C++ using core data structures.
                    </div>
                    <div className="project-description">
                        <strong>Technologies used:</strong> C++
                    </div>
                    <div className="project-description">
                        <strong>Features:</strong>
                        <ul>
                            <li>Fast song search using a <strong>Trie</strong> data structure for prefix-based queries.</li>
                            <li>Filter songs by name with high performance.</li>
                            <li>User-friendly interface for managing playlists.</li>
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
                        <div className="project-title">OmniCLI</div>
                        <div className="project-links">
                            <a
                                href="https://github.com/Pandey-SaurabhP/OmniCLI"
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
                        Built a C++ terminal application suite bundling eight useful utilities into a single interactive CLI.
                    </div>
                    <div className="project-description">
                        <strong>Technologies used:</strong> C++, termios.h
                    </div>
                    <div className="project-description">
                        <strong>Features:</strong>
                        <ul>
                            <li>Eight modules: Calculator, Calendar, PhoneBook, MemoPad, Address Book, Sudoku, Tic-Tac-Toe, and Wallpaper switcher.</li>
                            <li>WASD-based terminal navigation with custom <code>getch()</code> input handling.</li>
                            <li>Data persistence via local <code>.txt</code> files for contacts, memos, and addresses.</li>
                        </ul>
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
                        (School Project) Developed an interactive web-based Snake game using HTML, CSS, and JavaScript.
                    </div>
                    <div className="project-description">
                        <strong>Technologies used:</strong> JavaScript, HTML, CSS
                    </div>
                    <div className="project-description">
                        <strong>Features:</strong>
                        <ul>
                            <li>Keyboard-controlled snake gameplay with score tracking.</li>
                            <li>Smooth animations and visually appealing graphics.</li>
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
