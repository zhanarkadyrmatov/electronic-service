"use client";
import React, { useState } from "react";
import s from "./page.module.scss";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { InputMask } from "@react-input/mask";
import { useDispatch, useSelector } from "react-redux";
import { handleModal, handleTabClick } from "@/app/store/slice/modalSlice";

export default function SignIn() {
  const [eye, setEye] = useState(false);
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

  const { modal } = useSelector((state) => state.modal);

  const submitForm = (data) => {
    // dispatch(userLogin(data));
  };

  return (
    <form className={s.signIn} onSubmit={handleSubmit(submitForm)}>
      <h2>Авторизация</h2>
      <div>
        <label htmlFor="">Телефон</label>
        <InputMask
          className={s.tel}
          {...register("login", {
            required: "Поле обязателно к заполнина",
          })}
          mask="+996 (___) ___-___"
          placeholder="+996"
          replacement={{ _: /\d/ }}
          formatCharacters={{
            9: "[0-9]",
          }}
        />
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
      <div className={s.flex}>
        <button onClick={() => dispatch(handleTabClick(3))}>
          Забыл пароль
        </button>
        <div className={s.checkbox} style={{ gap: "5px" }}>
          <label htmlFor="">Запомнить</label>
          <input className={""} type="checkbox" />
        </div>
      </div>
      <div className={s.btns}>
        <button onClick={() => dispatch(handleModal(!modal))}>Отмена</button>
        <button>Войти</button>
      </div>
      <button
        className={s.btn_grey}
        onClick={() => dispatch(handleTabClick(2))}
      >
        Зарегистрироваться
      </button>
    </form>
  );
}
