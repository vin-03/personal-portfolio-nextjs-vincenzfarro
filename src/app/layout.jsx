import "../styles/globals.css";
import "../styles/layout.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
    title: "Vincenzo Farro | Web Developer Portfolio",
    description:
        "Il portfolio personale di Vincenzo Farro, studente di informatica e aspirante web developer freelance.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="it">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
