import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Analysis from './pages/Analysis.jsx'
import Models from './pages/Models.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

function App() {


  return (
    <Router>
      <Navbar/>
        <div className="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/analysis" element={<Analysis />} />
                <Route path="/models" element={<Models />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
        <Footer/>
    </Router>
  )
}

export default App
