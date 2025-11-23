import './styles/app.scss'
import Home from "./pages/Home/Home.tsx";
import {Route, Routes} from "react-router-dom";
import Listing from "./pages/Listing/Listing.tsx";
import logo from "./assets/Logo.png";

function App() {

    return (
        <div className="app-container">

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/:id" element={<Listing/>} />
            </Routes>
        </div>
    );
}

export default App
