import React from 'react'
import finkiLogo from '../assets/finki_newlogo_a1_mk.png'
const Footer = () => {
    return (
        <footer id="contact" className="bg-white text-center p-4 text-sm mt-10">
            © 2025 CivilEngML · Сите права задржани
            <div className="flex justify-center mt-7">
                <img src={finkiLogo} alt="Finki Logo" className="h-12" />
            </div>
        </footer>
    )
}
export default Footer
