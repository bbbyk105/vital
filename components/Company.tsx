"use client";
import React, { useEffect, useState } from "react";

const Company = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("company-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const companyInfo = [
    { label: "会社名", value: "株式会社 近藤薬局", icon: "🏢" },
    { label: "代表取締役", value: "近藤 弘人", icon: "👤" },
    {
      label: "所在地",
      value: ["〒417-0051", "静岡県富士市吉原2丁目 8番21-2号"],
      icon: "📍",
    },
    {
      label: "営業時間",
      value: ["平日：9:00-21:00", "土日祝：9:00-18:00"],
      icon: "🕒",
    },
  ];

  return (
    <section
      id="company-section"
      className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden mt-32"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-8 right-1/4 w-96 h-96 bg-indigo-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-20 opacity-0 animate-fade-in">
          <p className="text-blue-600 font-medium mb-4 tracking-wide">
            ABOUT US
          </p>
          <h2 className="font-extrabold text-4xl md:text-6xl mb-6 text-gray-800">
            Company
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Company Info Card */}
          <div
            className={`w-full lg:w-1/2 bg-white rounded-2xl shadow-[0_0_50px_0_rgba(0,0,0,0.1)] p-8 lg:p-12 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="font-bold text-2xl md:text-3xl mb-10 text-gray-800 border-b border-gray-100 pb-4">
              会社概要
            </h3>

            <div className="space-y-8">
              {companyInfo.map((item, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-500 delay-${
                    index * 100
                  } ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                >
                  <div className="group">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-2xl">{item.icon}</span>
                      <h4 className="font-medium text-gray-700">
                        {item.label}
                      </h4>
                    </div>
                    <div className="ml-12 border-l-2 border-gray-100 pl-6 py-1">
                      {Array.isArray(item.value) ? (
                        item.value.map((line, i) => (
                          <p key={i} className="text-gray-600 mb-1">
                            {line}
                          </p>
                        ))
                      ) : (
                        <p className="text-gray-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_0_rgba(0,0,0,0.1)] aspect-square">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.76073099668!2d138.68491027643637!3d35.1625875582891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a2b3b80616499%3A0x6c57d4d775647025!2z5qmY6aaZ5aCC6L-R6Jek6Jas5bGA77yId29yeCBtdC5mdWpp77yJ!5e0!3m2!1sja!2sjp!4v1730868375271!5m2!1sja!2sjp"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location"
              ></iframe>
              <div className="absolute inset-0 border-8 border-white rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
