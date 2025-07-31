import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import heroImage from "../assets/drones-in-construction.png"
import {BarChart3, Brain, BookOpen} from "lucide-react";

const Home = () => {
    const data = [
        {depth: 0, stability: 100},
        {depth: 2, stability: 92},
        {depth: 4, stability: 87},
        {depth: 6, stability: 81},
        {depth: 8, stability: 74},
        {depth: 10, stability: 65},
        {depth: 12, stability: 58},
        {depth: 14, stability: 49},
        {depth: 16, stability: 40},
    ];

    return (
        <div className="min-h-screen  bg-gray-50 text-gray-800">

            {/* main sect */}
            <main className="px-6 lg:px-12 py-12 rounded-2xl shadow-lg shadow-blue-200 mb-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center ">
                    {/* left column */}
                    <div>
                        {/* hero rext */}
                        <div className="mb-12">
                            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                                Модерна анализа за инфраструктура и градежни проекти
                            </h1>
                            {/* <p className=" mx-auto text-lg mb-6">Платформа за визуелизација и машинско учење во транспорт и градежништво.</p>*/}
                        </div>

                        {/* buttons maybe add more or remove */}
                        <div className="flex space-x-4 mb-16">
                            <button
                                className="bg-blue-400  hover:bg-blue-200 px-8 py-3 rounded transition-colors cursor-pointer">
                                Започни анализа
                            </button>
                        </div>


                    </div>

                    {/* right column */}
                    <div className="relative">
                        <div
                            className="relative bg-white border border-blue-300 p-6 rounded-2xl rounded-bl-none mb-8 shadow-md font-medium">
                            <p className="leading-relaxed text-gray-800">
                                Платформа за визуелизација и машинско учење во транспорт и градежништво.
                            </p>
                        </div>

                        <img
                            src={heroImage}
                            alt="поглед на градежен проект"
                            className="rounded-lg shadow-md w-full max-h-[400px] object-cover"
                        />
                    </div>

                </div>
            </main>

            {/* features*/}
            <section id="features"
                     className="py-16 px-6 lg:px-12 bg-gray-100 rounded-2xl shadow-lg shadow-blue-200 mb-4">
                <h3 className="text-3xl font-bold text-center mb-12 ">Клучни можности</h3>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div
                        className="bg-gray-200 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-400 hover:border-blue-200">
                        <div className="w-16 h-16 mx-auto mb-6 bg-blue-400 rounded-lg flex items-center justify-center">
                            <BarChart3></BarChart3>
                        </div>
                        <h4 className="text-xl font-semibold mb-4 text-center">Визуелизација</h4>
                        <p className="text-center leading-relaxed">Интерактивни графици и мапи за разбирање на градежни
                            податоци.</p>
                    </div>
                    <div
                        className="bg-gray-200 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-400 hover:border-blue-200">
                        <div className="w-16 h-16 mx-auto mb-6 bg-blue-400 rounded-lg flex items-center justify-center">
                            <Brain></Brain>
                        </div>
                        <h4 className="text-xl font-semibold mb-4  text-center">Машинско учење</h4>
                        <p className=" text-center leading-relaxed">Примена на предиктивни ML модели за анализа на
                            стабилност, чинење и ризици.</p>
                    </div>
                    <div
                        className="bg-gray-200 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-400 hover:border-blue-200">
                        <div className="w-16 h-16 mx-auto mb-6 bg-blue-400 rounded-lg flex items-center justify-center">
                            <BookOpen></BookOpen>
                        </div>
                        <h4 className="text-xl font-semibold mb-4  text-center">Едукација</h4>
                        <p className=" text-center leading-relaxed">Туторијали, примери и објаснување на инженерски
                            концепти.</p>
                    </div>

                </div>
            </section>

            {/* analysis */}
            <section id="analysis"
                     className="py-16 px-6 lg:px-12 rounded-2xl shadow-lg shadow-blue-200 mb-4 bg-gray-100">
                <h3 className="text-3xl font-bold text-center mb-12 ">Пример на анализа</h3>
                <div className="max-w-6xl mx-auto p-8 rounded-xl shadow-2xl border border-blue-200">
                    <div className="mb-6">
                        <p className="text-lg mb-4 ">📊 Пример: Предвидување на стабилност на почва во зависност од
                            длабочина</p>
                    </div>
                    <div className="h-80 bg-white rounded-lg p-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="depth"
                                       label={{value: 'Длабочина (m)', position: 'insideBottomRight', offset: 0}}/>
                                <YAxis label={{value: 'Стабилност (%)', angle: -90, position: 'insideLeft'}}/>
                                <Tooltip/>
                                <Line type="monotone" dataKey="stability" stroke="#3B82F6" strokeWidth={3}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Home;