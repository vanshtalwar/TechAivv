import React from "react";

const Hero = () => (
  <section className="min-h-[85vh] flex items-center justify-between px-[5%] py-20 bg-white relative overflow-hidden">
    <div className="max-w-[1400px] grid md:grid-cols-2 gap-16 items-center mx-auto relative z-10">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6">
          We Help Brands Grow with AI-Powered Digital Marketing
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-md">
          TechAIVV offers smart digital solutions to boost your online presence and drive measurable ROI through data-driven strategies and cutting-edge technology.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="bg-[#1a1a2e] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:-translate-y-1 transition">Get a Free Consultation</a>
          <a href="#services" className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition">View Our Work</a>
        </div>
      </div>
      <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2015&q=80"
             alt="Digital marketing dashboard"
             className="w-full h-full object-cover" />
      </div>
    </div>
  </section>
);
export default Hero;
