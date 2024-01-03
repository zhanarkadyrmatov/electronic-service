"use client";
import React, { useState } from "react";
import s from "./page.module.scss";
import Image from "next/image";
import SignIn from "../Form/SignIn/SignIn";
import Register from "../Form/Register/Register";
import { useSelector } from "react-redux";
import NewPassword from "../Form/NewPassword/NewPassword";
import Resetpassword from "../Form/Resetpassword/Resetpassword";
import Recover from "../Form/Recover/Recover";

export default function Modal() {
  const { modal, value } = useSelector((state) => state.modal);

  return (
    <>
      <div className={s.modal}>
        <div className={s.wrapper}>
          {value === 1 && <SignIn />}
          {value === 2 && <Register />}
          {value === 3 && <Recover />}
          {value === 4 && <NewPassword />}
          {value === 5 && <Resetpassword />}
        </div>

        {/* {modal === 2 && (
        <div className={`${s.modal} center`}>
          <div className={s.wrapper}>
            <h2 id="center">Регистрация</h2>
            <div style={{ paddingTop: "24px" }}>
              <label htmlFor="">Фамилия</label>
              <input type="text" placeholder="Напишите свою фамилию" />
              <label htmlFor="">Имя</label>
              <input type="text" placeholder="Напишите свою Имю" />
              <label htmlFor="">Номер телефона</label>
              <input type="text" placeholder="+996-###-###" />
              <label htmlFor="">Пароль</label>
              <input type="password" placeholder="**********" />
              <label htmlFor="">Повторите пароль</label>
              <input type="password" placeholder="***************" />
              <div className="between" style={{ margin: "21px 0" }}>
                <div className="flex" style={{ gap: "3px" }}>
                  <p>Принимаю</p> <span>условия соглашения</span>
                </div>
                <input className={s.chek} type="checkbox" />
              </div>
              <div className={`${s.btns} between`} style={{ gap: "16px" }}>
                <button onClick={() => handleOpen()}>Отмена</button>
                <button>Зарегистрироваться</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {modal === 3 && (
        <div className={`${s.modal} center`}>
          <div className={`${s.wrappers} ${s.wrapper}`}>
            <div className="column">
              <Image
                src={"/img/password.svg"}
                alt=""
                width={100}
                height={100}
              />
              <h3 style={{ padding: "24px 0" }}>Востановить пароль</h3>
              <p id="center">
                Мы вышлем вам на номер телефона код подтверждения и ссылку{" "}
                <br />
                для того чтобы вы могли пройдя по ссылке восстановить свой{" "}
                <br />
                пароль.
              </p>
            </div>
            <div style={{ padding: "24px 0" }}>
              <label htmlFor="">Номер телефона</label>
              <input type="text" placeholder="+996-###-###" />
            </div>
            <div className={`${s.btns} between`} style={{ gap: "16px" }}>
              <button onClick={() => handleOpen()}>Отмена</button>
              <button onClick={() => handleModal(4)}>Сбросить пароль</button>
            </div>
          </div>
        </div>
      )}
      {modal === 4 && (
        <div className={`${s.modal} center`}>
          <div className={`${s.wrappers} ${s.wrapper}`}>
            <div className="column">
              <Image
                src={"/img/password.svg"}
                alt=""
                width={100}
                height={100}
              />
              <h3 style={{ padding: "24px 0" }}>Сброс пароля</h3>
              <p id="center">
                Мы вышлем вам на номер телефона код подтверждения и ссылку{" "}
                <br />
                для того чтобы вы могли пройдя по ссылке восстановить свой{" "}
                <br />
                пароль.
              </p>
            </div>
            <div id="center" style={{ padding: "10px 0" }}>
              123
            </div>
            <div style={{ padding: "24px 0" }}>
              <label htmlFor="">Номер телефона</label>
              <input type="text" placeholder="+996-###-###" />
            </div>
            <div className={`${s.btns} between`} style={{ gap: "16px" }}>
              <button onClick={() => handleOpen()}>Отмена</button>
              <button onClick={() => handleModal(5)}>Сбросить пароль</button>
            </div>
          </div>
        </div>
      )}
      {modal === 5 && (
        <div className={`${s.modal} center`}>
          <div className={`${s.wrappers} ${s.wrapper}`}>
            <div className="column">
              <Image
                src={"/img/password.svg"}
                alt=""
                width={100}
                height={100}
              />
              <h3 style={{ padding: "24px 0" }}>Новый пароль</h3>
              <p id="center">
                Мы вышлем вам на номер телефона код подтверждения и ссылку{" "}
                <br />
                для того чтобы вы могли пройдя по ссылке восстановить свой{" "}
                <br />
                пароль.
              </p>
            </div>
            <div style={{ padding: "24px 0" }}>
              <label htmlFor="">Пароль</label>
              <input type="password" placeholder="**********" />
              <label htmlFor="">Повторите пароль</label>
              <input type="password" placeholder="***************" />
            </div>
            <div className={`${s.btns} between`} style={{ gap: "16px" }}>
              <button onClick={() => handleOpen()}>Отмена</button>
              <button>Сбросить пароль</button>
            </div>
          </div>
        </div>
      )}
      {modal === 6 && (
        <div className={`${s.modal} center`}>
          <div className={s.wrapper}>
            <Image src={"/img/exit.svg"} alt="" width={32} height={32} />
            <h3>Выйти?</h3>
            <h6>Выйти из учётной записи</h6>
            <div className={s.border}></div>
            <div className="between">
              <p onClick={() => handleOpen()}>Нет</p>
              <p className={s.yes}>Да</p>
            </div>
          </div>
        </div>
      )} */}
      </div>
    </>
  );
}
