import Header from "../components/Header";
import BannerCarousel from "../components/BannerCarousel";
import ListMovies from "../components/ListMovies";

const user = JSON.parse(localStorage.getItem("user"));

export default function Home() {
    return (
        <>
            <Header profile={user} />
            <BannerCarousel />
            <ListMovies />
        </>
    );
}
  