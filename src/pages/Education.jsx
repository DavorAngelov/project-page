import React from 'react'
import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from 'keen-slider/react'


/*add links and map them*/
const videos = [
    {title: "Machine Learning in Civil Engineering", id: "uLFIhlHq4No"},
    {title: "ML in geotechnics – overview", id: "rJRGzrmNmkU"},
    {title: "Knowledge‑Guided ML for Geotechnical Resilience", id: "p9DgA_JQmXs"},
    {title: "Machine Learning Methods in Geotechnical Engineering", id: "iTSYLdGrJJI"},
    {title: "How AI Technology is Revolutionizing Civil Engineering", id: "ZLXaxeAqwGw"},
    {title: "Introduction to Machine Learning in Geomechanics", id: "yDX9V45A0Ys"}
]

function Education() {
    const [sliderRef] = useKeenSlider({
        slides: {perView: 1, spacing: 16},
        breakpoints: {
            '(min-width: 768px)': {slides: {perView: 2, spacing: 16}},
            '(min-width: 1024px)': {slides: {perView: 3, spacing: 24}},
        },
        loop: true,
    })

    return (
        <div className="p-8 ">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Едукација</h2>
            <p className="text-xl font-light text-gray-800 mb-4">Корисни видеа за машинско учење и примена на вештачка интелигенција во градежништвото:</p>
            <div ref={sliderRef} className="keen-slider">
                {videos.map((vid, idx) => (
                    <div key={idx} className="keen-slider__slide bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src={`https://www.youtube.com/embed/${vid.id}`}
                                title={vid.title}
                                className="w-full h-64"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-medium text-gray-700">{vid.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education;
