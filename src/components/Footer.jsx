import React from "react";

const Footer = () => (
  <footer id="contact" className="bg-[#1a1a2e] text-white text-center py-16 px-[5%]">
    <div className="flex justify-center gap-5 mb-8">
      <a href="https://facebook.com" className="bg-white/10 hover:bg-white/20 p-4 rounded-xl text-xl">📘</a>
      <a href="https://twitter.com" className="bg-white/10 hover:bg-white/20 p-4 rounded-xl text-xl">🐦</a>
      <a href="https://linkedin.com" className="bg-white/10 hover:bg-white/20 p-4 rounded-xl text-xl">💼</a>
      <a href="https://instagram.com" className="bg-white/10 hover:bg-white/20 p-4 rounded-xl text-xl">📷</a>
    </div>
    <div className="grid md:grid-cols-3 gap-4 mb-6 text-gray-200 text-sm">
      <p>📧 contact@techaivv.com</p>
      <p>📞 +91 9123456780</p>
      <p>📍 36 Digital Avenue, Banglore</p>
    </div>
    <p className="text-gray-400 text-sm">© 2025 TechAIVV. All rights reserved.</p>
  </footer>
);
export default Footer;
