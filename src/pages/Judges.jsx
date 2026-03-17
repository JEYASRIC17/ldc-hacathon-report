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

  return (
    <section id="judges" className="py-32 bg-white text-slate-900 relative overflow-hidden border-b border-slate-100">

      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#004aad 1px, transparent 1px), linear-gradient(90deg, #004aad 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-1.5 rounded-full mb-6">
            <Star size={12} className="text-[#004aad] fill-[#004aad] animate-pulse" />
            <p className="text-[10px] tracking-[0.5em] text-[#004aad] uppercase font-bold">
              Evaluation Panel
            </p>
          </div>

          {/* Professional Heading: Tight tracking and medium-heavy weight */}
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight uppercase text-slate-900 leading-[0.9] lg:text-7xl">
            Distinguished <span className="text-[#004aad]">Judges</span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-[#004aad] mx-auto mt-8 rounded-full"
          />
        </motion.div>

        {/* JUDGES GRID */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {judges.map((judge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -12 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_60px_-15px_rgba(0,74,173,0.15)] group-hover:border-[#004aad]/20 transition-all duration-500 flex flex-col items-center text-center overflow-hidden">

                {/* Photo */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-[#004aad]/5 blur-2xl rounded-full group-hover:bg-[#004aad]/15 transition-colors duration-500" />
                  <img
                    src={judge.image}
                    alt={judge.name}
                    className="w-40 h-40 rounded-full object-cover relative z-10 border-4 border-white group-hover:border-[#004aad]/20 shadow-sm transition-all duration-500 grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Company: Increased tracking for a modern "Label" look */}
                  <span className="text-[11px] font-bold text-[#004aad] uppercase tracking-[0.25em] mb-3 block">
                    {judge.company}
                  </span>

                  {/* Name: Black weight with tight tracking */}
                  <h3 className="text-3xl font-black tracking-tight text-slate-800 mb-2 group-hover:text-[#004aad] transition-colors leading-tight">
                    {judge.name}
                  </h3>

                  {/* Role: Slightly muted but bold */}
                  <p className="text-slate-500 text-[13px] font-semibold uppercase tracking-wider mb-6">
                    {judge.role}
                  </p>

                  <div className="h-[1px] w-12 bg-slate-100 mx-auto mb-6 group-hover:w-20 group-hover:bg-[#004aad]/30 transition-all duration-500" />

                  {/* Expertise Box: Clean, smaller text */}
                  <div className="bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:border-[#004aad]/10 transition-colors">
                    <p className="text-[11px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                      Field Expertise
                    </p>
                    <p className="text-sm text-slate-700 font-medium">
                      {judge.expertise}
                    </p>
                  </div>
                </div>

                {/* Decorative Bottom Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#004aad]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Text: Ultra-wide tracking for a "Legal/Official" feel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-24"
        >
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.6em] font-bold mb-4 opacity-70">
            Blind Judging Process • Innovation Metric • Scalability Score
          </p>
          <div className="inline-block h-[1px] w-16 bg-slate-200" />
        </motion.div>
      </div>
    </section>
  );
}