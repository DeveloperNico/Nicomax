import Header from "../components/Header";
import BannerCarouselSeries from "../components/BannerCarouselSeries";
import SeriesList from "../components/SeriesList";
import Footer from "../components/Footer";

const user = JSON.parse(localStorage.getItem("user"));

export default function Movies() {
    return (
        <>
            <Header profile={user} />
            <BannerCarouselSeries />
            <SeriesList />
            <Footer />
        </>
    );
}