import React from "react";
import { Youtube, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import tarcinlogo from "../assets/tarlogo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0a1a3a] text-gray-300 pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <img
            src={tarcinlogo}
            className="h-16 mb-6"
            alt="Tarcin Logo"
          />

          <p className="text-sm leading-relaxed text-gray-400">
            Empowering students with robotics, AI and emerging technologies.
            Building innovators through practical learning and real-world projects.
          </p>

          <div className="flex gap-4 mt-6">
            <a href="https://www.youtube.com/@TarcinRobotic" target="_blank" rel="noopener noreferrer">
              <Youtube size={20} className="hover:text-white cursor-pointer"/>
            </a>
            <a href="https://www.instagram.com/tarcin_robotic/" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} className="hover:text-white cursor-pointer"/>
            </a>
            <a href="https://www.linkedin.com/company/tarcin-robotic-llp/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} className="hover:text-white cursor-pointer"/>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer"><a href="#home">Home</a></li>
            <li className="hover:text-white cursor-pointer"><a href="#about">About</a></li>
            <li className="hover:text-white cursor-pointer"><a href="#videos">Events</a></li>
            <li className="hover:text-white cursor-pointer"><a href="#teams">Teams</a></li>
         
          </ul>
        </div>

        {/* PROGRAMS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Programs</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Robotics</li>
            <li className="hover:text-white cursor-pointer">Artificial Intelligence</li>
            <li className="hover:text-white cursor-pointer">Embedded Systems</li>
            <li className="hover:text-white cursor-pointer">IoT Projects</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <div className="space-y-4 text-sm">

            <div className="flex gap-3">
              <MapPin size={18}/>
              <p>
                176, E 6th Street, <br/>
                K K Nagar, Madurai - 625020 <br/>
                India
              </p>
            </div>

            <div className="flex gap-3">
              <Phone size={18}/>
              <p>
                +91 98846 75586 <br/>
                +91 80723 55711 <br/>
                Mon - Fri, 9am - 6pm
              </p>
            </div>

            <div className="flex gap-3">
              <Mail size={18}/>
              <p>
                contact@tarcinrobotic.in <br/>
                hr@tarcinrobotic.in
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Tarcin Robotics LLP. All Rights Reserved.
      </div>

    </footer>
  );
}