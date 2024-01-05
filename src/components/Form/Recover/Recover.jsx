"use client";
import React from "react";
import s from "./page.module.scss";
import Image from "next/image";
import { InputMask } from "@react-input/mask";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { handleTabClick } from "@/app/store/slice/modalSlice";
import { fetchRecover } from "@/app/store/slice/recoverSlice";

export default function Recover() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const { loading, error } = useSelector((state) => state.recover);

  const submitRegister = (data) => {
    console.log(data);
    dispatch(fetchRecover(data));
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(recoverError(null));
      }, 5000);
    }
  }, [error]);
  return (
    <>
      {error && (
        <div className="error_alert">
          <Alert severity="error">Пароли должны совпадать</Alert>
        </div>
      )}
      {loading ? <Spiner /> : null}
      <form className={s.recover} onSubmit={handleSubmit(submitRegister)}>
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
          <div>
            <InputMask
              className={s.tel}
              {...register("phone", {
                required: "Поле обязателно к заполнина",
              })}
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
        <div className={s.btns}>
          <button onClick={() => dispatch(handleTabClick(2))}>Отмена</button>
          <button
            style={{
              opacity: isValid ? "1" : "0.6",
            }}
            onClick={""}
          >
            Сбросить пароль
          </button>
        </div>
      </form>
    </>
  );
}
