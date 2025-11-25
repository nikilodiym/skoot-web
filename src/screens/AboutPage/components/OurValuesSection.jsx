import React from "react";
import "./ValuesSection.css";
import OurTech from "../../../assets/img/about/OurTech.png";
import OurIntegrity from "../../../assets/img/about/OurIntegrity.png";
import OurCommunity from "../../../assets/img/about/OurCommunity.png";

const ValuesSection = () => {
    return (
        <section className="values">
            <h2 className="values__title">Our values</h2>

            <div className="values__items">

                {/* Item 1 */}
                <div className="values__item">
                    <div className="values__imgWrapper">
                        <img src={OurTech} alt="Our tech" className="values__img" />
                        {/* <div className="values__circle">01</div> */}
                    </div>
                    <h3 className="values__itemTitle">Our tech</h3>
                    <p className="values__text">
                        We’re using cutting edge technology to drive accessible urban
                        transportation forward. Our fully electric scooters are a joy to ride!
                    </p>
                </div>

                {/* Item 2 */}
                <div className="values__item">
                    <div className="values__imgWrapper">
                        <img src={OurIntegrity} alt="Our integrity" className="values__img" />
                        {/* <div className="values__circle">02</div> */}
                    </div>
                    <h3 className="values__itemTitle">Our integrity</h3>
                    <p className="values__text">
                        We are fully committed to deliver a great yet safe, sustainable
                        micro-mobility experience in every city we serve.
                    </p>
                </div>

                {/* Item 3 */}
                <div className="values__item">
                    <div className="values__imgWrapper">
                        <img src={OurCommunity} alt="Our community" className="values__img" />
                        {/* <div className="values__circle">03</div> */}
                    </div>
                    <h3 className="values__itemTitle">Our community</h3>
                    <p className="values__text">
                        We support every community we serve. All workers are paid a living
                        wage based on their location and are Scoot employees.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ValuesSection;
