import React from "react";

const ContactInfo = () => {
  const info = [
    {
      label: "Address",
      value: "123 Tech Street, Innovation Hub, Bangalore, Karnataka 560001, India",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
    },
    {
      label: "Email",
      value: "hello@techaivv.com",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
          <path d="M4 4h16v12H4z" />
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+91-9876543210",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 4 4.11V2a2 2 0 0 1 2.11-2h3a2 2 0 0 1 2 1.72"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
      <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
      {info.map((item, i) => (
        <div key={i} className="flex items-start gap-4 mb-5">
          <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
            {item.icon}
          </div>
          <div>
            <div className="text-xs uppercase text-slate-400">{item.label}</div>
            <div className="text-slate-200 text-sm">{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
