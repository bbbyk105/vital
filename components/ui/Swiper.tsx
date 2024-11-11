"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

const SwiperComponent = () => {
  const slides = [
    {
      image: "/first.jpg",
      title: "快適なワークスペースで\n新しい働き方を",
      subtitle: "コワーキングスペースで、あなたの理想のワークスタイルを実現",
    },
    {
      image: "/second.jpg",
      title: "アイデアが生まれる\nワーキングブース完備",
      subtitle: "周囲を気にせず、創造的な作業に没頭できるスペース",
    },
    {
      image: "/third.jpg",
      title: "ビジネスの出会いが生まれる\nコミュニティスペース",
      subtitle: "フリースペース・Wi-Fi完備で快適なコワーキング体験を",
    },
  ];

  return (
    <div className="w-screen h-screen relative z-50">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        effect="fade"
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
              src={slide.image}
              alt="slider image"
              fill
              className="object-cover"
              priority={true}
            />
            <div className="absolute z-20 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 whitespace-pre-line leading-tight">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
                {slide.subtitle}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: white;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

export default SwiperComponent;