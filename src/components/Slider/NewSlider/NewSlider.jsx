"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./page.module.scss";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
export default function NewSlider() {
  // const customPaginationClass = `${s.custom-pagination-class}`

  const handlePaginationRef = (pagination) => {
    console.log(pagination);
    if (pagination && pagination.el) {
      pagination.el.classList.add(`${s.custom_pagination}`);
    }
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class=${className}></span>;`;
          },
          bulletClass: `${s.bullet}`,
          bulletActiveClass: "swiperactive",
        }}
        modules={[Autoplay, Pagination]}
        className={s.mySwiper}
        onSwiper={(swiper) => {
          console.log(swiper.pagination);
          handlePaginationRef(swiper.pagination);
        }}
      >
        {[1, 2, 3].map((e) => {
          return (
            <SwiperSlide key={e} className={s.new_slide}>
              <img src="/img/весь.svg" alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
