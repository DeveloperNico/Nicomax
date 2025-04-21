import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileSelection from "./pages/ProfileSelection";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import PageTitle from "./components/PageTitle";

function App() {
    return (
        <Router>
            <PageTitle />
            <Routes>
                <Route path="/" element={<ProfileSelection />} />
                <Route path="/home" element={<Home />} />
                <Route path="/series" element={<Series />} />
                <Route path="/movies" element={<Movies />} />
            </Routes>
        </Router>
    );
}

export default App;
