import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import s from "../pages.module.scss";
import Image from "next/image";
import img from "../../../../public/img/o.svg";

const data = [
  {
    id: 1,
    img: "/img/smail1.svg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    img: "/img/smail2.svg",
    title: "Ut enim ad minima v quia non numquam eius modi ",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    id: 3,
    img: "/img/smail3.svg",
    title: "Elit tellus massa erat turpis congue.",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
];

const check = [
  {
    id: 1,
    icon: "/img/check.svg",
    title:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    id: 2,
    icon: "/img/check.svg",
    title: "Aes eos qui ratione voluptatem sequi nesciunt",
  },
  {
    id: 3,
    icon: "/img/check.svg",
    title:
      "Fveniam, quis nostrum rcitationem ullam corporis suscipit laboriosam,",
  },
  {
    id: 4,
    icon: "/img/check.svg",
    title: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et",
  },
  {
    id: 5,
    icon: "/img/check.svg",
    title:
      "Stiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
  },
  {
    id: 6,
    icon: "/img/check.svg",
    title: "Tnisi ut aliquid ex ea commodi conse",
  },
];

const imgs = [
  {
    id: 1,
    img: "/img/сайт.svg",
    title: "Разработка сайтов",
  },
  {
    id: 2,
    img: "/img/сайт.svg",
    title: "Разработка сайтов",
  },
  {
    id: 3,
    img: "/img/сайт.svg",
    title: "Разработка сайтов",
  },
  {
    id: 4,
    img: "/img/сайт.svg",
    title: "Разработка сайтов",
  },
];

function page() {
  return (
    <>
      <div className="container">
        <div className={s.abouts}>
          <div className={`${s.arod} around`}>
            <div className={s.about_one}>
              <h1>О компании</h1>
              <h3>
                Lorem ipsum{" "}
                <span>
                  dolor sit amet, <br />
                  consectetur adipiscing elit.
                </span>{" "}
                Lacus,
                <br />
                purus pulvinar elit tellus massa erat <br />
                turpis congue.
              </h3>
              <div className="flex" style={{ gap: "20px", padding: "30px 0" }}>
                <div className={s.border}></div>
                <p className={s.p}>
                  Ut enim ad minima v quia non numquam eius modi <br />
                  tempora incidunt ut labore et dolore magnam
                </p>
              </div>
              <div className={`${s.fleX} ${s.arod}`} style={{ gap: "40px" }}>
                <div>
                  <h2>2 000</h2>
                  <h6>Ut enim ad minima </h6>
                </div>
                <div>
                  <h2>547</h2>
                  <h6>
                    Smodi tempora <br /> incidunt{" "}
                  </h6>
                </div>
                <div>
                  <h2>1 474</h2>
                  <h6>
                    Qia non numquam <br /> eius{" "}
                  </h6>
                </div>
                <div>
                  <h2>1</h2>
                  <h6>
                    Abore et dolore <br /> agnam
                  </h6>
                </div>
              </div>
            </div>
            <div>
              <Image className={s.img} src={img} alt="" />
            </div>
          </div>
        </div>
        <div className={`${s.smailik} around`}>
          <div className={s.grid}>
            {data.map((el) => (
              <div>
                <Image src={el.img} alt="" width={50} height={50} />
                <h3>{el.title}</h3>
                <p>{el.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={s.lorem}>
          <div className={`${s.arod} between`}>
            <div className="column">
              <h2>
                Lorem ipsum <br />{" "}
                <span>
                  dolor sit <br /> adipiscing <br />
                </span>{" "}
                elitaa dwet{" "}
              </h2>
              <div className={s.border}></div>
            </div>
            <div className={s.grid}>
              {check.map((el) => (
                <div>
                  <Image src={el.icon} width={30} height={30} />
                  <p>{el.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={s.ourServices}>
          <h3>Наши услуги</h3>
          <div className={s.grid}>
            {imgs.map((el) => (
              <div>
                <Image src={el.img} alt="/" width={50} height={50} />
                <p>{el.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
