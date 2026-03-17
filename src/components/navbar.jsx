import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import collegeLogo from "../assets/college-name.png";
import tarcinlogo from "../assets/tarcinlogo.png";
import tarcinlogo1 from "../assets/tarcinlogo1.png";
import collegeLogo1 from "../assets/college-name1.png";

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

  // ✅ SCROLL DETECTION (ONLY AFTER SOME SCROLL)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120); // slightly increased for accuracy
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ CLICK HANDLER FIXED
  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (href === "#home") {
      // 🔥 FORCE SCROLL TO TOP
      window.scrollTo({ top: 0, behavior: "auto" });
      setScrolled(false); // ensure navbar stays light
    } else {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "auto" });
      }
    }

    setIsOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500
      ${scrolled 
        ? "bg-[#004aad] shadow-lg" 
        : "bg-slate-50/80 backdrop-blur-md border-b border-gray-200"}`}
    >

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={scrolled ? tarcinlogo1 : tarcinlogo}
            className="h-16 object-contain transition-all duration-300"
            alt="Logo"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative group text-[13px] font-semibold tracking-widest py-2 
              outline-none focus:outline-none
              ${scrolled ? "text-white" : "text-gray-600 hover:text-[#004aad]"}`}
            >
              {link.name}

              <span
                className={`absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300
                ${scrolled ? "bg-white" : "bg-[#004aad]"}`}
              ></span>
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          <img
            src={scrolled ? collegeLogo1 : collegeLogo}
            className="h-16 object-contain transition-all duration-300"
            alt="College"
          />

          {/* MOBILE BUTTON */}
          <button
            className={`md:hidden outline-none focus:outline-none ${scrolled ? "text-white" : "text-gray-800"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden
        ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-6 py-6 bg-white shadow-md">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-700 text-sm font-semibold tracking-wide outline-none focus:outline-none"
            >
              {link.name}
            </a>
          ))}

        </div>
      </div>

    </nav>
  );
}