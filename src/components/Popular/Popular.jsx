"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import s from "./page.module.scss";
import { CiStar } from "react-icons/ci";
import Card from "../Cards/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularData } from "@/app/store/slice/popularSlice";
import NothingFound from "../NothingFound/NothingFound";
import { Loader } from "../Loader/Loader";

export default function Popular() {
  const { data ,status } = useSelector((state) => state.popular);
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
      {status === 'loading' && <Loader/>}
      {status === 'error' && <NothingFound/>}
      {status === 'succeeded' && (
        cartData?.map((item) => (
          <Card item={item} />
        ))
        
      )}
      {status === 'succeeded' && (
        cartData?.length === 0 && (
          <NothingFound/>
        ))}
      </div>
    </div>
  );
}
