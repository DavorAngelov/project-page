import React from 'react';
import {useParams, Link, NavLink} from 'react-router-dom';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import avtopat from '../assets/photosProjects/avtopat.jpg'
import most from '../assets/photosProjects/most.jpg'
import svleciste from '../assets/photosProjects/svlecistte.jpg'
import zeleznicka from '../assets/photosProjects/zeleznicka.jpg'

const projects = [
    {
        id: 1,
        title: 'Изградба на мост на Вардар',
        description: 'Мост со преднапрегнат бетон, анализа на товар и динамика.',
        image: most,
        overview: 'Овој проект претставува изградба на модерен мост над реката Вардар со употреба на преднапрегнат бетон. Главниот фокус е ставен на структурната анализа преку симулации и мерења во реално време.',
        dataMethods: 'Прибирање на податоци преку сензори поставени на мостот за мерење на товар, вибрации, и температури. Дополнително, се користат податоци од сообраќајни камери и историски климатски записи.',
        problem: 'Целта е предвидување на структурни оштетувања, абење и идентификација на точки на замор кои можат да доведат до сериозни ризици по безбедноста.',
        methodology: 'Се користи машинско учење за анализа на временските серии на сензорски податоци и симулации. Извршена е обработка на податоци, нормализација и селекција на значајни карактеристики.',
        algorithms: 'Linear Regression, Random Forest',
        models: 'Stress Prediction Model, Load Capacity Estimator',
        conclusion: 'Преку користење на ML се постигнува навремено детектирање на потенцијални ризици, што овозможува одржување пред да настане дефект.',
        chartData: [
            { year: '2020', stress: 30 },
            { year: '2021', stress: 45 },
            { year: '2022', stress: 40 },
            { year: '2023', stress: 50 },
            { year: '2024', stress: 55 },
        ],
        xKey: 'year',
        yKey: 'stress'
    },
    {
        id: 2,
        title: 'Автопат Скопје – Штип',
        description: 'Инфраструктурен проект со фокус на безбедност и проток.',
        image: avtopat,
        overview: 'Изградба на модерен автопат кој ги поврзува Скопје и Штип со цел подобрување на логистичкиот проток и намалување на времето на патување.',
        dataMethods: 'Податоци од надзорни камери, сензори на коловоз, GPS траги од возила, и анализа на историја на несреќи.',
        problem: 'Препознавање на делници со зголемен ризик од несреќи и идентификување на влијание на временски и сообраќајни услови врз протокот.',
        methodology: 'Класификација и кластерирање на локации по ризик. Предвидување на проток на возила врз основа на време, ден, и услови.',
        algorithms: 'Decision Tree, K-Means Clustering',
        models: 'Traffic Flow Predictor, Accident Hotspot Detector',
        conclusion: 'Интелигентниот систем за мониторинг овозможува проактивна интервенција во реално време и долгорочно подобрување на безбедноста.',
        chartData: [
            { month: 'Јан', traffic: 3200 },
            { month: 'Фев', traffic: 3400 },
            { month: 'Мар', traffic: 3600 },
            { month: 'Апр', traffic: 3550 },
            { month: 'Мај', traffic: 3700 },
        ],
        xKey: 'month',
        yKey: 'traffic'
    },
    {
        id: 3,
        title: 'Железничка станица Илинден',
        description: 'Модерна реконструкција со BIM моделирање.',
        image: zeleznicka,
        overview: 'Проект за реконструкција на железничката станица Илинден со користење на дигитални алатки како Building Information Modeling (BIM) и аналитика преку машинско учење.',
        dataMethods: 'BIM модели, фотографии, буџетски извештаи, извештаи за прогрес на градба и човечки ресурси.',
        problem: 'Предизвикот е идентификација на фактори што доведуваат до доцнење или зголемување на трошоци.',
        methodology: 'Комбинирање на BIM и ML модели за анализа на зависности помеѓу ресурси, време и буџет. Симулација на различни сценарија.',
        algorithms: 'Neural Networks, Regression Analysis',
        models: 'Cost Overrun Predictor, Efficiency Analyzer',
        conclusion: 'Благодарение на интеграцијата на BIM и ML, реконструкциите се поевтини, побрзи и поефикасни.',
        chartData: [
            { phase: 'Планирање', efficiency: 70 },
            { phase: 'Изградба', efficiency: 85 },
            { phase: 'Тестирање', efficiency: 90 },
            { phase: 'Завршување', efficiency: 95 },
        ],
        xKey: 'phase',
        yKey: 'efficiency'
    },
    {
        id: 4,
        title: 'Санација на свлечиште во Тетово',
        description: 'Геотехничка анализа и стабилизација на тлото.',
        image: svleciste,
        overview: 'Проектот вклучува детална анализа на земјиштето со цел стабилизација на регион со често активирање на свлечишта во Тетово.',
        dataMethods: 'Податоци од геосензори за влажност, движење на почва, временски фактори и наклон.',
        problem: 'Предвидување на активирање на свлечиште со цел да се предупредат и евакуираат загрозените области навреме.',
        methodology: 'Следење на промените во геопараметрите со примена на временски серии и класификација на стабилност.',
        algorithms: 'Support Vector Machines, Time Series Forecasting',
        models: 'Ground Movement Predictor, Stability Classifier',
        conclusion: 'Превентивните мерки се ефективни само кога се базираат на реални податоци и ML модели.',
        chartData: [
            { date: '01/2023', movement: 2.5 },
            { date: '02/2023', movement: 2.0 },
            { date: '03/2023', movement: 1.8 },
            { date: '04/2023', movement: 1.5 },
            { date: '05/2023', movement: 1.2 },
        ],
        xKey: 'date',
        yKey: 'movement'
    }
];


