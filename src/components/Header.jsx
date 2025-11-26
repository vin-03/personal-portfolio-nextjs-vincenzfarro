"use client";

import { useState } from "react";
import Link from "next/link";
import "../styles/layout.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <Link href="/" onClick={closeMenu} prefetch={true}>
                        Vincenzo
                    </Link>
                </div>

                <button
                    className="menu-toggle"
                    aria-expanded={menuOpen}
                    aria-label="Open or close menu"
                    onClick={handleToggleMenu}
                >
                    ☰
                </button>

                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li>
                        <Link href="/" onClick={closeMenu} prefetch={true}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume" onClick={closeMenu} prefetch={true}>
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" onClick={closeMenu} prefetch={true}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" onClick={closeMenu} prefetch={true}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
