import React, { useEffect } from 'react';
import cityImg from "../../../assets/img/home/cityComing.png"


export default function ComingCitySection() {
    return (
        <section className="hero-wrap">
            <div className="hero-right">
                <div className="circle-wrap">
                    <img src={cityImg} alt="hero" />
                </div>
            </div>
            <div className="hero-left">
                <h2 className="hero-title-circle-img">Coming to a city <br /> near you</h2>
                <p className="hero-desc">Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.</p>
                <div className="btn-wrapper">
                    <a className="learn-btn" href="/learn">Learn More</a>
                    <div className="hover-info">
                        Our telemetry system shows real-time speed, distance, trip history,
                        riding time and many more helpful stats directly inside the app.
                    </div>
                </div>

            </div>


        </section>
    );
}
