"use client";
import React, { useEffect, useState } from "react";
import s from "./page.module.scss";
import Image from "next/image";
import { fetchCategoryData } from "@/app/store/slice/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../Cards/CategoryCard/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

export default function Categories() {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategoryData());
  }, []);

  return (
    <>
      <div className={s.categories}>
        <div className={`between ${s.block}`}>
          <h3>Категории</h3>
          <button className={s.btn_white}>Показать все</button>
        </div>
        <div className={s.wrapper}>
          {category?.map((item, index) => {
            return (
              <div key={index}>
                <CategoryCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
