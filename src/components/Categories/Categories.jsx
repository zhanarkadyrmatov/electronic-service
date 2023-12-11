"use client"
import React, { useState } from 'react'
import s from '../Home/Home.module.scss'
import Image from 'next/image'
import ios from '../../../public/img/весь.svg'



const cards = [
    {
        id: 1,
        img: '/img/plita1.svg',
        title: 'Газовые плиты'
    },
    {
        id: 2,
        img: '/img/plita2.svg'
    },
    {
        id: 3,
        img: '/img/plita3.svg',
        title: 'Духовки'
    },
    {
        id: 4,
        img: '/img/plita4.svg'
    },
    {
        id: 5,
        img: '/img/plita5.svg',
        title: 'Кондиционеры'
    },
    {
        id: 6,
        img: '/img/plita6.svg'
    },
    {
        id: 7,
        img: '/img/plita1.svg',
        title: 'Газовые плиты'
    },
    {
        id: 8,
        img: '/img/plita2.svg'
    },
    {
        id: 9,
        img: '/img/plita3.svg',
        title: 'Духовки'
    },
    {
        id: 10,
        img: '/img/plita4.svg'
    },
    {
        id: 11,
        img: '/img/plita5.svg',
        title: 'Кондиционеры'
    },
    {
        id: 12,
        img: '/img/plita6.svg'
    },
]

export default function Categories() {

    return (
        <>

        <div className={s.categories}>
            <div className={`between ${s.block}`}>
                <h3>Категории</h3>
                <button className={s.btn_white}>
                    Показать все
                </button>
            </div>
            <div className={s.grid}>
                {
                    cards.map((el) => (
                        <div className={s.card}>
                            <div className={s.card_img}>
                            <Image src={el.img} alt='' width={150} height={200} />
                            </div>
                            <h5>{el.title}</h5>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}
