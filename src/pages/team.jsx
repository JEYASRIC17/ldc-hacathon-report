import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Star } from "lucide-react";

export default function Teams() {

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } }
  };

  const letter = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };

  const title = "ELITE";

  const eliteTeams = [
    {
      name: "AlgoWarriors",
      lead: "Mamtha",
      member: "Jenifer A & C. Madhu Nisha",
      mentor: "Lady Doak college",
      points: 95060,
      tasks: "Rank 2",
      rank: 2,
      order: "order-2 md:order-1",
      image: "/gallery/prizes/price2.jpg",
    },
    {
      name: "BLOCK BUSTERS",
      lead: "C.shanmathy",
      member: "P.LAKSAYA & DHANIN M",
      mentor: "Lady Doak College",
      points: 100848,
      tasks: "Rank 1",
      rank: 1,
      featured: true,
      order: "order-1 md:order-2",
      image: "/gallery/prizes/price1.jpg",
    },
    {
      name: "InnovateX",
      lead: "Kaviya K",
      member: "Rajapriya V A & Preethi",
      mentor: "Lady Doak College",
      points: 86313,
      tasks: "Rank 3",
      rank: 3,
      order: "order-3 md:order-3",
      image: "/gallery/prizes/price3.jpg",
    },
  ];

  const teams = [
    { name: "The Logic Loopers", lead: "GURU DHARSHINI M", tasks: "Rank 4", points: 75582 },
    { name: "Tech Titans", lead: "Mahmoodha S", tasks: "Rank 5", points: 62505 },
    { name: "DATANYX", lead: "DEEPIKAA K S", tasks: "Rank 6", points: 54881 },
    { name: "Infinity-V", lead: "Srilekha K S", tasks: "Rank 7", points: 50434 },
    { name: "AK07", lead: "Arockia antrina A", tasks: "Rank 8", points: 39140 },
    { name: "Code Ninjas", lead: "RAMYA P", tasks: "Rank 9", points: 31018 },
    { name: "Loopers", lead: "S.priyanka", tasks: "Rank 10", points: 20690 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } }
  };

  const splitText = (text) => text.split("");

  return (
    <section className="py-24 bg-[#eaf4ff] text-slate-900 relative overflow-hidden font-sans">

      {/* GRID BACKGROUND */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#004aad 1px, transparent 1px), linear-gradient(90deg, #004aad 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Star size={14} className="text-[#004aad] fill-[#004aad]" />
            </motion.div>

            <h2 className="text-[#004aad] uppercase tracking-[0.3em] font-bold text-[11px]">
              Live Standings
            </h2>
          </div>

          <motion.h1
            variants={container}
            initial="hidden"
            whileInView="show"
            className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-slate-900 flex flex-wrap justify-center md:justify-start items-baseline"
          >
            {splitText(title).map((char, i) => (
              <motion.span key={i} variants={letter} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <span className="ml-4 text-[#004aad] font-black tracking-tighter flex">
              {splitText("Squadrons").map((char, i) => (
                <motion.span key={i} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 1 }}
            className="h-1.5 bg-[#004aad] mt-4 rounded-full"
          />
        </motion.div>

        {/* ELITE TEAMS CARDS */}
<div className="flex flex-col md:flex-row items-end justify-center gap-6 lg:gap-8 mb-32">
  {eliteTeams.map((team, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.05, y: team.featured ? -8 : -5 }}
      className={`relative flex flex-col items-center p-6 rounded-[40px] w-full md:w-1/3 transition-all group
        ${team.order}
        ${team.featured 
          ? "bg-white min-h-[540px] shadow-[0_25px_60px_rgba(0,74,173,0.15)] z-10" 
          : "bg-slate-50/80 backdrop-blur-sm min-h-[500px] shadow-sm"
        }`}
    >
      {team.image && (
        <motion.div className={`w-full ${team.featured ? "h-64" : "h-56"} mb-6 overflow-hidden rounded-[20px]`}>
          <img src={team.image} className="w-full h-full object-cover" />
        </motion.div>
      )}

      {/* Team Name */}
      <h2 className={`text-3xl font-black text-center mb-2 uppercase tracking-tight text-slate-800`}>
        {team.name}
      </h2>

      {/* Mentor */}
      <p className="text-[#004aad] text-xs font-bold tracking-widest uppercase mb-6 text-center">
        {team.mentor}
      </p>

      <div className="w-full h-[1px] bg-slate-200/50 mb-8" />

      {/* Lead & Members */}
      <div className="space-y-2 text-center mb-8">
        <p className="text-slate-500 text-sm font-semibold">Lead: {team.lead}</p>
        <p className="text-slate-400 text-xs italic px-4">{team.member}</p>
      </div>

      {/* Points & Rank */}
      <div className="grid grid-cols-2 gap-4 w-full mt-auto">
        {/* Points card stays normal */}
        <div className="text-center bg-white p-4 rounded-3xl shadow-sm">
          <p className="text-xl font-black text-[#004aad]">{team.points.toLocaleString()}</p>
          <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">PTS</p>
        </div>

        {/* Rank card changes blue on hover */}
       {/* Rank card changes blue on hover for Rank 1,2,3 */}
<div className={`text-center p-4 rounded-3xl shadow-sm transition-all duration-300 
    ${team.rank <= 3 ? "bg-white group-hover:bg-[#004aad] group-hover:text-white" : "bg-white"}`}>
  <p className={`text-xs font-black uppercase ${team.rank <= 3 ? "text-[#004aad] group-hover:text-white" : "text-[#004aad]"}`}>
    {team.tasks}
  </p>
  <p className={`text-[9px] uppercase tracking-widest font-bold ${team.rank <= 3 ? "text-slate-400 group-hover:text-white" : "text-slate-400"}`}>
    Status
  </p>
</div>
      </div>
    </motion.div>
  ))}
</div>

        {/* LEADERBOARD */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-4"
        >
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <h2 className="text-3xl font-black tracking-tight text-slate-800 uppercase">Leaderboard</h2>
          </motion.div>

          {teams.map((team, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, x: 5, boxShadow: "0 8px 25px rgba(0,74,173,0.2)" }}
              className="group flex items-center justify-between bg-white px-8 py-5 rounded-2xl border border-slate-100 transition-all cursor-default shadow-sm"
            >
              <div className="flex items-center gap-8">
                <span
                  className={`text-xl font-black w-12 text-slate-200 transition-all duration-300 rounded-full px-2 py-1
                    group-hover:bg-[#004aad]/20 group-hover:text-[#004aad]`}
                >
                  #{index + 4}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#004aad] transition-colors">
                    {team.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">Lead: {team.lead}</p>
                </div>
              </div>

              <div className="flex gap-12 text-right">
                <div className="hidden sm:block">
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">Position</p>
                  <div className="flex items-center gap-2 justify-end">
                    <Zap className="w-3 h-3 text-[#004aad]" />
                    <span className="font-bold text-slate-700 text-sm uppercase">{team.tasks}</span>
                  </div>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">Total Score</p>
                  <motion.p 
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, color: "#003377" }}
                    className="text-lg font-black text-[#004aad]"
                  >
                    {team.points.toLocaleString()}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}