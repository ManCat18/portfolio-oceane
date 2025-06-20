// components/Header.jsx
import React from 'react';
import { Mail, Phone, MapPin, Car } from 'lucide-react';

const Header = ({ age }) => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-teal-100 to-emerald-300 py-4">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-200/30 to-emerald-300/30 animate-pulse"></div>
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* <--!<div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
          MC
        </div>--> */}
        <h1 className="text-2x1 font-bold text-teal-900 mb-4">Océane Cattaneo</h1>
        <p className="text-1g text-teal-800 mb-8">Étudiante BUT Génie Biologique • En recherche d'alternance</p>

        <div className="flex md:flex-row justify-center items-center gap-4 md:gap-8 mb-8">
          <div className="bg-white/80 rounded-lg md:p-6 sm:p-auto shadow-lg w-full md:w-auto text-center">
            <div className="text-3xl font-bold text-teal-800">2</div>
            <div className="text-sm text-teal-600">ans d'études</div>
          </div>
          <div className="bg-white/80 rounded-lg md:p-6 sm:p-auto shadow-lg w-full md:w-auto text-center">
            <div className="text-3xl font-bold text-teal-800">{age}</div>
            <div className="text-sm text-teal-600">ans</div>
          </div>
          <div className="bg-white/80 rounded-lg md:p-6 sm:p-auto shadow-lg w-full md:w-auto text-center">
            <div className="text-3xl font-bold text-teal-800">5+</div>
            <div className="text-sm text-teal-600">manipulations</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row flew-wrap justify-center gap-4 md:gap-6 text-teal-800 text-md text-center md:text-left pb-6">
          <div className="flex text-1g items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>oceane.cattaneo02@gmail.com</span>
          </div>
          <div className="flex text-1g items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>+ 33 6 10 38 12 80</span>
          </div>
          <div className="flex text-1g items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>LUEMSCHWILLER 68720</span>
          </div>
          <div className="flex text-1g items-center gap-2">
            <Car className="w-5 h-5" />
            <span>Permis B • avec voiture</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
