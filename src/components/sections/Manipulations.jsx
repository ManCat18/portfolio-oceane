// components/sections/Projets.jsx
import React from 'react';

const manipulations = [
    {
        title: "Techniques de microbiologie",
        sousManipulations: [
            {
                titre: "Ensemencement",
                description: "J'ai appris à préparer et ensemencer des géloses pour cultiver des bactéries. Cela comprend la stérilisation du matériel, le choix du type de gélose adapté et la technique d'ensemencement pour obtenir des colonies isolées."
            },
            {
                titre: "Galerie API",
                description: "Pour identifier les micro-organismes, j'ai utilisé les galeries API (Appareils et Procédés d'Identification) qui permettent de tester différents enzymes et substrats. Après incubation, j'ai analysé les changements de couleur et comparé les résultats à la base de données."
            },
            {
                titre: "Analyse de bactéries et levures",
                description: "J'ai manipulé différents types de bactéries et levures, appris à les distinguer, à observer leur morphologie, et à interpréter leurs comportements sur différents milieux de culture."
            }
        ],
        technologies: ["Ensemencement", "Bactéries", "Galerie API", "Identification", "Analyse microbiologique", "Examen micro/macroscopique"]
    },
    {
        title: "Biologie moléculaire",
        sousManipulations: [
            {
                titre: "Extraction d'ADN/ARN",
                description: "J’ai réalisé l’extraction d’ADN et d’ARN à partir d’échantillons biologiques, en respectant les protocoles pour éviter la contamination. Cette étape comprend la lyse cellulaire, la purification et la vérification de la qualité et de la quantité d’acides nucléiques obtenus."
            },
            {
                titre: "PCR et PCR quantitative (qPCR)",
                description: "J’ai mis en place des réactions de PCR et qPCR pour amplifier des séquences spécifiques. Cela inclut la préparation du mélange réactionnel, le choix des amorces, le réglage du thermocycleur et l’analyse des résultats pour confirmer la présence ou la quantité d’ADN cible."
            },
            {
                titre: "Electrophorèse",
                description: "J’ai réalisé des électrophorèses sur gel pour visualiser les fragments d’ADN ou d’ARN. J’ai appris à préparer les gels, à charger les échantillons et à interpréter la migration des fragments selon leur taille."
            }
        ],
        technologies: ["Extraction ADN/ARN", "PCR", "qPCR", "Electrophorèse", "Analyse moléculaire"]
    },
    {
        title: "Technique d'immunologie",
        sousManipulations: [
            {
                titre: "ELISA indirect",
                description: "J’ai réalisé des ELISA indirects pour détecter des protéines spécifiques. Cela comprend la préparation des puits, l’ajout des échantillons et anticorps, le développement colorimétrique et la lecture des résultats au spectrophotomètre."
            },
            {
                titre: "Western Blot",
                description: "J’ai mis en œuvre des Western blot pour identifier et quantifier des protéines. Cette technique inclut la séparation par SDS-PAGE, le transfert sur membrane, le marquage avec des anticorps et l’analyse des bandes obtenues."
            }
        ],
        technologies: ["ELISA indirect", "Western Blot", "détection de protéines", "spectrophotométrie", "rigueur expérimentale"]
    },
    {
        title: "Anatomie et cytologie pathologiques",
        sousManipulations: [
            {
                titre: "Microtome",
                description: "J’ai utilisé le microtome pour couper des échantillons de tissus en tranches fines. Cette étape nécessite précision et minutie pour obtenir des coupes régulières et exploitables pour l’observation."
            },
            {
                titre: "Coloration et observation",
                description: "J’ai réalisé des colorations sur les tissus pour mettre en évidence différentes structures cellulaires et observé les échantillons au microscope afin d’analyser leur morphologie et organisation."
            }
        ],
        technologies: ["Microtome", "Coupe de tissus", "Coloration histologique", "Observation microscopique"]
    },
    {
        title: "Technique d'observation et d'analyse",
        sousManipulations: [
            {
                titre: "Microscopie optique et fluorescence",
                description: "J’ai observé des échantillons biologiques complexes avec la microscopie optique et à fluorescence, ce qui m’a permis de distinguer des structures cellulaires spécifiques et d’identifier certains composants moléculaires."
            }
        ],
        technologies: ["Microscopie optique", "Microscopie à fluorescence", "Structures cellulaires", "Tissus"]
    }
];

const Manipulations = () => {
    return (
        <section className="space-y-6 p-8 mb-8">
            <h2 className="text-3xl font-bold text-teal-900 mb-8">Manipulations</h2>
            {manipulations.map((manipulation, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-2xl font-bold text-teal-900 mb-6">{manipulation.title}</h3>
                    
                    <div className="space-y-6 mb-6">
                        {manipulation.sousManipulations.map((sousManip, sousIndex) => (
                            <div key={sousIndex} className="border-l-4 border-teal-500 pl-6">
                                <h4 className="text-lg font-semibold text-teal-800 mb-2">
                                    {sousManip.titre}
                                </h4>
                                <p className="text-gray-700 leading-relaxed">
                                    {sousManip.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                        {manipulation.technologies.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Manipulations;