// components/sections/Projets.jsx
import React from 'react';

const manipulations = [
    {
        title: "Microbiologie",
        description: ["Ensemencemant <br/> J’ai appris à préparer et ensemencer des géloses pour cultiver des bactéries. Cela comprend la stérilisation du matériel, le choix du type de gélose adapté et la technique d’ensemencement pour obtenir des colonies isolées. J’ai ensuite observé la croissance et noté les caractéristiques morphologiques des colonies.",
        "Galerie API <br/> Pour identifier les micro-organismes, j’ai utilisé les galeries API qui permettent de tester différents enzymes et substrats. Après incubation, j’ai analysé les changements de couleur et comparé les résultats à la base de données pour identifier la souche.",
        "Analyse de bactérie et levures <br/> J’ai manipulé différents types de bactéries et levures, appris à les distinguer, à observer leur morphologie, et à interpréter leurs comportements sur différents milieux de culture."].join("<br/>"),
        technologies: ["coupe", "coupe"]
    },
    {
        title: "Moléculaires",
        description: "",
        technologies: ["coupe", "coupe"]
    },
    {
        title: "Immunologie",
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
