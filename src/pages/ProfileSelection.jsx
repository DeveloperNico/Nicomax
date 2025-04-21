import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import "./ProfileSelection.css";

// Perfis padrão
const defaultProfiles = [
    { name: "Nico", img: "/assets/nico.png" },
    { name: "Ariane", img: "/assets/ariane.png" },
    { name: "João", img: "/assets/joao.png" },
    { name: "Gabi", img: "/assets/gabi.png" },
    { name: "Ágatha", img: "/assets/agatha.png" }
];

export default function ProfileSelection() {
    const navigate = useNavigate();
    const [customProfiles, setCustomProfiles] = useState([]);
    const [excludedProfiles, setExcludedProfiles] = useState([]);

    // Carrega perfis do localStorage
    useEffect(() => {
        const savedCustom = JSON.parse(localStorage.getItem("customProfiles")) || [];
        const savedExcluded = JSON.parse(localStorage.getItem("excludedProfiles")) || [];
        setCustomProfiles(savedCustom);
        setExcludedProfiles(savedExcluded);
    }, []);

    // Adicionar novo perfil
    const handleAddProfile = () => {
        const name = prompt("Digite o nome do novo perfil:");
        if (!name) return;

        const img = prompt("Cole a URL da imagem do perfil:");
        if (!img) return;

        const newProfile = { name, img };
        const updated = [...customProfiles, newProfile];

        setCustomProfiles(updated);
        localStorage.setItem("customProfiles", JSON.stringify(updated));
    };

    // Deletar qualquer perfil (custom ou padrão)
    const handleDelete = (nameToDelete) => {
        const isCustom = customProfiles.some(p => p.name === nameToDelete);
        
        if (isCustom) {
            const updated = customProfiles.filter(p => p.name !== nameToDelete);
            setCustomProfiles(updated);
            localStorage.setItem("customProfiles", JSON.stringify(updated));
        } else {
            const updatedExcluded = [...excludedProfiles, nameToDelete];
            setExcludedProfiles(updatedExcluded);
            localStorage.setItem("excludedProfiles", JSON.stringify(updatedExcluded));
        }
    };

    // Selecionar perfil
    const handleSelect = (profile) => {
        localStorage.setItem("user", JSON.stringify(profile));
        navigate("/home");
    };

    // Lista final de perfis visíveis (excluindo os que foram "deletados")
    const visibleDefaultProfiles = defaultProfiles.filter(
        (profile) => !excludedProfiles.includes(profile.name)
    );

    const allProfiles = [...visibleDefaultProfiles, ...customProfiles];

    return (
        <div className="profile-page">
            <h1>Quem está assistindo?</h1>
            <div className="profile-list">
                {allProfiles.map((profile) => (
                    <ProfileCard
                        key={profile.name}
                        name={profile.name}
                        img={profile.img}
                        onSelect={() => handleSelect(profile)}
                        onDelete={() => handleDelete(profile.name)}
                    />
                ))}
                <div className="addProfile new" onClick={handleAddProfile}>
                    <span>+</span>
                </div>
            </div>
        </div>
    );
}
