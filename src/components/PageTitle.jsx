import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    let title = "Nicomax";

    switch (path) {
        case "/":
            title = "Quem está assistindo? • Nicomax";
        break;
        case "/home":
            title = "Home • Nicomax";
            break;
        case "/series":
            title = "Séries • Nicomax";
            break;
        case "/movies":
            title = "Filmes • Nicomax";
            break;
        default:
            title = "Nicomax";
    }

    document.title = title;
  }, [location]);

  return null;
}
