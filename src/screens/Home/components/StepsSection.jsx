import React from "react";
import "./StepsSection.css";
import phoneImg from "../../../assets/img/home/phone_yellow_able.png"
import skootImg from "../../../assets/img/home/skoot_state_home.png"
import skootRunImg from "../../../assets/img/home/skoot_run_home.png"

export default function StepsSection() {
    return (
        <section className="steps">
            <div className="steps__item">
                <div>
                    <img className="steps-img-wrap" src={phoneImg} alt="locate" />
                </div>
                <h3 className="steps__title">Locate with app</h3>
                <p className="steps__text">
                    Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.
                </p>
            </div>

            <div className="steps__item">
                <div>
                    <img className="steps-img-wrap" src={skootImg} alt="scooter" />
                </div>
                <h3 className="steps__title">Pick your scooter</h3>
                <p className="steps__text">
                    We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.
                </p>
            </div>

            <div className="steps__item">
                <div>
                    <img className="steps-img-wrap" src={skootRunImg} alt="ride" />
                </div>
                <h3 className="steps__title">Enjoy the ride</h3>
                <p className="steps__text">
                    Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you're off! Always lock bikes away from walkways and accessibility ramps.
                </p>
            </div>
        </section>
    );
}
