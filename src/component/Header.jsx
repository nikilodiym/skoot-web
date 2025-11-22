import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <h1 className="header-logo">scoot</h1>

            <nav className="header-nav">
                <a href="#">About</a>
                <a href="#">Location</a>
                <a href="#">Careers</a>
            </nav>

            <button className="header-btn">Get Scootin</button>
        </header>
    );
}
