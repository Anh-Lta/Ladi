import "./App.scss";
import About from "./pages/About";
import MainPage from "./pages/MainPage";
import { Route, Routes, Link } from "react-router-dom";
import Features from "./pages/Features";
import Solution from "./pages/Solution";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="About" element={<About />} />
            <Route path="Features" element={<Features />} />
            <Route path="Solution" element={<Solution />} />
        </Routes>
    );
}

export default App;
