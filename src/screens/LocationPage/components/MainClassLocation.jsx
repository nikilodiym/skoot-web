import react from "react";
import "./MainClassLocation.css";
import locationImg from "../../../assets/img/location/locations-card.png"
import locationImgPhoneEdition from "../../../assets/img/location/Group 24.png"

export default function MainClassLocatio() {
    return (
        <section className="cities-section">
            <div className="map-wrapper">
                <img className="img-location-main-screen" src={locationImg} alt="" />
                <img className="edition-for-phone-img-location" src={locationImgPhoneEdition} alt="" />
                {/* <div className="city-tag newyork">New York</div>
                <div className="city-tag london">London</div>
                <div className="city-tag yokohama">Yokohama</div>
                <div className="city-tag jakarta">Jakarta</div> */}
                <div className="button-elevemt-phone-edition">
                    <button>New York</button>
                    <button>London</button>
                    <button>Jakarta</button>
                    <button>Yokohama</button>
                </div>
            </div>
            

            <div className="bottom-content">
                <div className="left">
                    <h2>Your city<br />Not listed?</h2>
                    <p>
                        If you'd like to see Scoot in your hometown, be sure to let us know.
                        We track requests and plan launches based on demand.
                        Feel free to message us by clicking the link or messaging us on social.
                    </p>
                </div>

                <button className="message-btn">Message Us</button>
            </div>
        </section>
    )
}