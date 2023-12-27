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

  console.log(cartData);

  return (
    <div className={s.brands}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.title}>
            <h2>Бренды</h2>
            <Link className={s.button} href={`/pages/Brand/id`}>
              Показать все
            </Link>
          </div>
          <div className={s.brand}>
            {cartData?.slice(0, 6).map((item) => {
              return (
                <div key={item.id}>
                  <BrandCard item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
