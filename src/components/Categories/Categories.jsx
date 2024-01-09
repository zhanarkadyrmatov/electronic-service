"use client";
import React, { useEffect, useState } from "react";
import s from "./page.module.scss";
import Image from "next/image";
import { fetchCategoryData } from "@/app/store/slice/categorySlice";
import { useDispatch, useSelector } from "react-redux";



const btns = [
  {
    id:1,
    title:"Телефоны и смарт-часы",
  },
  {
    id:2,
    title:"Игровые консоли и игры",
  }
]



export default function Categories() {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategoryData());
  }, []);

  console.log(category);
  return (
    <>
      <div className={s.categories}>
        <div className={`between ${s.block}`}>
          <h3>Категории</h3>
          <button className={s.btn_white}>Показать все</button>
        </div>
        
        <div className={s.grids}>
                <button className={`${s.btn} flex`}>
                  <Image
                    src="/img/a1.svg"
                    width={40}
                    height={40}
                    alt="phone"
                  />
                  <div>
                  <h5>Телефоны и смарт-часы</h5>
                  <p>120 000 видов</p>
                  </div>
                </button>
                <button className={`${s.btn} flex`}>
                  <Image
                    src="/img/a2.svg"
                    width={40}
                    height={40}
                    alt="phone"
                  />
                  <div>
                  <h5>Игровые консоли и игры</h5>
                  <p>120 000 видов</p>
                  </div>
                </button>
                <button className={`${s.btn} flex`}>
                  <Image
                    src="/img/a3.svg"
                    width={40}
                    height={40}
                    alt="phone"
                  />
                  <div>
                  <h5>Ноутбуки и компьютеры</h5>
                  <p>120 000 видов</p>
                  </div>
                </button>
                <button className={`${s.btn} flex`}>
                  <Image
                    src="/img/a4.svg"
                    width={40}
                    height={40}
                    alt="phone"
                  />
                  <div>
                  <h5>Телевизоры и видеотехника</h5>
                  <p>120 000 видов</p>
                  </div>
                </button>
                <button className={`${s.btn} flex`}>
                  <Image
                    src="/img/a5.svg"
                    width={40}
                    height={40}
                    alt="phone"
                  />
                  <div>
                  <h5>Охранные системы</h5>
                  <p>120 000 видов</p>
                  </div>
                </button>
                <button className={`${s.btn} flex`}>
                  <Image
                    src="/img/a6.svg"
                    width={40}
                    height={40}
                    alt="phone"
                  />
                  <div>
                  <h5>Аудиотехника</h5>
                  <p>120 000 видов</p>
                  </div>
                </button>
                <button className={`${s.btn} flex`}>
                  <Image
                    src="/img/a7.svg"
                    width={40}
                    height={40}
                    alt="phone"
                  />
                  <div>
                  <h5>Морозильники</h5>
                  <p>120 000 видов</p>
                  </div>
                </button>
                <button className={`${s.btn} flex`}>
                  <Image
                    src="/img/a8.svg"
                    width={40}
                    height={40}
                    alt="phone"
                  />
                  <div>
                  <h5>Газовые и электрические плиты</h5>
                  <p>120 000 видов</p>
                  </div>
                </button>
                <button className={`${s.btn} flex`}>
                  <Image
                    src="/img/a9.svg"
                    width={40}
                    height={40}
                    alt="phone"
                  />
                  <div>
                  <h5>Микроволновки</h5>
                  <p>120 000 видов</p>
                  </div>
                </button>
                <button className={`${s.btn} flex`}>
                  <Image
                    src="/img/a10.svg"
                    width={40}
                    height={40}
                    alt="phone"
                  />
                  <div>
                  <h5>Стиральные машины</h5>
                  <p>120 000 видов</p>
                  </div>
                </button>
        </div>
      </div>
    </>
  );
}
