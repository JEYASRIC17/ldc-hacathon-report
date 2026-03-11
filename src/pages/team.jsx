import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Zap, Star } from "lucide-react";

export default function Teams() {
  const eliteTeams = [
    {
      name: "Binary Builders",
      lead: "Bhuvanesh N",
      member: "Om Vignesh S",
      mentor: "Lalitha Mohana R S",
      points: 2780,
      tasks: 100,
      rank: 2,
      icon: <Award className="w-12 h-12 text-slate-400" />,
      order: "order-2 md:order-1",
    },
    {
      name: "Code Queens",
      lead: "Lakshitha Devi S",
      member: "Devadharshini G",
      mentor: "Jothismathi S",
      points: 2847,
      tasks: 102,
      rank: 1,
      icon: <Trophy className="w-16 h-16 text-sky-500" />,
      featured: true,
      order: "order-1 md:order-2",
    },
    {
      name: "Logic Loop",
      lead: "Srinidhi K",
      member: "Rubika M",
      mentor: "Suvetha S",
      points: 2705,
      tasks: 98,
      rank: 3,
      icon: <Medal className="w-12 h-12 text-amber-600" />,
      order: "order-3 md:order-3",
    },
  ];

  const teams = [
    { name: "Alpha Logic", lead: "Shalini S", tasks: 64, points: 1767 },
    { name: "Runtime Rebels", lead: "Nivesh N S", tasks: 52, points: 1436 },
    { name: "Coding Beast", lead: "Sivadharshini M", tasks: 50, points: 1378 },
    { name: "Tech Titans", lead: "Deepasri J P", tasks: 29, points: 779 },
    { name: "Code Crafters", lead: "Vaishnavi K A", tasks: 28, points: 769 },
    { name: "MindSpark", lead: "Jerine Priya D", tasks: 26, points: 683 },
    { name: "Twin Thinkers", lead: "Archana Devi K", tasks: 28, points: 673 },
  ];

  return (
    <section id="teams" className="py-24 bg-white text-slate-900 relative overflow-hidden font-sans border-b border-slate-100">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0ea5e9 1px, transparent 1px),
            linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <Star size={14} className="text-sky-500 fill-sky-500" />
            <h2 className="text-sky-600 uppercase tracking-[0.3em] font-bold text-[11px]">
              Top Performers
            </h2>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-slate-900">
            Elite <span className="text-sky-500">Squadrons</span>
          </h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "70px" }}
            className="h-1.5 bg-sky-500 mt-4 rounded-full shadow-lg shadow-sky-100"
          />
        </motion.div>

        {/* TOP 3 PODIUM */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-6 lg:gap-8 mb-32">
          {eliteTeams.map((team, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, transition: { duration: 0.2 } }}
              className={`relative flex flex-col items-center p-8 rounded-[40px] w-full md:w-1/3 border transition-all
                ${team.order}
                ${team.featured
                  ? "bg-white border-sky-400 min-h-[520px] shadow-[0_20px_60px_rgba(14,165,233,0.15)] z-10"
                  : "bg-slate-50 border-slate-100 min-h-[440px] shadow-sm"
                }`}
            >

              <motion.div
                animate={team.featured ? { y: [0, -8, 0] } : {}}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-6"
              >
                {team.icon}
              </motion.div>

              <h2 className="text-3xl font-black text-center mb-2 uppercase tracking-tight leading-tight text-slate-800">
                {team.name}
              </h2>

              <p className="text-sky-600 text-sm font-bold tracking-widest uppercase mb-6">
                Mentor: {team.mentor}
              </p>

              <div className="w-full h-[1px] bg-slate-200/50 mb-8" />

              <div className="space-y-2 text-center mb-8">
                <p className="text-slate-500 text-sm font-semibold italic">Lead: {team.lead}</p>
                <p className="text-slate-400 text-sm italic">Member: {team.member}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full mt-auto">
                <div className="text-center bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
                  <p className="text-2xl font-black text-sky-600">{team.points}</p>
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Points</p>
                </div>

                <div className="text-center bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
                  <p className="text-2xl font-black text-sky-600">{team.tasks}</p>
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Tasks</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* LEADERBOARD */}
        <div className="max-w-5xl mx-auto">

          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-black tracking-tight text-slate-800 uppercase">
              Leaderboard
            </h2>
            <div className="h-[1px] flex-grow bg-slate-100"></div>
          </div>

          <div className="space-y-4">
            {teams.sort((a, b) => b.points - a.points).map((team, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.01, backgroundColor: "#f8fafc" }}
                className="group flex items-center justify-between bg-white px-8 py-5 rounded-2xl border border-slate-100 hover:border-sky-300 transition-all cursor-default shadow-sm"
              >

                <div className="flex items-center gap-8">
                  <span className="text-2xl font-black text-slate-200 group-hover:text-sky-400 transition-colors w-10">
                    #{index + 4}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
                      {team.name}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium">
                      Lead: {team.lead}
                    </p>
                  </div>
                </div>

                <div className="flex gap-12 text-right">

                  <div className="hidden sm:block">
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Tasks
                    </p>

                    <div className="flex items-center gap-2 justify-end">
                      <Zap className="w-3 h-3 text-sky-500" />
                      <span className="font-bold text-slate-700">{team.tasks}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Total Score
                    </p>
                    <p className="text-xl font-black text-sky-600">
                      {team.points.toLocaleString()}
                    </p>
                  </div>

                </div>

              </motion.div>

            ))}
          </div>

        </div>
      </div>
    </section>
  );
}