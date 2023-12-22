"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./page.module.scss";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
export default function NewSlider() {
  const customPaginationClass = "custom-pagination-class";

  const handlePaginationRef = (pagination) => {
    if (pagination && pagination.el) {
      pagination.el.classList.add(customPaginationClass);
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
          // renderBullet: function (index, className) {
          //   return `<span class="${s.pagi} ${className}"></span>`;
          // },
        }}
        modules={[Autoplay, Pagination]}
        className={s.mySwiper}
        onSwiper={(swiper) => {
          handlePaginationRef(swiper.pagination);
        }}
      >
        {[1, 2, 3].map((e) => {
          return <SwiperSlide key={e} className={s.new_slide}></SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
}
