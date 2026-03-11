import React from "react";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

import kcetLogo from "../assets/tarcinlogo.png"; 
import tarcinLogo from "../assets/college-name.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/5 font-sans overflow-hidden">
      
      
      <div className="absolute bottom-0 left-0 w-full h-64 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* LEFT SECTION: Branding */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-8">
              {/* College Logo Circle */}
              <div className="bg-white p-1 rounded-full h-14 w-14 flex items-center justify-center shadow-xl">
                <img src={kcetLogo} alt="tdc Logo" className="h-full w-full object-contain rounded-full" />
              </div>
              
              <span className="text-gray-500 text-xl font-light">×</span>
              
              {/* Partner Logo Box */}
              <div className="bg-white px-3 py-1 rounded-md h-10 flex items-center justify-center">
                <img src={tarcinLogo} alt="Tarcin Logo" className="h-6 w-auto object-contain" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-1 uppercase">
              LDC
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-500 mb-4 opacity-90 uppercase">
              Hackathon 2026
            </h3>
            <p className="text-gray-400 italic text-sm mb-6 tracking-wide">
              "Ignite the Tech Within"
            </p>
            <p className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">
              Powered by <span className="text-blue-500">Tarcin CodeAsthram</span> Platform
            </p>
          </div>

          {/* MIDDLE SECTION: Committee */}
          <div className="lg:col-span-4 lg:pl-10">
            <h4 className="text-blue-500 text-[11px] font-black tracking-[0.25em] uppercase mb-8 border-b border-blue-500/20 pb-2 inline-block">
              ORGANIZING COMMITTEE
            </h4>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-500 text-[9px] font-black tracking-[0.15em] uppercase mb-1">PRINCIPAL & SECRETARY</p>
                <p className="text-blue-50/90 font-bold text-base tracking-tight">Dr. S. Senthil</p>
              </div>

              <div>
                <p className="text-gray-500 text-[9px] font-black tracking-[0.15em] uppercase mb-1">HOD & CONVENOR</p>
                <p className="text-blue-50/90 font-bold text-base tracking-tight">Dr. A. Meenakshi</p>
              </div>

              <div>
                <p className="text-gray-500 text-[9px] font-black tracking-[0.15em] uppercase mb-1">COORDINATORS</p>
                <p className="text-blue-50/90 font-bold text-base tracking-tight leading-relaxed">Dr. R. Muthuselvi</p>
                <p className="text-blue-50/90 font-bold text-base tracking-tight leading-relaxed">Mrs. B. Vijayalakshmi</p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION: Contact */}
          <div className="lg:col-span-4 lg:pl-10">
            <h4 className="text-blue-500 text-[11px] font-black tracking-[0.25em] uppercase mb-8 border-b border-blue-500/20 pb-2 inline-block">
              CONTACT & SUPPORT
            </h4>

            <div className="space-y-5">
              <ContactLink icon={<Mail size={18} />} text="contact@tarcinrobotic.in" />
              <ContactLink icon={<Phone size={18} />} text="+91 9884 6755 86" />
              <ContactLink 
                icon={<MapPin size={18} />} 
                text="Tarcin Ropotics -Madurai" 
              />
              <ContactLink icon={<Calendar size={18} />} text="04 March 2026 • 10:30 AM" />
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT AREA */}
        <div className="pt-10 border-t border-white/5 flex flex-col items-center text-center">
          <p className="text-gray-500 text-[10px] font-bold tracking-[0.15em] uppercase mb-2 leading-relaxed">
            Dept. of Computer Science | Lady Dock College, Madurai
          </p>
          <p className="text-gray-600 text-[9px] tracking-widest uppercase mb-6">
            In Association with <span className="text-gray-400 font-black">Tarcin., Madurai</span>
          </p>
          <p className="text-gray-700 text-[9px] font-medium tracking-tighter">
            © 2026 LDC  Hackathon. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

// Internal Helper Component
const ContactLink = ({ icon, text }) => (
  <div className="flex items-center gap-4 group">
    <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <span className="text-gray-400 group-hover:text-gray-200 text-sm font-medium transition-colors">
      {text}
    </span>
  </div>
);

export default Footer;