
import { useState } from "react";
import { Menu, X } from "lucide-react";
import collegeLogo from "../assets/college-name.png";
import tarcinlogo from "../assets/tarcinlogo.png";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Teams", href: "#teams" },
    { name: "EventGallery", href: "#gallery" },
    { name: "Mentor", href: "#mentor" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-slate-50/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-4">
          <img
            src={collegeLogo}
            className="h-12 object-contain"
            alt="College Logo"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group text-[13px] font-semibold tracking-widest text-gray-600 hover:text-blue-600 transition-colors duration-300 py-2"
            >
              {link.name}

              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

        </div>

        {/* RIGHT LOGO + MOBILE MENU */}
        <div className="flex items-center gap-4">

          <div className="p-1 bg-white rounded-full border border-blue-100">
            <img
              src={tarcinlogo}
              className="h-7 w-7 rounded-full object-cover"
              alt="Tarcin Logo"
            />
          </div>

          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-8 bg-slate-50 border-b border-gray-200">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm tracking-widest uppercase font-bold text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
}

