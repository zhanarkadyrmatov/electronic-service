import React from "react";
import s from "./page.module.scss";
import Slider from "@/components/Slider/Slider";

export default function page() {
  return (
    <div className={s.blog}>
      <div className="container">
        <div className={s.wrapper}>
          <Slider />
        </div>
      </div>
    </div>
  );
}
