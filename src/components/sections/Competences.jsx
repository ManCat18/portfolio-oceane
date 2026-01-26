// components/sections/Competences.jsx
import React from 'react';
import {Users, Calendar, Microscope, TestTube2, Pill, LucideClockFading, Brain, User, Telescope} from 'lucide-react';

const competences = [
    {
        category: "Bonnes pratiques de laboratoire",
        skills: ["EPI", "EPC", "Gestions des déchets"],
        icon: <Microscope className="w-5 h-5" />
    },
    {
        category: "Technique",
        skills: ["Microbiologie", "Culture cellulaire", "Immunologie", "Biologie moléculaire"],
        icon: <TestTube2 className="w-5 h-5" />
    },
    {
        category: "Pharmacologie et biochimie",
        skills: [],
        icon: <Pill className="w-5 h-5" />
    }
];

const softSkills = [
    { name: "Travail en équipe", icon: <Users className="w-5 h-5" /> },
    { name: "Esprit critique", icon: <Brain className="w-5 h-5" /> },
    { name: "Patience", icon: <LucideClockFading className="w-5 h-5" /> },
    { name: "Organisation", icon: <Calendar className="w-5 h-5" /> },
    { name: "Autonomie", icon: <User className="w-5 h-5" /> }, 
    { name: "Rigueur expérimentale", icon: <Telescope className="w-5 h-5" /> }
];

const Competences = () => {
    return (
        <section className="space-y-6 p-8 mb-8">
            <h2 className="text-3xl font-bold text-teal-900 mb-8">Compétences</h2>

            <div>
                <h3 className="text-2xl font-semibold text-teal-800 mb-6">Compétences Techniques</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {competences.map((comp, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                                    {comp.icon}
                                </div>
                                <h4 className="font-semibold text-teal-900">{comp.category}</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {comp.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-sm border border-teal-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-semibold text-teal-800 mb-6">Compétences Transversales</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {softSkills.map((skill, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-xl p-6 text-center">
                            <div className="bg-teal-100 p-3 rounded-full w-fit mx-auto mb-3 text-teal-600">
                                {skill.icon}
                            </div>
                            <p className="font-medium text-teal-900">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Competences;
