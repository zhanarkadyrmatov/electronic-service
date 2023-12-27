"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import s from "./page.module.scss";
import { CiStar } from "react-icons/ci";
import Card from "../Cards/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularData } from "@/app/store/slice/popularSlice";

const product = [
  {
    id: 1,
    popular: "Популярные",
    zvezd: "/img/zvezd.svg",
    img: "/img/pop.svg",
    productName: "Название товара",
    Nonalich: "нет в наличии",
    number: "4,8",
    price: "500.35 С",
    basket: "В корзину",
  },
  {
    id: 2,
    popular: "Популярные",
    zvezd: "/img/zvezd.svg",
    img: "/img/pop.svg",
    productName: "Название товара",
    Nonalich: "нет в наличии",
    number: "4,8",
    price: "500.35 С",
    basket: "В корзину",
  },
  {
    id: 3,
    popular: "Популярные",
    zvezd: "/img/zvezd.svg",
    img: "/img/pop.svg",
    productName: "Название товара",
    Nonalich: "нет в наличии",
    number: "4,8",
    price: "500.35 С",
    basket: "В корзину",
  },
  {
    id: 4,
    popular: "Популярные",
    zvezd: "/img/zvezd.svg",
    img: "/img/pop.svg",
    productName: "Название товара",
    Nonalich: "нет в наличии",
    number: "4,8",
    price: "500.35 С",
    basket: "В корзину",
  },
];

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
