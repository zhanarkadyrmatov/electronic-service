"use client";
import React, { useEffect, useState } from "react";
import s from "./page.module.scss";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { InputMask } from "@react-input/mask";
import { useDispatch, useSelector } from "react-redux";
import { handleModal, handleTabClick } from "@/app/store/slice/modalSlice";
import { autoError, userSignIn } from "@/app/store/slice/signInSlice";
import CircularProgress from "@mui/material/CircularProgress";
import Spiner from "@/components/Spiner/Spiner";
import Alert from "@mui/material/Alert";

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
  const { loading, error } = useSelector((state) => state.signIn);
  console.log(error);

  const submitForm = (data) => {
    dispatch(userSignIn(data));
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(autoError(null));
      }, 5000);
    }
  }, [error]);

  return (
    <>
      {error && (
        <div className="error_alert">
          <Alert severity="error">{error.data.detail}</Alert>
        </div>
      )}
      {loading ? <Spiner /> : null}
      <form className={s.signIn} onSubmit={handleSubmit(submitForm)}>
        <h2>Авторизация</h2>
        <div className={s.inputs}>
          <label htmlFor="">Телефон</label>
          <div>
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
            {errors && <p className="error">{errors?.login?.message}</p>}
          </div>
        </div>
        <div className={s.inputs}>
          <label htmlFor="">Пароль</label>
          <div>
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
            {errors && <p className="error">{errors?.password?.message}</p>}
          </div>
        </div>
        <div className={s.flex}>
          <button onClick={() => dispatch(handleTabClick(3))}>
            Забыл пароль
          </button>
          <div className={s.checkbox}>
            <p className={s.title}>Запомнить</p>
            <input
              className={s.check}
              {...register("remember", {
                required: true,
              })}
              type="checkbox"
            />
          </div>
        </div>
        <div className={s.btns}>
          <button onClick={() => dispatch(handleModal(!modal))}>Отмена</button>
          <button
            style={{
              opacity: isValid ? "1" : "0.6",
            }}
          >
            Войти
          </button>
        </div>

        <button
          className={s.btn_grey}
          onClick={() => dispatch(handleTabClick(2))}
        >
          Зарегистрироваться
        </button>
      </form>
    </>
  );
}
