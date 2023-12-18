import React from "react";
import s from "./page.module.scss";
import Slider from "@/components/Slider/Slider";
import { FaCheckCircle } from "react-icons/fa";

export default function page() {
  return (
    <div className={s.blog}>
      <div className="container">
        <div className={s.wrapper}>
          <Slider />
          <div className={s.info}>
            <h3>
              TV <span>10 000 c</span>
            </h3>
            <p>
              Топ женский трикотажный в рубчик с открытыми плечами, повседневный
              короткий жилет для фитнеса, пикантный кроп-топ карамельных цветов,
              белый, лето 2020
            </p>
            <div className={s.title}>
              <p>
                <span>Артикул:</span>
                <span className={s.bold}>9379992</span>
              </p>
              <p>
                <span>Цвет:</span>
                <span className={s.bold}>Черный</span>
              </p>
              <p>
                <span>Наличие:</span>
                <span className={s.bold}>Есть в наличии</span>
              </p>
            </div>
            <div className={s.text}>
              <span className={s.bold}>Комплектация:</span>
              <p>Описание комплектации товара</p>
            </div>
            <div className={s.button}>
              <button className={s.btn}>В КОРЗИНУ</button>
              {/* <div className={s.check}>
                <FaCheckCircle className={s.logo} />
                <p>Добавлено</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
