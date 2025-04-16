import { useNavigate } from "react-router-dom";
import "./ProfileSelection.css";

const profiles = [
    {
        name: "Nico",
        img: "/assets/nico.png",
    },

    {
        name: "Ariane",
        img: "/assets/ariane.png",
    },

    {
        name: "João",
        img: "/assets/joao.png",
    },

    {
        name: "Gabi",
        img: "/assets/gabi.png",
    }
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
                    <div key={profile.name} className="profile" onClick={() => handleSelect(profile)}>
                        <img src={profile.img} alt={profile.name} />
                        <span>{profile.name}</span>
                    </div>
                ))}
                <div className="add-profile new">
                    <span>+</span>
                </div>
            </div>
        </div>
    );
}