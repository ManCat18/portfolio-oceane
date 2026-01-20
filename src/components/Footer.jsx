// components/Footer.jsx
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-teal-900 text-white py-8 mt-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <div className="flexflex-col md:flex-row justify-center text-teal-200 items-center sm:gap-2 md:gap-6 text-center text-base">
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>oceane.cattaneo02@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>+33 6 10 38 12 80</span>
                    </div>
                </div>
                <p className="mb-4">© Manon Cattaneo - 2026</p>
            </div>
        </footer>
    );
};

export default Footer;
