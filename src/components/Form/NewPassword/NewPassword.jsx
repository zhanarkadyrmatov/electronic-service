"use client";
import React, { useState } from "react";
import s from "./page.module.scss";
import Image from "next/image";
import { InputMask } from "@react-input/mask";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { handleTabClick } from "@/app/store/slice/modalSlice";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export default function NewPassword() {
  const [eye, setEye] = useState(false);
  const [eye2, setEye2] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const eyeFuntion = (e) => {
    e.preventDefault();
    setEye(!eye);
  };
  const eyeFuntion2 = (e) => {
    e.preventDefault();
    setEye2(!eye2);
  };
  return (
    <form className={s.recover}>
      <div className={s.img}>
        <Image src={"/img/password.svg"} alt="" width={221} height={154} />
      </div>
      <h3>Новый пароль</h3>
      <div className={s.title}>
        <p>
          Мы вышлем вам на номер телефона код подтверждения и ссылку для того
          чтобы вы могли пройдя по ссылке восстановить свой пароль.
        </p>
      </div>
      <div>
        <label htmlFor="">Пароль</label>
        <div className={s.password}>
          <input
            {...register("password", {
              required: "Поле обязателно к заполнина",
              minLength: {
                value: 7,
                message: "Минимум 7 символов",
              },
            })}
            className={s.pass}
            placeholder="Введите ваш пароль"
            type={eye ? "text" : "password"}
          />
          <div className={s.eye} onClick={eyeFuntion}>
            {eye ? (
              <AiOutlineEye className={s.logo} />
            ) : (
              <AiOutlineEyeInvisible className={s.logo} />
            )}
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="">Повторите пароль</label>
        <div className={s.password}>
          <input
            {...register("password", {
              required: "Поле обязателно к заполнина",
              minLength: {
                value: 7,
                message: "Минимум 7 символов",
              },
            })}
            className={s.pass}
            placeholder="Введите ваш пароль"
            type={eye2 ? "text" : "password"}
          />
          <div className={s.eye} onClick={eyeFuntion2}>
            {eye2 ? (
              <AiOutlineEye className={s.logo} />
            ) : (
              <AiOutlineEyeInvisible className={s.logo} />
            )}
          </div>
        </div>
      </div>
      <div className={s.btns}>
        <button onClick={() => dispatch(handleTabClick(1))}>Отмена</button>
        <button onClick={""}>Сбросить пароль</button>
      </div>
    </form>
  );
}
