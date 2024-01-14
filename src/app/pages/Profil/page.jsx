"use client";
import React, { useState, useEffect } from "react";
import s from "./page.module.scss";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Card from "@/components/Cards/Card/Card";
import { FaHeart } from "react-icons/fa6";
import ApplicationCard from "@/components/Cards/ApplicationCard/ApplicationCard";
import { fetchFavoritesData } from "@/app/store/slice/favoritesSlice";
import {
  updateAvatarDate,
  updateFullNameDate,
} from "@/app/store/slice/ubdateSlice";
import { userProfile } from "@/app/store/slice/signInSlice";
import Spiner from "@/components/Spiner/Spiner";
import Image from "next/image";
import NothingFound from "@/components/NothingFound/NothingFound";
import { Loader } from "@/components/Loader/Loader";
import { handleTabProfil } from "@/app/store/slice/modalSlice";
import { applicationDate } from "@/app/store/slice/applicationSlice";

function Profil() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.signIn);
  const { favorites, status } = useSelector((state) => state.favorites);
  const { fullName, photo, loading } = useSelector((state) => state.ubdate);
  const { tap } = useSelector((state) => state.modal);
  const { application } = useSelector((state) => state.application);
  const [delet, setDelet] = useState(false);
  const [pen, setPen] = useState(false);
  const [regis, setRegis] = useState(
    JSON?.parse(localStorage.getItem("regis")) || ""
  );

  console.log(application);
  useEffect(() => {
    dispatch(applicationDate());
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      dispatch(updateAvatarDate(file));
    }
  };

  const handleClick = () => {
    localStorage.setItem("userToken", JSON.stringify(""));
    dispatch(userProfile(null));
  };

  const submitFullName = (data) => {
    dispatch(updateFullNameDate(data));
    setPen(!pen);
  };

  useEffect(() => {
    if (pen || delet) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [pen, delet]);

  return (
    <div className={s.profil}>
      {loading ? <Spiner /> : null}
      {delet && (
        <div className={s.basket_modal}>
          <div className={s.blog}>
            <Image
              width={40}
              height={40}
              src={"/img/coout.svg"}
              className={s.logo}
            />
            <div>
              <h4>Выйти?</h4>
              <span>Выйти из учётной записи</span>
            </div>
            <div className={s.btn_button}>
              <button onClick={() => setDelet(!delet)}>Нет</button>

              <button onClick={() => handleClick()}>
                <a href="/">Да</a>
              </button>
            </div>
          </div>
        </div>
      )}
      {pen && (
        <div id="prof" className={`${s.modal} flex center`}>
          <div className={s.wrappers}>
            <form className={s.block} onSubmit={handleSubmit(submitFullName)}>
              <div className="between">
                <h3>Настройки профиля</h3>
                <h1 onClick={() => setPen(!pen)}>x</h1>
              </div>
              <label htmlFor="">Фамилия</label>
              <div className={s.input}>
                <input
                  defaultValue={regis?.last_name}
                  {...register("last_name", {
                    required: "Поле обязателно к заполнина",
                  })}
                  type="text"
                  placeholder="Напишите свою фамилию"
                />
                {errors && (
                  <p className={"error"}>{errors?.last_name?.message}</p>
                )}
              </div>
              <label htmlFor="">Имя</label>
              <div className={s.input}>
                <input
                  defaultValue={regis?.first_name}
                  {...register("first_name", {
                    required: "Поле обязателно к заполнина",
                  })}
                  type="text"
                  placeholder="Напишите свою Имю"
                />
                {errors && (
                  <p className={"error"}>{errors?.first_name?.message}</p>
                )}
              </div>
              <label htmlFor="">Отчество</label>
              <div className={s.input}>
                <input
                  defaultValue={regis?.surname}
                  {...register("surname")}
                  type="text"
                  placeholder="Напишите свою отчество"
                />
              </div>
              <button
                style={{
                  opacity: isValid ? "1" : "0.6",
                }}
                className={s.btn_orange}
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
      )}
      {/* {password && (
        <div id={s.password} className={`${s.modal} `}>
          <div className={`${s.wrappers}`}>
            <form
              className={s.block}
              onSubmit={handleSubmit((data) => handleSubmitDara(data))}
            >
              <div className="between">
                <h3>Смена пароля</h3>
                <h1 onClick={() => setPass(!password)}>x</h1>
              </div>
              <label htmlFor="">старый пароль</label>
              <input
                type="password"
                {...register("firstName")}
                placeholder="*************"
              />
              <label htmlFor="">Новый пароль</label>
              <input
                type="password"
                {...register("lastName", { required: true })}
                placeholder="*************"
              />
              <label htmlFor="">повторите Новый пароль</label>
              <input
                type="password"
                {...register("age")}
                placeholder="asdasdasdasdasd"
              />
              <button className={s.btn_orange}>Сохранить</button>
            </form>
          </div>
        </div>
      )} */}
      <div className="container">
        <h2 className={s.profil_title}>Личный кабинет</h2>
        <div className={s.blog}>
          <div className={`${s.flexes} flex`} style={{ gap: "24px" }}>
            {userInfo?.user_id.avatar ? (
              <img className={s.img} src={userInfo?.user_id.avatar} alt="" />
            ) : (
              <div className={`${s.adam} center`}>
                <Image src={"/img/adam.svg"} alt="/" width={60} height={60} />
              </div>
            )}
            <div className={s.centerAdap}>
              <h4>{userInfo?.user_id.full_name}</h4>
              <div className={s.flexe}>
                <p>{userInfo?.user_id.phone}</p>
              </div>
              <h6 onClick={() => setDelet(!delet)} className={s.none}>
                Выйти из учётной записи
              </h6>
            </div>
          </div>
          <div className={s.zoom}>
            <h3 className={s.setting}>Настройки приложения</h3>
            <div
              id={s.prof}
              className={`${s.ret} flex`}
              style={{
                gap: "13px",
                marginBottom: "16px",
                cursor: "pointer",
              }}
              onClick={() => setPen(!pen)}
            >
              <div className={`${s.images} center`}>
                <Image src={"/img/pen3.svg"} alt="" width={16} height={16} />
                <Image
                  className={s.none}
                  src={"/img/app1.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <p>Редактировать личные данныe</p>
            </div>
            <div
              className={`${s.ret} flex`}
              style={{
                gap: "13px",
                marginBottom: "16px",
                cursor: "pointer",
              }}
            >
              <div className={`${s.images} center`}>
                <Image src={"/img/pen2.svg"} alt="" width={16} height={16} />
                <Image
                  className={s.none}
                  src={"/img/app2.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <form method="post" enctype="multipart/form-data">
                <label class={s.input_file}>
                  <input
                    onChange={(event) => handleFileChange(event)}
                    name="picture"
                    accept="image/*"
                    type="file"
                  />
                  <span class={s.input_file_btn}>Сменить фото профиля</span>
                </label>
              </form>
            </div>
            {/*
            <div
              id={s.password}
              className={`${s.ret} flex`}
              style={{
                gap: "13px",
                marginBottom: "16px",
                cursor: "pointer",
              }}
              onClick={() => setPass(!password)}
            >
              <div className={`${s.images} center`}>
                <Image src={"/img/pen1.svg"} alt="" width={16} height={16} />
                <Image
                  className={s.none}
                  src={"/img/app3.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              </div>
              <p>Сменить пароль</p>
            </div> */}
            <div className={s.zakazy}>
              <h3 className={s.setting}>Заказы и товары</h3>
              <Link href={"/pages/Application"}>
                <div
                  className={`${s.none} flex`}
                  style={{
                    gap: "8px",
                    marginBottom: "16px",
                    cursor: "pointer",
                  }}
                >
                  <div className={`${s.images} center`}>
                    <Image
                      src={"/img/app4.svg"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <p>История заявок</p>
                </div>
              </Link>
              <Link
                href={"/pages/Favorites"}
                className={`${s.none} flex`}
                style={{
                  gap: "8px",
                  marginBottom: "16px",
                  cursor: "pointer",
                }}
              >
                <div className={`${s.images} center`}>
                  <Image src={"/img/app5.svg"} alt="/" width={24} height={24} />
                </div>
                <p>Избранные товары</p>
              </Link>
              <div
                id={s.password}
                className={`${s.none} flex`}
                style={{
                  gap: "8px",
                  marginBottom: "16px",
                  cursor: "pointer",
                }}
                onClick={() => setDelet(!delet)}
              >
                <div className={`${s.images} center`}>
                  <Image src={"/img/app6.svg"} alt="/" width={24} height={24} />
                </div>
                <p>Выйти из учётной записи</p>
              </div>
            </div>
          </div>
        </div>
        <div className={s.border}></div>
        <div className={s.buttons}>
          <div className={s.btn_wrapper}>
            <div className={s.btns}>
              <button
                onClick={() => dispatch(handleTabProfil(1))}
                style={{
                  backgroundColor: tap === 1 ? "#ee5922" : "",
                  color: tap === 1 ? "#fff" : "#ee5922",
                }}
              >
                <Image width={24} height={24} src="/img/solar.svg" alt="" />
                История заявок
              </button>
              <button
                onClick={() => dispatch(handleTabProfil(2))}
                style={{
                  backgroundColor: tap === 2 ? "#ee5922" : "",
                  color: tap === 2 ? "#fff" : "#ee5922",
                }}
              >
                <FaHeart
                  style={{
                    width: "24px",
                    height: "24px",
                  }}
                />
                Избранные товары
              </button>
            </div>
            <div className={s.btn}>
              <button>Сначала новые</button>
              <button>Заявки</button>
              <button>В ожидании (9)</button>
            </div>
            {tap === 1 && (
              <div className={s.application_wrapper}>
                {[1, 2, 3, 4, 5].map((item) => {
                  return (
                    <div className="">
                      <ApplicationCard item={item} />
                    </div>
                  );
                })}
              </div>
            )}
            <>
              {tap === 2 && (
                <div>
                  <div>
                    {favorites?.length > 0 ? (
                      <div className={s.favorites}>
                        {favorites?.map((item) => {
                          return (
                            <div className="">
                              <Card item={item} />
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <>
                        <NothingFound />
                      </>
                    )}
                  </div>
                </div>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
