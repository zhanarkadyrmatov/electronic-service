"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";



export const Sliderson = () => {
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