import "../../styles/projects.css";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
    return (
        <main className="page-projects page-container">
            <section className="page-header">
                <h1>I miei Progetti</h1>
                <p>
                    Una selezione di progetti che mostrano le mie competenze
                    nello sviluppo.
                </p>
            </section>
            <section className="project-cards">
                <ProjectCard {...projectsData[0]} />
                <ProjectCard {...projectsData[1]} />
            </section>

            <section>
                <h2>Contattami</h2>
                <p>Hai un’idea? Vuoi collaborare? Scrivimi!</p>
                <a href="/contact" className="btn">
                    Vai alla pagina contatti
                </a>
            </section>
        </main>
    );
}

const projectsData = [
    {
        title: "Mobile Legends Draft Tool",
        description: `Tool sviluppato in Python che analizza le scelte del team e degli avversari nella fase di draft del gioco Mobile Legends. Utilizza Pandas per filtrare e valutare combinazioni ottimali, suggerendo gli eroi più adatti basandosi su sinergie di squadra e counter contro i nemici. È uno script pensato per giocatori competitivi o per chi vuole un vantaggio tattico. Il progetto è documentato ed espandibile.`,
        technologies: ["Python", "Pandas"],
        gitLink: "https://github.com/vin-03/mobile-legends-draft-tool",
        webLink: "https://github.com/vin-03/mobile-legends-draft-tool",
        img: "/imgs/mlbbdrafttool.png"
    },
    {
        title: "Portfolio Web Personale",
        description: `Questo portfolio è stato sviluppato con Next.js sfruttando l'App Router. Include sezioni come Resume, Projects e Contact. Lo stile è personalizzato con CSS Modules e design minimalista. Il codice è organizzato per facilitare l’aggiunta di nuovi progetti e contenuti. È pensato per essere sia vetrina che laboratorio personale.`,
        technologies: ["Next.js", "React", "CSS Modules"],
        gitLink: "https://github.com/vin-03/portfolio-vincenzofarro",
        webLink: "https://vincenzofarro-portfolio.netlify.app/ ",
        img: "/imgs/portfolioscreenshot.png"
    }
]
