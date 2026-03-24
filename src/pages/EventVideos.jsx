// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Play, X, Clapperboard, MonitorPlay } from "lucide-react"; // Added for pro icons
// // import logo from "../assets/ldc-logo.png";

// // export default function VideoGallery() {
// //   const videos = [
// //     { 
// //       id: 1,
// //       title: "Inaugural Ceremony",
// //       category: "Grand Opening",
// //       description: "Official commencement of LDC-HACZ 2026 featuring keynote speakers.",
// //       thumbnail: "/gallery/opening/open1.jpg",
// //       src: "/videos/inauguration_video.mp4"
// //     },
// //     { 
// //       id: 2,
// //       title: "The Grand Finale",
// //       category: "Awards & Closing",
// //       description: "Recognizing excellence and celebrating the innovative spirit of participants.",
// //       thumbnail: "/gallery/prizes/price1.jpg",
// //       src: "/videos/prize_distribution_video.mp4"
// //     }
// //   ];

// //   const [selectedVideo, setSelectedVideo] = useState(null);

// //   return (
// //     <section className="relative min-h-screen bg-[#fafbfc] py-24 px-6 overflow-hidden">
      
// //       {/* Premium Background Elements */}
// //       <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
// //         style={{ 
// //           backgroundImage: `radial-gradient(#004aad 1px, transparent 1px)`, 
// //           backgroundSize: '30px 30px' 
// //         }} 
// //       />

// //       <div className="max-w-7xl mx-auto relative z-10">
        
// //         {/* HEADER SECTION */}
// //         <div className="text-center mb-24">
// //           <motion.div 
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-6"
// //           >
// //             <Clapperboard size={14} className="text-[#004aad]" />
// //             <p className="text-[10px] tracking-[0.3em] text-[#004aad] uppercase font-black">Cinematic Gallery</p>
// //           </motion.div>

// //           <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900">
// //             Event <span className="text-[#004aad] ">Highlights</span>
// //           </h1>
// //           <motion.div 
// //             initial={{ width: 0 }}
// //             whileInView={{ width: "100px" }}
// //             className="h-2 bg-[#004aad] mx-auto mt-6 rounded-full shadow-lg shadow-blue-200"
// //           />
// //         </div>

// //         {/* MAIN INTERACTIVE GRID */}
// //         <div className="grid lg:grid-cols-12 gap-12 items-center">
          
// //           {/* Video 1 - Left Side */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             className="lg:col-span-4 group cursor-pointer"
// //             onClick={() => setSelectedVideo(videos[0])}
// //           >
// //             <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-[#004aad]/20">
// //               <div className="absolute inset-0 bg-[#004aad]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
// //               <motion.img
// //                 whileHover={{ scale: 1.1 }}
// //                 transition={{ duration: 1.5 }}
// //                 src={videos[0].thumbnail}
// //                 className="w-full h-[450px] object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
// //               />
// //               <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 bg-gradient-to-t from-slate-900 via-transparent">
// //                 <div className="bg-white/10 backdrop-blur-md w-14 h-14 rounded-full flex items-center justify-center border border-white/30 mb-4 group-hover:bg-[#004aad] group-hover:border-[#004aad] transition-all duration-500">
// //                   <Play className="fill-white text-white ml-1" size={24} />
// //                 </div>
// //                 <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">{videos[0].category}</p>
// //                 <h2 className="text-2xl font-bold text-white uppercase tracking-tight">{videos[0].title}</h2>
// //               </div>
// //             </div>
// //           </motion.div>

// //           {/* Center Branding Block */}
// //           <motion.div 
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             className="lg:col-span-4 flex flex-col items-center gap-8 py-10"
// //           >
// //             <div className="relative">
// //               <div className="absolute -inset-4 bg-[#004aad]/5 blur-3xl rounded-full animate-pulse" />
// //               <img src={logo} alt="LDC Logo" className="relative w-48 md:w-64 drop-shadow-2xl" />
// //             </div>
// //             <div className="h-24 w-[1px] bg-gradient-to-b from-[#004aad] to-transparent hidden lg:block" />
// //             <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] hidden lg:block">Innovation • Excellence</p>
// //           </motion.div>

// //           {/* Video 2 - Right Side */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             className="lg:col-span-4 group cursor-pointer"
// //             onClick={() => setSelectedVideo(videos[1])}
// //           >
// //             <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-[#004aad]/20">
// //               <div className="absolute inset-0 bg-[#004aad]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
// //               <motion.img
// //                 whileHover={{ scale: 1.1 }}
// //                 transition={{ duration: 1.5 }}
// //                 src={videos[1].thumbnail}
// //                 className="w-full h-[450px] object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
// //               />
// //               <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 bg-gradient-to-t from-slate-900 via-transparent">
// //                 <div className="bg-white/10 backdrop-blur-md w-14 h-14 rounded-full flex items-center justify-center border border-white/30 mb-4 group-hover:bg-[#004aad] group-hover:border-[#004aad] transition-all duration-500">
// //                   <Play className="fill-white text-white ml-1" size={24} />
// //                 </div>
// //                 <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">{videos[1].category}</p>
// //                 <h2 className="text-2xl font-bold text-white uppercase tracking-tight">{videos[1].title}</h2>
// //               </div>
// //             </div>
// //           </motion.div>

