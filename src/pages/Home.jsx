import Header from "../components/Header";

const user = JSON.parse(localStorage.getItem("user"));

export default function Home() {
    return (
        <>
            <Header profile={user} />
        </>
    );
}
  