import Header from "../components/Header";
import BannerCarousel from "../components/BannerCarousel";
import ListMovies from "../components/ListMovies";
import Footer from "../components/Footer";

const user = JSON.parse(localStorage.getItem("user"));

export default function Home() {
    return (
        <>
            <Header profile={user} />
            <BannerCarousel />
            <ListMovies />
            <Footer />
        </>
    );
}
  