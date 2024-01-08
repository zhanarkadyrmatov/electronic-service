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
  const { modal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const { userInfo, userToken } = useSelector((state) => state.signIn);

  useEffect(() => {
    const id = JSON?.parse(localStorage.getItem("userToken"));
    if (id !== null) {
      dispatch(userProfile(id));
    }
  }, []);

  console.log(userInfo, userToken);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modal]);

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
      {modal && <Modal />}
      {time && <BurgerMenu setTime={setTime} time={time} />}
      <div className={s.header}>
        <div className="container">
          <div className={s.nav}>
            <div className={s.wrapper}>
              <Image
                src={"/img/servis.svg"}
                className={s.logo}
                alt=""
                width={120}
                height={50}
              />
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

          <div className={`${s.blok} flex`}>
            <div className="flex" style={{ gap: "20px", width:'100%',  }}>
            <button className={`${s.btn_catalog} flex ${s.top}`}>
              <Image src={'/img/catalog.svg'} alt="" width={15} height={15} />
              Каталог
              <Image src={'/img/bottom.svg'} alt="" width={13} height={13} />
            </button>

            <div className={`${s.input_go} between`}>
              <input type="text" placeholder="Что найти?" />
              <Image src={'/img/search.svg'} alt="" width={24} height={24} />
            </div>
            </div>

            <div className={`${s.button}`}>
              <Link href={"/pages/Filter"} className={s.filter}>
                <div className={s.image}>
                  <Image src={filtr} alt="" width={14} height={14} />
                </div>
                <p>Фильтр</p>
              </Link>

              <div className={s.item}>
                <div className={s.image}>
                  <Image src={favorites} alt="" width={17} height={17} />
                </div>
                <p>Избранные</p>
              </div>

              <Link href={"/pages/Basket"} className={s.item}>
                <div className={s.image}>
                  <Image src={basket} alt="" width={16} height={16} />
                </div>
                <p>Корзина</p>
              </Link>

              {userInfo ? (
                <Link className={s.user_logo} href={"/pages/Profil"}>
                  {userInfo.avatar ? (
                    <img
                      className={s.logo}
                      src={
                        "https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg"
                      }
                      alt=""
                    />
                  ) : (
                    <Image
                      className={s.avatar}
                      src={user}
                      alt=""
                      width={20}
                      height={20}
                    />
                  )}
                </Link>
              ) : (
                <div
                  className={s.item}
                  onClick={() => dispatch(handleModal(!modal))}
                >
                  <div className={s.login}>
                    <Image src={registr} alt="" width={14} height={14} />
                  </div>
                  <p>Войти</p>
                </div>
              )}
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
