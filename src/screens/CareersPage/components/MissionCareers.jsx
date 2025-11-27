import react from "react";
import mobilImg from "../../../assets/img/careers/waiterImg.png"
import "./MissionCareers.css"

export default function MobilityAboutSection() {
    return (
        <section className="mission-wrap">
            <div className="mission-left">
                <h2 className="mission-title">Care to join our <br /> mission?</h2>
                <p className="mission-desc">We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!</p>
                <a className="learn-btn-mission-sect" href="#">Say Hello</a>
            </div>
            <div className="mission-right">
                <div className="circle-wrap-mission">
                    <img src={mobilImg} alt="hero" />
                </div>
            </div>
        </section>
    )
}