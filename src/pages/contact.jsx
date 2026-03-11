// milestone

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Users, Building2, FileText, Rocket, Award } from "lucide-react";

// const milestones = [
//   { number: "13,91,884+", title: "Participating Students", icon: <Users size={28} /> },
//   { number: "12800+", title: "SIH Alumni Network", icon: <Award size={28} /> },
//   { number: "6497", title: "Participating Institutes", icon: <Building2 size={28} /> },
//   { number: "2877", title: "Total Problem Statements", icon: <FileText size={28} /> },
//   { number: "133", title: "Startups Submitted", icon: <Rocket size={28} /> },
// ];

// export default function Milestones() {
//   // Click panna glow aaga state management pa
//   const [activeMilestone, setActiveMilestone] = useState(0);

//   return (
//     <section className="bg-white text-slate-900 py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Tarcin Style Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-center mb-20"
//         >
//           <p className="text-blue-600 font-black tracking-[0.4em] text-[10px] uppercase mb-3">IMPACT TRACKER</p>
//           <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
//             HACKATHON <span className="text-blue-600">MILESTONES</span>
//           </h2>
//         </motion.div>

//         {/* Milestone Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//           {milestones.map((item, index) => {
//             const isActive = activeMilestone === index;

//             return (
//               <motion.div
//                 key={index}
//                 onClick={() => setActiveMilestone(index)}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ y: -10 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`cursor-pointer rounded-[35px] p-8 text-center transition-all duration-500
//                   ${isActive 
//                     ? 'bg-white border-2 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.25)] scale-105 z-10' 
//                     : 'bg-slate-50 border-2 border-transparent opacity-70'}`}
//               >
//                 <div className={`flex justify-center mb-6 transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
//                   {item.icon}
//                 </div>

//                 <h3 className={`text-3xl font-black italic tracking-tighter mb-2 transition-colors ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
//                   {item.number}
//                 </h3>

//                 <p className={`text-[10px] font-black uppercase tracking-widest leading-relaxed transition-colors ${isActive ? 'text-blue-500' : 'text-slate-400'}`}>
//                   {item.title}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }