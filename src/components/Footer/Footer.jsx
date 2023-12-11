import React from 'react'
import s from '../Home/Home.module.scss'
import Image from 'next/image'
import img from '../../../public/img/electr.svg'
import apple from '../../../public/img/app.svg'
import play from '../../../public/img/play.svg'
import Link from 'next/link'



export default function Footer() {
    return (
        <div className={s.footer}>
            <div className={`${s.betweenbek} between`}>
                <div className={`${s.betweenbek} flex`} style={{ gap: '130px' }}>
                    <div className={s.number}>
                        <Image src={img} alt='' />
                        <a href="tel:+996 777 438 992">
                            +996 777 438 992
                        </a>
                        <p>Бесплатный звонок по Кыргызстану</p>
                    </div>
                    <ol>
                        <Link href={'/'}><li>Главная</li></Link>
                        <Link href={'/pages/AboutUs'}><li>О нас</li></Link>
                        <li>Условия покупки</li>
                        <li>Условия доставки</li>
                    </ol>
                </div>
                <div>
                    <h3>Скачай мобильное приложение</h3>
                    <div className={`${s.betweenbek} flex`} style={{ gridGap: '20px', paddingTop: '30px' }}>
                        <a href="https://apps.apple.com/kg/app/%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0-%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81/id6470746288">
                            <Image src={apple} alt='' />
                        </a>
                        <a className={s.p} href="https://play.google.com/store/apps/details?id=dev.electronica_service_mob">
                            <Image src={play} alt='' />
                        </a>
                    </div>
                </div>
            </div>
            <div className={s.border}></div>
            <div className={`${s.betweenbek} between`}>
                <p>Электроника Сервис</p>
                <p style={{marginTop:'20px'}}>DESIGN @artemkonkin</p>
            </div>
        </div>
    )
}
