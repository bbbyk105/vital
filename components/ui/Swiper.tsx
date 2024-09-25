"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

const SwiperComponent = () => {
  return (
    <div className="w-screen h-screen relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={false}
        effect="fade"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="w-full h-full"
      >
        <SwiperSlide className="relative w-full h-full">
          <Image
            src="/img-1.jpg"
            alt="img"
            fill
            className="object-cover"
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <Image
            src="/img-2.jpg"
            alt="img"
            fill
            className="object-cover"
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
          <Image
            src="/img-3.jpg"
            alt="img"
            fill
            className="object-cover"
            priority={true}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;