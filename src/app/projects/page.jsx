import "../../styles/projects.css";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
    return (
        <main className="page-projects page-container">
            {/* Header Section */}
            <section className="page-header">
                <h1>My Projects</h1>
                <p>
                    A selection of projects that showcase my development skills
                    and problem-solving approach.
                </p>
            </section>

            {/* Projects Section */}
            <section className="project-cards">
                <ProjectCard {...projectsData[0]} />
                <ProjectCard {...projectsData[1]} />
            </section>

            {/* Contact Section */}
            <section>
                <h2>Get in Touch</h2>
                <p>Got an idea? Want to collaborate? Let’s talk!</p>
                <a href="/contact" className="btn">
                    Go to Contact Page
                </a>
            </section>
        </main>
    );
}

const projectsData = [
    {
        title: "Mobile Legends Draft Tool",
        description: `A web application built with Next.js that helps Mobile Legends players make smarter draft decisions. It analyzes hero interactions such as counters, synergies, and anti-synergies to suggest optimal picks based on lane and team composition. Powered by custom JavaScript algorithms and data extracted from the official MLBB website, the tool delivers real-time draft insights through a clean and responsive interface.`,
        technologies: ["Next.js", "JavaScript", "Puppeteer"],
        gitLink: "https://github.com/vin-03/mlbb-draft-assistant",
        webLink: "https://draftmlbb.com",
        img: "/imgs/Screenshot2.png"
    },
    {
        title: "Personal Web Portfolio",
        description: `This portfolio was developed with Next.js using the App Router. It includes sections such as Resume, Projects, and Contact. The design is minimalist and fully responsive, styled with CSS Modules. The codebase is organized for scalability, making it easy to add new content and projects over time.`,
        technologies: ["Next.js", "React", "CSS Modules"],
        gitLink: "https://github.com/vin-03/portfolio-vincenzofarro",
        webLink: "https://vincenzofarro.com/",
        img: "/imgs/portfolioscreenshot.png"
    }
]
