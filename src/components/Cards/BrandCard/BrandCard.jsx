import React from "react";
import s from "./page.module.scss";
import { BsExclamationCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function BrandCard({ item }) {
  return (
    <div className={s.cart}>
      {item.logo ? (
        <img src={item.logo} alt="" />
      ) : (
        <BsExclamationCircleFill className={s.logo} />
      )}
      <h3>{item.title}</h3>
    </div>
  );
}
