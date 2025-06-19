// components/sections/Projets.jsx
import React from 'react';

const manipulations = [
    {
        title: "Manip 1",
        description: "xx",
        technologies: ["coupe", "coupe"]
    },
    {
        title: "Manip 2",
        description: "xx",
        technologies: ["coupe", "coupe"]
    },
    {
        title: "Manip 3",
        description: "xx",
        technologies: ["coupe","coupe"]
    }
];

const Manipulations = () => {
    return (
        <section className="space-y-6 p-8 mb-8">
            <h2 className="text-3xl font-bold text-teal-900 mb-8">Manipulations</h2>
            {manipulations.map((manipulation, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-xl font-bold text-teal-900 mb-4">{manipulation.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{manipulation.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {manipulation.technologies.map((manip, manipIndex) => (
                            <span
                                key={manipIndex}
                                className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                                {manip}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Manipulations;
