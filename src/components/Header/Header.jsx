"use client"
import React, { useState } from 'react';
import s from '../Home/Home.module.scss'
import servis from '../../../public/img/servis.svg'
import Image from 'next/image'
import Link from 'next/link'
import cm from 'classnames'
import { usePathname } from 'next/navigation'
import { TfiMenuAlt } from "react-icons/tfi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import filtr from '@/../../public/img/aa2.svg'
import favorites from '@/../../public/img/aa3.svg'
import basket from '@/../../public/img/aa1.svg'
import registr from '@/../../public/img/aa4.svg'
import Modal from '../Modal/Modal';




export default function Header() {
    const page = usePathname()
    console.log(page, 'ressdfsdfd');

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);


    return (
        <>
            {open && <Modal handleOpen={handleOpen} />}
            <div id={s.header}>
                <div className={`${s.block} between`}>
                    <div className={`${s.flex} flex ${s.blok} `} style={{ gap: '22px' }}>
                        <Image src={servis} alt='' />
                        <nav className={s.nav_bar}>
                            <Link href={'/'} className={cm(s.s, {
                                [s.acc]: page === '/'
                            })}>Главная
                            </Link>
                            <Link href={'/pages/AboutUs'} className={cm(s.s, {
                                [s.acc]: page === '/pages/AboutUs'
                            })}>О нас
                            </Link>
                            <Link href={''}>Условия покупки</Link>
                            <Link href={''}>Условия доставки</Link>
                            <Link href={''}>Анкета</Link>
                            <Link href={'/pages/Contact'} className={cm(s.s, {
                                [s.acc]: page === '/pages/Contact'
                            })}>Контакты</Link>
                        </nav>
                    </div>
                    <div>
                        <h3>+996 777 438 992</h3>
                        <p>Бесплатный звонок по Кыргызстану</p>
                    </div>
                </div>

                <div className={s.border_grey}></div>
                <div className={`${s.blok} between`} style={{ gap: '20px' }}>
                    <button className={`${s.btn_catalog} flex ${s.top}`}>
                        <TfiMenuAlt size={18} />
                        Каталог
                        <MdKeyboardArrowDown size={20} />
                    </button>
                    <div className={`${s.input_go} flex`}>
                        <input type="text" placeholder='Что найти?' />
                        <FiSearch className={s.search} size={20} />
                    </div>
                    <div className={`${s.top} between`} style={{ gap: '10px' }}>
                        <div className={s.card}>
                            <div>
                                <Image className={s.img} src={filtr} alt='' width={10} height={10} />
                            </div>
                            <p>Фильтр</p>
                        </div>

                        <div className={s.card}>
                            <div>
                                <Image className={s.img} src={favorites} alt='' width={10} height={10} />
                            </div>
                            <p>Избранные</p>
                        </div>
                        <div className={s.card}>
                            <div>
                                <Image className={s.img} src={basket} alt='' width={10} height={10} />
                            </div>
                            <p>Корзина</p>
                        </div>
                        <div className={s.card} onClick={handleOpen}>
                            <div>
                                <Image className={s.img} src={registr} alt='' width={10} height={10} />
                            </div>
                            <p>Войти</p>
                        </div>
                    </div>
                </div>
                <div className={s.border_grey}></div>
            </div>
        </>
    )
}