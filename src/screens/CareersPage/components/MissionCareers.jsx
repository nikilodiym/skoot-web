import React, { useState } from "react";
import RegistrationModal from "./RegistrationModal";
import mobilImg from "../../../assets/img/careers/waiterImg.png";
import "./MissionCareers.css";

export default function MobilityAboutSection() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className="mission-wrap">
                <div className="mission-left">
                    <h2 className="mission-title">Care to join our <br /> mission?</h2>
                    <p className="mission-desc">
                        We’re always looking for ambitious individuals to help us on our journey.
                    </p>

                    <button
                        className="learn-btn-mission-sect"
                        onClick={() => setIsOpen(true)}
                    >
                        Say Hello
                    </button>
                </div>

                <div className="mission-right">
                    <div className="circle-wrap-mission">
                        <img src={mobilImg} alt="hero" />
                    </div>
                </div>
            </section>

            <RegistrationModal 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}
