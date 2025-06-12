import "../../styles/contact.css";

export default function ContactPage() {
    return (
        <main className="contact">
            <section className="contact-header">
                <h1>Contattami</h1>
                <p>Hai un’idea o vuoi collaborare? Scrivimi un messaggio!</p>
            </section>

            {/* <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                    <label>
                        Non compilare questo campo: <input name="bot-field" />
                    </label>
                </p>
                <p>
                    <label>Nome:<br />
                        <input type="text" name="name" required />
                    </label>
                </p>
                <p>
                    <label>Email:<br />
                        <input type="email" name="email" required />
                    </label>
                </p>
                <p>
                    <label>Messaggio:<br />
                        <textarea name="message" required></textarea>
                    </label>
                </p>
                <p>
                    <button type="submit">Invia</button>
                </p>
            </form> */}

        </main>

    );
}
