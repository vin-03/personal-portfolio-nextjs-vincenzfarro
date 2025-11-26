import "../../styles/contact.css";

export default function ContactPage() {
    return (
        <main className="page-contact page-container narrow">
            {/* Header Section */}
            <section className="page-header">
                <h1>Get in Touch</h1>
                <p>Have an idea or want to collaborate? Send me a message!</p>
            </section>

            {/* Contact Form */}
            <form name="contact" method="POST" data-netlify="true" action="/thank-you">
                <input type="hidden" name="form-name" value="contact" />
                <p><label>Name: <input type="text" name="name" required /></label></p>
                <p><label>Email: <input type="email" name="email" required /></label></p>
                <p><label>Message: <textarea name="message" required></textarea></label></p>
                <button type="submit">Invia</button>
            </form>

            <section className="contact-socials">
                <div className="contact-item">
                    <img src="/imgs/icons/gmail.png" alt="Email Icon" />
                    <span>
                        vincenzofarro01@email.com
                    </span>
                </div>

                <div className="contact-item">
                    <img src="/imgs/icons/github.png" alt="GitHub Icon" />
                    <span>
                        <a
                            href="https://github.com/vin-03"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            vin-03
                        </a>
                    </span>
                </div>

                <div className="contact-item">
                    <img src="/imgs/icons/linkedin.png" alt="LinkedIn Icon" />
                    <span>
                        <a
                            href="https://linkedin.com/in/vincenzo-farro"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            vincenzo-farro
                        </a>
                    </span>
                </div>
            </section>


        </main>

    );
}
