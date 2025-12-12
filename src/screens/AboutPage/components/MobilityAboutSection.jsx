import react from "react";
import mobilImg from "../../../assets/img/about/mobilSection.png"
import "./MobilityAboutSection.css";

export default function MobilityAboutSection() {
    return (
        <section className="mobil-wrap">
            <div className="mobil-left">
                <h2 className="mobil-title-circle-img">Mobility for the <br /> digital era</h2>
                <p className="mobil-desc">Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.</p>
                <div className="btn-wrapper">
                    <a className="learn-btn-mobil-sect" href="/learn">Learn More</a>
                    <div className="hover-info">
                        Our telemetry system shows real-time speed, distance, trip history,
                        riding time and many more helpful stats directly inside the app.
                    </div>
                </div>
            </div>
            <div className="mobil-right">
                <div className="circle-wrap">
                    <img src={mobilImg} alt="hero" />
                </div>
            </div>
        </section>
    )
}