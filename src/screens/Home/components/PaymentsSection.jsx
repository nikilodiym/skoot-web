import React, { useEffect } from 'react';
import paymentImg from "../../../assets/img/home/paymentImg.png"
// import "./HeroSection.css";


export default function PaymentsSection() {
    return (
        <section className="hero-wrap">
            <div className="hero-left">
                <h2 className="hero-title-circle-img">Zero hassle <br /> payments</h2>
                <p className="hero-desc">Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.</p>
                <div className="btn-wrapper">
                    <a className="learn-btn" href="/learn">Learn More</a>
                    <div className="hover-info">
                        Our telemetry system shows real-time speed, distance, trip history,
                        riding time and many more helpful stats directly inside the app.
                    </div>
                </div>
            </div>

            <div className="hero-right">
                <div className="circle-wrap">
                    <img src={paymentImg} alt="hero" />
                </div>
            </div>
        </section>
    );
}
