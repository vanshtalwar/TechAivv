import React from "react";

const CTACard = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-center shadow-xl">
      <h3 className="text-xl font-semibold mb-3">Ready to Get Started?</h3>
      <p className="text-blue-100 mb-5 text-sm">
        Schedule a free consultation with our digital marketing experts
      </p>
      <a
        href="https://calendly.com/techaivv/meeting"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-sm shadow hover:-translate-y-1 transition"
      >
        📅 Book a Free Consultation
      </a>
    </div>
  );
};

export default CTACard;
