import react  from "react";
import Header from "../../component/Header";
import Banner from "./components/BannerLocation";
import MainClassLocation from "./components/MainClassLocation";
import Footer from "../../component/Footer";

function Location(){
    return(
        <>
            <Banner />
            <MainClassLocation />
            <Footer />
        </>
    )
}

export default Location;