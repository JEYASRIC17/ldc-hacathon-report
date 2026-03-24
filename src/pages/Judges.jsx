
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Judges() {

  const judges = [
    {
      name: "Dr.Beulah Jeyashree",
      role: "Principal & Secretary",
      company: "Lady Doak College",
      expertise: "Education Leadership & Academic Administration",
      image: "../judges/judge1.jpg"
    },
    {
      name: "Mohamed Arsath",
      role: "Director of Operation",
      company: "Tarcin",
      expertise: "Full stack|Business Management|Project Handling",
      image: "../judges/judge2.jpg"
    },
    {
      name: "Dr. N. Jayachandra",
      role: "Head of the Department of Computer Science & Associate Professor",
      company: "Lady Doak College",
      expertise: "Digital Image Processing",
      image: "../judges/judge3.jpg"
    }
  ];

  // 🔥 LETTER ANIMATION
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const letter = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 12 }
    }
  };

  const splitText = (text) => text.split("");

  return (
     <section id="judges" className="py-32 bg-white text-slate-900 relative overflow-hidden font-sans">

      {/* Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#004aad 1.5px, transparent 1.5px), linear-gradient(90deg, #004aad 1.5px, transparent 1.5px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* 🔥 HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-left mb-24"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#004aad] text-white px-4 py-1.5 rounded-full mb-6 shadow-md">
            <Star size={12} className="text-white fill-white animate-pulse" />
            <p className="text-[10px] tracking-[0.3em] uppercase font-black">
              Evaluation Panel
            </p>
          </div>

          {/* 🔥 ANIMATED HEADING */}
          <motion.h2
            variants={container}
            initial="hidden"
            whileInView="show"
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] flex flex-wrap justify-left "
          >
           
            {/* DISTINGUISHED */}
            {splitText("Distinguished ").map((char, i) => (
              <motion.span key={i} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}

            {/* JUDGES */}
            <span className="text-[#004aad] flex ">
              {splitText("Judges").map((char, i) => (
                <motion.span key={i} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </span>
            
          </motion.h2>

          {/* Underline */}
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1 }}
            className="h-2 bg-[#004aad] mx-left mt-6 rounded-full shadow-lg"
          />
        </motion.div>
      

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {judges.map((judge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -12 }}
              className="group relative transition-all duration-500 rounded-[2.5rem]"
            >
              <div className="bg-[#f0f8ff] p-8 rounded-[2.5rem] border border-blue-100 group-hover:bg-[#fcfdff] group-hover:border-[#004aad]/20 group-hover:shadow-2xl group-hover:shadow-blue-900/10 transition-all duration-500 flex flex-col items-center text-center">

                {/* Image */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-[#004aad]/5 blur-2xl rounded-full group-hover:bg-[#004aad]/15 transition-colors duration-500" />
                  <img 
                    src={judge.image} 
                    alt={judge.name} 
                    className="w-40 h-40 rounded-full object-cover relative z-10 border-4 border-white group-hover:border-[#004aad]/20 transition-all grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Content */}
                <span className="text-[11px] font-bold text-[#004aad] uppercase tracking-[0.25em] mb-3 block">
                  {judge.company}
                </span>

                <h3 className="text-3xl font-black text-slate-800 mb-2 group-hover:text-[#004aad] transition-colors">
                  {judge.name}
                </h3>

                <p className="text-slate-500 text-[13px] font-semibold uppercase tracking-wider mb-6">
                  {judge.role}
                </p>

                <div className="h-[1px] w-12 bg-blue-100 mx-auto mb-6 group-hover:w-20 group-hover:bg-[#004aad]/30 transition-all duration-500" />

                <div className="bg-white px-5 py-3 rounded-2xl border border-white group-hover:border-[#004aad]/10 shadow-inner">
                  <p className="text-[11px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                    Field Expertise
                  </p>
                  <p className="text-sm text-slate-700 font-medium">
                    {judge.expertise}
                  </p>
                </div>

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#004aad]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div className="text-center mt-24">
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.5em] font-black mb-4">
            Blind Judging Process • Innovation Metric • Scalability Score
          </p>
          <div className="inline-block h-[1px] w-16 bg-slate-200" />
        </motion.div>

      </div>
    </section>
  );
}