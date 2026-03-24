import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaUsers, FaGift, FaChartBar } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import { Star } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white text-slate-900 py-24 sm:py-32 overflow-hidden font-sans"
    >
      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#004aad 1px, transparent 1px), linear-gradient(90deg, #004aad 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* Label (UNCHANGED) */}
        <div className="inline-flex items-left gap-2 px-4 py-2 rounded-full 
          bg-slate-100 border border-slate-200 shadow-sm">
          <Star size={12} className="text-[#004aad]" />
          <div className="flex text-left">
            {["A","b","o","u","t"," ","T","h","e"," ","E","v","e","n","t"].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-[11px] font-bold tracking-[0.3em] uppercase text-black"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* 🔥 UPDATED HEADING ONLY */}
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.04 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-12 text-slate-900 leading-tight flex flex-wrap justify-start text-left"
        >
          {"What is NextGen Hackathon?".split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 200, damping: 12 }
                }
              }}
              className={`inline-block ${char === " " ? "mx-1" : ""} ${
                i >= 8 ? "text-[#004aad]" : "text-slate-900"
              }`}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Vision Mission */}
        <div className="relative group mb-12">
          <div className="absolute -inset-1 bg-[#004aad] rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-10 transition duration-700"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative bg-[#f0f9ff] border border-blue-100 rounded-[2.5rem] p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all duration-500"
          >
            <h3 className="flex items-center gap-3 text-2xl font-black text-slate-800 uppercase tracking-tight mb-6">
              <motion.div 
                className="p-2 rounded-lg border border-blue-200 bg-white 
                  group-hover:border-transparent 
                  group-hover:bg-gradient-to-r group-hover:from-[#004aad] group-hover:to-[#004aad]
                  transition-all duration-300 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaBullseye className="text-[#004aad] group-hover:text-white transition-all duration-300" />
              </motion.div>
              Vision & Mission
            </h3>

            <p className="text-slate-600 leading-relaxed text-lg max-w-4xl">
              NextGen Innovators Hackathon 2026 is organized by the Department of Computer Science at <span className="font-bold text-[#004aad]">Lady Doak College</span> in collaboration with <span className="font-bold text-slate-800">TARCIN Robotics</span>. The event encourages students to build innovative solutions, strengthen coding skills, and collaborate on real-world challenges.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FiCode />}
            title="Innovation"
            desc="Students build creative technology solutions using modern programming tools."
          />
          <FeatureCard
            icon={<FaUsers />}
            title="Collaboration"
            desc="Teams work together to design and develop impactful project ideas."
          />
          <FeatureCard
            icon={<FaGift />}
            title="Recognition"
            desc="Participants gain mentorship, experience, and awards for top innovations."
          />
        </div>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-16 rounded-[2.5rem] p-10 border border-indigo-100 bg-[#f5f7ff] text-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#004aad] to-[#004aad] text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-[#004aad]/20">
            A++ Accreditation
          </div>

          <h3 className="flex justify-center items-center gap-2 text-xl font-black text-slate-800 uppercase tracking-tight mb-4">
            <motion.div 
              className="p-2 rounded-lg border border-blue-200 bg-white 
                hover:border-transparent 
                hover:bg-gradient-to-r hover:from-[#004aad] hover:to-[#004aad]
                transition-all duration-300 shadow-sm hover:shadow-lg"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FaChartBar className="text-[#004aad] hover:text-white transition-all duration-300" />
            </motion.div>
            Impact & Excellence
          </h3>

          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            The hackathon promotes innovation, teamwork, and practical technology skills, supporting the academic excellence and learning initiatives of Lady Doak College.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-[#004aad] rounded-[2rem] blur-lg opacity-0 group-hover:opacity-20 transition duration-500"></div>

      <motion.div
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative h-full bg-white border border-blue-100 rounded-[2rem] p-8 shadow-sm transition-all duration-300"
      >
        <motion.div 
          className="w-14 h-14 flex items-center justify-center rounded-2xl border border-blue-200 bg-white
            group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-[#004aad] group-hover:to-[#004aad] transition-all duration-300 shadow-sm hover:shadow-xl"
          whileHover={{ scale: 1.3, rotate: 360 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.div className="text-[#004aad] group-hover:text-white text-2xl transition-all duration-300 drop-shadow-lg group-hover:drop-shadow-2xl">
            {React.cloneElement(icon, { className: "drop-shadow-lg" })}
          </motion.div>
        </motion.div>

        <div className="mb-3">
          <div className="flex justify-center">
            {title.split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-xl font-black text-slate-800 uppercase tracking-tight inline-block mx-[1px]"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        <p className="text-slate-500 text-sm leading-relaxed">
          {desc}
        </p>
      </motion.div>
    </div>
  );
}