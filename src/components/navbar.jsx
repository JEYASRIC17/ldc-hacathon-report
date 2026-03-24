import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import collegeLogo from "../assets/college-name.png";
import tarcinlogo from "../assets/tarcinlogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Teams", href: "#teams" },
    { name: "Mentor", href: "#mentor" },
    { name: "Judges", href: "#judges" },
    { name: "Departments", href: "#department" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isBlue = scrolled;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      isBlue ? "bg-[#004aad] shadow-lg" : "bg-slate-50/80 backdrop-blur-md border-b border-gray-200"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={tarcinlogo}
            className={`h-12 object-contain transition-all duration-300 ${isBlue ? "invert brightness-0" : ""}`}
            alt="Tarcin Logo"
          />
        </div>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-[13px] font-semibold py-2 transition-colors ${
              isBlue ? "text-white hover:text-gray-200" : "text-gray-600 hover:text-[#004aad]"
            }`}>
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <img
            src={collegeLogo}
            className={`h-12 object-contain transition-all duration-300 ${isBlue ? "invert brightness-0" : ""}`}
            alt="College Logo"
          />
          <button
            className={`md:hidden ${isBlue ? "text-white" : "text-gray-800"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden flex flex-col items-center gap-6 py-6 ${isBlue ? "bg-[#004aad]" : "bg-white"}`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`${isBlue ? "text-white" : "text-gray-700"} text-sm font-semibold`}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