// //         </div>
// //       </div>

// //       {/* PRO VIDEO MODAL */}
// //       <AnimatePresence>
// //         {selectedVideo && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center z-[100] p-4 md:p-10"
// //             onClick={() => setSelectedVideo(null)}
// //           >
// //             <motion.div
// //               initial={{ scale: 0.9, y: 20 }}
// //               animate={{ scale: 1, y: 0 }}
// //               exit={{ scale: 0.9, y: 20 }}
// //               className="w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-3xl relative border border-white/10"
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <div className="absolute top-6 left-6 z-50 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
// //                 <MonitorPlay className="text-blue-400" size={18} />
// //                 <span className="text-white text-xs font-bold uppercase tracking-widest">{selectedVideo.title}</span>
// //               </div>

// //               <button
// //                 className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-[#004aad] p-3 rounded-full transition-all border border-white/20"
// //                 onClick={() => setSelectedVideo(null)}
// //               >
// //                 <X className="text-white" size={24} />
// //               </button>

// //               <video
// //                 src={selectedVideo.src}
// //                 controls
// //                 autoPlay
// //                 className="w-full h-full object-contain"
// //               />
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </section>
// //   );
// // }
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, X, Clapperboard, MonitorPlay } from "lucide-react"; 
// import logo from "../assets/ldc-logo.png";

// export default function VideoGallery() {
//   const videos = [
//     { 
//       id: 1,
//       title: "Inaugural Ceremony",
//       category: "Grand Opening",
//       description: "Official commencement of LDC-HACZ 2026 featuring keynote speakers.",
//       thumbnail: "/gallery/opening/open1.jpg",
//       src: "/videos/inauguration_video.mp4"
//     },
//     { 
//       id: 2,
//       title: "The Grand Finale",
//       category: "Awards & Closing",
//       description: "Recognizing excellence and celebrating the innovative spirit of participants.",
//       thumbnail: "/gallery/prizes/price1.jpg",
//       src: "/videos/prize_distribution_video.mp4"
//     }
//   ];

//   const [selectedVideo, setSelectedVideo] = useState(null);

//   return (
//     /* Page Background changed to Light Blue Tone (#f0f7ff) */
//     <section className="relative min-h-screen bg-[#f0f7ff] py-24 px-6 overflow-hidden">
      
//       {/* Subtle Grid dots in Dark Grey for classic look */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none"
//         style={{ 
//           backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`, 
//           backgroundSize: '30px 30px' 
//         }} 
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* HEADER SECTION */}
//         <div className="text-center mb-24">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="inline-flex items-center gap-2 bg-white/50 border border-slate-200 px-4 py-1.5 rounded-full mb-6 shadow-sm"
//           >
//             <Clapperboard size={14} className="text-slate-600" />
//             <p className="text-[10px] tracking-[0.3em] text-slate-600 uppercase font-black">Cinematic Gallery</p>
//           </motion.div>

//           {/* HEADLINE: Updated with exact gradient from image reference */}
//           <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900">
//             Event <span className="text-[#004aad]">Highlights</span>
//           </h1>
          
//           {/* Animated Line: Updated to match gradient */}
//           <motion.div 
//             initial={{ width: 0 }}
//             whileInView={{ width: "120px" }}
//             className="h-2 bg-gradient-to-r from-[#004aad] to-[#7c3aed] mx-auto mt-6 rounded-full shadow-lg shadow-blue-200/50"
//           />
//         </div>

//         {/* MAIN GRID */}
//         <div className="grid lg:grid-cols-12 gap-12 items-center">
          
//           {/* Video 1 */}
//           <VideoCard video={videos[0]} side="left" setSelectedVideo={setSelectedVideo} />

//           {/* Center Logo */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             className="lg:col-span-4 flex flex-col items-center gap-8 py-10"
//           >
//             <div className="relative">
//               <div className="absolute -inset-4 bg-black/5 blur-3xl rounded-full animate-pulse" />
//               <img src={logo} alt="LDC Logo" className="relative w-48 md:w-64 drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
//             </div>
//             <div className="h-24 w-[1px] bg-gradient-to-b from-black to-transparent hidden lg:block" />
//             <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.5em] hidden lg:block">Innovation • Excellence</p>
//           </motion.div>

//           {/* Video 2 */}
//           <VideoCard video={videos[1]} side="right" setSelectedVideo={setSelectedVideo} />

//         </div>
//       </div>

//       {/* MODAL */}
//       <AnimatePresence>
//         {selectedVideo && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-[100] p-4"
//             onClick={() => setSelectedVideo(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 20 }}
//               className="w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-3xl relative border border-white/10"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-black p-3 rounded-full transition-all border border-white/20"
//                 onClick={() => setSelectedVideo(null)}
//               >
//                 <X className="text-white" size={24} />
//               </button>
//               <video src={selectedVideo.src} controls autoPlay className="w-full h-full object-contain" />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

