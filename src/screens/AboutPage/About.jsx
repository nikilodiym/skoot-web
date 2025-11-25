import React from "react";
import Banner from "./components/BannerAbout.jsx"
import MobilityAboutSection from "./components/MobilityAboutSection.jsx";
import Footer from "../../component/Footer.jsx";
import UrbanPages from "./components/UrbanPages.jsx";
import OurValuesSection from "./components/OurValuesSection.jsx";
import FAQ from "./components/FAQ.jsx";

function About() {
    return (
        <>
            <Banner />
            <MobilityAboutSection />
            <UrbanPages />
            <OurValuesSection />
            <FAQ />
            <Footer />
        </>
    )
}

export default About