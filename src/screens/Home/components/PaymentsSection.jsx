import React, { useEffect } from 'react';
import paymentImg from "../../../assets/img/home/paymentImg.png"
// import "./HeroSection.css";


export default function PaymentsSection() {
    return (
        <section className="hero-wrap">
            <div className="hero-left">
                <h2 className="hero-title-circle-img">Zero hassle <br /> payments</h2>
                <p className="hero-desc">Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.</p>
                <a className="learn-btn" href="#">Learn More</a>
            </div>

            <div className="hero-right">
                <div className="circle-wrap">
                    <img src={paymentImg} alt="hero" />
                </div>
            </div>
        </section>
    );
}
