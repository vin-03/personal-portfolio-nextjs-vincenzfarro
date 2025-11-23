import "../../styles/resume.css";

export default function ResumePage() {
    return (
        <main className="page-resume page-container">
            <section className="page-header">
                <h1>Il mio Curriculum</h1>
                <p>Formazione, competenze e progetti personali in evidenza.</p>
                <a href="./cv_eng_131025.pdf" download className="btn download-btn">
                    📄 Download CV in PDF (eng)
                </a>
                <a href="./cv_it_131025.pdf" download className="btn download-btn">
                    📄 Download CV in PDF (it)
                </a>
            </section>

            <section>
                <h2>Skills</h2>
                <ul>
                    <li>
                        <strong>Linguaggi:</strong> HTML, CSS, JavaScript,
                        Python, SQL
                    </li>
                    <li>
                        <strong>Framework & Librerie:</strong> React, Next.js,
                        Django, Pandas
                    </li>
                    <li>
                        <strong>Database:</strong> PostgreSQL, MySQL, SQLite
                    </li>
                    <li>
                        <strong>Servizi & Dev Tools:</strong> Firebase, Git,
                        Docker, VS Code, PyCharm
                    </li>
                    <li>
                        <strong>Sistemi Operativi:</strong> Windows 10/11, Linux
                        (Ubuntu)
                    </li>
                </ul>
            </section>

            <section>
                <h2>Education</h2>
                <p>
                    <strong>Laurea Triennale in Informatica</strong> –
                    Università di Salerno (2022 – in corso)
                    <br />
                    Esami completati: 10/20 | Media: 25/30
                </p>
                <p>
                    <strong>Diploma Tecnico – Geotecnico</strong>
                    <br />
                    IIS Vico De Vivo, Agropoli – Voto: 88/100 (2017 – 2022)
                </p>
            </section>

            <section>
                <h2>Projects</h2>
                <p>
                    <span className="project-title">
                        Mobile Legends Draft Tool (2024):
                    </span>
                    <br />
                    Script Python + Pandas per supportare la fase di draft nel
                    gioco Mobile Legends.
                    <br />
                    Analizza i pick e suggerisce eroi ottimali in base a
                    sinergie e counter.
                </p>
                <p>
                    <span className="project-title">
                        Portfolio Web Personale (2024):
                    </span>
                    <br />
                    Sito responsive in Next.js per mostrare progetti, competenze
                    e contatti. Design pulito e facilmente estendibile.
                </p>
                <a href="/projects" className="btn see-projects-btn">
                    Scopri di più su i progetti
                </a>
            </section>
        </main>
    );
}
