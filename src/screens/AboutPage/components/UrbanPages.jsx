import react from "react";
import urbanPages from "../../../assets/img/about/urbanPagesPhoto.png"
import "./UrbanPages.css";

export default function MobilityAboutSection() {
    return (
        <section className="mobil-wrap">
            <div className="mobil-right">
                <div className="circle-wrap">
                    <img src={urbanPages} alt="urban" />
                </div>
            </div>
            <div className="mobil-left">
                <h2 className="mobil-title-circle-img">Better urban <br /> living</h2>
                <p className="mobil-desc">We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.</p>
                <div className="btn-wrapper">
                    <a className="learn-btn-mobil-sect" href="#">Learn More</a>
                    <div className="hover-info">
                        Our telemetry system shows real-time speed, distance, trip history,
                        riding time and many more helpful stats directly inside the app.
                    </div>
                </div>

            </div>
        </section>
    )
}