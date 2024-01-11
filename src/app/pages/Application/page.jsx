import React from "react";
import s from "./page.module.scss";
import ApplicationCard from "@/components/Cards/ApplicationCard/ApplicationCard";

function page() {
  return (
    <div className="container">
      <div className={s.story}>
        <h2>История заявок</h2>
        <div className={s.application_wrapper}>
          {[1, 2, 3, 4].map((el, index) => {
            return (
              <div key={index}>
                <ApplicationCard />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
