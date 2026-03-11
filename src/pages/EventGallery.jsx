import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const galleryData = [
  {
    id: 1,
    title: "Opening Ceremony",
    category: "Event",
    description: "Kickoff of PYHACZ Hackathon with participants and mentors.",
    cover: "/gallery/opening/open1.jpg",
    images: [
      { url: "/gallery/opening/open1.jpg", caption: "Event Inauguration" },
      { url: "/gallery/opening/open2.jpg", caption: "Introductory Session" },
      { url: "/gallery/opening/open3.jpg", caption: "Audience Interaction" },
    ],
  },
  {
    id: 2,
    title: "Coding Session",
    category: "Development",
    description: "Teams working together to build innovative solutions.",
    cover: "/gallery/coding/code1.jpg",
    images: [
      { url: "/gallery/coding/code1.jpg", caption: "Team Collaboration" },
      { url: "/gallery/coding/code2.jpg", caption: "Building Prototypes" },
      { url: "/gallery/coding/code3.jpg", caption: "Late Night Coding" },
    ],
  },
  {
    id: 3,
    title: "Mentor Guidance",
    category: "Mentorship",
    description: "Mentors helping teams refine their ideas.",
    cover: "/gallery/mentors/mentor1.jpg",
    isMentor: true,
    images: [
      { url: "/gallery/mentors/mentor1.jpg", caption: "Expert Advice" },
      { url: "/gallery/mentors/mentor2.jpg", caption: "Technical Guidance" },
      { url: "/gallery/mentors/mentor3.jpg", caption: "Discussion Session" },
    ],
  },
  {
    id: 4,
    title: "Project Presentation",
    category: "Demo",
    description: "Teams presenting their final project ideas.",
    cover: "/gallery/presentation/presentation1.jpg",
    images: [
      { url: "/gallery/presentation/presentation1.jpg", caption: "Pitch Time" },
      { url: "/gallery/presentation/presentation2.jpg", caption: "Judges Review" },
      { url: "/gallery/presentation/presentation3.jpg", caption: "Live Demo" },
    ],
  },
  {
    id: 5,
    title: "Prize Distribution",
    category: "Awards",
    description: "Winners receiving awards and recognition.",
    cover: "/gallery/prizes/price1.jpg",
    images: [
      { url: "/gallery/prizes/price1.jpg", caption: "First Prize" },
      { url: "/gallery/prizes/price2.jpg", caption: "Runner Up" },
      { url: "/gallery/prizes/price3.jpg", caption: "Special Award" },
    ],
  },
  {
    id: 6,
    title: "Team Moments",
    category: "Fun",
    description: "Fun memories captured during the hackathon.",
    cover: "/gallery/opening/open2.jpg",
    images: [
      { url: "/gallery/opening/open1.jpg", caption: "Team Photo" },
      { url: "/gallery/opening/open2.jpg", caption: "Group Celebration" },
      { url: "/gallery/opening/open3.jpg", caption: "Hackathon Energy" },
    ],
  },
];

export default function EventGallery() {
  const [selected, setSelected] = useState(null);
  const [preview, setPreview] = useState(null);
  const [start, setStart] = useState(0);

  const visibleCards = galleryData.slice(start, start + 3);

  const nextSlide = () => {
    if (start + 3 < galleryData.length) setStart(start + 3);
  };

  const prevSlide = () => {
    if (start - 3 >= 0) setStart(start - 3);
  };

  return (
    <section className="py-20 bg-white text-gray-900 relative overflow-hidden">
      {/* FULL BACKGROUND GRID */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0ea5e9 1px, transparent 1px),
            linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          opacity: 0.05,
        }}
      />

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none">
            Event <span className="text-sky-500">Gallery</span>
          </h2>
          <div className="w-24 h-1.5 bg-sky-500 mx-auto mt-4 rounded-full" />
        </div>

        <AnimatePresence mode="wait">
          {!selected ? (
            <motion.div
              key={start}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-6"
            >
              <button
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-500 hover:bg-sky-600 text-white transition shadow-lg"
              >
                <FaChevronLeft />
              </button>

              <div className="grid md:grid-cols-3 gap-6 flex-1">
                {visibleCards.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -6, rotateY: 4 }}
                    className="group bg-slate-50 rounded-xl border border-gray-200 hover:border-sky-400 overflow-hidden transition duration-300 shadow-md"
                  >
                    <div className="h-44 overflow-hidden">
                      <img
                        src={item.cover}
                        className={`w-full h-full transition duration-500 group-hover:scale-110 ${
                          item.isMentor ? "object-contain p-4 bg-gray-100" : "object-cover"
                        }`}
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-sky-500 text-[10px] uppercase font-bold">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold mt-1 group-hover:text-sky-500 transition">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs mt-2 mb-4">{item.description}</p>
                      <button
                        onClick={() => setSelected(item)}
                        className="w-full py-2 rounded-full border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition"
                      >
                        Explore Gallery
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-500 hover:bg-sky-600 text-white transition shadow-lg"
              >
                <FaChevronRight />
              </button>
            </motion.div>
          ) : (
            <div>
              <button
                onClick={() => setSelected(null)}
                className="mb-8 px-6 py-2 border border-gray-300 rounded-full hover:border-sky-500 hover:text-sky-500 transition"
              >
                Back to Gallery
              </button>
              <h3 className="text-3xl font-bold mb-10">{selected.title}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {selected.images.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm"
                  >
                    <div className="cursor-pointer" onClick={() => setPreview(img.url)}>
                      <img src={img.url} className="w-full h-56 object-cover hover:scale-105 transition" />
                    </div>
                    <div className="p-3 text-sm text-gray-700">{img.caption}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* PREVIEW MODAL */}
      {preview && (
        <div
          onClick={() => setPreview(null)}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <img src={preview} className="max-h-[90%] max-w-[90%] rounded-xl shadow-lg" />
        </div>
      )}
    </section>
  );
}