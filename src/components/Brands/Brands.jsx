"use client";
import React, { useEffect } from "react";
import s from "./page.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrandsData } from "@/app/store/slice/brandsSlice";
import BrandCard from "../Cards/BrandCard/BrandCard";

export default function Brands() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.brand);

  useEffect(() => {
    dispatch(fetchBrandsData(1));
  }, []);

  const cartData = data?.results;

  console.log(cartData);

  return (
    <div className={s.brands}>
      <div className="container">
        <div className={s.wrapper}>
          <h2>Бренды</h2>
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 40,
              },
            }}
            modules={[FreeMode, Pagination]}
            className={s.mySwiper}
          >
            {cartData?.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <BrandCard item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
