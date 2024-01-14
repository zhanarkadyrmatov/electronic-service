"use client";
import React, { useRef, useState } from "react";
import s from "./page.module.scss";
import { useForm } from "react-hook-form";
import { InputMask } from "@react-input/mask";
import { useDispatch, useSelector } from "react-redux";
import { postDataQuestionnaire } from "@/app/store/slice/questionnaire-slice";
const Questionnaire = () => {
  const fromData = [
    { name: "full_name", title: "Ф.И.О.", maxLength: 255, xNullable: true },
    {
      name: "actual_residence",
      title: "Место фактического проживания",
      maxLength: 255,
      xNullable: true,
    },
    { name: "phone", title: "Номер телефона", maxLength: 255, xNullable: true },
    {
      name: "work_address",
      title: "Место работы",
      maxLength: 255,
      xNullable: true,
    },
    { name: "position", title: "Должность", maxLength: 255, xNullable: true },
    {
      name: "avg_salary",
      title: "Средний заработок",
      maxLength: 255,
      xNullable: true,
    },
    { name: "whatsapp", title: "Whatsapp", maxLength: 255, xNullable: true },
    { name: "instagram", title: "Instagram", maxLength: 255, xNullable: true },
  ];
  const fromData2 = [
    {
      name: "guarantor_full_name_1",
      title: "Ф.И.О.",
      maxLength: 255,
      xNullable: true,
    },
    {
      name: "guarantor_related_1",
      title: "Кем приходится ",
      maxLength: 255,
      xNullable: true,
    },
    {
      name: "guarantor_address_1",
      title: "Адрес проживания ",
      maxLength: 255,
      xNullable: true,
    },
    {
      name: "guarantor_phone_1",
      title: "Номер телефона ",
      maxLength: 255,
      xNullable: true,
    },
    {
      name: "guarantor_full_name_2",
      title: "Ф.И.О.",
      maxLength: 255,
      xNullable: true,
    },
    {
      name: "guarantor_related_2",
      title: "Кем приходится ",
      maxLength: 255,
      xNullable: true,
    },
    {
      name: "guarantor_address_2",
      title: "Адрес проживания ",
      maxLength: 255,
      xNullable: true,
    },
    {
      name: "guarantor_phone_2",
      title: "Номер телефона №2",
      maxLength: 255,
      xNullable: true,
    },
    { name: "password", title: "Пароль", minLength: 1, xNullable: true },
    {
      name: "password2",
      title: "Повторите пароль",
      minLength: 1,
      xNullable: true,
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      alert("Пароли не совпадают");
    } else {
      delete data.password2;
      delete data.checkbox;

      dispatch(postDataQuestionnaire(data));
      console.log(data);
    }
  };
  const getdata = useSelector((state) => state.questionnaire);
  console.log(getdata, "getasdhasdjk");
  const [inputValue, setInputValue] = useState(null);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleDeleteFile = () => {
    setInputValue(null);
  };
  const [inputValue1, setInputValue1] = useState(null);
  const handleChange1 = (event) => {
    setInputValue1(event.target.value);
  };
  const handleDeleteFile1 = () => {
    setInputValue1(null);
  };
  return (
    <div className={`${s.Blocks} container`}>
      <h2>Анкета заявителя</h2>
      <form className={s.block} onSubmit={handleSubmit(onSubmit)}>
        {fromData.map((item, i) => (
          <div className={s.anketa} key={i}>
            <label htmlFor="">{item.title}</label>

            {item.name === "guarantor_phone_1" ||
            item.name === "guarantor_phone_2" ? (
              // <InputMask
              //   {...register(item.name ,{
              //     required: 'Поле обязательно к заполнению',
              //     maxLength: {
              //       value: item.maxLength,
              //       message: `Максимальная длина ${item.maxLength} символов`,
              //     }
              //   })}
              //   mask="+7 (999) 999-99-99"
              //   placeholder={item.title}
              // />
              <InputMask
                placeholder="+996(ХХХ) ХХ-ХХ-ХХ"
                mask="+996 (___) __-__-__"
                {...register(item.name, {
                  required: "Поле обязательно к заполнению",
                  maxLength: {
                    value: item.maxLength,
                    message: `Максимальная длина ${item.maxLength} символов`,
                  },
                })}
                replacement={{ _: /\d/ }}
              />
            ) : (
              <input
                {...register(item.name, {
                  required: "Поле обязательно к заполнению",
                  maxLength: {
                    value: item.maxLength,
                    message: `Максимальная длина ${item.maxLength} символов`,
                  },
                })}
                placeholder={item.title}
              />
            )}
            {errors[item.name] && (
              <p className={s.error}>{errors[item.name].message}</p>
            )}
          </div>
        ))}
        <div className={s.anketa}>
          <label>Фото паспорта(одна сторона)</label>
          <div className={s.csa}>
            <input
              id="password_face"
              {...register("password_face", {
                required: "Поле обязательно к заполнению",
              })}
              type="file"
              defaultValue={inputValue}
              className={s.asdsa}
              onChange={handleChange} // Добавляем обработчик события onChange
            />

            {inputValue !== null ? (
              <div className={s.inputValue}>
                <p>Название: {inputValue} </p>{" "}
                <svg
                  onClick={() => handleDeleteFile()}
                  width="21"
                  height="24"
                  viewBox="0 0 21 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.25 3.75C20.4688 3.75 20.6406 3.82813 20.7656 3.98438C20.9219 4.10938 21 4.28125 21 4.5V5.25C21 5.46875 20.9219 5.65625 20.7656 5.8125C20.6406 5.9375 20.4688 6 20.25 6H19.5L18.5156 21.8906C18.4844 22.4844 18.25 22.9844 17.8125 23.3906C17.375 23.7969 16.8594 24 16.2656 24H4.73438C4.14062 24 3.625 23.7969 3.1875 23.3906C2.75 22.9844 2.51562 22.4844 2.48438 21.8906L1.5 6H0.75C0.53125 6 0.34375 5.9375 0.1875 5.8125C0.0625 5.65625 0 5.46875 0 5.25V4.5C0 4.28125 0.0625 4.10938 0.1875 3.98438C0.34375 3.82813 0.53125 3.75 0.75 3.75H4.59375L6.1875 1.07812C6.625 0.359375 7.28125 0 8.15625 0H12.8438C13.7188 0 14.375 0.359375 14.8125 1.07812L16.4062 3.75H20.25ZM8.15625 2.25L7.21875 3.75H13.7812L12.8438 2.25H8.15625ZM16.2656 21.75L17.25 6H3.75L4.73438 21.75H16.2656Z"
                    fill="#5A5A5A"
                  />
                </svg>
              </div>
            ) : (
              <label
                style={{ fontSize: "16px" }}
                htmlFor="password_face"
                className="button"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8438 4.59375C24.2812 5.03125 24.5 5.5625 24.5 6.1875V21.75C24.5 22.375 24.2812 22.9062 23.8438 23.3438C23.4062 23.7812 22.875 24 22.25 24H8.75C8.125 24 7.59375 23.7812 7.15625 23.3438C6.71875 22.9062 6.5 22.375 6.5 21.75V16.875H8.75V21.75H22.25V8.25H17.375C17.0625 8.25 16.7969 8.14062 16.5781 7.92188C16.3594 7.70312 16.25 7.4375 16.25 7.125V2.25H8.75V12.375H14V10.0781C14 9.82812 14.1094 9.65625 14.3281 9.5625C14.5781 9.46875 14.7969 9.51562 14.9844 9.70312L18.3125 13.0781C18.5938 13.3594 18.5938 13.6406 18.3125 13.9219L14.9844 17.2969C14.7969 17.4844 14.5781 17.5312 14.3281 17.4375C14.1094 17.3438 14 17.1719 14 16.9219V14.625H1.0625C0.90625 14.625 0.765625 14.5781 0.640625 14.4844C0.546875 14.3594 0.5 14.2188 0.5 14.0625V12.9375C0.5 12.7812 0.546875 12.6562 0.640625 12.5625C0.765625 12.4375 0.90625 12.375 1.0625 12.375H6.5V2.25C6.5 1.84375 6.59375 1.46875 6.78125 1.125C7 0.78125 7.28125 0.515625 7.625 0.328125C7.96875 0.109375 8.34375 0 8.75 0H18.3125C18.9375 0 19.4688 0.21875 19.9062 0.65625L23.8438 4.59375ZM18.5 6H22.0625L18.5 2.4375V6Z"
                    fill="#5A5A5A"
                  />
                </svg>
                ЗАГРУЗИТЬ ФОТО
              </label>
            )}
          </div>
          {errors.password_face && (
            <p className={s.error}>{errors.password_face?.message}</p>
          )}
        </div>
        <div className={s.anketa}>
          <label>Фото паспорта(другая)</label>
          <div className={s.csa}>
            <input
              id="password_back"
              {...register("password_back", {
                required: "Поле обязательно к заполнению",
              })}
              type="file"
              defaultValue={inputValue1}
              className={s.asdsa}
              onChange={handleChange1} // Добавляем обработчик события onChange
            />

            {inputValue1 !== null ? (
              <div className={s.inputValue}>
                <p>Название: {inputValue1} </p>{" "}
                <svg
                  onClick={() => handleDeleteFile1()}
                  width="21"
                  height="24"
                  viewBox="0 0 21 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.25 3.75C20.4688 3.75 20.6406 3.82813 20.7656 3.98438C20.9219 4.10938 21 4.28125 21 4.5V5.25C21 5.46875 20.9219 5.65625 20.7656 5.8125C20.6406 5.9375 20.4688 6 20.25 6H19.5L18.5156 21.8906C18.4844 22.4844 18.25 22.9844 17.8125 23.3906C17.375 23.7969 16.8594 24 16.2656 24H4.73438C4.14062 24 3.625 23.7969 3.1875 23.3906C2.75 22.9844 2.51562 22.4844 2.48438 21.8906L1.5 6H0.75C0.53125 6 0.34375 5.9375 0.1875 5.8125C0.0625 5.65625 0 5.46875 0 5.25V4.5C0 4.28125 0.0625 4.10938 0.1875 3.98438C0.34375 3.82813 0.53125 3.75 0.75 3.75H4.59375L6.1875 1.07812C6.625 0.359375 7.28125 0 8.15625 0H12.8438C13.7188 0 14.375 0.359375 14.8125 1.07812L16.4062 3.75H20.25ZM8.15625 2.25L7.21875 3.75H13.7812L12.8438 2.25H8.15625ZM16.2656 21.75L17.25 6H3.75L4.73438 21.75H16.2656Z"
                    fill="#5A5A5A"
                  />
                </svg>
              </div>
            ) : (
              <label
                style={{ fontSize: "16px" }}
                htmlFor="password_back"
                className="button"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8438 4.59375C24.2812 5.03125 24.5 5.5625 24.5 6.1875V21.75C24.5 22.375 24.2812 22.9062 23.8438 23.3438C23.4062 23.7812 22.875 24 22.25 24H8.75C8.125 24 7.59375 23.7812 7.15625 23.3438C6.71875 22.9062 6.5 22.375 6.5 21.75V16.875H8.75V21.75H22.25V8.25H17.375C17.0625 8.25 16.7969 8.14062 16.5781 7.92188C16.3594 7.70312 16.25 7.4375 16.25 7.125V2.25H8.75V12.375H14V10.0781C14 9.82812 14.1094 9.65625 14.3281 9.5625C14.5781 9.46875 14.7969 9.51562 14.9844 9.70312L18.3125 13.0781C18.5938 13.3594 18.5938 13.6406 18.3125 13.9219L14.9844 17.2969C14.7969 17.4844 14.5781 17.5312 14.3281 17.4375C14.1094 17.3438 14 17.1719 14 16.9219V14.625H1.0625C0.90625 14.625 0.765625 14.5781 0.640625 14.4844C0.546875 14.3594 0.5 14.2188 0.5 14.0625V12.9375C0.5 12.7812 0.546875 12.6562 0.640625 12.5625C0.765625 12.4375 0.90625 12.375 1.0625 12.375H6.5V2.25C6.5 1.84375 6.59375 1.46875 6.78125 1.125C7 0.78125 7.28125 0.515625 7.625 0.328125C7.96875 0.109375 8.34375 0 8.75 0H18.3125C18.9375 0 19.4688 0.21875 19.9062 0.65625L23.8438 4.59375ZM18.5 6H22.0625L18.5 2.4375V6Z"
                    fill="#5A5A5A"
                  />
                </svg>
                ЗАГРУЗИТЬ ФОТО
              </label>
            )}
          </div>
          {errors.password_back && (
            <p className={s.error}>{errors.password_back?.message}</p>
          )}
        </div>
        <div className={s.anketas}>
          <label htmlFor="">Согласие</label>
          <span className="formControl">
            <input
              type="checkbox"
              {...register("checkbox", {
                required: "Поле обязательно к заполнению",
              })}
              name="checkbox"
            />
            <p> Я согласен на обработку персональных данных</p>
          </span>
          {errors.checkbox && (
            <p className={s.error}>{errors.checkbox?.message}</p>
          )}
        </div>

        <h2>Контактные данные родных</h2>

        {fromData2.map((item, i) => (
          <div className={s.anketa} key={i}>
            <label htmlFor="">{item.title}</label>
            {item.name === "guarantor_phone_1" ||
            item.name === "guarantor_phone_2" ? (
              <InputMask
                placeholder="+996(ХХХ) ХХ-ХХ-ХХ"
                mask="+996 (___) __-__-__"
                {...register(item.name, {
                  required: "Поле обязательно к заполнению",
                  maxLength: {
                    value: item.maxLength,
                    message: `Максимальная длина ${item.maxLength} символов`,
                  },
                })}
                replacement={{ _: /\d/ }}
              />
            ) : (
              <input
                {...register(item.name, {
                  required: "Поле обязательно к заполнению",
                  maxLength: {
                    value: item.maxLength,
                    message: `Максимальная длина ${item.maxLength} символов`,
                  },
                })}
                placeholder={item.title}
              />
            )}
            {errors[item.name] && (
              <p className={s.error}>{errors[item.name].message}</p>
            )}
          </div>
        ))}
        <button className={s.btn_orange}>ОТПРАВИТЬ АНКЕТУ</button>
      </form>
    </div>
  );
};
export default Questionnaire;
