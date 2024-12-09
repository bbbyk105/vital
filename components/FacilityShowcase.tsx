"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const FacilityShowcase = () => {
  const [activeSection, setActiveSection] = useState(0);

  const facilities = [
    {
      id: 1,
      title: "グリーンスペース",
      subtitle: "心と体をリフレッシュする空間",
      description: "グリーンスペースでは",
      imageUrl: "/yoga.jpg",
      features: ["自然光溢れる空間", "ヨガマット完備", "更衣室併設"],
    },
    {
      id: 2,
      title: "ワークスペース",
      subtitle: "創造性を刺激する作業環境",
      description:
        "快適な環境で集中して作業を行えるワークスペースです。自然光が差し込む開放感のある空間は、クリエイティビティを刺激し、効率的な仕事環境を提供します。",
      imageUrl: "/working.jpg",
      features: ["高速Wi-Fi", "電源完備", "フリードリンク", "個別デスク"],
    },
    {
      id: 3,
      title: "コミュニティスペース",
      subtitle: "人々が繋がる交流の場",
      description:
        "ワークショップやセミナーを通じて、さまざまなバックグラウンドを持つ人々との出会いがあり、共に学び合い、成長できる環境を提供します。",
      imageUrl: "/seminar.jpg",
      features: [
        "プロジェクター",
        "音響設備",
        "可動式椅子",
        "ケータリング対応",
      ],
    },
    {
      id: 4,
      title: "多目的スペース",
      subtitle: "誰もが利用できる開放的な空間",
      description:
        "私たちのスペースは、大人から子供まで、年齢や性別を問わず、どなたでも気軽にご利用いただけます。自然豊かな環境の中で、リラックスしたり、創造的な活動を楽しんだりできます。",
      imageUrl: "/kids.jpg",
      features: ["バリアフリー", "託児スペース", "休憩エリア", "防音設備"],
    },
  ];

  const nextSection = () => {
    setActiveSection((prev) => (prev + 1) % facilities.length);
  };

  const prevSection = () => {
    setActiveSection(
      (prev) => (prev - 1 + facilities.length) % facilities.length
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-2">
        Facility
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
        施設についての詳細情報をご紹介します
      </p>

      <div className="relative">
        {/* Main Display */}
        <div className="relative h-[70vh] rounded-3xl overflow-hidden">
          <Image
            src={facilities[activeSection].imageUrl}
            alt={facilities[activeSection].title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority={true} // 事前ロード
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {facilities[activeSection].title}
            </h2>
            <p className="text-xl text-gray-200 mb-4">
              {facilities[activeSection].subtitle}
            </p>
            <p className="text-gray-300 mb-6 max-w-2xl">
              {facilities[activeSection].description}
            </p>
            <div className="flex flex-wrap gap-3">
              {facilities[activeSection].features.map((feature, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            onClick={prevSection}
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSection}
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Section Indicators */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {facilities.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeSection
                  ? "w-8 bg-gray-800 dark:bg-white"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilityShowcase;
