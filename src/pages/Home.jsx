// src/pages/Home.jsx
export default function Home() {
    const user = JSON.parse(localStorage.getItem("user"));
  
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: "3rem" }}>
        <h1>Bem-vindo, {user?.name || "Usuário"}!</h1>
        <img src={user?.img} alt={user?.name} style={{ borderRadius: "50%", width: "120px" }} />
      </div>
    );
  }
  