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
        description: `A web tool built in Python that analyzes team and opponent picks during the draft phase of Mobile Legends. It uses Pandas to evaluate and filter optimal hero combinations, suggesting the best choices based on team synergy and enemy counters. Designed for competitive players and anyone looking for a tactical advantage. The project is fully documented and expandable.`,
        technologies: ["Python", "Pandas"],
        gitLink: "https://github.com/vin-03/mlbb-draft-assistant",
        webLink: "https://draftmlbb.com",
        img: "/imgs/mlbbdrafttool.png"
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
