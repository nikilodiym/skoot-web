import react from "react";
import BannerCareers from "./components/BannerCareers";
import MissionCareers from "./components/MissionCareers";
import JoinUsSection from "./components/JoinUsSection";
import JobsList from "./components/JobsList";
import Footer from "../../component/Footer";

function Careers() {
    return (
        <>
            <BannerCareers />
            <MissionCareers />
            <JoinUsSection />
            <JobsList />
            <Footer />
        </>
    )
}

export default Careers;