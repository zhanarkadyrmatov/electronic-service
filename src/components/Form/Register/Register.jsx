"use client";
import React, { useEffect, useState } from "react";
import s from "./page.module.scss";
import { useForm, Controller } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { InputMask } from "@react-input/mask";
import { useDispatch, useSelector } from "react-redux";
import { handleTabClick } from "@/app/store/slice/modalSlice";
import { registerError, userRegister } from "@/app/store/slice/registerSlice";
import Alert from "@mui/material/Alert";
import Spiner from "@/components/Spiner/Spiner";

export default function Register() {
  const [regis, setRegis] = useState(
    JSON?.parse(localStorage.getItem("regis")) || ""
  );
  const dispatch = useDispatch();
  const [eye, setEye] = useState(false);
  const [eye2, setEye2] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    watch,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm();
  const { loading, error } = useSelector((state) => state.register);
  const password = watch("password", "");
  const eyeFuntion = (e) => {
    e.preventDefault();
    setEye(!eye);
  };
  const eyeFuntion2 = (e) => {
    e.preventDefault();
    setEye2(!eye2);
  };
  const submitRegister = (data) => {
    localStorage.setItem("regis", JSON.stringify(data));
    setRegis(data);
    dispatch(userRegister(data));
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(registerError(null));
      }, 5000);
    }
  }, [error]);

  return (
    <>
      {error && (
        <div className="error_alert">
          <Alert variant="filled" severity="error">
            {error?.response?.data?.phone[0]}
          </Alert>
        </div>
      )}
      {loading ? <Spiner /> : null}
      <form className={s.register} onSubmit={handleSubmit(submitRegister)}>
        <h2>Регистрация</h2>
        <div className={s.inputs}>
          <label htmlFor="">Фамилия</label>
          <div>
            <input
              defaultValue={regis?.last_name}
              {...register("last_name", {
                required: "Поле обязателно к заполнина",
              })}
              type="text"
              placeholder="Напишите свою фамилию"
            />
            {errors ? (
              <p className={"error"}>{errors?.last_name?.message}</p>
            ) : null}
          </div>
        </div>
        <div className={s.inputs}>
          <label htmlFor="">Имя</label>
          <div>
            <input
              defaultValue={regis?.first_name}
              {...register("first_name", {
                required: "Поле обязателно к заполнина",
              })}
              type="text"
              placeholder="Напишите свою Имю"
            />
            {errors && <p className={"error"}>{errors?.first_name?.message}</p>}
          </div>
        </div>
        <div className={s.inputs}>
          <label htmlFor="">Номер телефона</label>
          <div>
            <InputMask
              className={s.tel}
              {...register("phone", {
                required: "Поле обязателно к заполнина",
              })}
              defaultValue={regis?.phone}
              mask="+996 (___) ___-___"
              placeholder="+996-###-###"
              replacement={{ _: /\d/ }}
              formatCharacters={{
                9: "[0-9]",
              }}
            />
            {errors && <p className={"error"}>{errors?.phone?.message}</p>}
          </div>
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
                    defaultValue={regis?.password}
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
                    {...field}
                    className={s.pass}
                    {...register("password", {
                      required: "Поле обязателно к заполнина",
                    })}
                    type={eye2 ? "text" : "password"}
                    placeholder="Подтвердите пароль"
                    defaultValue={regis?.confirmPassword}
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
        <div className={s.checkbox}>
          <p>
            Принимаю <span>условия соглашения</span>
          </p>
          <input
            className={s.check}
            {...register("remember", {
              required: true,
            })}
            type="checkbox"
          />
        </div>
        <div className={s.btns}>
          <button onClick={() => dispatch(handleTabClick(1))}>Отмена</button>
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
