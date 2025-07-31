import React from 'react'

const Navbar = () => {
    return (
        <header className="flex justify-between items-center p-6 lg:px-12 rounded-2xl shadow-lg shadow-blue-200 mb-3 bg-white mt-1">
            <div className="text-2xl font-bold tracking-wider text-blue-600">CivilEngML</div>
            <nav className="hidden md:flex space-x-8">
                <a href="#" className="hover:text-blue-600  transition-colors cursor-pointer">Дома</a>
                <a href="#" className="hover:text-blue-600 transition-colors cursor-pointer">Анализи / Проекти</a>
                <a href="#" className="hover:text-blue-600 transition-colors cursor-pointer">Едукација</a>
                <a href="#" className="hover:text-blue-600 transition-colors cursor-pointer">За нас</a>
            </nav>
            <button className="border border-gray-500 px-4 py-2 rounded hover:text-blue-600 transition-colors cursor-pointer">
                Контакт
            </button>
        </header>
    )
}
export default Navbar
