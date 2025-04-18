import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import "./ProfileSelection.css";

const profiles = [
    { name: "Nico", img: "/assets/nico.png" },
    { name: "Ariane", img: "/assets/ariane.png" },
    { name: "João", img: "/assets/joao.png" },
    { name: "Gabi", img: "/assets/gabi.png" },
    { name: "Ágatha", img: "/assets/agatha.png" }
];

export default function ProfileSelection() {
    const navigate = useNavigate();

    const handleSelect = (profile) => {
        localStorage.setItem("user", JSON.stringify(profile));
        navigate("/home");
    }

    return (
        <div className="profile-page">
            <h1>Quem está assistindo?</h1>
            <div className="profile-list">
                {profiles.map((profile) => (
                    <ProfileCard
                        key={profile.name}
                        name={profile.name}
                        img={profile.img}
                        onSelect={() => handleSelect(profile)}
                    />
                ))}
                <div className="addProfile new">
                    <span>+</span>
                </div>
            </div>
        </div>
    );
}