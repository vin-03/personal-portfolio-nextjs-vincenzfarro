import Link from "next/link";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <p>&copy; 2025 Vincenzo Farro • Tutti i diritti riservati</p>

                <nav className="footer-nav">
                    <Link href="/">Home</Link>
                    <Link href="/projects">Progetti</Link>
                    <Link href="/contact">Contatti</Link>
                </nav>

                <div className="footer-socials">
                    <div className="footer-item">
                        <img src="/imgs/icons/mail.png" alt="Email" />
                        <span>vincenzofarro@email.com</span>
                    </div>
                    <div className="footer-item">
                        <img src="/imgs/icons/github.png" alt="GitHub" />
                        <span>github.com/vin-03</span>
                    </div>
                    <div className="footer-item">
                        <img src="/imgs/icons/linkedin.png" alt="LinkedIn" />
                        <span>linkedin.com/in/vincenzofarro</span>
                    </div>
                </div>
            </div>
        </footer>

    );
}
