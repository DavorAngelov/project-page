import {Link} from 'react-router-dom';
import avtopat from '../assets/photosProjects/avtopat.jpg'
import most from '../assets/photosProjects/most.jpg'
import svleciste from '../assets/photosProjects/svlecistte.jpg'
import zeleznicka from '../assets/photosProjects/zeleznicka.jpg'
import {useState} from "react";

const projects = [
    {
        id: 1,
        title: 'Изградба на мост на Вардар',
        description: 'Мост со преднапрегнат бетон, анализа на товар и динамика.',
        image: most,
        category: 'Мостови',
    },
    {
        id: 2,
        title: 'Автопат Скопје – Штип',
        description: 'Инфраструктурен проект со фокус на безбедност и проток.',
        image: avtopat,
        category: 'Патишта',
    },
    {
        id: 3,
        title: 'Железничка станица Илинден',
        description: 'Модерна реконструкција со BIM моделирање.',
        image: zeleznicka,
        category: 'Железници',
    },
    {
        id: 4,
        title: 'Санација на свлечиште во Тетово',
        description: 'Геотехничка анализа и стабилизација на тлото.',
        image: svleciste,
        category: 'Геотехника',
    },
];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('Сите');

    // created list fofr filt and remove dup,icates
    const categories = ['Сите', ...new Set(projects.map(p => p.category))];

    // filter
    const filteredProjects = selectedCategory === 'Сите'
        ? projects
        : projects.filter(p => p.category === selectedCategory);
    return (
        <div className="p-8">
            <div className="flex justify-between">
                <div>
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Проекти</h2>
                    <p className="text-blue-500 mb-8">Модерна анализа за инфраструктура и градежни проекти.</p>
                </div>

                <div className="mb-5">
                    <label htmlFor="category" className="mr-2 font-medium text-gray-700">Избери тема:</label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={e => setSelectedCategory(e.target.value)}
                        className="border rounded-full cursor-pointer shadow-md p-2 "
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <Link key={project.id} to={`/projects/${project.id}`}>
                        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                                <p className="text-gray-600 mt-2">{project.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;
