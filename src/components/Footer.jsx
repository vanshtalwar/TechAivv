import React from "react";

const Footer = () => {
  const socials = [
    {
      href: "https://facebook.com",
      label: "Facebook",
      icon: (
        <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      ),
    },
    {
      href: "https://twitter.com",
      label: "Twitter",
      icon: (
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184A4.92 4.92 0 0016.616 3c-2.737 0-4.957 2.224-4.957 4.963 0 .39.045.765.127 1.124A13.978 13.978 0 011.671 3.149a4.93 4.93 0 00-.668 2.497c0 1.72.873 3.233 2.19 4.12a4.904 4.904 0 01-2.24-.62v.062c0 2.403 1.693 4.405 3.946 4.86a4.935 4.935 0 01-2.232.085c.63 1.953 2.445 3.377 4.6 3.418A9.873 9.873 0 010 19.54 13.94 13.94 0 007.548 21c9.056 0 14.01-7.506 14.01-14.01 0-.213-.005-.426-.014-.637A10.01 10.01 0 0024 4.59z" />
      ),
    },
    {
      href: "https://linkedin.com",
      label: "LinkedIn",
      icon: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
      ),
    },
    {
      href: "https://instagram.com",
      label: "Instagram",
      icon: (
        <path d="M12 2.163c3.204 0 3.584.013 4.85.07 1.17.054 1.97.24 2.426.403a4.92 4.92 0 011.784 1.045 4.92 4.92 0 011.045 1.784c.163.456.35 1.256.403 2.426.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.426a4.935 4.935 0 01-1.045 1.784 4.935 4.935 0 01-1.784 1.045c-.456.163-1.256.35-2.426.403-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.054-1.97-.24-2.426-.403a4.935 4.935 0 01-1.784-1.045 4.935 4.935 0 01-1.045-1.784c-.163-.456-.35-1.256-.403-2.426C2.176 15.747 2.163 15.367 2.163 12s.013-3.584.07-4.85c.054-1.17.24-1.97.403-2.426A4.935 4.935 0 013.681 2.94a4.935 4.935 0 011.784-1.045c.456-.163 1.256-.35 2.426-.403C8.416 1.82 8.796 1.807 12 1.807m0-1.807C8.741 0 8.333.015 7.052.072 5.773.131 4.905.333 4.14.63a6.92 6.92 0 00-2.126 1.384A6.92 6.92 0 00.63 4.14C.333 4.905.131 5.773.072 7.052.012 8.333 0 8.741 0 12s.015 3.667.072 4.948c.059 1.279.261 2.147.558 2.912a6.943 6.943 0 001.384 2.126 6.943 6.943 0 002.126 1.384c.765.297 1.633.499 2.912.558C8.333 23.985 8.741 24 12 24s3.667-.015 4.948-.072c1.279-.059 2.147-.261 2.912-.558a6.943 6.943 0 002.126-1.384 6.943 6.943 0 001.384-2.126c.297-.765.499-1.633.558-2.912C23.985 15.667 24 15.259 24 12s-.015-3.667-.072-4.948c-.059-1.279-.261-2.147-.558-2.912a6.943 6.943 0 00-1.384-2.126 6.943 6.943 0 00-2.126-1.384c-.765-.297-1.633-.499-2.912-.558C15.667.015 15.259 0 12 0z" />
      ),
    },
  ];

  return (
    <footer className="relative bg-[#0f0f1c] text-[#e2e8f0] py-10 px-5 sm:px-10 text-center overflow-hidden">
      {/* Soft radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_80%)] pointer-events-none" />

      {/* Gradient divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      {/* Social icons */}
      <div className="flex justify-center gap-6 mb-6 relative z-10">
        {socials.map(({ href, label, icon }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="relative w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-indigo-500/40 group"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/40 to-violet-500/40 opacity-0 group-hover:opacity-100 transition duration-300" />
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-white relative z-10"
            >
              {icon}
            </svg>
          </a>
        ))}
      </div>

      {/* Contact info */}
      <div className="flex flex-wrap justify-center items-center gap-3 text-sm sm:text-[15px] font-light text-[#e2e8f0]/80 relative z-10">
        <span>📧 contact@techaivv.com</span>
        <span className="hidden sm:inline text-gray-500">•</span>
        <span>📞 +91 9123456780</span>
        <span className="hidden sm:inline text-gray-500">•</span>
        <span>📍 36 Digital Avenue, Bangalore</span>
      </div>

      {/* Copyright */}
      <p className="mt-5 text-xs sm:text-sm tracking-wider relative z-10">
        ©{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent font-medium">
          {new Date().getFullYear()} TechAIVV
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
