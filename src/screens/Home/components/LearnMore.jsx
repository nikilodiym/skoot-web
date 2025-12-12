import react from "react";
import "./LearnMore.css";
import Footer from "../../../component/Footer";

export default function LearnMore() {
    return (
        <div className="learn">
            <section className="learnMoreBackgroundBanner">
                <h1 className="learn-more-title">Learn More About Scoot</h1>

                {/* <a href="#" className="learn-more-btn">Learn More</a> */}
            </section>
            <div className="main-learn-more">
                <p className="learn-more-desc">
                    Discover how Scoot is revolutionizing urban mobility with our
                    user-friendly app and eco-friendly scooters. Learn about our
                    features, safety measures, and commitment to sustainability.
                </p>
            </div>
            <Footer />
        </div>

    )
}