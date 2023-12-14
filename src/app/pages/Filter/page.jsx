import React from "react";
import s from "../pages.module.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Filter() {
  return (
    <div className={`${s.filter} container`}> 
    <select name="" id="">
      <option value="">Выберите категорию товаров</option>
    </select>
    <button>Цена от: 1 000</button>
    <button>Цена до: 1 0000</button>
    </div>

  )
}
