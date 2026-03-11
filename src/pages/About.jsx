import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Years of Excellence", value: "75+", color: "text-sky-600", border: "border-sky-100" },
    { label: "Departments", value: "30+", color: "text-blue-600", border: "border-blue-100" },
    { label: "Active Students", value: "3000+", color: "text-sky-600", border: "border-sky-100" },
    { label: "NAAC Grade", value: "A+", color: "text-blue-600", border: "border-blue-100" },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="min-h-screen bg-white text-slate-900 py-32 px-6 relative overflow-hidden font-sans">
      
      {/* Background Decor: Professional Grid & Soft Glow */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#0ea5e9 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/50 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/50 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER: Clean & Authoritative */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-5 py-2 mb-6 rounded-full bg-sky-50 border border-sky-100 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-sky-600">Institutional Profile</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none text-slate-800 uppercase">
            Lady Doak <span className="text-sky-500">College</span>
          </h1>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "128px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1.5 bg-sky-500 mx-auto mt-8 rounded-full shadow-lg shadow-sky-200" 
          />
        </motion.div>

        {/* MAIN CONTENT: Professional Split */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          
          {/* Left: Narrative Card */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] relative group">
              <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-tight mb-4 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-sky-500"></span>
                Visionary Excellence
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                A prestigious autonomous institution committed to academic excellence and leadership development. 
                Lady Doak College envisions empowering women through transformative education, 
                fostering innovation, research, and community engagement.
              </p>
              {/* Decorative accent */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-sky-100/30 blur-2xl rounded-full group-hover:bg-sky-200/50 transition-colors" />
            </div>

            {/* Values: Modern animated pills */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {['Excellence', 'Social Responsibility', 'Leadership', 'Innovation'].map((v, i) => (
                <motion.span 
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "#f0f9ff" }}
                  className="px-5 py-2.5 bg-white border border-slate-200 rounded-2xl text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-500 shadow-sm cursor-default"
                >
                  {v}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  borderColor: "#0ea5e9",
                  boxShadow: "0 20px 40px -15px rgba(14,165,233,0.15)"
                }}
                className={`bg-white p-8 rounded-[2rem] border ${stat.border} shadow-sm group transition-all duration-300`}
              >
                <h2 className={`text-5xl font-black tracking-tighter ${stat.color} mb-2`}>
                  {stat.value}
                </h2>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold group-hover:text-slate-600 transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM ACCENT */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="border-t border-slate-100 pt-12 text-center"
        >
          <p className="text-[11px] tracking-[0.4em] font-bold text-slate-400 uppercase">
            Established 1948 • Madurai, India
          </p>
        </motion.div>

      </div>
    </section>
  );
}