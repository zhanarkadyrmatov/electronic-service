"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import s from "./page.module.scss";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function Slider({ item }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
  }, []);
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
              <a href={el.image} data-fancybox="gallery">
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
              </a>
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
