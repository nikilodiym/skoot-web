// ...existing code...
import React from "react";
import "./JoinUsSection.css";
import OurTech from "../../../assets/img/about/OurTech.png";
import OurIntegrity from "../../../assets/img/about/OurIntegrity.png";
import OurCommunity from "../../../assets/img/about/OurCommunity.png";

const JoinUsSection = () => {
    return (
        <section className="joinus">
            <h2 className="joinus__title">Why join us?</h2>

            <div className="joinus__items">

                {/* Item 1 */}
                <div className="joinus__item">
                    <div className="joinus__imgWrapper">
                        <img src={OurTech} alt="Our tech" className="joinus__img" />
                        {/* <div className="joinus__circle">01</div> */}
                    </div>
                    <h3 className="joinus__itemTitle">Our tech</h3>
                    <p className="joinus__text">
                        We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!
                    </p>
                </div>

                {/* Item 2 */}
                <div className="joinus__item">
                    <div className="joinus__imgWrapper">
                        <img src={OurIntegrity} alt="Our integrity" className="joinus__img" />
                        {/* <div className="joinus__circle">02</div> */}
                    </div>
                    <h3 className="joinus__itemTitle">Our integrity</h3>
                    <p className="joinus__text">
                        We are fully committed to deliver a great yet safe, sustainable
                        micro-mobility experience in every city we serve.
                    </p>
                </div>

                {/* Item 3 */}
                <div className="joinus__item">
                    <div className="joinus__imgWrapper">
                        <img src={OurCommunity} alt="Our community" className="joinus__img" />
                        {/* <div className="joinus__circle">03</div> */}
                    </div>
                    <h3 className="joinus__itemTitle">Our community</h3>
                    <p className="joinus__text">
                        We support every community we serve. All workers are paid a living
                        wage based on their location and are Scoot employees.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default JoinUsSection;
// ...existing code...