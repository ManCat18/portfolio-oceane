// components/Navigation.jsx
import React from 'react';

import { useState } from 'react';
import {
    Info, GraduationCap, Briefcase, Settings, Wrench
} from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection }) => {
    const sections = [
        { id: 'about', label: 'À Propos', icon: <Info className="w-5 h-5" /> },
        { id: 'formation', label: 'Formations', icon: <GraduationCap className="w-5 h-5" /> },
        { id: 'experience', label: 'Expériences', icon: <Briefcase className="w-5 h-5" /> },
        { id: 'competences', label: 'Compétences', icon: <Settings className="w-5 h-5" /> },
        { id: 'manipulations', label: 'Manipulations', icon: <Wrench className="w-5 h-5" /> }
    ];

    return (
        <>
            {/* Menu desktop en haut */}
            <nav className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-lg z-40 hidden md:block">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex justify-center space-x-8 py-4">
                        {sections.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveSection(item.id)}
                                className={`px-4 py-2 rounded-lg transition-all ${activeSection === item.id
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'text-emerald-800 hover:bg-emerald-100'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Menu mobile fixé en bas */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-inner border-t border-gray-200 md:hidden">
                <div className="flex justify-around py-2 px-1">
                    {sections.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`flex flex-col items-center text-xs px-2 py-1 rounded transition-all ${activeSection === item.id
                                    ? 'text-blue-600 font-semibold'
                                    : 'text-gray-600 hover:text-emerald-700'
                                }`}
                        >
                            {item.icon}
                            <span className="text-[10px] mt-1">{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navigation;
