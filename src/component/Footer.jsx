import React from 'react';
import './Footer.css';
import appleLogo from "../assets/img/footer/appleLogo.png";
import googleLogo from "../assets/img/footer/googleLogo.png";
import facebookLogo from "../assets/img/footer/facebookLogo.png";
import twitterLogo from "../assets/img/footer/twitterLogo.png";
import instagramLogo from "../assets/img/footer/instagramLogo.png";

export default function Footer() {
    return (
        <>
            <section className="cta-section">
                <div className="footer-flex-class">
                    <h2 className="cta-title">Sign up and<br />Scoot off today</h2>

                    <div className="cta-buttons">
                        <a href="#" className="cta-btn">
                            <img src={appleLogo} alt="AppStore" height={28} />
                            <div className="block-footer-text">
                                {/* <p className="mini-text-button">Available on the</p> */}
                                <p>AppStore</p>
                            </div>

                        </a>

                        <a href="#" className="cta-btn">
                            <img src={googleLogo} alt="Google Play" height={28} />
                            GooglePlay
                        </a>
                    </div>
                </div>

                <svg className="cta-arcs" viewBox="0 0 1500 350" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M150,300 
           A150 150 0 0 1 450 300"
                        fill="none"
                        stroke="white"
                        strokeWidth="14"
                        opacity="0.35"
                    />

                    <path
                        d="M500,300 
           A150 150 0 0 1 800 300"
                        fill="none"
                        stroke="white"
                        strokeWidth="14"
                        opacity="0.35"
                    />

                    <path
                        d="M850,300 
           A150 150 0 0 1 1150 300 
           L850 300 Z"
                        fill="white"
                        opacity="0.22"
                        stroke="none"
                    />
                </svg>

            </section>

            <footer className="footer">
                <div className="footer-left">
                    <h2 style={{ fontSize: "28px", margin: 0, fontFamily: 'Space Mono'}}>scoot</h2>
                    <div className="footer-nav">
                        <span>About</span>
                        <span>Location</span>
                        <span>Careers</span>
                    </div>
                </div>

                <div className="footer-social">
                    <span><img src={facebookLogo} alt="facebookLogo" /></span>
                    <span><img src={twitterLogo} alt="twitterLogo" /></span>
                    <span><img src={instagramLogo} alt="instagramLogo" /></span>
                </div>
            </footer>
        </>
    );
}