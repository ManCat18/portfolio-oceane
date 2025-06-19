// components/sections/Experiences.jsx
import React from 'react';

const formations = [
    {
        period: "2024 - 2025",
        title: "BUT Génie Biologique | Parcours Biologie Médicale et Biotechnologie",
        school: "IUT | THIONVILLE-YUTZ",
        subjects: [
            "Microbiologie",
            "Cinétique chimique et enzymatique",
            "Pharmacologie",
            "Anatomie et cytomogie pahtologique",
            "Immunologie",
            "Génie génétique",
            "Biochimie métabolique et médicale"
        ],
        skills : ["Techniques de laboratoire"]
    },
    {
        period: "2023 - 2024",
        title: "BUT Génie Biologique | Parcours Biologie Médicale et Biotechnologie",
        school: "IUT | THIONVILLE-YUTZ",
        subjects: [
            "Chimie générale et organique",
            "Physique",
            "Biochimie structurale",
            "Biologie cellulaire",
            "Physiologie et expérimentation animale"
        ],
        skills : ["Initiation aux techniques de laboratoire"]
    },
    {
        period: "2020 - 2023",
        title: "BACCALAUREAT GENERAL",
        school: "Lycée Jean-Jacques HENNER | ALTKIRCH",
        subjects: [
            "Spécialités : Physique & Chimie (1ère)",
            "Mathématiques",
            "SVT (Sciences de la Vie et de la Terre)"
        ],
        skills : []
    }
];

const Formations = () => {
    return (
        <section className="space-y-6 p-8 mb-8">
            <h2 className="text-3xl font-bold text-teal-900 mb-8">Formations</h2>
            {formations.map((form, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                        <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-lg text-sm font-medium">
                            {form.period}
                        </span>
                        <div>
                            <h3 className="text-xl font-bold text-teal-900">{form.title}</h3>
                            <p className="text-teal-700">{form.school}</p>
                        </div>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2 pb-4">
                        {form.subjects.map((subjects, formIndex) => (
                            <li key={formIndex} className="flex items-center gap-3 text-gray-700">
                                <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                                {subjects}
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                        {form.skills.map((skill, skillIndex) => (
                            <span
                                key={skillIndex}
                                className="bg-teal-100 text-emerald-800 px-3 py-1 rounded-full text-sm border border-emerald-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Formations;
