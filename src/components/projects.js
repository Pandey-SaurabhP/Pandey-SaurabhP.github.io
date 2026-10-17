import './projects.css';
import ProjectArtwork from './ProjectArtwork';
import HeadingBar from './HeadingBar';
import { projects } from '../data/projects';
import githubLogo from '../img/github.svg';
import externalLogo from '../img/externalLogo.svg';

export default function Projects() {
    return (
        <>
            <HeadingBar text="PROJECTS" />
            <div className="projects-container">
                {projects.map(project => (
                    <article className="project-card" key={project.id}>
                        <div className="project-header">
                            <div className="project-title">{project.title}</div>
                            <div className="project-links">
                                {project.links.map((link, index) => (
                                    <a href={link} key={link} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={index === 0 ? githubLogo : externalLogo}
                                            alt={index === 0 ? 'Github Repository' : 'External Link'}
                                            className="project-logo"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="project-description">{project.description}</div>
                        <div className="project-description">{project.technologies}</div>
                        <div className="project-description">{project.features}</div>
                        <ProjectArtwork project={project} />
                    </article>
                ))}
            </div>
        </>
    );
}
