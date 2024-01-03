"use client";
import React, { useState } from "react";
import s from "./page.module.scss";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { InputMask } from "@react-input/mask";
import { useDispatch, useSelector } from "react-redux";
import { handleTabClick } from "@/app/store/slice/modalSlice";

export default function Register() {
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
    <form className={s.register}>
      <h2>Регистрация</h2>
      <div>
        <label htmlFor="">Фамилия</label>
        <input type="text" placeholder="Напишите свою фамилию" />
      </div>
      <div>
        <label htmlFor="">Имя</label>
        <input type="text" placeholder="Напишите свою Имю" />
      </div>
      <div>
        <label htmlFor="">Номер телефона</label>
        <InputMask
          className={s.tel}
          {...register("login", {
            required: "Поле обязателно к заполнина",
          })}
          mask="+996 (___) ___-___"
          placeholder="+996-###-###"
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
      <div className={s.checkbox}>
        <p>
          Принимаю <span>условия соглашения</span>
        </p>
        <input className={s.chek} type="checkbox" />
      </div>
      <div className={s.btns}>
        <button onClick={() => dispatch(handleTabClick(1))}>Отмена</button>
        <button>Зарегистрироваться</button>
      </div>
    </form>
  );
}
