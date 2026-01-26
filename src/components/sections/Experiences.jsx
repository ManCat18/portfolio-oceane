// components/sections/Experiences.jsx
import React from 'react';

const experiences = [
    {
        period: "AVRIL 2025 - JUIN 2025",
        title: "Stage de 2ème année de BUT",
        company: "Friedrich Miescher Institute for Biomedical Research | BÂLE",
        tasks: [
            "Sujet : Développement du placenta humain et microenvironnement utérin",
            "Recherches bibliographiques",
            "Gestion des stocks",
            "Techniques d’histologie dont microtomie",
            "Culture d’organoïdes, passages et inclusion dans Histogel"
        ]
    },
    {
        period: "JUILLET 2024",
        title: "Opératrice",
        company: "Entreprise SAF | HESINGUE",
        tasks: [
            "Préparation et gestion de commande",
            "Assurance qualité",
            "Gestion des stocks",
            "Travail en équipe"
        ]
    },
    {
        period: "AOÛT 2022",
        title: "Serveuse polyvalente",
        company: "L'Alcôve | TAGOLSHEIM",
        tasks: [
            "Plonge",
            "Service en salle",
            "Préparation de boissons et cocktails",
            "Nettoyage des sols et des machines en fin de service"
        ]
    }
];

const Experiences = () => {
    return (
        <section className="space-y-6 p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Expériences Professionnelles</h2>
            {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium">
                            {exp.period}
                        </span>
                        <div>
                            <h3 className="text-xl font-bold text-blue-900">{exp.title}</h3>
                            <p className="text-blue-700">{exp.company}</p>
                        </div>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2">
                        {exp.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-center gap-3 text-gray-700">
                                <span className="w-2 h-2 bg-blue-600 rounded-full shrink-0"></span>
                                {task}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default Experiences;
