import React from 'react'
import Image from 'next/image'
import s from '../Home/Home.module.scss'
import { CiStar } from "react-icons/ci";

const product = [
    {
        id: 1,
        popular: 'Популярные',
        zvezd: '/img/zvezd.svg',
        img: '/img/pop.svg',
        productName: 'Название товара',
        Nonalich: 'нет в наличии',
        number: '4,8',
        price: '500.35 С',
        basket: 'В корзину'
    },
    {
        id: 2,
        popular: 'Популярные',
        zvezd: '/img/zvezd.svg',
        img: '/img/pop.svg',
        productName: 'Название товара',
        Nonalich: 'нет в наличии',
        number: '4,8',
        price: '500.35 С',
        basket: 'В корзину'
    },
    {
        id: 3,
        popular: 'Популярные',
        zvezd: '/img/zvezd.svg',
        img: '/img/pop.svg',
        productName: 'Название товара',
        Nonalich: 'нет в наличии',
        number: '4,8',
        price: '500.35 С',
        basket: 'В корзину'
    },
    {
        id: 4,
        popular: 'Популярные',
        zvezd: '/img/zvezd.svg',
        img: '/img/pop.svg',
        productName: 'Название товара',
        Nonalich: 'нет в наличии',
        number: '4,8',
        price: '500.35 С',
        basket: 'В корзину'
    },
    {
        id: 5,
        popular: 'Популярные',
        zvezd: '/img/zvezd.svg',
        img: '/img/pop.svg',
        productName: 'Название товара',
        Nonalich: 'нет в наличии',
        number: '4,8',
        price: '500.35 С',
        basket: 'В корзину'
    }
]

export default function Popular() {
    return (
        <div className={s.popular}>
            <div className={`${s.block} between`} style={{margin:'20px 0'}}>
                <h3>Популярные</h3>
                <button className={s.btn_white}>
                    Показать все
                </button>
            </div>
            <div className={s.products}>
                {
                    product.map((el) => (
                        <div className={s.product}>

                            <div className={s.product_img}>
                                <div className={`${s.absolute} between`}>
                                    <button>{el.popular}</button>
                                    <Image src={el.zvezd} alt='' width={40} height={30} />
                                </div>
                                <Image src={el.img} alt='' layout='fill' objectFit='cover' />
                            </div>

                            <div className={s.product_text}>
                                <h4>{el.productName}</h4>
                                <div className="flex" style={{gap:'5px', padding:'10px 0'}}>
                                    <div className={s.borderR}></div>
                                    <h6>{el.Nonalich}</h6>
                                </div>
                                <div className="flex" style={{gap:'5px'}}>
                                    <CiStar />
                                    <CiStar />
                                    <CiStar />
                                    <CiStar />
                                    <CiStar />
                                    <p>{el.number}</p>
                                </div>
                                <div className="between">
                                    <h5>{el.price}</h5>
                                    <button>{el.basket}</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
