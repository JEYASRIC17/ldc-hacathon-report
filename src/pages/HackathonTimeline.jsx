import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserCheck,
  Mic,
  Lightbulb,
  Code,
  Utensils,
  Cpu,
  Upload,
  Gavel,
  Trophy,
  ChevronRight,
  Clock
} from "lucide-react";

export default function HackathonTimeline() {
  const [active, setActive] = useState(0);

  const timeline = [
    { time: "08:30 AM", title: "Registration", desc: "Teams arrival, badge collection, and kit distribution at the main lobby.", icon: UserCheck },
    { time: "09:00 AM", title: "Inauguration", desc: "Keynote speeches from industry leaders and official lighting of the lamp.", icon: Mic },
    { time: "09:30 AM", title: "Release", desc: "Unveiling the problem statements and selection of technical tracks.", icon: Lightbulb },
    { time: "10:00 AM", title: "Hacking Begins", desc: "Clock starts. Teams move to their designated bays to begin development.", icon: Code },
    { time: "01:00 PM", title: "Lunch Break", desc: "Gourmet lunch served in the networking lounge. Mentors available for chat.", icon: Utensils },
    { time: "02:00 PM", title: "Development", desc: "Deep-work session. First round of internal technical mentorship begins.", icon: Cpu },
    { time: "04:30 PM", title: "Submission", desc: "Git repositories freeze. Documentation and final builds uploaded to portal.", icon: Upload },
    { time: "05:00 PM", title: "Evaluation", desc: "Jury presentation. Live demo of prototypes and technical assessment.", icon: Gavel },
    { time: "06:00 PM", title: "Awards", desc: "Grand finale, results announcement, and networking dinner.", icon: Trophy }
  ];

  const ActiveIcon = timeline[active].icon;

  return (
    <section id="timeline" className="py-32 bg-white text-slate-900 relative overflow-hidden font-sans border-b border-slate-100">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#004aad 1.5px, transparent 1.5px), linear-gradient(90deg, #004aad 1.5px, transparent 1.5px)`, 
          backgroundSize: '60px 60px' 
        }} 
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,74,173,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-1 rounded-md mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#004aad] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#004aad]"></span>
              </span>
              <p className="text-[10px] text-[#004aad] font-black tracking-[0.2em] uppercase">Phase: Execution</p>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Event <span className="text-[#004aad]">Schedule</span>
            </h2>
                      <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            className="h-2 bg-[#004aad] mx-auto mt-6 rounded-full shadow-lg shadow-blue-200"
          />
          </div>
          <div className="hidden md:block text-right">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Total Duration</p>
            <p className="text-2xl font-black text-slate-800 tracking-tighter">10 Hours • Live</p>
          </div>
        </div>

        {/* INTERACTIVE TIMELINE ENGINE */}
        <div className="flex flex-col gap-12">
          
          {/* Timeline Track */}
          <div className="relative flex items-center justify-between before:absolute before:h-[2px] before:w-full before:bg-slate-100 before:top-1/2 before:-translate-y-1/2 before:z-0 px-4">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isActive = active === index;

              return (
                <div key={index} className="relative z-10">
                  <motion.button
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActive(index)}
                    className={`group relative flex flex-col items-center transition-all duration-500`}
                  >
                    {/* Time Tooltip */}
                    <div className={`absolute -top-10 px-2 py-1 rounded bg-slate-900 text-white text-[9px] font-bold transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                      {item.time}
                    </div>

                    {/* Node Circle */}
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-4 transition-all duration-500
                    ${isActive 
                      ? "bg-white border-[#004aad] text-[#004aad] shadow-[0_15px_30px_rgba(0,74,173,0.2)] scale-110" 
                      : "bg-white border-slate-50 text-slate-300 hover:border-slate-200"
                    }`}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>

                    {/* Visual Connector */}
                    {isActive && (
                      <motion.div 
                        layoutId="activePointer"
                        className="absolute -bottom-4 text-[#004aad]"
                      >
                        <ChevronRight className="rotate-90 w-5 h-5" />
                      </motion.div>
                    )}
                  </motion.button>
                </div>
              );
            })}
          </div>

          {/* DETAIL DISPLAY CARD */}
          <div className="grid lg:grid-cols-12 items-stretch gap-0 rounded-[40px] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/40">
            
            {/* Left Image/Visual Block */}
            <div className="lg:col-span-5 bg-[#004aad] relative overflow-hidden p-12 flex flex-col justify-between text-white">
              <div className="absolute inset-0 opacity-10">
                <ActiveIcon className="w-full h-full scale-110 rotate-12" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <Clock className="w-5 h-5 text-blue-200" />
                  <span className="text-xl font-bold tracking-tight">{timeline[active].time}</span>
                </div>
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-none">
                  {timeline[active].title}
                </h3>
              </div>
              <div className="relative z-10 flex gap-1">
                {timeline.map((_, i) => (
                   <div key={i} className={`h-1 rounded-full transition-all duration-700 ${i === active ? 'w-12 bg-white' : 'w-2 bg-white/20'}`} />
                ))}
              </div>
            </div>

            {/* Right Content Block */}
            <div className="lg:col-span-7 bg-white p-12 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium mb-8">
                    "{timeline[active].desc}"
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <div className="h-px flex-1 bg-slate-100" />
                    <button 
                      onClick={() => setActive((prev) => (prev + 1) % timeline.length)}
                      className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#004aad] hover:opacity-70 transition-all"
                    >
                      Next Event <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* SUB-FOOTER */}
        <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-40">
          {["Formal Attire", "Strict Timings", "Identity Card Mandatory", "Wifi Available"].map((rule, idx) => (
            <span key={idx} className="text-[10px] font-bold uppercase tracking-widest text-slate-500">• {rule}</span>
          ))}
        </div>
      </div>
    </section>
  );
}