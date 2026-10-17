import './project-artwork.css';

export default function ProjectArtwork({ project }) {
    if (project.screenshots) {
        return (
            <figure className="project-cover screenshot-stack" aria-label={`${project.title} screenshots`}>
                {project.screenshots.map((screenshot, index) => (
                    <img
                        key={screenshot.src}
                        className={`stack-shot stack-shot-${index + 1}`}
                        src={screenshot.src}
                        alt={screenshot.alt}
                        loading="lazy"
                        decoding="async"
                    />
                ))}
            </figure>
        );
    }
    if (project.id === 'gan-sight') {
        return (
            <div className="project-cover gan-art" role="img" aria-label="GAN-Sight: image translation, super-resolution, and anomaly detection">
                <span className="art-label">FROM PIXELS TO POSSIBILITIES</span>
                <div className="gan-grid" aria-hidden="true"><i /><i /><i /></div>
                <span className="pipeline">Pix2Pix <b>→</b> ESRGAN <b>→</b> GANomaly</span>
            </div>
        );
    }
    return (
        <figure className="project-cover">
            <img src={project.cover} alt={project.coverAlt} width="1536" height="1024" loading="lazy" decoding="async" />
            <figcaption>Concept artwork · AI generated</figcaption>
        </figure>
    );
}
