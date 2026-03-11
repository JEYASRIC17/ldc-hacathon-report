import { motion } from "framer-motion";

export default function ProblemStatements() {
  const problems = [
    { title: "Smart Crop Monitoring System", domain: "Agriculture / IoT", type: "Hardware", description: "Develop an IoT-based system to monitor soil moisture, temperature, and crop health for improving agricultural productivity." },
    { title: "AI Based Disease Prediction", domain: "Healthcare / AI", type: "Software", description: "Build an AI-powered system that predicts diseases based on symptoms and medical history." },
    { title: "Smart Waste Segregation", domain: "Environment / IoT", type: "Hardware", description: "Create an automated waste segregation system using sensors and machine learning." },
    { title: "Student Skill Development Platform", domain: "Education / Web Development", type: "Software", description: "Design a web platform that helps students track and showcase their technical and soft skills." },
    { title: "Smart Traffic Control System", domain: "Smart City / AI", type: "Software", description: "Develop an AI-based system to manage traffic signals dynamically to reduce congestion." },
    { title: "Women Safety Mobile App", domain: "Social Impact / Mobile App", type: "Software", description: "Create a mobile application that allows women to send emergency alerts and share location in dangerous situations." },
    { title: "Smart Irrigation System", domain: "Agriculture / IoT", type: "Hardware", description: "Design a system that automatically controls irrigation based on soil moisture and weather conditions." },
    { title: "Online Mental Health Support Platform", domain: "Healthcare / Web", type: "Software", description: "Develop a platform that connects students with mental health counselors and provides support resources." }
  ];

  const hardwareCount = problems.filter(p => p.type === "Hardware").length;
  const softwareCount = problems.filter(p => p.type === "Software").length;

  return (
    <section className="bg-[#050505] text-white py-24 relative overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">
            Problem <span className="text-blue-500">Statements</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-sm md:text-base uppercase tracking-[0.1em] font-medium">
            Participants worked on real-world challenges across multiple domains including Agriculture, Healthcare, Smart Cities, and Education.
          </p>
        </motion.div>

        {/* Project Count Pill-style Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          <StatBadge label="Hardware Projects" count={hardwareCount} color="text-[#facc15]" border="border-orange-500/40" />
          <StatBadge label="Software Projects" count={softwareCount} color="text-blue-400" border="border-blue-500/40" />
        </div>

        {/* Problem Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <ProblemCard key={index} problem={problem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Sub-component for Stats to keep code clean
function StatBadge({ label, count, color, border }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className={`bg-[#0a0a0c]/80 backdrop-blur-xl px-10 py-5 rounded-[2rem] border-t-2 border-l-2 ${border} shadow-2xl flex items-center gap-4`}
    >
      <h3 className={`text-4xl font-black ${color}`}>{count}</h3>
      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">{label}</p>
    </motion.div>
  );
}

// Sub-component for the Problem Cards
function ProblemCard({ problem, index }) {
  const isHardware = problem.type === "Hardware";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`bg-[#0a0a0c]/60 backdrop-blur-xl p-8 rounded-[2.5rem] 
      border-t-2 border-l-2 ${isHardware ? 'border-orange-500/30' : 'border-blue-500/30'} 
      relative group overflow-hidden cursor-default transition-all duration-300`}
    >
      {/* Subtle Glow Effect on Hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 
        ${isHardware ? 'bg-orange-500' : 'bg-blue-500'}`} />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <span className={`px-4 py-1.5 rounded-full text-[9px] uppercase tracking-[0.2em] font-black border 
            ${isHardware ? 'text-[#facc15] border-[#facc15]/30 bg-[#facc15]/5' : 'text-blue-400 border-blue-400/30 bg-blue-400/5'}`}>
            {problem.domain}
          </span>
          <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">{problem.type}</span>
        </div>

        <h3 className="text-2xl font-black tracking-tight text-white mb-4 group-hover:text-blue-400 transition-colors">
          {problem.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {problem.description}
        </p>

        {/* Decorative Corner Icon */}
        <div className={`absolute -bottom-2 -right-2 opacity-5 text-6xl rotate-12 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-0
          ${isHardware ? 'text-orange-500' : 'text-blue-500'}`}>
          {isHardware ? '⚙️' : '💻'}
        </div>
      </div>
    </motion.div>
  );
}