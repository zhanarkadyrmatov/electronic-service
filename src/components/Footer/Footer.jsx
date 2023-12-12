import React from "react";
import s from "./page.module.scss";
import Image from "next/image";
import img from "../../../public/img/electr.svg";
import apple from "../../../public/img/app.svg";
import play from "../../../public/img/play.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.footer_container}>
        <div className={`${s.wrapper}`}>
          <div className={`${s.nav}`}>
            <div className={s.number}>
              <Image className={s.logo} src={img} alt="" />
              <div>
                <Link className={s.link} href="tel:+996 777 438 992">
                  +996 777 438 992
                </Link>
                <p>Бесплатный звонок по Кыргызстану</p>
              </div>
            </div>
            <div className={s.menu_link}>
              <Link className={s.menu_item} href={"/"}>
                Главная
              </Link>
              <Link className={s.menu_item} href={"/pages/AboutUs"}>
                О нас
              </Link>
              <Link className={s.menu_item} href={""}>
                Условия покупки
              </Link>
              <Link className={s.menu_item} href={""}>
                Условия доставки
              </Link>
            </div>
          </div>
          <div className={s.footer_button}>
            <h2>Скачай мобильное приложение</h2>
            <div className={s.btn}>
              <Link href="https://apps.apple.com/kg/app/%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0-%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81/id6470746288">
                <Image src={apple} alt="" />
              </Link>
              <Link
                className={s.p}
                href="https://play.google.com/store/apps/details?id=dev.electronica_service_mob"
              >
                <Image src={play} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className={`${s.title}`}>
          <p>Электроника Сервис</p>
          <p>DESIGN @artemkonkin</p>
        </div>
      </div>
    </div>
  );
}
