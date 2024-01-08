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
import {
  phoneVerifyError2,
  userPhoneVerify2,
} from "@/app/store/slice/phoneVerifySlice2";

export default function ResetPassword2() {
  const [remainingTime, setRemainingTime] = useState(60);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const { phone } = useSelector((state) => state.recover);
  const { sendCode } = useSelector((state) => state.sendCode);
  const { loading, error } = useSelector((state) => state.phoneVerify2);

  const requestAgain = () => {
    dispatch(userSendCode(phone.data));
    setRemainingTime(60);
  };

  const submitReset = (data) => {
    dispatch(userPhoneVerify2({ ...data, phone: phone.data }));
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
        dispatch(phoneVerifyError2(null));
      }, 5000);
    }
  }, [error]);
  return (
    <>
      {error && (
        <div className="error_alert">
          <Alert variant="filled" severity="error">
            {error.response?.data.Сообщение}
          </Alert>
        </div>
      )}
      {/* {error && (
        <div className="success_alert">
          <Alert variant="filled" severity="success">
            {error.data.Сообщение}
          </Alert>
        </div>
      )} */}
      {loading ? <Spiner /> : null}
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
            Сбросить пароль
          </button>
        </div>
      </form>
    </>
  );
}
