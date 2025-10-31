import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="sticky top-0 bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-100 px-8 py-4 flex justify-between items-center z-50">
    {/* Logo */}
    <h1 className="text-4xl font-bold text-[#1a1a2e]">
      <Link to="/">TechAIVV</Link>
    </h1>

    {/* Nav Links */}
    <ul className="hidden md:flex gap-10 text-gray-600 font-medium">
      {["Home", "Services", "Contact"].map((item) => (
        <li key={item} className="relative group">
          <Link
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="hover:text-[#1a1a2e] transition-colors duration-300"
          >
            {item}
          </Link>

          {/* Animated underline */}
          <span
            className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#000000] transition-all duration-300 group-hover:w-full"
          ></span>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
