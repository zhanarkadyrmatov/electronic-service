"use client";
import React, { useEffect, useState } from "react";
import s from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import cm from "classnames";
import { usePathname } from "next/navigation";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import filtr from "@/../../public/img/aa2.svg";
import favorites from "@/../../public/img/aa3.svg";
import basket from "@/../../public/img/aa1.svg";
import registr from "@/../../public/img/aa4.svg";
import Modal from "../Modal/Modal";
import { BurgerMenu } from "../Menu/page";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const page = usePathname();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [open])


  const [time, setTime] = useState(false);


  useEffect(() => {
    if (time) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

  }, [time])

  return (
    <>
      {open && <Modal handleOpen={handleOpen} />}
      {time && <BurgerMenu setTime={setTime} time={time} />}
      <div className={s.header}>
        <div className="container">
          <div className={s.nav}>
            <div className={s.wrapper}>
              <Image src={'/img/servis.svg'} className={s.logo} alt="" width={120} height={50} />
              <nav className={s.nav_bar}>
                <Link
                  href={"/"}
                  className={cm(s.s, {
                    [s.active]: page === "/",
                  })}
                >
                  Главная
                </Link>
                <Link
                  href={"/pages/AboutUs"}
                  className={cm(s.s, {
                    [s.active]: page === "/pages/AboutUs",
                  })}
                >
                  О нас
                </Link>
                <Link href={""}>Условия покупки</Link>
                <Link href={""}>Условия доставки</Link>
                <Link
                  href={"/pages/Questionnaire"}
                  className={cm(s.s, {
                    [s.active]: page === "/pages/Questionnaire",
                  })}
                >
                  Анкета</Link>
                <Link
                  href={"/pages/Contact"}
                  className={cm(s.s, {
                    [s.active]: page === "/pages/Contact",
                  })}
                >
                  Контакты
                </Link>
              </nav>
            </div>
            <div className={s.phone}>
              <Link className={s.link} href="tel:+996 777 438 992">
                +996 777 438 992
              </Link>
              <p>Бесплатный звонок по Кыргызстану</p>
            </div>
            <RxHamburgerMenu onClick={() => setTime(!time)} className={s.burger} />
          </div>
          <div className={`${s.blok} between`}>
            <button className={`${s.btn_catalog} flex ${s.top}`}>
              <TfiMenuAlt size={18} />
              Каталог
              <MdKeyboardArrowDown size={20} />
            </button>
            <div className={`${s.input_go} between`}>
              <input type="text" placeholder="Что найти?" />
              <FiSearch className={s.search} size={20} />
            </div>
            <div className={`${s.button} flex`}>
              <Link href={"/pages/Filter"} className={s.filter}>
                <div className={s.image}>
                  <Image src={filtr} alt="" width={14} height={14} />
                </div>
                <p>Фильтр</p>
              </Link>

              <div className={s.item}>
                <div className={s.image}>
                  <Image src={'/img/motif.svg'} alt="" width={14} height={14} />
                </div>
                <p>Уведомление</p>
              </div>

              <div className={s.item}>
                <div className={s.image}>
                  <Image src={favorites} alt="" width={14} height={14} />
                </div>
                <p>Избранные</p>
              </div>

              <Link href={"/pages/Basket"} className={s.item}>
                <div className={s.image}>
                  <Image src={basket} alt="" width={14} height={14} />
                </div>
                <p>Корзина</p>
              </Link>
              <div className={s.item} onClick={handleOpen}>
                <div className={s.login}>
                  <Image src={registr} alt="" width={14} height={14} />
                </div>
                <p>Войти</p>
              </div>
            </div>
          </div>
          <div className={s.mobil_input}>
            <div className={`${s.mobil_search}`}>
              <input type="text" placeholder="Что найти?" />
              <FiSearch className={s.search} size={20} />
            </div>
            <div className={s.logo}>
              <Image src={filtr} alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
