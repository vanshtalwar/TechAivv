import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="sticky top-0 bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-100 px-8 py-4 flex justify-between items-center z-50">
    <h1 className="text-2xl font-bold text-[#1a1a2e]">
    <Link to="/">TechAIVV</Link>
    </h1>
    <ul className="hidden md:flex gap-10 text-gray-600 font-medium">
     <li><Link to="/" className="hover:text-[#1a1a2e] transition">Home</Link></li>
      <li><Link to="/about" className="hover:text-[#1a1a2e] transition">About</Link></li>
      <li><Link to="/services" className="hover:text-[#1a1a2e] transition">Services</Link></li>
    </ul>
  </nav>
);
export default Navbar;
