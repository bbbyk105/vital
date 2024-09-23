import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./index.module.css";

export default function BasicSlider() {
    const images = [
      ""
    ];
  
    const slideSettings = {
      0: {
        slidesPerView: 1.4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    };
  
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={slideSettings}
        slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{
          clickable: true,
        }}
        className={styles.slideWrapper}
      >
        {images.map((src: string, index: number) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              width={1920}
              height={1038}
              alt="Slider Image"
              sizes="(min-width: 1024px) 100vw, 60vw"
              className={styles.slideImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  