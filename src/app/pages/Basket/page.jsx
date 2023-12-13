import React from "react";
import s from "./page.module.scss";
import Image from "next/image";
import Images from "../../../../public/img/pop.svg";
import { MdDeleteSweep } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function page() {
  return (
    <div className={s.basket}>
      <div className="container">
        <div className={s.baskets}>
          <h2>Корзина</h2>
          <div className={s.wrapper}>
            {[1, 1, 3].map((e) => {
              return (
                <div key={e} className={s.card}>
                  <Image
                    className={s.img}
                    src={"/img/Rectangle.png"}
                    objectFit="cover"
                    width={285}
                    height={162}
                    alt=""
                  />
                  <div className={s.info}>
                    <div className={s.title}>
                      <h4>
                        Hot Sale Vintage T9 Electric Cordless Hair Cutting
                        Machine Professional Hair Barber Trimmer For Men Clipper
                        Shaver Beard Lighter
                      </h4>
                      <div>
                        <MdDeleteSweep className={s.delete} />
                      </div>
                    </div>
                    <p className={s.text}>Описание товара...</p>
                    <div className={s.btn}>
                      <FaMinus className={s.button} />
                      <p>10</p>
                      <FaPlus className={s.button} />
                    </div>
                    <p className={s.price}>Цена: 1000 c</p>
                    <h5 className={s.prices}>
                      <span>Итого цена:</span> <span>10 000 c</span>
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={s.footer_title}>
            <h3>ВЫБРАННЫЕ ТОВАРЫ</h3>
            <p>
              <span>Товаров:</span> <span>1</span>
            </p>
            <p>
              <span>Скидка:</span> <span>10%</span>
            </p>
            <h4>
              <span>Итого цена:</span> <span>10 000 c</span>
            </h4>
          </div>
          <button className={s.Send}>Отправить заявку</button>
        </div>
      </div>
    </div>
  );
}
