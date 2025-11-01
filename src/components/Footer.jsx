import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#1a1a2e] text-[#e2e8f0] text-center py-6 px-4 overflow-hidden">
      {/* Gradient top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

      {/* Social Icons */}
      <div className="flex justify-center gap-5 mb-4">
        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(99,102,241,0.3)] group"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/30 to-violet-500/30 opacity-0 group-hover:opacity-100 transition duration-300" />
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-white relative z-10"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(99,102,241,0.3)] group"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/30 to-violet-500/30 opacity-0 group-hover:opacity-100 transition duration-300" />
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-white relative z-10"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(99,102,241,0.3)] group"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/30 to-violet-500/30 opacity-0 group-hover:opacity-100 transition duration-300" />
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-white relative z-10"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(99,102,241,0.3)] group"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/30 to-violet-500/30 opacity-0 group-hover:opacity-100 transition duration-300" />
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-white relative z-10"
          >
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03z" />
          </svg>
        </a>
      </div>

      {/* Contact Info */}
      <div className="flex flex-wrap justify-center items-center gap-2 text-sm sm:text-[13px] font-light text-[#e2e8f0]/90">
        <span>📧 contact@techaivv.com</span>
        <span className="hidden sm:inline text-gray-400">|</span>
        <span>📞 +91 9123456780</span>
        <span className="hidden sm:inline text-gray-400">|</span>
        <span>📍 36 Digital Avenue, Bangalore</span>
        <span className="hidden sm:inline text-gray-400">|</span>
        <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent font-semibold">
          © 2025 TechAIVV
        </span>
      </div>
    </footer>
  );
};

export default Footer;
