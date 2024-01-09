"use client";
import React, { useEffect, useState } from "react";
import s from "./page.module.scss";
import ReactInstaStories from "react-insta-stories";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MdClose } from "react-icons/md";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

const stories = [
  {
    url: "https://world-schools.com/ru/wp-content/uploads/sites/15/2023/05/IMG-Academy-cover-WS.webp",
  },
];

export default function Story({ story, setStory }) {
  const [data, setData] = useState();
  const [swiper, setSwiper] = useState(null);
  const { stories } = useSelector((state) => state.stories);

  return (
    <div className={s.story}>
      <Swiper
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={100}
        modules={[]}
        onSwiper={(s) => {
          setSwiper(s);
        }}
        className={s.mySwiper}
      >
        {stories.map((el, index) => {
          console.log(el);
          return (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <div className={s.wrapper}>
                      <ReactInstaStories
                        className={s.stories}
                        stories={el.stories.map((img, idx) => ({
                          content: ({ action, isPaused }) => (
                            <>
                              {img.media_type === "image" ? (
                                <img
                                  key={idx}
                                  className={s.img}
                                  src={img.media}
                                  alt=""
                                />
                              ) : (
                                <>
                                  <ReactPlayer
                                    width={"100%"}
                                    height={"auto"}
                                    playing={true}
                                    className={s.video}
                                    onProgress={(progress) => {
                                      console.log(progress);
                                    }}
                                    url={img.media}
                                  />
                                </>
                              )}
                            </>
                          ),
                        }))}
                        defaultInterval={5000}
                        width={432}
                        height={720}
                        loop={true}
                        loader={true}
                        keyboardNavigation={true}
                        // storyStyles={storyContent}
                        onStoryEnd={(s, st) => swiper.slideNext()}
                        // onAllStoriesEnd={(s, st) => setStory(!story)}
                      />
                    </div>
                  ) : (
                    <div className={s.card}>
                      <img src={el.shop_logo} alt="" />
                    </div>
                  )}
                </>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <div>
        <div className={s.wrapper}>
          <ReactInstaStories
            className={s.stories}
            stories={stories2}
            defaultInterval={5000}
            width={432}
            height={720}
            loop={true}
            loader={true}
            keyboardNavigation={true}
            storyStyles={storyContent}
            onStoryEnd={(s, st) => setStory(!story)}
            onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
          />
        </div>
      </div> */}
      <button onClick={() => setStory(!story)} className={s.close}>
        <MdClose className={s.logo} />
      </button>
    </div>
  );
}
