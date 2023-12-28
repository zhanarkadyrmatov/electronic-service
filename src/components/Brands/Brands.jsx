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
import Link from "next/link";

export default function Brands() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.brand);

  useEffect(() => {
    dispatch(fetchBrandsData(1));
  }, []);

  const cartData = data?.results;
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
            slidesPerView={2}
            spaceBetween={20}
            freeMode={true}
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
            modules={[FreeMode]}
            className={s.mySwiper}
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
