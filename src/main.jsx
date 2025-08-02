import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from "./components/Navbar.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Analysis from "./pages/Analysis.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Education from "./pages/Education.jsx";



createRoot(document.getElementById('root')).render(
    <Router>
        <Navbar/>
        <div className="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/analysis" element={<Analysis />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/education" element={<Education />} />

            </Routes>
        </div>
        <Footer/>
    </Router>
)
