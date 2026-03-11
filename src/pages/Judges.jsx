import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Judges() {
  const judges = [
    {
      name: "Sundhar Pitachi",
      role: "Chief Executive Officer",
      company: "Google",
      expertise: "AI & Global Strategy",
      image: "/judges/judge1.jpg" 
    },
    {
      name: "Srikanth Varadhan",
      role: "Chief Executive Officer",
      company: "Zoho Corporation",
      expertise: "SaaS & Cloud Infrastructure",
      image: "/judges/judge2.jpg"
    },
    {
      name: "Ratan Dev",
      role: "Chief Executive Officer",
      company: "Tata Technologies",
      expertise: "Industrial Innovation",
      image: "/judges/judge3.jpg"
    }
  ];

  return (
    <section id="judges" className="py-32 bg-white text-slate-900 relative overflow-hidden font-sans">
      
      {/* Background Grid Pattern - Identical to Teams Section */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)`, 
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
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 px-4 py-1.5 rounded-full mb-6">
            <Star size={12} className="text-sky-500 fill-sky-500 animate-pulse" />
            <p className="text-[10px] tracking-[0.4em] text-sky-600 uppercase font-black">Evaluation Panel</p>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-slate-900 leading-none">
            Distinguished <span className="text-sky-500">Judges</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            className="h-1.5 bg-sky-500 mx-auto mt-6 rounded-full shadow-lg shadow-sky-100" 
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
              {/* Card Container - White Glass Style */}
              <div className="bg-white/80 backdrop-blur-md p-8 rounded-[3rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_60px_-15px_rgba(14,165,233,0.15)] group-hover:border-sky-200 transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
                
                {/* Photo Glow Effect */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-sky-400/10 blur-2xl rounded-full group-hover:bg-sky-400/20 transition-colors duration-500" />
                  <img
                    src={judge.image}
                    alt={judge.name}
                    className="w-40 h-40 rounded-full object-cover relative z-10 border-4 border-white group-hover:border-sky-100 shadow-md transition-all duration-500 grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <span className="text-[10px] font-black text-sky-600 uppercase tracking-[0.3em] mb-3 block">
                    {judge.company}
                  </span>
                  
                  <h3 className="text-3xl font-black tracking-tighter text-slate-800 mb-2 group-hover:text-sky-600 transition-colors">
                    {judge.name}
                  </h3>
                  
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">
                    {judge.role}
                  </p>

                  <div className="h-[1px] w-12 bg-slate-100 mx-auto mb-6 group-hover:w-24 group-hover:bg-sky-200 transition-all duration-500" />

                  <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 group-hover:bg-sky-50 group-hover:border-sky-100 transition-colors">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                      Expertise: <span className="text-slate-700">{judge.expertise}</span>
                    </p>
                  </div>
                </div>

                {/* Decorative Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Evaluation Disclaimer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-24"
        >
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.5em] font-black mb-4">
            Blind Judging Process • Innovation Metric • Scalability Score
          </p>
          <div className="inline-block h-px w-20 bg-slate-100" />
        </motion.div>
      </div>
    </section>
  );
}