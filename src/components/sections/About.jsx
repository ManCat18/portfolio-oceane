// components/sections/About.jsx
import React from 'react';
import {Plane, Book, Clapperboard, Flag, UtensilsCrossedIcon, Music4} from 'lucide-react';

const About = () => {
    return (
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">À Propos</h2>
            <div className="text-lg text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Actuellement en 2ème année de BUT Génie Biologique, parcours Biologie Médicale et Biotechnologie, je suis actuellement en alternance au sein du laboratoire B2A de PFASTATT.
                    Très dynamique et investie, j’ai également eu l'occasion de réaliser un stage dans un laboratoire de recherche Suisse.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div>
                        <h3 className="text-xl font-semibold text-teal-800 mb-4">Langues</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <Flag className="w-5 h-5 text-teal-700 rounded-full"/>
                                <span>Français</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Flag className="w-5 h-5 text-teal-600 rounded-full"/>
                                <span>Anglais</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-teal-800 mb-4">Centres d'intérêt</h3>
                        <div className="space-y-2 grid md:grid-cols-2 gap-2">
                            <div className="flex items-center gap-3">
                                <Plane className="w-5 h-5 rounded-full text-teal-700"/>
                                <span>Voyage, culture</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <UtensilsCrossedIcon className="w-5 h-5 rounded-full text-teal-500"/>
                                <span>Cuisine</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clapperboard className="w-5 h-5 rounded-full text-teal-400"/>
                                <span>Cinéma : films, séries, films d'animation</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Book className="w-5 h-5 rounded-full text-teal-600" />
                                <span>xx</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Music4 className="w-5 h-5 rounded-full text-teal-600" />
                                <span>xx</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
