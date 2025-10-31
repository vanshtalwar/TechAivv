import React, { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/10 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
        <h2 className="text-2xl font-semibold">Send Us a Message</h2>
      </div>

      {submitted && (
        <div className="bg-emerald-500 text-white p-4 rounded-lg mb-4 text-center font-medium">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {["Full Name", "Email Address", "Subject"].map((label, i) => (
          <div key={i} className="mb-6">
            <label className="block mb-2 text-sm font-medium text-slate-200">
              {label}
            </label>
            <input
              type={label === "Email Address" ? "email" : "text"}
              required
              placeholder={
                label === "Full Name"
                  ? "John Doe"
                  : label === "Email Address"
                  ? "john@example.com"
                  : "How can we help you?"
              }
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
        ))}

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-slate-200">
            Message
          </label>
          <textarea
            required
            placeholder="Tell us more about your project..."
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none min-h-[120px] resize-y"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 py-4 rounded-lg text-white font-semibold shadow-md hover:-translate-y-1 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
