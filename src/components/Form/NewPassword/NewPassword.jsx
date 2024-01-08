"use client";
import React, { useState } from "react";
import s from "./page.module.scss";
import Image from "next/image";
import { InputMask } from "@react-input/mask";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { handleTabClick } from "@/app/store/slice/modalSlice";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { fetchNewPassword } from "@/app/store/slice/newPasswordSlice";
import Spiner from "@/components/Spiner/Spiner";
import Alert from "@mui/material/Alert";

export default function NewPassword() {
  const [eye, setEye] = useState(false);
  const [eye2, setEye2] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    watch,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm();
  const password = watch("password", "");
  const eyeFuntion = (e) => {
    e.preventDefault();
    setEye(!eye);
  };
  const eyeFuntion2 = (e) => {
    e.preventDefault();
    setEye2(!eye2);
  };

  const { phone, code } = useSelector((state) => state.phoneVerify2);
  const { loading, error } = useSelector((state) => state.newpassword);

  const submitNewPasword = (data) => {
    dispatch(fetchNewPassword({ ...data, phone: phone.data.phone, code }));
  };

  console.log(error);

  return (
    <>
      {error && (
        <div className="error_alert">
          <Alert severity="error">{error.response.data}</Alert>
        </div>
      )}
      {loading ? <Spiner /> : null}
      <form className={s.recover} onSubmit={handleSubmit(submitNewPasword)}>
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
        <div className={s.inputs}>
          <label htmlFor="password">Пароль</label>
          <div>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <div className={s.password}>
                  <input
                    {...field}
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
              )}
            />
            {errors && <p className={"error"}>{errors?.password?.message}</p>}
          </div>
        </div>
        <div className={s.inputs}>
          <label htmlFor="">Повторите пароль</label>
          <div>
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <div className={s.password}>
                  <input
                    {...register("confirmPassword", {
                      required: true,
                    })}
                    {...field}
                    className={s.pass}
                    type={eye2 ? "text" : "password"}
                    placeholder="Подтвердите пароль"
                    onChange={(e) => {
                      const confirmPassword = e.target.value;
                      const originalPassword = password;

                      if (confirmPassword === originalPassword) {
                        clearErrors("confirmPassword");
                      } else {
                        setError("confirmPassword", {
                          type: "manual",
                          message: "Пароли не совпадают",
                        });
                      }
                    }}
                  />
                  <div className={s.eye} onClick={eyeFuntion2}>
                    {eye2 ? (
                      <AiOutlineEye className={s.logo} />
                    ) : (
                      <AiOutlineEyeInvisible className={s.logo} />
                    )}
                  </div>
                </div>
              )}
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword.message}</p>
            )}
          </div>
        </div>
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
    </>
  );
}
