import React from "react";

const Header = () => {
  return (
    <header className="text-center mb-16 relative px-4">
       <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-[#e52e71] to-[#ff6a00] text-4xl md:text-5xl font-bold mb-6">
          TechAIVV
        </h1>

      {/* Call Us Button */}
      <div className="flex justify-center md:justify-end md:absolute md:top-0 md:right-0 mb-8 md:mb-0">
        <a
          href="tel:+91-9876543210"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-md hover:-translate-y-1 transition flex items-center gap-2"
        >
          📞 Call Us Now
        </a>
      </div>

      <h1 className="text-5xl font-bold bg-gradient-to-r from-[#e52e71] to-[#ff6a00] bg-clip-text text-transparent mb-4">
        <span className="text-white">Get in Touch with</span> TechAIVV
      </h1>
      <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
        Let's discuss how we can help grow your business through digital
        marketing excellence.
      </p>
    </header>
  );
};

export default Header;
