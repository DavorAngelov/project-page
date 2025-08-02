import { Link } from 'react-router-dom';
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
    },
    {
        id: 2,
        title: 'Автопат Скопје – Штип',
        description: 'Инфраструктурен проект со фокус на безбедност и проток.',
        image: avtopat,
    },
    {
        id: 3,
        title: 'Железничка станица Илинден',
        description: 'Модерна реконструкција со BIM моделирање.',
        image: zeleznicka,
    },
    {
        id: 4,
        title: 'Санација на свлечиште во Тетово',
        description: 'Геотехничка анализа и стабилизација на тлото.',
        image: svleciste,
    },
];

const Projects = () => {
    return (
        <div className="p-8">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Проекти</h2>
            <p className="text-blue-500 mb-8">Модерна анализа за инфраструктура и градежни проекти.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <Link key={project.id} to={`/projects/${project.id}`}>
                        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
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
