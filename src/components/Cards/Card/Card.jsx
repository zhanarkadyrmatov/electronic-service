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
import { FaHeart } from "react-icons/fa6";
import Link from "next/link";
import { BsExclamationCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { fetchBasketPostData } from "@/app/store/slice/basketSlice";

export default function Card({ item }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const handleClick = (el) => {
    console.log(el.product_variation.id);
    dispatch(
      fetchBasketPostData({ page: el.product_variation.id, count: count })
    );
  };

  const handleFavorites = (id) => {
    console.log(id);
    dispatch();
  };

  console.log(item);
  return (
    <div className={s.Card}>
      <Link href={`/pages/${item.id}`}>
        {item?.product_variation?.images ? (
          <img src={item.product_variation.images} className={s.img} alt="" />
        ) : (
          <div className={s.card_logo}>
            <BsExclamationCircleFill className={s.logo} />
          </div>
        )}
        {/* <Swiper
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
                  backgroundImage: `url(${item.product_variation.images})`,
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
        </Swiper> */}
      </Link>
      <p className={s.Popular}>Популярные</p>
      <span
        style={{
          backgroundColor: item.is_favorite ? "#f7e200" : "#fff",
        }}
        className={s.star}
      >
        <FaHeart
          style={{
            fill: item.is_favorite ? "#fff" : "#f7e200",
          }}
          className={s.stars}
        />
      </span>
      <div className={s.title}>
        <h2>{item.title?.slice(0, 30)}...</h2>
        {/* <p>
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
        </p> */}
        {/* <div className={s.rating}>
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
        </div> */}
        <div className={s.price}>
          <div className={s.prices}>
            <h5>
              {item.product_variation?.product_price}
              {item.product_variation?.currency_unit?.currency}
            </h5>
            {/* <h6>500.35 С</h6> */}
          </div>
          <button onClick={() => handleClick(item)} className={s.btn}>
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}
