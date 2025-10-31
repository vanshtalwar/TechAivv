import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-[#1a1a2e]">
            <Link to="/">TechAIVV</Link>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 text-gray-600 font-medium">
            {["Home", "Services", "Contact"].map((item) => (
              <li key={item} className="relative group">
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-[#1a1a2e] transition-colors duration-300"
                >
                  {item}
                </Link>
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#1a1a2e] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {menuOpen ? (
              <X
                className="w-7 h-7 text-[#1a1a2e] cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <Menu
                className="w-7 h-7 text-[#1a1a2e] cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-[72px] md:h-[80px]"></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-xl transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col items-start px-8 pt-24 gap-8 text-lg font-medium text-gray-700">
          {["Home", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#1a1a2e] transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
