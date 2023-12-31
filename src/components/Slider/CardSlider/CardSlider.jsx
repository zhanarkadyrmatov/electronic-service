"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import s from "./page.module.scss";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function Slider({ item }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  console.log(item);
  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={s.mySwiper2}
      >
        {item.images.map((el) => {
          return (
            <SwiperSlide>
              <div
                style={{
                  backgroundImage: `url(${el.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "100%",
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={s.mySwiper}
      >
        {item.images.map((el) => {
          return (
            <SwiperSlide
              className={s.slide}
              style={{
                backgroundImage: `url(${el.image})`,
              }}
            ></SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
