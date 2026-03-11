import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Calendar,
  Users,
  Trophy,
  MapPin,
  CalendarDays
} from "lucide-react";

import trophy from "../assets/trophy.png";

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end]);
  return <span>{count.toLocaleString()}</span>;
};

export default function Home() {
  return (
    <>
      <section id="home" className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col items-center justify-center relative overflow-hidden font-sans">

        {/* Professional Subtle Grid Background */}
        <div className="absolute inset-0 opacity-40 pointer-events-none"
          style={{ backgroundImage: `linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

        {/* Central Radial Sky Blue Glow - Softened for professionalism */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.1)_0%,_transparent_70%)] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          {/* TROPHY: Kept existing rotation logic */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotateY: [0, 360]
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 15, repeat: Infinity, ease: "linear" }
            }}
            className="mb-8 relative"
          >
            <img
              src={trophy}
              alt="Hackathon Trophy"
              className="w-[180px] md:w-[240px] mx-auto drop-shadow-[0_20px_50px_rgba(14,165,233,0.3)]"
            />
          </motion.div>

          {/* Collaboration Badge - Tightened spacing and weight */}
          <div className="inline-flex items-center gap-2 bg-white border border-sky-100 px-5 py-2 rounded-full mb-8 shadow-sm backdrop-blur-sm">
            <p className="text-[11px] tracking-[0.2em] text-slate-500 uppercase font-semibold">
              In Collaboration With <span className="text-sky-600 font-bold ml-1">TARCIN</span>
            </p>
          </div>

          {/* Headline: Professional Font Styling */}
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-none m-0 bg-gradient-to-b from-slate-900 via-slate-800 to-sky-700 bg-clip-text text-transparent">
            LDC PYHACZ
          </h1>
          <h2 className="text-5xl md:text-7xl font-black text-sky-500 mt-[-5px] md:mt-[-15px] tracking-tight">
            2026
          </h2>

          <p className="mt-8 text-slate-500 font-medium tracking-wide text-sm md:text-base max-w-xl mx-auto px-4 leading-relaxed">
            Build Real-World Solutions Through <span className="text-sky-600 font-bold">Innovation</span> and <span className="text-sky-600 font-bold">Teamwork</span>
          </p>

          {/* Info Bar: Modern app-style container */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-slate-600 text-[12px] font-semibold tracking-wider bg-white py-4 px-10 rounded-2xl border border-slate-200 shadow-md">
            <span className="flex items-center gap-2 uppercase">
              <CalendarDays size={16} className="text-sky-500" /> 26 JAN & 03 FEB 2026
            </span>
            <div className="hidden md:block w-px h-4 bg-slate-200" />
            <span className="flex items-center gap-2 text-slate-800 uppercase">
              <MapPin size={16} className="text-sky-500" /> APZLAB, Lady Doak College
            </span>
          </div>
        </motion.div>

        {/* --- STAT CARDS --- */}
        <StatCard
          position="left-[6%] top-[25%]"
          delay={0.2}
          borderColor="border-sky-100"
          icon={<Zap size={28} className="text-sky-500" />}
          label="Total Submissions"
          value={1819}
          isCount
        />

        <StatCard
          position="left-[6%] bottom-[12%]"
          delay={0.4}
          borderColor="border-slate-100"
          icon={<Calendar size={28} className="text-sky-500" />}
          label="Days Hackathon"
          value={10}
        />

        <StatCard
          position="right-[6%] top-[25%]"
          delay={0.6}
          borderColor="border-sky-100"
          icon={<Users size={28} className="text-sky-500" />}
          label="Teams Joined"
          value={76}
          isCount
        />

        <StatCard
          position="right-[6%] bottom-[12%]"
          delay={0.8}
          borderColor="border-slate-100"
          icon={<Trophy size={28} className="text-sky-500" />}
          label="Final Winners"
          value={3}
        />
      </section>
    </>
  );
}

function StatCard({ position, delay, icon, label, value, isCount = false, borderColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      whileHover={{
        y: -12,
        boxShadow: `0 25px 50px -12px rgba(14, 165, 233, 0.2)`,
        transition: { duration: 0.3 }
      }}
      className={`hidden xl:flex flex-col items-center justify-center absolute ${position} 
      bg-white p-6 rounded-[2rem] w-60 h-44 text-center 
      border ${borderColor} 
      shadow-sm transition-all duration-500 group cursor-default overflow-hidden z-20`}
    >
      <motion.div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100"
        style={{ background: "conic-gradient(from 0deg, transparent, #0ea5e9, transparent 25%)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-[2px] bg-white rounded-[1.9rem] z-0" />

      <div className="relative z-20">
        <div className="mb-3 flex justify-center">
          {icon}
        </div>

        <h3 className="text-4xl font-extrabold tracking-tight text-slate-800 group-hover:text-sky-600 transition-colors duration-300">
          {isCount ? <CountUp end={value} /> : value}
        </h3>

        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-2 font-bold">
          {label}
        </p>
      </div>
    </motion.div>
  );
}