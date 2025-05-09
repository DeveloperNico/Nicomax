import Header from "../components/Header";
import BannerCarousel from "../components/BannerCarousel";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

const user = JSON.parse(localStorage.getItem("user"));

export default function Movies() {
    return (
        <>
            <Header profile={user} />
            <BannerCarousel />
            <MovieList />
            <Footer />
        </>
    );
}