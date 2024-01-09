"use client";
import React, { useEffect, useState } from "react";
import s from "./page.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { GrNext, GrPrevious } from "react-icons/gr";

import { FreeMode, Navigation } from "swiper/modules";
import Story from "../Story/Story";
import { useDispatch, useSelector } from "react-redux";
import { fetchStoriesData } from "@/app/store/slice/storiesSlice";
export const Stories = () => {
  const [story, setStory] = useState(false);
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  const { stories } = useSelector((state) => state.stories);

  useEffect(() => {
    dispatch(fetchStoriesData());
  }, []);

  const handleClick = (data) => {
    setItem(data);
    setStory(!story);
  };

  console.log(stories);
  return (
    <>
      {story && <Story setStory={setStory} item={item} story={story} />}
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
              {stories?.map((e) => {
                return (
                  <>
                    <SwiperSlide>
                      <div
                        onClick={() => handleClick(e.stories)}
                        className={s.story}
                      >
                        <div className={s.border}>
                          <img src={e.shop_logo} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
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
