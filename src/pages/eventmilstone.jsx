import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, FileText, Rocket, Award } from "lucide-react";

const milestones = [
  { number: 250, suffix: "+", title: "Registered Students", icon: <Users size={28} /> },
  { number: 60, suffix: "", title: "Participating Teams", icon: <Users size={28} /> },
  { number: 12, suffix: "", title: "Mentors & Judges", icon: <Award size={28} /> },
  { number: 10, suffix: "+", title: "Problem Statements", icon: <FileText size={28} /> },
  { number: 3, suffix: "", title: "Winning Teams", icon: <Rocket size={28} /> },
];

// 🔥 Counter Hook
function useCountUp(target, inView) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(counter);
  }, [target, inView]);

  return count;
}

export default function Milestones() {

  // 🔥 LETTER ANIMATION
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 12 },
    },
  };

  const splitText = (text) => text.split("");

  return (
    <section className="relative bg-white text-slate-900 py-24 overflow-hidden border-b border-slate-100">

      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#004aad 1px, transparent 1px), linear-gradient(90deg, #004aad 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* 🔥 HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-left mb-20"
        >
          <p className="text-[#004aad] font-black tracking-[0.4em] text-[10px] uppercase mb-3">
            Impact Tracker
          </p>

          {/* 🔥 ANIMATED HEADING */}
          <motion.h2
            variants={container}
            initial="hidden"
            whileInView="show"
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter flex flex-wrap justify-left"
          >
            {/* HACKATHON */}
            {splitText("Hackathon ").map((char, i) => (
              <motion.span key={i} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}

            {/* MILESTONES */}
            <span className="text-[#004aad] flex">
              {splitText("Milestones").map((char, i) => (
                <motion.span key={i} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h2>

          {/* Underline */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1 }}
            className="h-1.5 bg-[#004aad] mx-left mt-6 rounded-full"
          />
        </motion.div>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {milestones.map((item, index) => {
            const ref = React.createRef();
            const inView = useInView(ref, { once: true, margin: "-50px" });
            const count = useCountUp(item.number, inView);

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.05 }}
                className="group relative cursor-default"
              >
                {/* Card */}
                <div className="bg-white border-2 border-slate-50 rounded-[35px] p-8 text-center transition-all duration-500 group-hover:border-[#004aad]/20 group-hover:shadow-[0_20px_50px_rgba(0,74,173,0.12)] h-full flex flex-col items-center relative">
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6 relative">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#004aad]/10"
                      whileHover={{ scale: 1.3, opacity: 0.2 }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <div className="relative text-slate-300 group-hover:text-[#004aad] transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>

                  {/* Number */}
                  <h3 className="text-3xl font-black italic tracking-tighter mb-2 text-slate-400 group-hover:text-slate-900 transition-colors">
                    {count.toLocaleString()}{item.suffix}
                  </h3>

                  {/* Title */}
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#004aad] transition-colors mt-auto">
                    {item.title}
                  </p>

                  {/* Glow */}
                  <div className="absolute inset-0 bg-[#004aad]/0 group-hover:bg-[#004aad]/5 rounded-[35px] transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}