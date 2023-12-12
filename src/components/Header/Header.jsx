"use client";
import React, { useState } from "react";
import s from "./page.module.scss";
import servis from "../../../public/img/servis.svg";
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
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const page = usePathname();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      {open && <Modal handleOpen={handleOpen} />}
      <div className={s.header}>
        <div className="container">
          <div className={s.nav}>
            <div className={s.wrapper}>
              <Image src={servis} className={s.logo} alt="" />
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
                <Link href={""}>Анкета</Link>
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
              <Link className={s.link} href={""}>
                +996 777 438 992
              </Link>
              <p>Бесплатный звонок по Кыргызстану</p>
            </div>
            <RxHamburgerMenu className={s.burger} />
          </div>
          <div className={`${s.blok}`}>
            <button className={`${s.btn_catalog} flex ${s.top}`}>
              <TfiMenuAlt size={18} />
              Каталог
              <MdKeyboardArrowDown size={20} />
            </button>
            <div className={`${s.input_go}`}>
              <input type="text" placeholder="Что найти?" />
              <FiSearch className={s.search} size={20} />
            </div>
            <div className={s.button}>
              <Link href={"/pages/Filter"} className={s.filter}>
                <div className={s.image}>
                  <Image src={filtr} alt="" width={24} height={24} />
                </div>
                <p>Фильтр</p>
              </Link>

              <div className={s.item}>
                <div className={s.image}>
                  <Image src={favorites} alt="" width={24} height={24} />
                </div>
                <p>Избранные</p>
              </div>
              <div className={s.item}>
                <div className={s.image}>
                  <Image src={basket} alt="" width={24} height={24} />
                </div>
                <p>Корзина</p>
              </div>
              <div className={s.item} onClick={handleOpen}>
                <div className={s.login}>
                  <Image src={registr} alt="" width={24} height={24} />
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
              <Image src={filtr} alt="" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
