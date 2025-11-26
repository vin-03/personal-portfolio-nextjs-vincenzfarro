import "../../styles/resume.css";

export default function ResumePage() {
    return (
        <main className="page-resume page-container">
            {/* Header Section */}
            <section className="page-header">
                <h1>My Resume</h1>
                <p>Education, skills, and key personal projects.</p>
                <a href="./cv_eng_131025.pdf" download className="btn download-btn">
                    📄 Download CV (English)
                </a>
                <a href="./cv_it_131025.pdf" download className="btn download-btn">
                    📄 Download CV (Italian)
                </a>
            </section>

            {/* Skills Section */}
            <section>
                <h2>Skills</h2>
                <ul>
                    <li>
                        <strong>Languages:</strong> HTML, CSS, JavaScript,
                        Python, SQL
                    </li>
                    <li>
                        <strong>Frameworks & Libraries:</strong> React, Next.js, Node
                        Django, Pandas
                    </li>
                    <li>
                        <strong>Databases:</strong> PostgreSQL, MySQL, SQLite
                    </li>
                    <li>
                        <strong>Services & Dev Tools:</strong> Firebase, Git,
                        Docker, VS Code, PyCharm
                    </li>
                    <li>
                        <strong>Operating Systems:</strong> Windows 10/11, Linux
                        (Ubuntu)
                    </li>
                </ul>
            </section>

            {/* Education Section */}
            <section>
                <h2>Education</h2>
                <p>
                    <strong>Bachelor’s Degree in Computer Science</strong> – University of Salerno (2022 – present)
                    <br />
                    Completed exams: 10/20 | GPA: 25/30
                </p>
                <p>
                    <strong>Technical Diploma – Geotechnical Studies</strong>
                    <br />
                    IIS Vico De Vivo, Agropoli – Grade: 88/100 (2017 – 2022)
                </p>
            </section>

            {/* Projects Section */}
            <section>
                <h2>Projects</h2>
                <p>
                    <span className="project-title">Mobile Legends Draft Tool (2025):</span>
                    <br />
                    A Python + Pandas tool designed to support the draft phase in the game Mobile Legends.
                    <br />
                    It analyzes hero picks and suggests optimal choices based on team synergy and counters.
                </p>
                <p>
                    <span className="project-title">Personal Web Portfolio (2024):</span>
                    <br />
                    A responsive website built with Next.js to showcase my projects, skills, and contact information.
                    <br />
                    Clean design and easily extendable structure.
                </p>
                <a href="/projects" className="btn">
                    See more projects
                </a>
            </section>
        </main>
    );
}
