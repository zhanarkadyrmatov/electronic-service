"use client";
import React from "react";
import s from "../pages.module.scss";
import { LuFileInput } from "react-icons/lu";
import { useForm } from "react-hook-form";

const Questionnaire = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSubmitDara = (data) => {
    console.log(data);
  };
  return (
    <div className={`${s.anketa} container`}>
      <form
        className={s.block}
        onSubmit={handleSubmit((data) => handleSubmitDara(data))}
      >
        <h3>Анкета заявителя</h3>
        <label htmlFor="">Фио</label>
        <input {...register("firstName")} placeholder="Ф.И.О." />
        <label htmlFor="">Место фактического проживания</label>
        <input
          {...register("lastName", { required: true })}
          placeholder="Тыныстанова, 54б, 2"
        />
        <label htmlFor="">Номер телефона</label>
        {/* {errors.lastName && <p>Last name is required.</p>} */}
        <input {...register("age")} placeholder="+996-###-###" />
        {/* {errors.age && <p>Please enter number for age.</p>}
                <input type="submit" /> */}
        <label htmlFor="">Место работы</label>
        <input {...register("ThreeName")} placeholder="Место работы" />
        <label htmlFor="">Должность</label>
        <input {...register("Four")} placeholder="Должность" />
        <label htmlFor="">Средний заработок</label>
        <input {...register("Five")} placeholder="Средний заработок" />
        <label htmlFor="">WhatsApp </label>
        <input {...register("Five")} placeholder="Укажите номер" />
        <label htmlFor="">Instagram</label>
        <input {...register("Five")} placeholder="Имя пользователя" />
        <label htmlFor="">Фото паспорта(одна сторона)</label>
        <input {...register("Five")} placeholder="Название файла.png" />
        <label htmlFor="">Фото паспорта(другая)</label>
        <input {...register("Five")} placeholder="Средний заработок" />
        <label htmlFor="">Фото паспорта(другая)</label>
        <button className={`${s.btn} center`}>
          <LuFileInput size={15} /> Загрузить фото{" "}
        </button>
        <label htmlFor="">Согласие</label>
        <div className="flex" style={{ gap: "8px", paddingBottom: "24px" }}>
          <input
            style={{ width: "15px", margin: "0" }}
            className={s.chek}
            type="checkbox"
          />
          <p>Я согласен на обработку персональных данных</p>
        </div>
        <h4>Контактные данные родных</h4>
        <label htmlFor="">Фио</label>
        <input {...register("firstName")} placeholder="Ф.И.О." />
        <label htmlFor="">Кем приходится №1</label>
        <input {...register("firstName")} placeholder="кем?" />
        <label htmlFor="">Адрес проживания</label>
        <input {...register("firstName")} placeholder="Тыныстанова, 54б, 2" />
        <label htmlFor="">Номер телефона</label>
        <input {...register("firstName")} placeholder="+996-###-###" />
        <label htmlFor="">Фио</label>
        <input {...register("firstName")} placeholder="Ф.И.О." />
        <label htmlFor="">Кем приходится №2</label>
        <input {...register("firstName")} placeholder="кем?" />
        <label htmlFor="">Адрес проживания</label>
        <input {...register("firstName")} placeholder="Тыныстанова, 54б, 2" />
        <label htmlFor="">Номер телефона</label>
        <input {...register("firstName")} placeholder="+996-###-###" />
        <label htmlFor="">Пароль</label>
        <input
          {...register("firstName")}
          placeholder="****************************"
        />
        <label htmlFor="">Повторите пароль</label>
        <input
          {...register("firstName")}
          placeholder="****************************"
        />
        <button className={s.btn_orange}>ОТПРАВИТЬ АНКЕТУ</button>
      </form>
    </div>
  );
};
export default Questionnaire;
