import React from "react";
import s from "./page.module.scss";
import { IoMdInformationCircle } from "react-icons/io";
import Link from "next/link";

export default function BrandCard({ item }) {
  return (
    <Link href={`/pages/Brand/${item.id}`}>
      <div className={s.cart}>
        {item.logo ? (
          <img src={item.logo} alt="" />
        ) : (
          <IoMdInformationCircle className={s.logo} />
        )}
        <h3>{item.title}</h3>
      </div>
    </Link>
  );
}
