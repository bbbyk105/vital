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
    { label: "会社名", value: "株式会社 近藤薬局" },
    { label: "代表取締役", value: "近藤 弘人" },
    {
      label: "所在地",
      value: ["〒417-0051", "静岡県富士市吉原2丁目 8番21-2号"],
    },
    {
      label: "営業時間",
      value: ["平日：9:00-21:00", "土日祝：9:00-18:00"],
    },
  ];

  return (
    <section
      id="company-section"
      className="relative py-24 bg-gray-50 text-gray-800 overflow-hidden mt-32 "
    >
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-4">
            Company Profile
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div
            className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-8 pb-4 border-b border-gray-200 text-gray-800">
              会社概要
            </h3>

            <div className="space-y-6">
              {companyInfo.map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 delay-${
                    index * 100
                  } ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-2">
                    <h4 className="font-medium text-gray-700">{item.label}</h4>
                  </div>
                  <div className="pl-10">
                    {Array.isArray(item.value) ? (
                      item.value.map((line, i) => (
                        <p key={i} className="text-gray-600 text-sm">
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className="text-gray-600 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full min-h-[500px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.76073099668!2d138.68491027643637!3d35.1625875582891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a2b3b80616499%3A0x6c57d4d775647025!2z5qmY6aaZ5aCC6L-R6Jek6Jas5bGA77yId29yeCBtdC5mdWpp77yJ!5e0!3m2!1sja!2sjp!4v1730868375271!5m2!1sja!2sjp"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
