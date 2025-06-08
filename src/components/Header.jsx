"use client"; // se sei in App Router

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../styles/layout.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const handleNavClick = (path) => {
        setMenuOpen(false);
        router.push(path);
    };

    return (
        <header>
            <nav className="navbar">
                <div
                    className="logo"
                    onClick={() => handleNavClick("/")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && handleNavClick("/")}
                >
                    Vincenzo
                </div>
                <button
                    className="menu-toggle"
                    aria-expanded={menuOpen}
                    aria-label="Apri o chiudi menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li onClick={() => handleNavClick("/")}>Home</li>
                    <li onClick={() => handleNavClick("/resume")}>Resume</li>
                    <li onClick={() => handleNavClick("/projects")}>
                        Projects
                    </li>
                    <li onClick={() => handleNavClick("/contact")}>Contact</li>
                </ul>
            </nav>
        </header>
    );
}
