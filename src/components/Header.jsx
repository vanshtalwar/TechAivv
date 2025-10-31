import React from "react";

const Header = () => {
  return (
    <header className="text-center mb-16 relative">
      <div className="text-4xl font-bold text-blue-500 mb-10 tracking-wide">
        TechAIVV
      </div>
      <div className="absolute top-0 right-0 flex gap-3">
        <a
          href="tel:+91-9876543210"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-md hover:-translate-y-1 transition flex items-center gap-2"
        >
          📞 Call Us Now
        </a>
      </div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent mb-4">
        Get in Touch with TechAIVV
      </h1>
      <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
        Let's discuss how we can help grow your business through digital
        marketing excellence.
      </p>
    </header>
  );
};

export default Header;
