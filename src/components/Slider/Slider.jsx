"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import s from "./page.module.scss";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={s.mySwiper2}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: "url('/img/tele.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage:
                "url('https://max.kg/nal/img/12039/b_tov_100440_dd43314a.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage:
                "url('https://www.gadget.kg/upload/catalog/61/item_6027/e360e8d20e56adc05138bf99b48487c0.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage:
                "url('https://object.pscloud.io/cms/cms/Photo/img_0_95_1948_0_1.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage:
                "url('https://teknomir.kg/image/cache/catalog/Elista%20B55UHD4EKC-700x700.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage:
                "url('https://max.kg/nal/img/12039/b_tov_11431949_4a395044.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
            }}
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={s.mySwiper}
      >
        <SwiperSlide
          className={s.slide}
          style={{
            backgroundImage: "url(/img/tele.png)",
          }}
        ></SwiperSlide>
        <SwiperSlide
          className={s.slide}
          style={{
            backgroundImage:
              "url('https://max.kg/nal/img/12039/b_tov_100440_dd43314a.png')",
          }}
        ></SwiperSlide>
        <SwiperSlide
          className={s.slide}
          style={{
            backgroundImage:
              "url('https://www.gadget.kg/upload/catalog/61/item_6027/e360e8d20e56adc05138bf99b48487c0.jpg')",
          }}
        ></SwiperSlide>
        <SwiperSlide
          className={s.slide}
          style={{
            backgroundImage:
              "url('https://object.pscloud.io/cms/cms/Photo/img_0_95_1948_0_1.jpg')",
          }}
        ></SwiperSlide>
        <SwiperSlide
          className={s.slide}
          style={{
            backgroundImage:
              "url('https://teknomir.kg/image/cache/catalog/Elista%20B55UHD4EKC-700x700.jpg')",
          }}
        ></SwiperSlide>
        <SwiperSlide
          className={s.slide}
          style={{
            backgroundImage:
              "url('https://max.kg/nal/img/12039/b_tov_11431949_4a395044.jpg')",
          }}
        ></SwiperSlide>
      </Swiper>
    </div>
  );
}
