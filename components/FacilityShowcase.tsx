import React from "react";
import Image from "next/image";

const FacilityShowcase = () => {
  const facilities = [
    {
      id: 1,
      title: "グリーンスペース",
      subtitle: "心と体をリフレッシュする空間",
      description: "自然光と緑に囲まれた、心身ともにリフレッシュできる空間",
      imageUrl: "/yoga.jpg",
      features: ["自然光溢れる空間", "ヨガマット完備", "更衣室併設"],
    },
    {
      id: 2,
      title: "ワークスペース",
      subtitle: "創造性を刺激する作業環境",
      description:
        "快適な環境で集中して作業を行えるワークスペース。自然光が差し込む開放感のある空間は、クリエイティビティを刺激し、効率的な仕事環境を提供します。",
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
        "大人から子供まで、年齢や性別を問わず、どなたでも気軽にご利用いただけます。自然豊かな環境の中で、リラックスしたり、創造的な活動を楽しんだりできます。",
      imageUrl: "/kids.jpg",
      features: ["バリアフリー", "託児スペース", "休憩エリア", "防音設備"],
    },
  ];

  return (
    <div id="facility" className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Our Facilities
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          多様な目的に応える、洗練された空間デザイン。
          創造性、リラックス、コラボレーションを支援する環境を提供します。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {facilities.map((facility) => (
          <div
            key={facility.id}
            className="group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative h-96 w-full overflow-hidden">
              <Image
                src={facility.imageUrl}
                alt={facility.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                {facility.title}
              </h3>
              <p className="text-gray-600 mb-4">{facility.subtitle}</p>

              <p className="text-sm text-gray-500 mb-4">
                {facility.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {facility.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilityShowcase;
