"use client";
import React, { useEffect } from "react";
import s from "./page.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Card from "@/components/Cards/Card/Card";
import { fetchFavoritesData } from "@/app/store/slice/favoritesSlice";

export default function page() {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);
  useEffect(() => {
    dispatch(fetchFavoritesData());
  }, []);
  return (
    <div className="container">
      <div className={s.favorites}>
        <h2>Избранные товары</h2>
        <button>Сначала новые</button>
        <div className={s.favorites_wrap}>
          {favorites?.map((item) => {
            return (
              <>
                <Card item={item} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
