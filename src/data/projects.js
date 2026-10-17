import React from 'react';
import pbHome from '../img/pb_home.png';
import pbListings from '../img/pb_listings.png';
import pbProfile from '../img/pb_profile.png';
import psLogin from '../img/pslogin.png';
import psDashboard from '../img/psdash.png';
import psUpload from '../img/psupload.png';
import playlist from '../img/covers/playlist.jpg';
import omnicli from '../img/covers/omnicli.jpg';
import snake from '../img/covers/snake.jpg';

export const projects = [
{ id: 'petbuddy', screenshots: [{ src: pbListings, alt: 'PetBuddy pet house listings' }, { src: pbProfile, alt: 'PetBuddy user dashboard' }, { src: pbHome, alt: 'PetBuddy homepage' }], title: 'PetBuddy', links: ['https://github.com/companionconnect-pvt/petbuddy', 'https://petbuddy-frontend.vercel.app/'], description: <>
                        Built a full-stack pethouse booking platform connecting pet owners with local pet houses. Winner at RIDEHacks JIIT hackathon — awarded INR 25,000 cash prize and received an investment offer of <strong>INR 10 Lakhs</strong>.
                     </>, technologies: <>
                        <strong>Technologies used:</strong> MongoDB, ExpressJS, ReactJS, NodeJS, Socket.IO, Cloudinary, Gemini API
                     </>, features: <>
                        <strong>Features:</strong>
                        <ul>
                            <li>Owners can book stays for their pets, book vet appointments, and schedule video consultations with vets.</li>
                            <li>Real-time chat between pet owners and pet house owners.</li>
                            <li>AI-powered chatbot to assist users with pet-related queries.</li>
                            <li>Interactive maps to find nearby pet houses.</li>
                            <li>JWT-based auth for pet owners, hosts, and admins with cloud image management via Cloudinary.</li>
                        </ul>
                     </> },
{ id: 'gan-sight', title: 'GAN-Sight', links: [], description: <>
                        Built a multi-stage deep learning pipeline that sequentially applies three GANs to transform a low-fidelity input into a photorealistic, super-resolved image and automatically detect anomalies.
                     </>, technologies: <>
                        <strong>Technologies used:</strong> Python, PyTorch, Pix2Pix, ESRGAN, GANomaly
                     </>, features: <>
                        <strong>Features:</strong>
                        <ul>
                            <li><strong>Image Translation (Pix2Pix):</strong> U-Net generator + PatchGAN discriminator converts sketches/diagrams into photorealistic images.</li>
                            <li><strong>Super-Resolution (ESRGAN):</strong> RRDB generator upscales the translated image, hallucinating fine-grained details.</li>
                            <li><strong>Anomaly Detection (GANomaly):</strong> Trained on normal images; uses reconstruction error to generate an anomaly score and heatmap localizing flaws.</li>
                        </ul>
                     </> },
{ id: 'photoshare', screenshots: [{ src: psLogin, alt: 'Image-Sharing Platform sign in' }, { src: psUpload, alt: 'Image-Sharing Platform image upload' }, { src: psDashboard, alt: 'Image-Sharing Platform image feed' }], title: 'Image-Sharing Platform', links: ['https://github.com/Pandey-SaurabhP/photoshare.me', 'https://photoshared.netlify.app/'], description: <>
                        Built a web platform where users can share, view, and comment on images, with user authentication and cloud image storage.
                     </>, technologies: <>
                        <strong>Technologies used:</strong> MySQL, ExpressJS, ReactJS, NodeJS, JSON Web Tokens, Cloudinary
                     </>, features: <>
                        <strong>Features:</strong>
                        <ul>
                            <li>Secure JWT-based login and registration.</li>
                            <li>Image upload and storage via Cloudinary.</li>
                            <li>Real-time comment system on images.</li>
                            <li>Responsive user interface built with ReactJS.</li>
                        </ul>
                     </> },
{ id: 'playlist', cover: playlist, coverAlt: 'Vinyl record and headphones with music library tiles', title: 'Music Playlist Manager', links: ['https://github.com/Pandey-SaurabhP/Music-Playlist-Manager'], description: <>
                        Built an interactive Music Playlist Manager in C++ using core data structures.
                     </>, technologies: <>
                        <strong>Technologies used:</strong> C++
                     </>, features: <>
                        <strong>Features:</strong>
                        <ul>
                            <li>Fast song search using a <strong>Trie</strong> data structure for prefix-based queries.</li>
                            <li>Filter songs by name with high performance.</li>
                            <li>User-friendly interface for managing playlists.</li>
                        </ul>
                     </> },
{ id: 'omnicli', cover: omnicli, coverAlt: 'Terminal panel with a collection of everyday utility objects', title: 'OmniCLI', links: ['https://github.com/Pandey-SaurabhP/OmniCLI'], description: <>
                        Built a C++ terminal application suite bundling eight useful utilities into a single interactive CLI.
                     </>, technologies: <>
                        <strong>Technologies used:</strong> C++, termios.h
                     </>, features: <>
                        <strong>Features:</strong>
                        <ul>
                            <li>Eight modules: Calculator, Calendar, PhoneBook, MemoPad, Address Book, Sudoku, Tic-Tac-Toe, and Wallpaper switcher.</li>
                            <li>WASD-based terminal navigation with custom <code>getch()</code> input handling.</li>
                            <li>Data persistence via local <code>.txt</code> files for contacts, memos, and addresses.</li>
                        </ul>
                     </> },
{ id: 'snake', cover: snake, coverAlt: 'Sculptural snake on a game board approaching an apple', title: 'Snake Web Game', links: ['https://github.com/Pandey-SaurabhP/Snakes-WebGame', 'https://relaxed-truffle-8f5456.netlify.app/'], description: <>
                        (School Project) Developed an interactive web-based Snake game using HTML, CSS, and JavaScript.
                     </>, technologies: <>
                        <strong>Technologies used:</strong> JavaScript, HTML, CSS
                     </>, features: <>
                        <strong>Features:</strong>
                        <ul>
                            <li>Keyboard-controlled snake gameplay with score tracking.</li>
                            <li>Smooth animations and visually appealing graphics.</li>
                        </ul>
                     </> }
];
