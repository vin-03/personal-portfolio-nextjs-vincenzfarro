import "../../styles/contact.css";

export default function ContactPage() {
    return (
        <main className="contact">
            <section className="contact-header">
                <h1>Contattami</h1>
                <p>Hai un’idea o vuoi collaborare? Scrivimi un messaggio!</p>
            </section>

            <form name="contact" method="POST" data-netlify="true" action="/thank-you">
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

            <section className="contact-socials">
                <div className="contact-item">
                    <img src="/imgs/icons/gmail.png" alt="Email Icon" />
                    <span>vincenzofarro@email.com</span>
                </div>
                <div className="contact-item">
                    <img src="/imgs/icons/github.png" alt="GitHub Icon" />
                    <span>github.com/vin-03</span>
                </div>
                <div className="contact-item">
                    <img src="/imgs/icons/linkedin.png" alt="LinkedIn Icon" />
                    <span>linkedin.com/in/vincenzofarro</span>
                </div>
            </section>

        </main>

    );
}
