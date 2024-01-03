"use client";
import React, { useState } from "react";
import s from "./page.module.scss";
import Image from "next/image";
import { InputMask } from "@react-input/mask";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { handleTabClick } from "@/app/store/slice/modalSlice";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export default function Resetpassword() {
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
      <h3>Сброс пароля</h3>
      <div className={s.title}>
        <p>
          Мы вышлем вам на номер телефона код подтверждения и ссылку для того
          чтобы вы могли пройдя по ссылке восстановить свой пароль.
        </p>
      </div>
      <div>
        <input type="number" />
      </div>
      <div className={s.btns}>
        <button onClick={() => dispatch(handleTabClick(1))}>Отмена</button>
        <button onClick={""}>Сбросить пароль</button>
      </div>
    </form>
  );
}
