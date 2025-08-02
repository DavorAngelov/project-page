import React, {useState} from 'react';
import {Mail, Phone, MapPin} from 'lucide-react';

const Contact = () => {
    /*keeping simple data for testing the forms*/
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        //keeping the data, just changing new data ...formData
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted: ', formData)
        // in backend and database, easily can connect with fewtch....
        alert('Вашето барање е испратено успешно.')
        setFormData({name: '', email: '', message: ''})
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* head */}
            <div className="bg-white py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-light text-gray-900 mb-2">
                        Контакт <span className="text-gray-500">информации</span>
                    </h1>
                </div>
            </div>

            {/* infor for contact*/}
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-medium text-gray-900 mb-6">Контактирајте не</h2>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                                <Phone className="w-6 h-6 text-white"/>
                            </div>
                            <span className="text-gray-800">+389 70 816 753</span>
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                                <Mail className="w-6 h-6 text-white"/>
                            </div>
                            <span className="text-gray-800">contact@finki.ukim.mk</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-white"/>
                            </div>
                            <span className="text-gray-800">ул. „Руѓер Бошковиќ“ 16, Скопје</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-medium text-gray-900 mb-6">Локација на факултетот</h2>
                        <iframe
                            title="FINKI Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.820943256963!2d21.4095479!3d42.0041182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13541443605aa4ab%3A0x33d56647e5b87264!2sFaculty%20of%20Computer%20Science%20%26%20Engineering!5e0!3m2!1sen!2smk!4v1754092994854!5m2!1sen!2smk"
                            width="100%"
                            height="300"
                            style={{border: 0}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-xl"
                        ></iframe>
                    </div>
                </div>
            </div>


            <h2 className="text-4xl font-light text-gray-900 mb-7 text-center ">Поднеси барање</h2>
            {/* form */}
            <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-2xl mx-auto mb-5">

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Барање за анализа на проект</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Име и презиме</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Е-пошта</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Опис на проектот</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition"
                    >
                        Испрати барање
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
