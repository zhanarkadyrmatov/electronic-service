"use client"
import React from "react";
import s from './page.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
// import Rating from "@mui/material/Rating";<Image src={'/img/весь.svg'} alt="" width={100} height={100} style={{
                    //     width:'100%',
                    //     height:'100%'
                    // }} />
// import StarIcon from "@mui/icons-material/Star";


export const Brands = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src={'/img/весь.svg'} alt="" width={100} height={100} style={{
                        width:'100%',
                        height:'100%'
                    }} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={'/img/весь.svg'} alt="" width={100} height={100} style={{
                        width:'100%',
                        height:'100%'
                    }} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={'/img/весь.svg'} alt="" width={100} height={100} style={{
                        width:'100%',
                        height:'100%'
                    }} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}