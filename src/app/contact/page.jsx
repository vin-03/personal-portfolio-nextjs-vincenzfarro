import "../../styles/contact.css";

export default function ContactPage() {
    return (
        <main className="contact">
            <section className="contact-header">
                <h1>Contattami</h1>
                <p>Hai un’idea o vuoi collaborare? Scrivimi un messaggio!</p>
            </section>

            <form name="contact" method="POST" data-netlify="true">
                <p>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" id="name" />
                </p>
                <p>
                    <label htmlFor="email">email:</label>
                    <input type="text" name="email" id="email" />
                </p>
                <p>
                    <label htmlFor="message">message:</label>
                    <input type="text" name="message" id="message" />
                </p>
                <p>
                    <button type="submit">Invia</button>
                </p>
            </form>

        </main>

    );
}
