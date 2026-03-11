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
  Trophy
} from "lucide-react";

export default function HackathonTimeline() {
  const [active, setActive] = useState(0);

  const timeline = [
    { time: "08:30 AM", title: "Registration", desc: "Teams arrival and kit distribution.", icon: UserCheck },
    { time: "09:00 AM", title: "Inauguration", desc: "Official opening ceremony.", icon: Mic },
    { time: "09:30 AM", title: "Release", desc: "Problem statement reveal and domain selection.", icon: Lightbulb },
    { time: "10:00 AM", title: "Hacking Begins", desc: "The sprint for innovation starts.", icon: Code },
    { time: "01:00 PM", title: "Lunch Break", desc: "Networking over lunch with mentors.", icon: Utensils },
    { time: "02:00 PM", title: "Development", desc: "Intensive building phase with mentorship.", icon: Cpu },
    { time: "04:30 PM", title: "Submission", desc: "Project freeze and documentation upload.", icon: Upload },
    { time: "05:00 PM", title: "Evaluation", desc: "Jury assessment of technical feasibility.", icon: Gavel },
    { time: "06:00 PM", title: "Awards", desc: "Winner announcement and closing ceremony.", icon: Trophy }
  ];

  // ✅ Fix: Extract the component to a capitalized variable for JSX rendering
  const ActiveIcon = timeline[active].icon;

  return (
    <section id="timeline" className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden font-sans border-b border-slate-100">
      
      {/* Background Subtle Patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sky-600 font-bold tracking-[0.2em] text-[11px] uppercase mb-2"
          >
            The Schedule
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Event <span className="text-sky-500">Flow</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="h-1.5 bg-sky-500 mx-auto mt-4 rounded-full shadow-lg shadow-sky-200"
          />
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE: INTERACTIVE TIMELINE */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isActive = active === index;

                return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col items-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActive(index)}
                      className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border-2 cursor-pointer transition-all duration-300 shadow-sm
                      ${isActive 
                        ? "bg-sky-500 border-sky-400 text-white shadow-sky-200 scale-110" 
                        : "bg-white border-slate-100 text-slate-400 hover:border-sky-200"
                      }`}
                    >
                      <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-sky-500"}`} />
                    </motion.div>
                    <span className={`text-[10px] mt-3 font-bold uppercase tracking-wider transition-colors ${isActive ? "text-sky-600" : "text-slate-400"}`}>
                      {item.time}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* DETAIL CARD */}
            <div className="mt-10 w-full flex justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 w-full max-w-[400px] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-[0.05] text-sky-500">
                    <ActiveIcon size={60} />
                  </div>
                  <p className="text-[10px] text-sky-500 font-bold tracking-widest uppercase">
                    Slot: {timeline[active].time}
                  </p>
                  <h3 className="text-xl font-bold mt-1 text-slate-800">
                    {timeline[active].title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                    {timeline[active].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT SIDE: METRICS */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50"
          >
            <h3 className="text-2xl font-black mb-8 uppercase tracking-tight text-slate-800 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-sky-500" /> Metrics & Scope
            </h3>

            <div className="space-y-4">
              {[
                { label: "Participating Teams", val: "42" },
                { label: "Innovators Enrolled", val: "168" },
                { label: "Thematic Domains", val: "06" },
                { label: "Prize Pool Value", val: "₹50,000" }
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center border-b border-slate-50 pb-3 hover:bg-slate-50/50 transition-colors p-2 rounded-lg">
                  <span className="text-slate-500 font-semibold tracking-wide text-xs uppercase">
                    {stat.label}
                  </span>
                  <span className="text-lg font-extrabold text-sky-600">
                    {stat.val}
                  </span>
                </div>
              ))}
            </div>

            <h4 className="text-slate-800 font-bold mt-8 mb-4 uppercase text-[11px] tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500" /> Focus Areas
            </h4>

            <div className="flex flex-wrap gap-2">
              {[
                "AI/ML", "Agri-Tech", "Healthcare", "Ed-Tech", "IoT", "Green Energy"
              ].map((tag, i) => (
                <span
                  key={i}
                  className="bg-sky-50 border border-sky-100 text-sky-600 px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}