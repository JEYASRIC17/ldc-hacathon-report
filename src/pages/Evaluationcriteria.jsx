// import React from "react";
// import { motion } from "framer-motion";
// import { Zap } from "lucide-react";

// const EvaluationCriteria = () => {
//   const criteria = [
//     { title: "Functional Correctness", score: 20 },
//     { title: "Logical Structure", score: 10 },
//     { title: "Code Quality & Readability", score: 10 },
//     { title: "Optimization / Innovation", score: 5 },
//     { title: "Documentation / Insights", score: 5 },
//     { title: "Total Score", score: 50, subtext: "Maximum marks per problem" },
//   ];

//   return (
//     <section className="bg-[#f0f8ff] py-32 px-6 font-sans relative overflow-hidden border-b border-blue-50">
      
//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* Header */}
//         <div className="mb-24 flex items-center justify-between flex-wrap gap-6">
//           <div className="text-left">
            
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="inline-flex items-center gap-2 bg-white border border-blue-100 px-3 py-1 rounded-full mb-6 shadow-sm"
//             >
//               <Zap size={12} className="text-[#004aad]" />
//               <p className="text-[10px] text-[#5f7fa6] font-black tracking-[0.2em] uppercase">
//                 Phase: Execution
//               </p>
//             </motion.div>
            
//             <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
//               EVALUATION{" "}
//               <span className="text-[#004aad] relative">
//                 CRITERIA
//                 {/* subtle underline animation */}
//                 <motion.span
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "100%" }}
//                   transition={{ duration: 1 }}
//                   className="absolute left-0 bottom-0 h-[4px] bg-blue-200 rounded-full"
//                 />
//               </span>
//             </h2>
//           </div>

//           <div className="bg-[#004aad] px-6 py-2 rounded-full shadow-lg shadow-blue-200">
//             <span className="text-white text-xs font-bold tracking-widest uppercase">
//               50 Marks / Problem
//             </span>
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
//           {criteria.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover={{ y: -10 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white p-10 rounded-[40px] 
//               shadow-[0_20px_60px_rgba(0,0,0,0.06)] 
//               border border-gray-100 
//               flex flex-col justify-between min-h-[260px] 
//               transition-all duration-500"
//             >
//               <div>
//                 {/* Score with shimmer animation */}
//                 <motion.h3 
//                   className="text-6xl font-black mb-2 tracking-tighter text-[#004aad]"
//                   initial={{ opacity: 0.7 }}
//                   whileInView={{ opacity: 1 }}
//                   animate={{
//                     textShadow: [
//                       "0px 0px 0px rgba(0,0,0,0)",
//                       "0px 0px 8px rgba(0,74,173,0.3)",
//                       "0px 0px 0px rgba(0,0,0,0)"
//                     ]
//                   }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   {item.score}
//                 </motion.h3>
                
//                 {/* Title with hover color shift */}
//                 <p className="text-gray-900 text-xl font-extrabold leading-tight mb-2 tracking-tight transition-colors duration-300 hover:text-[#5f7fa6]">
//                   {item.title}
//                 </p>
                
//                 {/* Subtext softer tone */}
//                 <p className="text-[#8aa0b8] text-[11px] font-bold uppercase tracking-widest opacity-80 mb-2">
//                   {item.subtext || "out of 50 marks"}
//                 </p>
//               </div>

//               {/* Progress */}
//               <div className="mt-8">
//                 <div className="h-[6px] w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                  
//                   <motion.div 
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${(item.score / 50) * 100}%` }}
//                     transition={{ duration: 1.2 }}
//                     className="h-full bg-[#004aad] rounded-full"
                    
//                     // subtle glow animation
//                     animate={{
//                       boxShadow: [
//                         "0 0 0px rgba(0,74,173,0)",
//                         "0 0 10px rgba(0,74,173,0.4)",
//                         "0 0 0px rgba(0,74,173,0)"
//                       ]
//                     }}
//                   />
//                 </div>
//               </div>

//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EvaluationCriteria;
import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const EvaluationCriteria = () => {
  const criteria = [
    { title: "Functional Correctness", score: 20 },
    { title: "Logical Structure", score: 10 },
    { title: "Code Quality & Readability", score: 10 },
    { title: "Optimization / Innovation", score: 5 },
    { title: "Documentation / Insights", score: 5 },
    { title: "Total Score", score: 50, subtext: "Maximum marks per problem" },
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.05 }
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
   <section className="py-32 px-6 font-sans relative overflow-hidden">

      {/* ✅ LIGHT GLASS OVERLAY (so video visible) */}
     <div className="absolute inset-0 z-0"></div> 


      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="mb-24 flex items-center justify-between flex-wrap gap-6">
          <div className="text-left">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-100 px-3 py-1 rounded-full mb-6 shadow-sm"
            >
              <Zap size={12} className="text-[#004aad]" />
              <p className="text-[10px] text-[#5f7fa6] font-black tracking-[0.2em] uppercase">
                Phase: Execution
              </p>
            </motion.div>
            
            {/* HEADING */}
            <div className="flex flex-col">
              <motion.h2
                variants={container}
                initial="hidden"
                whileInView="show"
                className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] flex flex-wrap"
              >
                {splitText("EVALUATION ").map((char, i) => (
                  <motion.span key={i} variants={letter}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}

                <span className="text-[#004aad] flex">
                  {splitText("CRITERIA").map((char, i) => (
                    <motion.span key={i} variants={letter}>
                      {char}
                    </motion.span>
                  ))}
                </span>
              </motion.h2>

              <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1 }}
            className="h-2 bg-[#004aad] mx-left mt-6 rounded-full shadow-lg"
          />
        
            </div>

          </div>

          <div className="bg-[#004aad] px-6 py-2 rounded-full shadow-lg shadow-blue-200">
            <span className="text-white text-xs font-bold tracking-widest uppercase">
              50 Marks / Problem
            </span>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {criteria.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/70 backdrop-blur-md p-10 rounded-[40px] 
              shadow-[0_20px_60px_rgba(0,0,0,0.06)] 
              border border-gray-100 
              flex flex-col justify-between min-h-[260px] 
              transition-all duration-500"
            >
              <div>
                <motion.h3 
                  className="text-6xl font-black mb-2 tracking-tighter text-[#004aad]"
                  initial={{ opacity: 0.7 }}
                  whileInView={{ opacity: 1 }}
                  animate={{
                    textShadow: [
                      "0px 0px 0px rgba(0,0,0,0)",
                      "0px 0px 8px rgba(0,74,173,0.3)",
                      "0px 0px 0px rgba(0,0,0,0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {item.score}
                </motion.h3>
                
                <p className="text-gray-900 text-xl font-extrabold leading-tight mb-2 tracking-tight transition-colors duration-300 hover:text-[#5f7fa6]">
                  {item.title}
                </p>
                
                <p className="text-[#8aa0b8] text-[11px] font-bold uppercase tracking-widest opacity-80 mb-2">
                  {item.subtext || "out of 50 marks"}
                </p>
              </div>

              <div className="mt-8">
                <div className="h-[6px] w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                  
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.score / 50) * 100}%` }}
                    transition={{ duration: 1.2 }}
                    className="h-full bg-[#004aad] rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(0,74,173,0)",
                        "0 0 10px rgba(0,74,173,0.4)",
                        "0 0 0px rgba(0,74,173,0)"
                      ]
                    }}
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EvaluationCriteria;