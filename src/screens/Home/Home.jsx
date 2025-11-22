import React from "react";
import Header from "../../component/Header";
import "./Home.css";
import heroImg from "../../assets/img/home/headerImg.png";
import arrowPlaceholder from "../../assets/img/home/arrow.png";
import lineArrow from "../../assets/img/home/lineArrow.png"

export default function Home() {
    return (
        <div className="home">
            <section
                className="hero"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <div className="hero-overlay" />

                <div className="hero-content">
                    <h1 className="hero-title">
                        Scooter sharing <br /> made simple
                    </h1>
                    <div className="hero-arrow-line">
                        <img className="line-arrow-hero" src={lineArrow} alt="" />
                        <div className="hero-content-duo">
                            <p className="hero-text">
                                Scoot takes the hassle out of urban mobility. Our bikes
                                are placed in convenient locations in each of our cities.
                                Use our app to locate the nearest bike, unlock it with a
                                tap, and you’re away!
                            </p>
                            <button className="hero-btn">Get Scootin</button>
                        </div>
                        <img
                            src={arrowPlaceholder}
                            alt="arrow"
                            className="hero-arrow-img"
                        />
                    </div>


                </div>

                {/* Індикатори слайдера */}
                <div className="hero-slider-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot active"></span>
                </div>
            </section>
        </div>
    );
}