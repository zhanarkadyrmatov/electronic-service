"use client";
import React, { useEffect } from "react";
import s from "./page.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrandsData } from "@/app/store/slice/brandsSlice";
import BrandCard from "../Cards/BrandCard/BrandCard";
import Link from "next/link";

export default function Brands() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.brand);

  useEffect(() => {
    dispatch(fetchBrandsData(1));
  }, []);
  const cartData = data?.results;

  const customPaginationClass = "custom_pagination";

  const handlePaginationRef = (pagination) => {
    if (pagination && pagination.el) {
      pagination.el.classList.add(customPaginationClass);
    }
  };
  return (
    <div className={s.brands}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.title}>
            <h2>Бренды</h2>
            <Link className={s.button} href={`/pages/Brand/all`}>
              Показать все
            </Link>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={120}
            freeMode={true}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class=${className}>
                <div class='border'></div>
                </span>`;
              },
              bulletClass: "bullet",
              bulletActiveClass: "swiperactive",
            }}
            modules={[Autoplay, Pagination]}
        className={s.mySwiper}
        onSwiper={(swiper) => {
          handlePaginationRef(swiper.pagination);
        }}
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 40,
              },
            }}
            // modules={[FreeMode, Pagination]}
            // className={s.mySwiper}
          >
            {cartData?.slice(0, 6).map((item) => {
              return (
                <SwiperSlide>
                  <div key={item.id}>
                    <Link href={`/pages/Brand/${item.id}`}>
                      <BrandCard item={item} />
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
