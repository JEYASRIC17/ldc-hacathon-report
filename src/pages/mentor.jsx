import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star } from "lucide-react";

export default function Mentors() {
  const mentors = [
  {
    name: "Ms. Pradeepa M.",
    points: 12840,
    teams: 10,
    rank: 2,
    icon: <Award className="w-12 h-12 text-slate-400" />,
    order: "order-1 md:order-1",
  },
  {
    name: "Dr. Gayathri V.",
    points: 14250,
    teams: 12,
    rank: 1,
    icon: <Trophy className="w-16 h-16 text-[#004aad]" />,
    featured: true,
    order: "order-first md:order-2",
  },
  {
    name: "Ms. Beevi Hawa R.",
    points: 11975,
    teams: 8,
    rank: 3,
    icon: <Medal className="w-12 h-12 text-amber-700" />,
    order: "order-2 md:order-3",
  },
];

  return (
    <section id="mentor" className="min-h-screen bg-white text-slate-900 py-32 px-6 relative overflow-hidden font-sans border-b border-slate-100">
      
      {/* Background Grid Pattern - Swapped Sky Blue for Dark Navy (#004aad) */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#004aad 1px, transparent 1px), linear-gradient(90deg, #004aad 1px, transparent 1px)`, 
          backgroundSize: '50px 50px' 
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center md:text-left"
        >
          {/* Label Badge with Navy theme */}
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <Star size={12} className="text-[#004aad] fill-[#004aad]" />
            <p className="text-[10px] tracking-[0.3em] text-[#004aad] uppercase font-black">Strategic Advisors</p>
          </div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            Top <span className="text-[#004aad]">Mentors</span>
          </h1>
          <div className="w-20 h-1.5 bg-[#004aad] mt-6 rounded-full hidden md:block" />
        </motion.div>

        {/* Podium Grid */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-8 lg:gap-12">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -12, 
                scale: mentor.featured ? 1.05 : 1.03,
                transition: { duration: 0.2 } 
              }}
              className={`relative flex flex-col items-center p-12 rounded-[45px] w-full md:w-1/3 transition-all cursor-default
                ${mentor.order}
                ${mentor.featured 
                  ? "bg-white border-2 border-[#004aad]/10 shadow-[0_30px_70px_-15px_rgba(0,74,173,0.12)] min-h-[520px] z-10" 
                  : "bg-white/60 border border-slate-100 backdrop-blur-md min-h-[440px] shadow-sm"
                }`}
            >
              {/* Floating Animation for Rank 1 Icon */}
              <motion.div 
                animate={mentor.featured ? { 
                  y: [0, -15, 0],
                  filter: ["drop-shadow(0px 0px 0px rgba(0,74,173,0))", "drop-shadow(0px 10px 20px rgba(0,74,173,0.2))", "drop-shadow(0px 0px 0px rgba(0,74,173,0))"]
                } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mb-10"
              >
                {mentor.icon}
              </motion.div>

              {/* Name */}
              <h2 className="text-2xl font-black text-center mb-8 uppercase tracking-tighter leading-tight h-16 flex items-center text-slate-800">
                {mentor.name}
              </h2>

              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-10" />

              {/* Stats Layout */}
              <div className="grid grid-cols-2 gap-8 w-full">
                <div className="text-center">
                  <p className={`text-4xl font-black tracking-tighter ${mentor.featured ? 'text-[#004aad]' : 'text-slate-900'}`}>
                    {mentor.points.toLocaleString()}
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-black mt-3">
                    Total Points
                  </p>
                </div>
                <div className="text-center border-l border-slate-100">
                  <p className="text-4xl font-black tracking-tighter text-slate-900">
                    {mentor.teams}
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-black mt-3">
                    Teams
                  </p>
                </div>
              </div>

              {/* Rank Badge Background Effect */}
              <div className="absolute top-8 right-10 text-slate-100 font-black text-6xl -z-10 select-none">
                #{mentor.rank}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}