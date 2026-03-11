import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const EventHighlights = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: "v1",
      title: "Event Reel 1",
      vidId: "dQw4w9WgXcQ",
      position: "left",
      description: "24 Hours, 50+ Teams, 06 Domains",
    },
    {
      id: "v2",
      title: "Event Reel 2",
      vidId: "VIDEO_ID_2",
      position: "right",
      description: "Total Prize ₹50K, Pan-India Participation",
    },
  ];

  return (
    <section className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold text-sky-600">
          PYHACZ <span className="text-blue-700">Event Highlights</span>
        </h2>
      </div>

      <div className="relative h-[400px] flex items-center justify-center">
        {/* Center Hub */}
        <div className="absolute z-10 w-28 h-28 rounded-full border-2 border-sky-600 flex items-center justify-center shadow-lg bg-transparent">
          <h3 className="text-blue font-black text-xs text-center tracking-tighter uppercase leading-none">
            PYHACZ <br />
            <span className="text-sky-600 text-[10px]">2026</span>
          </h3>
        </div>

        {/* Video Buttons */}
        {videos.map((video) => (
          <motion.div
            key={video.id}
            className={`absolute ${
              video.position === "left" ? "left-0" : "right-0"
            }`}
          >
            <button
              onClick={() => setActiveVideo(video.vidId)}
              className="group relative w-36 h-36 flex flex-col items-center justify-center rounded-full border-2 border-blue/20 transition-all duration-500 hover:scale-105 hover:border-blue-400"
              style={{
                background: "linear-gradient(135deg, #1e70f4 0%, #104789 100%)",
              }}
            >
              <div className="text-white font-bold">{video.title}</div>
              <div className="absolute -bottom-10 text-xs text-slate-200 text-center px-2">
                {video.description}
              </div>
            </button>
          </motion.div>
        ))}

        {/* Video Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
            >
              <motion.div
                className="relative w-[90%] max-w-3xl aspect-video"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  className="w-full h-full rounded-xl shadow-2xl border border-white/20"
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  title="Event Highlight"
                  allowFullScreen
                />
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-2 right-2 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white"
                >
                  <X size={20} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EventHighlights;