
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Users,
  Flame,
  Building2,
  Lightbulb,
  Brain,
  Scale
} from "lucide-react";

const StatNumber = ({ end }) => {
  const [count, setCount] = useState(0);

  return (
    <motion.span
      onViewportEnter={() => {
        let start = 0;
        const duration = 2;
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
      }}
      viewport={{ once: true }}
    >
      {count.toLocaleString()}
    </motion.span>
  );
};

export default function HackathonStats() {

  const stats = [
    { label: "Teams Participated", value: 40, icon: Users },
    { label: "Participants", value: 160, icon: Flame },
    { label: "Departments", value: 12, icon: Building2 },
    { label: "Problem Statements", value: 15, icon: Lightbulb },
    { label: "Mentors", value: 8, icon: Brain },
    { label: "Judges", value: 5, icon: Scale }
  ];

  return (
    <section className="bg-[#050505] text-white py-24 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black tracking-tighter uppercase italic">
            Event <span className="text-blue-500">Highlights</span>
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

          {stats.map((stat,index)=>{

            const Icon = stat.icon;

            return(

              <motion.div
                key={index}
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay:index*0.1 }}
                whileHover={{ y:-10 }}
                className="bg-[#0a0a0c]/70 backdrop-blur-xl p-8 rounded-[2rem] border border-blue-500/20 shadow-xl group text-center"
              >

                {/* ICON CIRCLE */}
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30 group-hover:bg-blue-600/30 transition">

                  <Icon className="w-7 h-7 text-blue-400 group-hover:scale-110 transition"/>

                </div>

                {/* NUMBER */}
                <h3 className="text-5xl font-black tracking-tighter text-blue-400">
                  <StatNumber end={stat.value}/>+
                </h3>

                {/* LABEL */}
                <p className="mt-2 text-gray-500 text-[10px] uppercase tracking-[0.3em] font-bold group-hover:text-gray-300 transition">
                  {stat.label}
                </p>

              </motion.div>

            )

          })}

        </div>

      </div>
    </section>
  );
}

