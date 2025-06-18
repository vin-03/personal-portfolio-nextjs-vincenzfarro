import Image from "next/image";

export default function ProjectCard({ title, description, technologies, gitLink, webLink, img }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={gitLink} target="_blank" rel="noopener noreferrer">
                View on GitHub
            </a>
            <a href={webLink} target="_blank" rel="noopener noreferrer">
                View online
            </a>
            <div className="project-card-image">
                <Image
                    src={img}
                    alt={title}
                    width={500}
                    height={300}
                    style={{ objectFit: "cover", borderRadius: "12px" }}
                />
            </div>
            <div className="tech-list">
                {technologies.map((tech, index) => (
                    <span className="tech-pill" key={index}>
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