const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) return <div>Project not found</div>;

    return (
        <div className="bg-gray-50 min-h-screen py-10 px-6 ">
            <NavLink to="/projects" className=" text-white px-4 py-2 rounded-full bg-green-400 hover:bg-green-200 transition-colors cursor-pointer shadow-xl">Назад</NavLink>

            <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 shadow-xl">
                <h1 className="text-3xl font-semibold text-gray-900 mb-4">{project.title}</h1>
                <p className="text-gray-700 mb-6 text-lg">{project.description}</p>
                <img src={project.image} alt={project.title} className="rounded-2xl w-1/2  mb-8 mx-auto" />

                <div className="space-y-8">
                    <section className="shadow-lg p-5 rounded-2xl bg-gray-50">
                        <h2 className="text-xl font-medium text-gray-800 mb-2">Методи на прибирање на податоци</h2>
                        <p className="text-gray-700">{project.dataMethods}</p>
                    </section>

                    <section className="shadow-lg p-5 rounded-2xl bg-gray-50">
                        <h2 className="text-xl font-medium text-gray-800 mb-2">Проблем решен со машинско учење</h2>
                        <p className="text-gray-700">{project.problem}</p>
                    </section>

                    <section className="shadow-lg p-5 rounded-2xl bg-gray-50">
                        <h2 className="text-xl font-medium text-gray-800 mb-2">Методологија</h2>
                        <p className="text-gray-700">{project.methodology}</p>
                    </section>

                    <section className="shadow-lg p-5 rounded-2xl bg-gray-50">
                        <h2 className="text-xl font-medium text-gray-800 mb-2">Користени алгоритми</h2>
                        <ul className="list-disc ml-6 text-gray-700">
                            {project.algorithms.split(', ').map((algorithm, index) => (
                                <li key={index}>{algorithm}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="shadow-lg p-5 rounded-2xl bg-gray-50">
                        <h2 className="text-xl font-medium text-gray-800 mb-2">Модели за предвидување</h2>
                        <p className="text-gray-700">{project.models}</p>
                    </section>

                    <section className="shadow-lg p-5 rounded-2xl bg-gray-50">
                        <h2 className="text-xl font-medium text-gray-800 mb-2">Графички приказ на резултати</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={project.chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey={project.xKey} />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey={project.yKey} stroke="#3b82f6" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </section>

                    <section className="shadow-lg p-5 rounded-2xl bg-gray-50">
                        <h2 className="text-xl font-medium text-gray-800 mb-2">Заклучок</h2>
                        <p className="text-gray-700">{project.conclusion}</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;

