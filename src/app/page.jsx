import Image from "next/image";
import "../styles/hero.css";
import profilePhoto from "/public/imgs/myimg.png";

export default function Home() {
    return (
        <main className="page-home page-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <Image
                        src={profilePhoto}
                        alt="Photo of Vincenzo Farro - Full-Stack Web Developer"
                        width={200}
                        height={266}
                        className="hero-img"
                    />
                    <div className="hero-text">
                        <h1>Hi! I'm Vincenzo Farro</h1>
                        <p>Full-Stack Web Developer</p>
                        <a href="/projects" className="btn">
                            Check out my projects
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="card about">
                <h2>About Me</h2>
                <p>
                    I'm a computer science student with a strong passion for web
                    development. I started learning on my own and I'm now
                    building my first professional portfolio. I love learning by
                    doing and exploring new technologies.
                </p>
                <p>
                    My goal is to work fully remote so I can travel, discover new
                    places around the world, and keep growing as a developer.
                </p>
            </section>

            {/* Contact Section */}
            <section className="contattami">
                <h2>Get in Touch</h2>
                <p>Got an idea? Want to collaborate? Let’s talk!</p>
                <a href="/contact" className="btn">
                    Go to Contact Page
                </a>
            </section>
        </main>
    );
}
