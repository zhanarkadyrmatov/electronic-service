"use client";
import React, { useEffect, useState } from "react";
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
  const [remainingTime, setRemainingTime] = useState(60);

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

  const requestAgain = () => {
    // dispatch();
    setRemainingTime(60);
  };

  const submitReset = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <form className={s.recover} onSubmit={handleSubmit(submitReset)}>
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
        <input
          type="number"
          {...register("password", {
            required: "Поле обязателно к заполнина",
            minLength: {
              value: 6,
              message: "Минимум 7 символов",
            },
          })}
        />
        {errors && <p className="error">{errors?.password?.message}</p>}
      </div>
      {remainingTime === 0 ? (
        <button
          onClick={requestAgain}
          className={s.request_btn}
          disabled={remainingTime > 0}
        >
          Запросить повторно
        </button>
      ) : (
        <p className={s.request}>
          Запросить повторно через
          <span className="mx-2">{`${Math.floor(remainingTime / 60)
            .toString()
            .padStart(2, "0")}:${(remainingTime % 60)
            .toString()
            .padStart(2, "0")}`}</span>
        </p>
      )}

      <div className={s.btns}>
        <button onClick={() => dispatch(handleTabClick(1))}>Отмена</button>
        <button
          style={{
            opacity: isValid ? "1" : "0.6",
          }}
        >
          Сбросить пароль
        </button>
      </div>
    </form>
  );
}
