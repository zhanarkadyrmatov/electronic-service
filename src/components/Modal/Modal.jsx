"use client";
import React, { useState } from "react";
import s from "./page.module.scss";
import Image from "next/image";
import SignIn from "../Form/SignIn/SignIn";
import Register from "../Form/Register/Register";
import { useDispatch, useSelector } from "react-redux";
import NewPassword from "../Form/NewPassword/NewPassword";
import Resetpassword from "../Form/Resetpassword/Resetpassword";
import Recover from "../Form/Recover/Recover";
import { handleModal } from "@/app/store/slice/modalSlice";

export default function Modal() {
  const dispatch = useDispatch();
  const { modal, value } = useSelector((state) => state.modal);

  return (
    <>
      <div className={s.modal}>
        <div
          className={s.gray}
          onClick={() => dispatch(handleModal(!modal))}
        ></div>
        <div className={s.wrapper}>
          {value === 1 && <SignIn />}
          {value === 2 && <Register />}
          {value === 3 && <Recover />}
          {value === 4 && <NewPassword />}
          {value === 5 && <Resetpassword />}
        </div>
      </div>
    </>
  );
}
