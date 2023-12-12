import React from "react";
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import Popular from "../Popular/Popular";
import Footer from "../Footer/Footer";
import { Stories } from "../ Stories/ Stories";

export default function Homes() {
  return (
    <>
      <div className="container">
        {/* <Header /> */}
        <Stories />
        <Categories />
        <Popular />
      </div>
      {/* <Footer /> */}
    </>
  );
}
