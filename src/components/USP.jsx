import React from "react";
import { usp } from "../data/uspData";

const USP = () => (
  <section id="why-us" className="py-20 px-[5%] bg-white">
    <h2 className="text-4xl font-bold text-center text-[#1a1a2e] mb-4">Why Choose TechAIVV</h2>
    <p className="text-gray-600 text-center mb-16 max-w-xl mx-auto">
      The competitive advantages that set us apart in the digital marketing landscape
    </p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1300px] mx-auto">
      {usp.map((item, i) => (
        <div key={i} className="bg-[#fafbfc] text-center p-10 rounded-2xl border border-gray-100 hover:-translate-y-2 transition">
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
export default USP;
