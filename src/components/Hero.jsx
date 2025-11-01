import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative bg-gradient-to-r from-[#e52e71] to-[#ff6a00] overflow-hidden">
    {/* Background wave at bottom */}
    <div className="absolute bottom-0 left-0 right-0 translate-y-0 md:translate-y-12 ">
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,224L60,202.7C120,181,240,139,360,138.7C480,139,600,181,720,181.3C840,181,960,139,1080,138.7C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>

    {/* Hero Content */}
    <div className="min-h-[85vh] flex items-center justify-between px-[5%] py-20 relative z-10">
      <div className="max-w-[1400px] grid md:grid-cols-2 gap-16 items-center mx-auto">
        {/* Left Text Section */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            We Help Brands Grow with AI-Powered Digital Marketing
          </h1>
          <p className="text-lg text-white/80 mb-10 max-w-md leading-relaxed">
            TechAIVV offers smart digital solutions to boost your online presence and drive measurable ROI through data-driven strategies and cutting-edge technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://calendly.com/techaivv/meeting" target="_blank"
              className="bg-white text-[#1a1a2e] px-8 py-4 rounded-xl font-semibold shadow-lg hover:-translate-y-1 transition transform duration-300"
            >
              Get a Free Consultation
            </a>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#1a1a2e] transition duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="h-[400px] rounded-2xl overflow-hidden shadow-2xl">
          <motion.div
            className="relative w-full h-full flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2015&q=80"
              alt="Digital marketing dashboard"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              animate={{
                y: [0, -20],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.8, ease: "easeOut" },
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
