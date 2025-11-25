import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const howItWorks = [
        {
            q: "How do I download the app?",
            a: "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
        },
        {
            q: "Can I find a nearby Scoots?",
            a: "Yes, the app will show you all available scooters in your area."
        },
        {
            q: "Do I need a license to ride?",
            a: "No license is required for Scoot rides."
        }
    ];

    const safeDriving = [
        {
            q: "Should I wear a helmet?",
            a: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws."
        },
        {
            q: "How about the rules & regulations?",
            a: "Follow local traffic rules, use bike lanes, and ride carefully."
        },
        {
            q: "What if I damage my Scoot?",
            a: "Report the damage in the app. Our support team will take care of it."
        }
    ];

    return (
        <section className="faq">
            <h2 className="faq__title">FAQs</h2>
            <div className="faq__section">
                <h3 className="faq__subtitle">How it works</h3>
                <div className="faq__list">
                    {howItWorks.map((item, index) => (
                        <div key={index} className="faq__item">
                            <button className="faq__question" onClick={() => toggleFAQ(index)}>
                                <span>{item.q}</span>
                                <div
                                    className={`faq__arrow ${openIndex === index ? "faq__arrow--open" : ""}`}
                                ></div>
                            </button>
                            <div
                                className={`faq__answerWrapper ${openIndex === index ? "open" : ""
                                    }`}
                            >
                                <p className="faq__answer">{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="faq__section">
                <h3 className="faq__subtitle">Safe driving</h3>
                <div className="faq__list">
                    {safeDriving.map((item, index) => (
                        <div key={index} className="faq__item">
                            <button className="faq__question" onClick={() => toggleFAQ("s" + index)}>
                                <span>{item.q}</span>
                                <div
                                    className={`faq__arrow ${openIndex === "s" + index ? "faq__arrow--open" : ""}`}
                                ></div>
                            </button>
                            <div
                                className={`faq__answerWrapper ${openIndex === "s" + index ? "open" : ""
                                    }`}
                            >
                                <p className="faq__answer">{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
