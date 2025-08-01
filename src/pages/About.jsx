import React from 'react';
import {
    MessageCircle,
    Monitor,
    MapPin,
    FileText
} from 'lucide-react';
import ilijoski from "../assets/bojan .jpg"
import biljana from "../assets/biljana.jpg"
import emil from "../assets/emil.jpg"
import ilinka from "../assets/ilinka.jpg"
import marija from "../assets/marija.jpg"
import Marijana from "../assets/Marijana.jpg"
import nedevska from "../assets/nedevska.webp"
import pance from "../assets/pance.jpg"
import ristov from "../assets/ristov.jpg"
import slobodan from "../assets/slobodan.webp"
import vasko from "../assets/vasko.webp"
import zlatko from "../assets/zaltko.webp"

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/*  the header */}
            <div className="bg-white py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-light text-gray-900 mb-2">
                        Продолжување на „Извлекување на знаење од податоци во транспортната инфраструктура преку
                        користење на техники од машинско учење“ за 2024/2025 година за <span className="text-gray-500">2024/2025 година.</span>
                    </h1>
                </div>
            </div>


            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                    {/* rakovoditel */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                        <div className="flex items-start gap-6">
                            <div className="flex-1">
                                <h2 className="text-2xl font-medium text-gray-900 mb-4">
                                    Раководител на проектот:
                                </h2>
                                <p className="font-light text-2xl">д-р Бојан Илијоски</p>
                            </div>

                            <div
                                className="w-38 h-48 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                <img src={ilijoski}/>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-medium text-gray-900 mb-6">
                            Корисни <span className="text-gray-500">линкови.</span>
                        </h2>

                        {/* icons */}
                        <div className="grid grid-cols-5 gap-3 mb-6">
                            <a
                                href="https://www.google.com/maps/place/Faculty+of+Computer+Science+and+Engineering/@41.9980733,21.4096973,17z"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center hover:bg-blue-600 transition"
                            >
                                <MapPin className="w-6 h-6 text-white" />
                            </a>

                            <a
                                href="/contact"
                                className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center hover:bg-green-600 transition"
                            >
                                <MessageCircle className="w-6 h-6 text-white" />
                            </a>
                            <a
                                href="https://www.finki.ukim.mk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition"
                            >
                                <Monitor className="w-6 h-6 text-white" />
                            </a>

                        </div>
                    </div>
                </div>

                {/*rezime*/}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-12">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center justify-between p-3 mb-2">
                                <h2 className="text-2xl font-medium text-gray-900 mb-2">
                                    Резиме
                                </h2>
                                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                                    <FileText></FileText>
                                </div>
                            </div>
                            <p>Мерењата и анализите од различна природа во градежништвото претставуваат еден од клучните
                                фактори во процесите во оваа гранка. Постојат повеќе причини зошто тие се исклучително
                                важни
                                и истите имаат влијание низ процесите на проектирање и планирање, но играат голема улога
                                и
                                во безбедноста, проценка на чинење, алокација на ресурси, контрола на квалитет, влијание
                                врз
                                околината, проценка на ризик, правна и регулаторна усогласеност, одржување и
                                долговечност,
                                иновации, оптимизација инт. Потврда за потреба од примена на алатки со кои се носи
                                одлука,
                                соодветствува со развојот на транспортна инфраструктура во градежништвото. Една од
                                посовремените и софицистирани техники е пробабилистичкиот концепт, каде може да се
                                прогнозира веројатноста на одреден процес преку анализа на влијанијата на варијациите на
                                усвоените влезни параметри. Методите за примена на веројатносни техники, стануваат сè
                                поважни. Во рамките на овој научен проект ќе бидат предложени решенија на проблемите, и
                                тоа
                                од примена на серија на различни постапки за анализа, започнувајќи од едноставни
                                емпириски,
                                па се до сложени методи од машинко и длабоко учење.
                                Основната цел на проектот е преку различни анализи и модели за машинско учење, да се
                                извлечат знаења кои ќе овозможат оптимизација на процесите и иситите ќе ги направат
                                побрзи,
                                поекономични и посигурни. Примената на овие техники како една од технологиите на
                                вештачка
                                интелегенција, претставува револуционерен пристап во решавање на комплексни проблеми
                                поврзани со предвидувања и димензионирања во градежништвото.</p>
                        </div>
                    </div>
                </div>

                {/*members*/}
                <div className="mb-8">
                    <h2 className="text-4xl font-light text-gray-900 mb-2">
                        Членови на проектот:
                    </h2>
                </div>

                {/* members grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            <img src={zlatko}/></div>
                        <p className="text-gray-900 font-medium mt-4">д-р Златко Зафировски</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            <img src={marija}/></div>
                        <p className="text-gray-900 font-medium mt-4">д-р Марија Михова</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            <img src={Marijana}/></div>
                        <p className="text-gray-900 font-medium mt-4">д-р Маријана Лазаревска</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            <img src={slobodan}/></div>
                        <p className="text-gray-900 font-medium mt-4">д-р Слободан Огњеновиќ</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            <img src={ilinka}/></div>
                        <p className="text-gray-900 font-medium mt-4">д-р Илинка Иваноска</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            <img src={emil}/></div>
                        <p className="text-gray-900 font-medium mt-4">д-р Емил Станков</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            <img src={ristov}/></div>
                        <p className="text-gray-900 font-medium mt-4">м-р Ристе Ристов</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            <img src={nedevska}/></div>
                        <p className="text-gray-900 font-medium mt-4">м-р Ивона Недевска</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            <img src={vasko}/></div>
                        <p className="text-gray-900 font-medium mt-4">м-р Васко Гацевски</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            <img src={biljana}/></div>
                        <p className="text-gray-900 font-medium mt-4">д-р Билјана Тојтовска</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            <img src={pance}/></div>
                        <p className="text-gray-900 font-medium mt-4">д-р Панче Рибарски</p>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default About;