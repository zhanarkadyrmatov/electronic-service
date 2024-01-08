"use client";
import React, { useEffect, useState } from "react";
import s from "./page.module.scss";
import Image from "next/image";
import { InputMask } from "@react-input/mask";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { handleTabClick } from "@/app/store/slice/modalSlice";
import { userSendCode } from "@/app/store/slice/sendCodeSlice";
import {
  phoneVerifyError,
  userPhoneVerify,
} from "@/app/store/slice/phoneVerifySlice";
import Spiner from "@/components/Spiner/Spiner";
import Alert from "@mui/material/Alert";

export default function Resetpassword() {
  const [remainingTime, setRemainingTime] = useState(60);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const { phone } = useSelector((state) => state.register);
  const { sendCode } = useSelector((state) => state.sendCode);
  const { loading, error } = useSelector((state) => state.phoneVerify);
  console.log(error);
  const requestAgain = () => {
    dispatch(userSendCode(phone.data));
    setRemainingTime(60);
  };

  const submitReset = (data) => {
    console.log({ ...data, phone: phone.data });
    dispatch(userPhoneVerify({ ...data, phone: phone.data }));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(phoneVerifyError(null));
      }, 5000);
    }
  }, [error]);
  return (
    <>
      {error && (
        <div className="error_alert">
          <Alert variant="filled" severity="error">
            {error.data.Сообщение}
          </Alert>
        </div>
      )}

      {loading ? <Spiner /> : null}
      <form className={s.recover} onSubmit={handleSubmit(submitReset)}>
        <div className={s.img}>
          <Image src={"/img/password.svg"} alt="" width={221} height={154} />
        </div>
        <h3>Подтверждение кода</h3>
        <div className={s.title}>
          <p>
            Мы вышлем вам на номер телефона код подтверждения и ссылку для того
            чтобы вы могли пройдя по ссылке восстановить свой пароль.
          </p>
        </div>
        <div>
          <input
            placeholder="Введите пароль"
            type="number"
            {...register("code", {
              required: "Поле обязателно к заполнина",
              minLength: {
                value: 6,
                message: "Минимум 6 символов",
              },
            })}
          />
          {errors && <p className="error">{errors?.code?.message}</p>}
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
          <button onClick={() => dispatch(handleTabClick(2))}>Отмена</button>
          <button
            style={{
              opacity: isValid ? "1" : "0.6",
            }}
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
    </>
  );
}
