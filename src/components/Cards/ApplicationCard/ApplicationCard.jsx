import React from "react";
import s from "./page.module.scss";

export default function ApplicationCard() {
  return (
    <div>
      <div className={s.applicationCard}>
        <h3>Заявка Баланчаева Тукунчо одобрено</h3>
        <div className={s.wrapper}>
          <div className={s.flex}>
            <p>Название товара:</p>
            <p>Цена:</p>
          </div>
          {[1, 2, 3, 4, 5].map(() => {
            return (
              <div className={s.flex}>
                <p>Nike Men Model (3 )</p>
                <p>2000 с</p>
              </div>
            );
          })}
        </div>
        <div className={s.quantity}>
          <p>Количетво: 1 200</p>
          <p>Общяя Цена: 1 200 000</p>
        </div>
        <div className={s.sent}>
          <p>Отправлено: 12.02.2022</p>
          <p>Одобрено: 12.02.2023 20:13</p>
        </div>
      </div>
    </div>
  );
}
