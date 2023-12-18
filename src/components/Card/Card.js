"use client";
import React, { useRef, useState } from "react";
import s from "./page.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import { FaStar } from "react-icons/fa6";

export default function Card({ item }) {
  return (
    <div className={s.Card}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper" 
      >
        <SwiperSlide>
          <div className={s.box}>
            <div
              style={{
                backgroundImage: `url(${item.img})`,
              }}
              className={s.img}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.box}>
            <div
              style={{
                backgroundImage: `url(${item.img})`,
              }}
              className={s.img}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.box}>
            <div
              style={{
                backgroundImage: `url(${item.img})`,
              }}
              className={s.img}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.box}>
            <div
              style={{
                backgroundImage: `url(${item.img})`,
              }}
              className={s.img}
            ></div>
          </div>
        </SwiperSlide>
      </Swiper>
      <p className={s.Popular}>Популярные</p>
      <span className={s.star}>
        <FaStar className={s.stars} />
      </span>
      <div className={s.title}>
        <h2>Название товара</h2>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="9"
            viewBox="0 0 8 9"
            fill="none"
          >
            <circle cx="4" cy="4.5" r="4" fill="#51BD47" />
          </svg>
          <span>нет в наличии</span>
        </p>
        <div className={s.rating}>
          <Rating
            name="text-feedback"
            size="small"
            value={3.5}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Box sx={{ ml: 2 }}>3.5</Box>
        </div>
        <div className={s.price}>
          <div className={s.prices}>
            <h5>500.35 С</h5>
            <h6>500.35 С</h6>
          </div>
          <button className={s.btn}>В корзину</button>
        </div>
      </div>
    </div>
  );
}
