import React from 'react'

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <header className="bg-white shadow p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600">CivilEngML</h1>
                <nav className="space-x-4">
                    <a href="#" className="hover:text-blue-600">Дома</a>
                    <a href="#features" className="hover:text-blue-600">Функции</a>
                    <a href="#learn" className="hover:text-blue-600">Едукација</a>
                    <a href="#contact" className="hover:text-blue-600">Контакт</a>
                </nav>
            </header>

            {/* Herro section */}
            <section className="text-center py-20 bg-gradient-to-r from-blue-50 to-blue-100">
                <h2 className="text-4xl font-extrabold mb-4">Модерна анализа за инфраструктура и градежни проекти</h2>
                <p className="max-w-xl mx-auto text-lg mb-6">Платформа за визуелизација и машинско учење во транспорт и градежништво.</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition">
                    Започни анализа
                </button>
            </section>

            {/* Functions */}
            <section id="features" className="py-16 px-6 bg-white">
                <h3 className="text-2xl font-bold text-center mb-10">Клучни можности</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <Feature title="Визуелизација" desc="Интерактивни графици и мапи за полесно разбирање на податоците." />
                    <Feature title="Примена на ML модели" desc="Предиктивна анализа базирана на геотехнички и градежни параметри." />
                    <Feature title="Едукација" desc="Членци и туторијали за машинско учење во градежништво." />
                </div>
            </section>

            {/* Demo place for some charts ** maybe remove later **  */}
            <section className="py-16 px-6 bg-gray-100">
                <h3 className="text-2xl font-bold text-center mb-8">Пример на анализа</h3>
                <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow">
                    <p className="mb-4">📊 Тука ќе биде прикажан пример од ML анализа (график, прогноза)</p>
                    <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                        <em>Chart.js & Recharts</em>
                    </div>
                </div>
            </section>

            {/* Footer */}
            {/*Make this the footer for all rememb*/}
            <footer id="contact" className="bg-white text-center p-4 text-sm mt-10">
                © 2025 CivilEngML · Сите права задржани
            </footer>
        </div>
    );
}

function Feature({ title, desc }) {
    return (
        <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p>{desc}</p>
        </div>
    );
}

export default Home
