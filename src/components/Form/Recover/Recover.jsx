"use client";
import React from "react";
import s from "./page.module.scss";
import Image from "next/image";
import { InputMask } from "@react-input/mask";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { handleTabClick } from "@/app/store/slice/modalSlice";

export default function Recover() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  return (
    <form className={s.recover}>
      <div className={s.img}>
        <Image src={"/img/password.svg"} alt="" width={221} height={154} />
      </div>
      <h3>Востановить пароль</h3>
      <p>
        Мы вышлем вам на номер телефона код подтверждения и ссылку <br />
        для того чтобы вы могли пройдя по ссылке восстановить свой <br />
        пароль.
      </p>
      <div className={s.inputs}>
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
      <div className={s.btns}>
        <button onClick={() => dispatch(handleTabClick(1))}>Отмена</button>
        <button onClick={""}>Сбросить пароль</button>
      </div>
    </form>
  );
}
