import React from "react";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import CTACard from "../components/CTACard";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <Header />
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <ContactForm />
          <div className="flex flex-col gap-8">
            <CTACard />
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
