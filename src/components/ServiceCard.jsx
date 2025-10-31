import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <article className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 relative overflow-hidden hover:-translate-y-2 transition-all duration-500 ease-out hover:shadow-[0_20px_40px_rgba(229,46,113,0.3)] group">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-tr from-[#e52e71] to-[#ff6a00] -z-10"></div>

      <div className="w-16 h-16 mb-6 flex items-center justify-center text-3xl rounded-xl bg-gradient-to-tr from-[#e52e71] to-[#ff6a00]">
        {icon}
      </div>
      <h2 className="text-2xl font-semibold mb-4 text-white">{title}</h2>
      <p className="text-[#b8b8d1] text-base leading-relaxed">{description}</p>
    </article>
  );
};

export default ServiceCard;
