import React from "react";
import Banner from "./components/Banner";
import StepsSection from "./components/StepsSection";
import HeroWithCircleImage from "./components/HeroSection";
import ComingCitySection from "./components/ComingCitySection";
import PaymentsSection from "./components/PaymentsSection";
import Footer from "../../component/Footer.jsx";

function Home() {
    return (
        <>
            <Banner />
            <StepsSection />
            <HeroWithCircleImage />
            <ComingCitySection />
            <PaymentsSection />
            <Footer />
        </>
    )
}

export default Home