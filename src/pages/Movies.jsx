import Header from "../components/Header";
import BannerCarousel from "../components/BannerCarousel";

const user = JSON.parse(localStorage.getItem("user"));

export default function Movies() {
    return (
        <>
            <Header profile={user} />
            <BannerCarousel />
        </>
    );
}