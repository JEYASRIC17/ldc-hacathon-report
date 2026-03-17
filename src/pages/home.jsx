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

        {/* Central Radial Dark Navy Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(0,74,173,0.08)_0%,_transparent_70%)] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 px-4"
        >
          {/* TROPHY Section */}
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
              className="w-[140px] md:w-[200px] mx-auto drop-shadow-[0_20px_50px_rgba(0,74,173,0.25)]"
            />
          </motion.div>

          {/* Collaboration Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-100 px-5 py-2 rounded-full mb-8 shadow-sm backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#004aad] animate-pulse" />
            <p className="text-[10px] tracking-[0.3em] text-slate-500 uppercase font-bold">
              In Collaboration With <span className="text-[#004aad] ml-1">TARCIN</span>
            </p>
          </div>

          {/* HEADLINE: Resized for professional look */}
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-7xl font-black tracking-[-0.04em] leading-none m-0 bg-gradient-to-r from-slate-900 via-[#004aad] to-slate-900 bg-clip-text text-transparent uppercase">
              NextGen
            </h1>
            <h1 className="text-4xl md:text-[7rem] font-black tracking-[-0.06em] leading-[0.85] m-0 text-slate-900 uppercase">
              Innovators
            </h1>

            <div className="flex items-center gap-4 mt-4">
              <div className="h-[1.5px] w-6 md:w-16 bg-[#004aad]/30" />
              <h2 className="text-xl md:text-3xl font-light text-[#004aad] tracking-[0.5em] uppercase">
                Hackathon <span className="font-black">2026</span>
              </h2>
              <div className="h-[1.5px] w-6 md:w-16 bg-[#004aad]/30" />
            </div>
          </div>

          <p className="mt-8 text-slate-500 font-medium tracking-wide text-xs md:text-base max-w-xl mx-auto leading-relaxed">
            Empowering the next generation of creators to build <span className="text-[#004aad] font-bold italic">real-world solutions</span> through digital innovation.
          </p>

          {/* Info Bar */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-slate-600 text-[10px] font-bold tracking-widest bg-white py-4 px-10 rounded-2xl border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)]">
            <span className="flex items-center gap-2.5 uppercase">
              <CalendarDays size={16} className="text-[#004aad]" /> 26 JAN & 03 FEB 2026
            </span>
            <div className="hidden md:block w-px h-5 bg-slate-200" />
            <span className="flex items-center gap-2.5 text-slate-800 uppercase">
              <MapPin size={16} className="text-[#004aad]" /> APZLAB, Lady Doak College
            </span>
          </div>
        </motion.div>

        {/* STAT CARDS */}

        <StatCard
          position="left-[6%] top-[25%]"
          delay={0.2}
          borderColor="border-blue-100"
          icon={<Zap size={28} className="text-[#004aad]" />}
          label="Total Submissions"
          value={6175}
          isCount
        />

        <StatCard
          position="left-[6%] bottom-[12%]"
          delay={0.4}
          borderColor="border-slate-100"
          icon={<Calendar size={28} className="text-[#004aad]" />}
          label="Days Hackathon"
          value={7}
        />

        <StatCard
          position="right-[6%] top-[25%]"
          delay={0.6}
          borderColor="border-blue-100"
          icon={<Users size={28} className="text-[#004aad]" />}
          label="Teams Joined"
          value={60}
          isCount
        />

        <StatCard
          position="right-[6%] bottom-[12%]"
          delay={0.8}
          borderColor="border-slate-100"
          icon={<Trophy size={28} className="text-[#004aad]" />}
          label="Final Winners"
          value={3}
        />
      </section>
    </>
  );
}

function StatCard({ position, delay, icon, label, value, isCount = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      whileHover={{
        y: -10,
        boxShadow: `0 20px 40px -12px rgba(0, 74, 173, 0.12)`,
        transition: { duration: 0.3 }
      }}
      className={`hidden xl:flex flex-col items-center justify-center absolute ${position} 
      bg-white p-5 rounded-[2rem] w-56 h-40 text-center 
      border border-slate-100 
      shadow-sm transition-all duration-500 group cursor-default overflow-hidden z-20`}
    >
      <motion.div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100"
        style={{ background: "conic-gradient(from 0deg, transparent, #004aad, transparent 25%)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-[2px] bg-white rounded-[1.9rem] z-0" />

      <div className="relative z-20">
        <div className="mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-3xl font-black tracking-tight text-slate-800 group-hover:text-[#004aad] transition-colors duration-300">
          {isCount ? <CountUp end={value} /> : value}
        </h3>
        <p className="text-[9px] uppercase tracking-[0.3em] text-slate-400 mt-2 font-black">
          {label}
        </p>
      </div>
    </motion.div>
  );
}