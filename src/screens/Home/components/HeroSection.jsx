import React, { useEffect } from 'react';
import heroImg from "../../../assets/img/home/hero.png"
import "./HeroSection.css";


export default function HeroWithCircleImage() {
    return (
        <section className="hero-wrap">
            <div className="hero-left">
                <h2 className="hero-title-circle-img">Easy to use <br /> riding telemetry</h2>
                <p className="hero-desc">The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
                <a className="learn-btn" href="#">Learn More</a>
            </div>

            <div className="hero-right">
                <div className="circle-wrap">
                    <img src={heroImg} alt="hero" />
                </div>
            </div>
        </section>
    );
}
