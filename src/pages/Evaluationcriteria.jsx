


import React from "react";
import { motion } from "framer-motion";

const EvaluationCriteria = () => {
  // Ella criteria-vukkum ippo blue color mattum dhaan
  const criteria = [
    { title: "Functional Correctness", score: 20 },
    { title: "Logical Structure", score: 10 },
    { title: "Code Quality & Readability", score: 10 },
    { title: "Optimization / Innovation", score: 5 },
    { title: "Documentation / Insights", score: 5 },
    { title: "Total Score", score: 50, subtext: "Maximum marks per problem" },
  ];

  return (
    <section className="bg-white py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section - Bold Blue Style */}
     <div className="mb-20 flex items-center justify-between flex-wrap gap-4">

  <div>
    <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-slate-900 font-sans">
      EVALUATION <span className="text-[#004aad]">CRITERIA</span>
    </h2>

    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "70px" }}
      transition={{ duration: 0.6 }}
      className="h-1.5 bg-[#004aad] mt-4 rounded-full shadow-lg shadow-blue-100"
    />
  </div>

  <div className="bg-[#004aad] px-6 py-2 rounded-full shadow-lg">
    <span className="text-white text-xs font-bold tracking-widest uppercase">
      50 Marks / Problem
    </span>
  </div>

</div>
        {/* Criteria Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {criteria.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[40px] shadow-[0_10px_50px_rgba(0,0,0,0.06)] border border-gray-50 flex flex-col justify-between min-h-[240px]"
            >
              <div>
                {/* Score - Uniform Dark Blue for better visibility */}
                <h3 className="text-6xl font-black mb-2 text-[#004aad]">
                  {item.score}
                </h3>
                
                <p className="text-gray-900 text-xl font-extrabold leading-tight mb-1">
                  {item.title}
                </p>
                
                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest">
                  {item.subtext || "out of 50 pts"}
                </p>
              </div>

              {/* Progress Bar - Full Blue */}
              <div className="mt-8">
                <div className="h-[6px] w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.score / 50) * 100}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-[#004aad]"
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