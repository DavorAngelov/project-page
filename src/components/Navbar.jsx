import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    const baseClass = 'hover:text-blue-600 transition-colors cursor-pointer pb-1'

    const activeClass = 'border-b-2 border-blue-600 font-semibold'

    return (
        <header
            className="flex justify-between items-center p-6 lg:px-12 rounded-2xl shadow-lg shadow-blue-200 mb-3 bg-white mt-1">
            <div className="text-2xl font-bold tracking-wider text-blue-600">CivilEngML</div>
            <nav className="hidden md:flex space-x-8">
                <NavLink to="/" className={({isActive}) => `${baseClass} ${isActive ? activeClass : ''}`}>
                    Дома
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => `${baseClass} ${isActive ? activeClass : ''}`}>
                    Анализи / Проекти
                </NavLink>
                <NavLink to="/education" className={({isActive}) => `${baseClass} ${isActive ? activeClass : ''}`}>
                    Едукација
                </NavLink>
                <NavLink to="/about" className={({isActive}) => `${baseClass} ${isActive ? activeClass : ''}`}>
                    За нас
                </NavLink>
            </nav>
            <NavLink to="/contact" className="border border-gray-500 px-4 py-2 rounded-full  hover:text-blue-600 transition-colors cursor-pointer">
                Контакт
            </NavLink>
        </header>
    )
}

export default Navbar
