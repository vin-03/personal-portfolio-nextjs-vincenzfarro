import Image from "next/image";
import "../styles/hero.css";
import fotoProfilo from "/public/imgs/myimg.png";

export default function Home() {
    return (
        <main className="page-home page-container">
            <section className="hero">
                <div className="hero-content">
                    <Image
                        src={fotoProfilo}
                        alt="Foto di Vincenzo Farro - Full-Stack Web Developer"
                        width={200}
                        height={266} // 4:3
                        className="hero-img"
                    />
                    <div className="hero-text">
                        <h1>Ciao! Sono Vincenzo Farro</h1>
                        <p>Full-Stack Web Developer</p>
                        <a href="/projects" className="btn">
                            Guarda i miei progetti
                        </a>
                    </div>
                </div>
            </section>

            <section className="card about">
                <h2>Chi sono</h2>
                <p>
                    Sono uno studente universitario con la passione per lo
                    sviluppo. Ho iniziato da autodidatta e ora sto costruendo il
                    mio primo portfolio professionale. Mi piace imparare
                    facendo.
                </p>
                <p>
                    Voglio lavorare da remoto per poter viaggiare e scoprire
                    nuovi posti nel mondo, continuando a crescere come
                    sviluppatore.
                </p>
            </section>

            <section className="contattami">
                <h2>Contattami</h2>
                <p>Hai un’idea? Vuoi collaborare? Scrivimi!</p>
                <a href="/contact" className="btn">
                    Vai alla pagina contatti
                </a>
            </section>
        </main>
    );
}
