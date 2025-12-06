import React, { useState } from "react";
import "./Header.css";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="header">

            <div className="burger" onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1 className="header-logo"><a href="/">scoot</a></h1>

            <nav className={`header-nav ${open ? "open" : ""}`}>
                <a href="/about">About</a>
                <a href="/location">Location</a>
                <a href="/careers">Careers</a>
                <a href="" className="added-in-mobil-arrientation-block">Get Scootin</a>
            </nav>

            <button className="header-btn">Get Scootin</button>


        </header>
    );
}
