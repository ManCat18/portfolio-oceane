// components/sections/Experiences.jsx
import React from 'react';

const experiences = [
    {
        period: "SEPTEMBRE 2025 - AUJOURD'HUI",
        title: "Alternance de 3ème année de BUT",
        company: "Laboratoire de biologie médicale B2A | PFASTATT",
        subject : "Comparaison et validation de méthodes par PCR pour un changement de kit HPV",
        tasks: [
            "Réception et gestion d'échantillons",
            "Ensemencement des géloses",
            "Lancement de séries et maintenance des automates de PCR (Starlet et BD max)",
            "Gestion des stocks et réception de commandes",
        ]
    },
    {
        period: "AVRIL 2025 - JUIN 2025",
        title: "Stage de 2ème année de BUT",
        company: "Friedrich Miescher Institute for Biomedical Research | BÂLE",
        subject : "Développement du placenta humain et microenvironnement utérin",
        tasks: [
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
        subject : null,
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
        subject : null,
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
                    {exp.subject && (
                        <div className="border-l-4 border-teal-500 bg-gray-50 rounded-r-lg p-4 pl-6 mb-4">
                            <p className="text-gray-800 font-medium">
                                <span className="text-teal-900 font-semibold">Sujet :</span> {exp.subject}
                            </p>
                        </div>
                    )}
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
