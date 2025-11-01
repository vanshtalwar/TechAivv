import React from "react";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    icon: "🎯",
    title: "SEO Optimization",
    description:
      "Improve your website’s ranking and visibility with proven SEO techniques that drive long-term growth.",
  },
  {
    icon: "📱",
    title: "Meta (Facebook & Instagram) Ads",
    description:
      "Reach the right audience with creative, high-converting ad campaigns optimized for maximum ROI.",
  },
  {
    icon: "🚀",
    title: "Google Ads Management",
    description:
      "Run targeted ad campaigns that bring instant traffic, leads, and measurable business results.",
  },
  {
    icon: "💻",
    title: "Website Design & Development",
    description:
      "Build beautiful, responsive websites that reflect your brand and convert visitors into customers.",
  },
  {
    icon: "✨",
    title: "Brand Strategy & Identity",
    description:
      "Define your voice, craft your story, and design a cohesive brand identity that stands out online.",
  },
  {
    icon: "📝",
    title: "Content Marketing",
    description:
      "Engage your audience with SEO-friendly blogs, videos, and visuals that build trust and drive conversions.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white font-poppins px-6 md:px-10 py-20 overflow-x-hidden">
      {/* Header */}
      <header className="text-center mb-20 animate-fadeInDown">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-[#e52e71] to-[#ff6a00] text-4xl md:text-5xl font-bold mb-6">
          TechAIVV
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Our Digital Marketing Services
        </h2>
        <p className="text-[#b8b8d1] text-lg max-w-2xl mx-auto leading-relaxed">
          Smart, AI-powered strategies to help your business grow faster.
        </p>
      </header>

      {/* Services Grid */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {services.map((service, i) => (
          <ServiceCard
            key={i}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </main>

      {/* CTA Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-tr from-[#e52e711a] to-[#ff6a001a] border border-white/10 rounded-3xl animate-fadeInUp">
        <a
          href="https://calendly.com/techaivv/meeting"
          target="_blank"
          className="inline-block px-12 py-5 text-lg font-semibold text-white rounded-full shadow-[0_10px_30px_rgba(229,46,113,0.4)] bg-gradient-to-tr from-[#e52e71] to-[#ff6a00] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(229,46,113,0.6)] transition-all duration-500"
        >
          Book a Free Consultation
        </a>
        <p className="text-[#b8b8d1] text-lg mt-6">
          Let’s create a growth plan tailored to your business.
        </p>
      </section>
    </div>
  );
};

export default Services;
