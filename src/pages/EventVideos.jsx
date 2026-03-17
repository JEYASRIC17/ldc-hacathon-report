import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Clapperboard, MonitorPlay } from "lucide-react"; // Added for pro icons
import logo from "../assets/ldc-logo.png";

export default function VideoGallery() {
  const videos = [
    { 
      id: 1,
      title: "Inaugural Ceremony",
      category: "Grand Opening",
      description: "Official commencement of LDC-HACZ 2026 featuring keynote speakers.",
      thumbnail: "/gallery/opening/open1.jpg",
      src: "/videos/inauguration_video.mp4"
    },
    { 
      id: 2,
      title: "The Grand Finale",
      category: "Awards & Closing",
      description: "Recognizing excellence and celebrating the innovative spirit of participants.",
      thumbnail: "/gallery/prizes/price1.jpg",
      src: "/videos/prize_distribution_video.mp4"
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="relative min-h-screen bg-[#fafbfc] py-24 px-6 overflow-hidden">
      
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `radial-gradient(#004aad 1px, transparent 1px)`, 
          backgroundSize: '30px 30px' 
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-6"
          >
            <Clapperboard size={14} className="text-[#004aad]" />
            <p className="text-[10px] tracking-[0.3em] text-[#004aad] uppercase font-black">Cinematic Gallery</p>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900">
            Event <span className="text-[#004aad] ">Highlights</span>
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            className="h-2 bg-[#004aad] mx-auto mt-6 rounded-full shadow-lg shadow-blue-200"
          />
        </div>

        {/* MAIN INTERACTIVE GRID */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Video 1 - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 group cursor-pointer"
            onClick={() => setSelectedVideo(videos[0])}
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-[#004aad]/20">
              <div className="absolute inset-0 bg-[#004aad]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5 }}
                src={videos[0].thumbnail}
                className="w-full h-[450px] object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 bg-gradient-to-t from-slate-900 via-transparent">
                <div className="bg-white/10 backdrop-blur-md w-14 h-14 rounded-full flex items-center justify-center border border-white/30 mb-4 group-hover:bg-[#004aad] group-hover:border-[#004aad] transition-all duration-500">
                  <Play className="fill-white text-white ml-1" size={24} />
                </div>
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">{videos[0].category}</p>
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">{videos[0].title}</h2>
              </div>
            </div>
          </motion.div>

          {/* Center Branding Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-4 flex flex-col items-center gap-8 py-10"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[#004aad]/5 blur-3xl rounded-full animate-pulse" />
              <img src={logo} alt="LDC Logo" className="relative w-48 md:w-64 drop-shadow-2xl" />
            </div>
            <div className="h-24 w-[1px] bg-gradient-to-b from-[#004aad] to-transparent hidden lg:block" />
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] hidden lg:block">Innovation • Excellence</p>
          </motion.div>

          {/* Video 2 - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 group cursor-pointer"
            onClick={() => setSelectedVideo(videos[1])}
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-[#004aad]/20">
              <div className="absolute inset-0 bg-[#004aad]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5 }}
                src={videos[1].thumbnail}
                className="w-full h-[450px] object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 bg-gradient-to-t from-slate-900 via-transparent">
                <div className="bg-white/10 backdrop-blur-md w-14 h-14 rounded-full flex items-center justify-center border border-white/30 mb-4 group-hover:bg-[#004aad] group-hover:border-[#004aad] transition-all duration-500">
                  <Play className="fill-white text-white ml-1" size={24} />
                </div>
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">{videos[1].category}</p>
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">{videos[1].title}</h2>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* PRO VIDEO MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center z-[100] p-4 md:p-10"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-3xl relative border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-6 left-6 z-50 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <MonitorPlay className="text-blue-400" size={18} />
                <span className="text-white text-xs font-bold uppercase tracking-widest">{selectedVideo.title}</span>
              </div>

              <button
                className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-[#004aad] p-3 rounded-full transition-all border border-white/20"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="text-white" size={24} />
              </button>

              <video
                src={selectedVideo.src}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}