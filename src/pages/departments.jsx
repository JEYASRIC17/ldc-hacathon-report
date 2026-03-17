import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Globe,
  Database,
  Shield,
  Rocket,
  GraduationCap,
  Laptop,
  Code2,
  Terminal,
  Server,
  Layers
} from "lucide-react";

export default function Departments() {
  const mainDepartment = {
    title: "Computer Science",
    established: "1994",
    description:
      "The powerhouse of innovation at Lady Doak College, fostering excellence in AI, Data Science, and Software Engineering. Pioneers of the LDC-HACZ 2026 Hackathon.",
    stats: [
      { label: "Faculty", value: "22+" },
      { label: "Lab Systems", value: "180+" },
      { label: "Research Areas", value: "12+" }
    ],
    specializations: [
      "Machine Learning",
      "Cloud Computing",
      "IoT",
      "Data Science"
    ]
  };

  const otherParticipants = [
    // Updated all colors to bg-[#004aad] for uniformity
    { name: "Information Technology", icon: Globe, color: "bg-[#004aad]" },
    { name: "Artificial Intelligence", icon: Cpu, color: "bg-[#004aad]" },
    { name: "Cyber Security", icon: Shield, color: "bg-[#004aad]" },
    { name: "Data Analytics", icon: Layers, color: "bg-[#004aad]" }
  ];

  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden font-sans border-b border-slate-100">
      
      {/* Signature Grid Background to match Teams/Video sections */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#004aad 1px, transparent 1px), linear-gradient(90deg, #004aad 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-[#004aad]" />
            <span className="text-[#004aad] uppercase tracking-[0.4em] font-black text-[10px]">
              Academic Core
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            Software <span className="text-[#004aad]">Units</span>
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 1 }}
            className="h-1.5 bg-[#004aad] mt-6 rounded-full" 
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Main Department Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_10px_50px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden group"
          >
            {/* Background Decorative Icon */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
              <Code2 size={180} className="text-[#004aad]" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-8">
                <div className="bg-[#004aad] p-4 rounded-2xl text-white shadow-xl shadow-[#004aad]/20">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight leading-none">
                    Department of {mainDepartment.title}
                  </h2>
                  <p className="text-[#004aad] font-bold text-xs tracking-widest uppercase mt-2">
                    Established {mainDepartment.established}
                  </p>
                </div>
              </div>

              <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-xl font-medium">
                {mainDepartment.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {mainDepartment.stats.map((stat, i) => (
                  <div key={i} className="border-l-2 border-slate-100 pl-5 group-hover:border-[#004aad]/30 transition-colors">
                    <p className="text-2xl font-black text-slate-800">
                      {stat.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Specialization Tags */}
              <div className="flex flex-wrap gap-2">
                {mainDepartment.specializations.map((spec, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-slate-50 rounded-xl text-slate-600 text-[10px] font-black uppercase tracking-widest border border-slate-100 hover:border-[#004aad]/20 transition-all"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Collaborating Software Departments */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-8 flex items-center gap-3 pl-2">
              <Rocket className="text-[#004aad]" size={16} />
              Software Collaborators
            </h3>

            <div className="grid gap-4">
              {otherParticipants.map((dept, i) => {
                const Icon = dept.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: -10 }}
                    className="group flex items-center gap-5 p-5 rounded-[2rem] bg-slate-50 border border-slate-100 transition-all cursor-default hover:bg-white hover:shadow-xl hover:shadow-[#004aad]/5 hover:border-[#004aad]/20"
                  >
                    <div className={`${dept.color} p-3 rounded-xl text-white shadow-lg`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-800 uppercase text-sm tracking-tight">
                        {dept.name}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                        Active Node
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Sync Card / CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-8 bg-[#004aad] rounded-[2.5rem] p-8 text-white relative overflow-hidden group cursor-pointer shadow-2xl shadow-[#004aad]/20"
            >
              <div className="absolute -bottom-6 -right-6 opacity-10 group-hover:scale-125 transition-transform duration-700">
                <Server size={140} />
              </div>

              <h4 className="text-xl font-black uppercase mb-3 tracking-tight">
                Inter-Departmental Sync
              </h4>

              <p className="text-blue-100/80 text-xs leading-relaxed font-medium">
                Breaking silos and fostering cross-disciplinary technology solutions for HACZ 2026.
              </p>
              
              <div className="mt-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] uppercase font-black tracking-widest text-blue-200">System Integration Active</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}