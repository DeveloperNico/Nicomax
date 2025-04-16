import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileSelection from "./pages/ProfileSelection";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProfileSelection />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