// function VideoCard({ video, side, setSelectedVideo }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       className="lg:col-span-4 group cursor-pointer"
//       onClick={() => setSelectedVideo(video)}
//     >
//       {/* Outer Card Frame: Slightly darker than page background for contrast */}
//       <div className="relative p-2 bg-white/40 border border-white/60 rounded-[2.8rem] shadow-sm transition-all duration-500 group-hover:bg-white group-hover:shadow-xl">
        
//         <div className="relative rounded-[2.5rem] overflow-hidden transition-all duration-700">
          
//           {/* Classic Overlay */}
//           <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-transparent transition-all duration-[1200ms] z-10" />

//           <motion.img
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 1.5 }}
//             src={video.thumbnail}
//             className="w-full h-[450px] object-cover grayscale group-hover:grayscale-0 transition-all duration-[1500ms] ease-in-out"
//           />

//           {/* Content Overlay */}
//           <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 bg-gradient-to-t from-black/90 via-transparent to-transparent">
            
//             {/* Play Icon with Black Fill Animation */}
//             <div className="relative w-14 h-14 rounded-full flex items-center justify-center border border-white/40 mb-4 overflow-hidden group-hover:border-black transition-colors duration-500">
//               <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
//               <Play className="relative z-10 fill-white text-white ml-1" size={24} />
//             </div>

//             <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mb-1 opacity-0 group-hover:opacity-100 transition-all duration-700">
//               {video.category}
//             </p>
//             <h2 className="text-2xl font-bold text-white uppercase tracking-tight transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
//               {video.title}
//             </h2>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
  import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Clapperboard, Sparkles } from "lucide-react"; 
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

  // 🔥 Letter animation
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
  const letter = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 12 } } };
  const splitText = (text) => text.split("");

  return (
    <section className="relative min-h-screen bg-[#f0f7ff] py-24 px-6 overflow-hidden">

     

      {/* Subtle Grid Dots */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`, backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-left mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/50 border border-slate-200 px-4 py-1.5 rounded-full mb-6 shadow-sm"
          >
            <Clapperboard size={14} className="text-slate-600" />
            <p className="text-[10px] tracking-[0.3em] text-slate-600 uppercase font-black">
              Cinematic Gallery
            </p>
          </motion.div>

          <motion.h1
  variants={container}
  initial="hidden"
  whileInView="show"
  className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900 flex justify-start flex-wrap w-full text-left"
>
  {splitText("Event ").map((char, i) => (
    <motion.span key={i} variants={letter}>
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}

  <span className="text-[#004aad] flex">
    {splitText("Highlights").map((char, i) => (
      <motion.span key={i} variants={letter}>
        {char}
      </motion.span>
    ))}
  </span>
</motion.h1>

          {/* Underline */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1 }}
            className="h-2 bg-[#004aad] mx-left mt-6 rounded-full shadow-lg"
          />
        
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <VideoCard video={videos[0]} side="left" setSelectedVideo={setSelectedVideo} />
          
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} className="lg:col-span-4 flex flex-col items-center gap-8 py-10">
            <div className="relative">
              <div className="absolute -inset-4 bg-black/5 blur-3xl rounded-full animate-pulse" />
              <img src={logo} alt="LDC Logo" className="relative w-48 md:w-64 drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="h-24 w-[1px] bg-gradient-to-b from-black to-transparent hidden lg:block" />
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.5em] hidden lg:block">Innovation • Excellence</p>
          </motion.div>

          <VideoCard video={videos[1]} side="right" setSelectedVideo={setSelectedVideo} />
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-[100] p-4" onClick={() => setSelectedVideo(null)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-3xl relative border border-white/10" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-[#004aad] p-3 rounded-full transition-all border border-white/20" onClick={() => setSelectedVideo(null)}>
                <X className="text-white" size={24} />
              </button>
              <video src={selectedVideo.src} controls autoPlay className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ORIGINAL VIDEO CARD
function VideoCard({ video, side, setSelectedVideo }) {
  return (
    <motion.div initial={{ opacity: 0, x: side === "left" ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-4 group cursor-pointer" onClick={() => setSelectedVideo(video)}>
      <div className="relative p-2 bg-white/40 border border-white/60 rounded-[2.8rem] shadow-sm transition-all duration-500 group-hover:bg-white group-hover:shadow-xl">
        <div className="relative rounded-[2.5rem] overflow-hidden transition-all duration-700">
          <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-transparent transition-all duration-[1200ms] z-10" />
          <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 1.5 }} src={video.thumbnail} className="w-full h-[450px] object-cover grayscale group-hover:grayscale-0 transition-all duration-[1500ms]" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 bg-gradient-to-t from-black/90 via-transparent to-transparent">
            <div className="relative w-14 h-14 rounded-full flex items-center justify-center border border-white/40 mb-4 overflow-hidden group-hover:border-black transition-colors duration-500">
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              <Play className="relative z-10 fill-white text-white ml-1" size={24} />
            </div>
            <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mb-1 opacity-0 group-hover:opacity-100">{video.category}</p>
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">{video.title}</h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
}