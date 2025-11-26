import "../styles/globals.css";
import "../styles/layout.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
    title: "Vincenzo Farro | Web Developer Portfolio",
    description:
        "Personal portfolio of Vincenzo Farro, a computer science student and aspiring full-stack web developer focused on remote work and modern web technologies.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content="Personal portfolio of Vincenzo Farro, a computer science student and aspiring full-stack web developer focused on remote work and modern web technologies."
                />
                <meta
                    name="keywords"
                    content="Vincenzo Farro, web developer, full-stack, remote job, Next.js, React, JavaScript, portfolio"
                />
                <meta name="author" content="Vincenzo Farro" />
                <title>Vincenzo Farro | Web Developer Portfolio</title>
                <link rel="icon" href="/favicon.png" />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
