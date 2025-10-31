import React from "react";
import { services } from "../data/servicesData";

const Services = () => (
  <section id="services" className="bg-[#fafbfc] py-20 px-[5%]">
    <h2 className="text-4xl font-bold text-center text-[#1a1a2e] mb-4">Our Services</h2>
    <p className="text-gray-600 text-center mb-16 max-w-xl mx-auto">
      Comprehensive digital marketing solutions designed to accelerate your business growth
    </p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-[1300px] mx-auto">
      {services.map((s, i) => (
        <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-2 transition">
          <div className="overflow-hidden rounded-lg mb-5 h-[200px]">
            <img src={s.img} alt={s.title} className="w-full h-full object-cover hover:scale-105 transition"/>
          </div>
          <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">{s.title}</h3>
          <p className="text-gray-600 text-sm">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
export default Services;
