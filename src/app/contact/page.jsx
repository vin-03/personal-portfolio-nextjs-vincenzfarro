import "../../styles/contact.css";

export default function ContactPage() {
    return (
        <main className="contact">
            <section className="contact-header">
                <h1>Contattami</h1>
                <p>Hai un’idea o vuoi collaborare? Scrivimi un messaggio!</p>
            </section>

            <form
                name="contact"
                method="POST"
                data-netlify="true"
                action="/thank-you"
            >
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <label>
                        Nome: <input type="text" name="name" required />
                    </label>
                </p>
                <p>
                    <label>
                        Email: <input type="email" name="email" required />
                    </label>
                </p>
                <p>
                    <label>
                        Messaggio: <textarea name="message" required></textarea>
                    </label>
                </p>
                <button type="submit">Invia</button>
            </form>

        </main>

    );
}
