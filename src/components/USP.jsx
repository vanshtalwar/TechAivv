import React from "react";
import { Link } from "react-router-dom";
import { BarChart3, TrendingUp, Brain, Headphones } from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    title: "Data-Driven Marketing",
    description: "Every decision backed by analytics and performance data.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "Proven ROI",
    description: "Transparent reporting with measurable results.",
  },
  {
    icon: <Brain className="w-8 h-8 text-white" />,
    title: "AI-Powered Strategy",
    description: "Use AI for smarter marketing and automated optimization.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-white" />,
    title: "24/7 Client Support",
    description: "Dedicated assistance to help you succeed anytime.",
  },
];

const USP = () => (
  <section className="w-full max-w-6xl mx-auto px-6 py-20 text-center">
    <header className="mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
        Why Choose TechAIVV
      </h2>
      <p className="text-lg text-gray-500 max-w-2xl mx-auto">
        The competitive advantages that set us apart in the digital marketing landscape.
      </p>
    </header>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Link
          to="/contact"
          key={index}
          className="bg-white border border-blue-100 rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
        >
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-[#1a1a2e] group-hover:scale-110 transition-transform duration-300">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">
            {feature.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {feature.description}
          </p>
        </Link>
      ))}
    </div>
  </section>
);

export default USP;
