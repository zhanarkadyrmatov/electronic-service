"use client";
import React, { useEffect } from "react";
import s from "./page.module.scss";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import filtr from "@/../../public/img/aa2.svg";
import favorites from "@/../../public/img/aa3.svg";
import basket from "@/../../public/img/aa1.svg";
import registr from "@/../../public/img/aa4.svg";
import user from "../../../public/img/adam.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { handleModal } from "@/app/store/slice/modalSlice";
import Link from "next/link";
import Modal from "../Modal/Modal";
import { userProfile } from "@/app/store/slice/signInSlice";

export default function Navigation() {
  const { userInfo, userToken } = useSelector((state) => state.signIn);
  const { modal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modal]);
  return (
    <>
      {modal && <Modal />}
      <div className={`${s.blok} flex`}>
        <div className="flex" style={{ gap: "20px", width: "100%" }}>
          <button className={`${s.btn_catalog} flex ${s.top}`}>
            <Image src={"/img/catalog.svg"} alt="" width={15} height={20} />
            Каталог
            <Image src={"/img/bottom.svg"} alt="" width={13} height={20} />
          </button>
          <div className={`${s.input_go} between`}>
            <input type="text" placeholder="Что найти?" />
            <FiSearch className={s.search} size={20} />
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
            <>
              {userInfo.avatar ? (
                <Link className={s.user_logo} href={"/pages/Profil"}>
                  <img className={s.logo} src={userInfo.avatar} alt="" />
                </Link>
              ) : (
                <Link className={s.user_avatar} href={"/pages/Profil"}>
                  <Image
                    className={s.avatar}
                    src={user}
                    alt=""
                    width={30}
                    height={30}
                  />
                </Link>
              )}
            </>
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
          <FiSearch
            className={s.search}
            size={20}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className={s.logo}>
          <Image src={filtr} alt="" width={14} height={14} />
        </div>
      </div>
    </>
  );
}
