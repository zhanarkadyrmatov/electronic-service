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
import user from "../../../public/img/adam.svg";
import Modal from "../Modal/Modal";
import { BurgerMenu } from "../Menu/page";
import { RxHamburgerMenu } from "react-icons/rx";
import { handleModal } from "@/app/store/slice/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "@/app/store/slice/signInSlice";

export default function Header() {
  const page = usePathname();
  const dispatch = useDispatch();
  useEffect(() => {
    const id = JSON?.parse(localStorage.getItem("userToken"));
    if (id !== null) {
      dispatch(userProfile(id));
    }
  }, []);

  const [time, setTime] = useState(false);
  useEffect(() => {
    if (time) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [time]);

  return (
    <>
      {time && <BurgerMenu setTime={setTime} time={time} />}
      <div className={s.header}>
        <div className="container">
          <div className={s.nav}>
            <div className={s.wrapper}>
              <Link href={"/"}>
                <Image
                  src={"/img/servis.svg"}
                  className={s.logo}
                  alt=""
                  width={120}
                  height={50}
                />
              </Link>
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
                  Анкета
                </Link>
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
            <RxHamburgerMenu
              onClick={() => setTime(!time)}
              className={s.burger}
            />
          </div>
        </div>
      </div>
    </>
  );
}
