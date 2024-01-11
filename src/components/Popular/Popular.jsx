"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import s from "./page.module.scss";
import { CiStar } from "react-icons/ci";
import Card from "../Cards/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularData } from "@/app/store/slice/popularSlice";

export default function Popular() {
  const { data } = useSelector((state) => state.popular);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularData(1));
  }, []);

  const cartData = data?.results;
  console.log(cartData);
  return (
    <div className={s.popular}>
      <div className={`${s.block} between`} style={{ margin: "20px 0" }}>
        <h3>Популярные</h3>
        <button className={s.btn_white}>Показать все</button>
      </div>
      <div className={s.products}>
        {cartData?.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}
