import { motion } from "framer-motion";
import { useState } from "react";

export default function EvaluationCriteria() {

  const [flipped, setFlipped] = useState(null);

  const criteria = [
    { title: "Functional Correctness", score: 20 },
    { title: "Logical Structure", score: 10 },
    { title: "Code Quality & Readability", score: 10 },
    { title: "Optimization / Innovation", score: 5 },
    { title: "Documentation / Insights", score: 5 }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0ea5e9 1px, transparent 1px),
            linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px"
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="text-sky-500 font-semibold text-sm uppercase tracking-widest">
            The Evaluation
          </p>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight">
            Event <span className="text-sky-500">Criteria</span>
          </h1>

          <p className="text-gray-500 mt-3">
            Click the card to reveal the score
          </p>

        </div>

        {/* FLIP CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {criteria.map((item, index) => {

            const isFlipped = flipped === index;

            return (

              <div
                key={index}
                className="cursor-pointer perspective"
                onClick={() =>
                  setFlipped(isFlipped ? null : index)
                }
              >

                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full h-40"
                  style={{ transformStyle: "preserve-3d" }}
                >

                  {/* FRONT */}
                  <div className="absolute w-full h-full backface-hidden flex items-center justify-center text-center bg-white border border-slate-200 rounded-xl shadow-sm p-6">

                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>

                  </div>

                  {/* BACK */}
                  <div
                    className="absolute w-full h-full flex items-center justify-center bg-sky-500 text-white rounded-xl text-3xl font-bold shadow"
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden"
                    }}
                  >

                    {item.score} Marks

                  </div>

                </motion.div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}