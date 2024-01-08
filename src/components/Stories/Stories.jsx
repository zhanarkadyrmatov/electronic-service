"use client";
import React, { useState } from "react";
import s from "./page.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { GrNext, GrPrevious } from "react-icons/gr";

import { FreeMode, Navigation } from "swiper/modules";
import Story from "../Story/Story";
export const Stories = () => {
  const [story, setStory] = useState(false);
  return (
    <>
      {story && <Story setStory={setStory} story={story} />}
      <div className={s.stories}>
        <div className="">
          <h2>Истории</h2>
          <div className={s.wraper}>
            <Swiper
              slidesPerView={6}
              spaceBetween={8}
              freeMode={true}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 16,
                },
                1280: {
                  slidesPerView: 8,
                  spaceBetween: 16,
                },
              }}
              modules={[Navigation, FreeMode]}
              className="mySwiper"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => {
                return (
                  <SwiperSlide>
                    <div onClick={() => setStory(!story)} className={s.story}>
                      <div className={s.border}>
                        <img
                          src="https://images.unsplash.com/photo-1580974928064-f0aeef70895a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <button className={"prev"}>
              <GrPrevious className={s.logo} />
            </button>
            <button className={"next"}>
              <GrNext className={s.logo} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
