import React from 'react';
// 1. IMPORT the images at the top
import tarcinLogo from '../assets/tarcinlogo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 font-sans border-t border-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Top Logo */}
        <div className="flex justify-center items-center mb-10">
          <img 
            src={tarcinLogo} 
            alt="Tarcin Robotics Logo" 
            className="h-14 md:h-16 w-auto object-contain opacity-100" 
          />
        </div>

        {/* Main Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-[0.2em] mb-2">Nextgen Hackathon 2026</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-sm md:text-base tracking-wide uppercase">
            Department of Computer Science | Lady Doak College, Madurai
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center w-full max-w-5xl mb-12 border-b border-gray-800 pb-12">
          {/* Principal */}
          <div className="space-y-2 text-left md:text-left">
            <h3 className="text-blue-500 font-bold text-xs uppercase tracking-[0.15em]">Principal</h3>
            <p className="font-semibold text-lg text-gray-100">Dr. Beulah Jeyashree</p>
          </div>

          {/* Head of Department */}
          <div className="space-y-2 text-right md:text-right">
            <h3 className="text-blue-500 font-bold text-xs uppercase tracking-[0.15em]">Head of Department</h3>
            <p className="font-semibold text-lg text-gray-100">Dr. N. Jayachandra</p>
          </div>
        </div>

        {/* Bottom Collaboration Text */}
        <div className="text-center space-y-3">
          <p className="text-gray-400 text-xs md:text-sm tracking-wide">
            In Collaboration with <span className="text-white">Tarcin Robotics</span> | Institution Innovation Council (IIC)
          </p>
          <p className="text-gray-400 text-xs md:text-sm tracking-wide">
            Lady Doak College, Madurai — 78 Years of Excellence
          </p>
          <div className="pt-6">
            <p className="text-gray-600 text-[10px] uppercase tracking-widest">
              © 2026 PYHACZ 2026. All Rights Reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;