import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <h1 className="header-logo"><a href="/">scoot</a></h1>

            <nav className="header-nav">
                <a href="/about">About</a>
                <a href="/location">Location</a>
                <a href="/careers">Careers</a>
            </nav>

            <button className="header-btn">Get Scootin</button>
        </header>
    );
}
