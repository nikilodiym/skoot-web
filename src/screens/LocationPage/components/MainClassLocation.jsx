import react from "react";
import "./MainClassLocation.css";
import { useState } from "react";
import locationImg from "../../../assets/img/location/locations-card.png"
import locationImgPhoneEdition from "../../../assets/img/location/Group 24.png"

export default function MainClassLocatio() {
    const [open, setOpen] = useState(false);
    return (
        <section className="cities-section">
            <div className="map-wrapper">
                <img className="img-location-main-screen" src={locationImg} alt="" />
                <img className="edition-for-phone-img-location" src={locationImgPhoneEdition} alt="" />

                <div className="city city-newyork">New York</div>
                <div className="city city-london">London</div>
                <div className="city city-yokohama">Yokohama</div>
                <div className="city city-jakarta">Jakarta</div>

                <div className="button-elevemt-phone-edition">
                    <a href="https://www.nyc.fr/sejour/infos-pratiques/histoire-new-york/"><button>New York</button></a>
                    <a href="https://www.history.com/articles/london-england"><button>London</button></a>
                    <a href="https://liberia.klm.com/travel-guide/destinations/asia/indonesia/jakarta"><button>Jakarta</button></a>
                    <a href="https://japansociety.org/culture-community/kanagawa/tourism-resources/yokohama/"><button>Yokohama</button></a>
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

                <button className="message-btn" onClick={() => setOpen(true)}>Message Us</button>
                {open && (
                    <>
                        <div className="overlay" onClick={() => setOpen(false)}></div>

                        <div className="contact-window">
                            <h2>Our Contacts</h2>
                            <div className="center-content-contacts">
                                <p>Email: nikitakrenov@gmail.com</p>
                                <p>Phone: +380 97 396 7019</p>
                            </div>

                            <button onClick={() => setOpen(false)}>Close</button>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}