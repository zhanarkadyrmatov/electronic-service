import React from "react";
import s from "./page.module.scss";
import Slider from "@/components/Slider/CardSlider/CardSlider";
import { FaCheckCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { AiOutlineRight } from "react-icons/ai";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Image from "next/image";

export default function page() {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <div className={s.blog}>
      <div className="container">
        <div className={s.gap}>
          <div className={s.link}>
            <div className={s.breadcrumbs} role="presentation">
              <Breadcrumbs
                separator={
                  <NavigateNextIcon className={s.logo} fontSize="small" />
                }
                aria-label="breadcrumb"
              >
                <Link
                  className={s.item}
                  underline="hover"
                  color="inherit"
                  href="/"
                >
                  MUI
                </Link>
                <Link
                  className={s.item}
                  underline="hover"
                  color="inherit"
                  href="/material-ui/getting-started/installation/"
                >
                  Core
                </Link>
                <Typography className={s.item} color="text.primary">
                  Breadcrumbs
                </Typography>
              </Breadcrumbs>
            </div>
            <div className={s.new}>Новинка</div>
            <button className={s.btn}>
              <FaStar className={s.logo} />
              <span>Добавить в избранное</span>
            </button>
          </div>
          <div className={s.wrapper}>
            <Slider />
            <div className={s.info}>
              <h3>
                TV <span>10 000 c</span>
              </h3>
              <p>
                Топ женский трикотажный в рубчик с открытыми плечами,
                повседневный короткий жилет для фитнеса, пикантный кроп-топ
                карамельных цветов, белый, лето 2020
              </p>
              <div className={s.title}>
                <p>
                  <span>Артикул:</span>
                  <span className={s.bold}>9379992</span>
                </p>
                <p>
                  <span>Цвет:</span>
                  <span className={s.bold}>Черный</span>
                </p>
                <p>
                  <span>Наличие:</span>
                  <span className={s.bold}>Есть в наличии</span>
                </p>
              </div>
              <div className={s.text}>
                <span className={s.bold}>Комплектация:</span>
                <p>Описание комплектации товара</p>
              </div>
              <div className={s.button}>
                <button className={s.btn}>В КОРЗИНУ</button>
                {/* <div className={s.check}>
                <FaCheckCircle className={s.logo} />
                <p>Добавлено</p>
              </div> */}
              </div>
            </div>
          </div>
          <div className={s.category}>
            <h3>Подборка товаров по категории</h3>
            <div className={s.wrapper}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e) => {
                return (
                  <div key={e} className={s.link}>
                    Категория товаров
                  </div>
                );
              })}
            </div>
          </div>
          <div className={s.similar}>
            <h3>Похожие товары</h3>
            <div className={s.wrapper}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
                return (
                  <div>
                    <img
                      className={s.img}
                      src={
                        "https://png.pngtree.com/background/20230411/original/pngtree-natural-landscape-snow-mountain-background-picture-image_2390197.jpg"
                      }
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={s.description}>
            <h3>Описание товара</h3>
            <button>Общая информация</button>
          </div>
          <div className={s.characteristics}>
            <h3>Характеристики</h3>
            <ul>
              <li className={s.left}>
                <p>
                  <span>Артикул:</span>
                  <span className={s.bold}>9379992</span>
                </p>
                <p>
                  <span>Цвет:</span>
                  <span className={s.bold}>Зелёный</span>
                </p>
              </li>
              <li className={s.center}>
                <p>
                  <span>Размер:</span>
                  <span className={s.bold}>SM</span>
                </p>
                <p>
                  <span>Наличие:</span>
                  <span className={s.bold}>Есть в наличии</span>
                </p>
              </li>
              <li className={s.rigth}>
                <p>
                  <span>Артикул:</span>
                  <span className={s.bold}>9379992</span>
                </p>
                <p>
                  <span>Цвет:</span>
                  <span className={s.bold}>Зелёный</span>
                </p>
              </li>
            </ul>
            <p className={s.title}>
              Если у вас возникли вопросы об этом товаре или вы желаете купить
              продукцию ТМ VISA оптом, свяжитесь с нами по телефонам…
            </p>
          </div>
          <div className={s.blog}>
            <div className={s.img}></div>
            <div className={s.text}>
              <h3>Описание</h3>
              <p>
                Hot Sale Vintage T9 Electric Cordless Hair Cutting Machine
                Professional Hair Barber Trimmer For Men Clipper Shaver Beard
                LighterHot Sale Vintage T9 Electric Cordless Hair Cutting
                Machine Professional Hair Barber Trimmer For Men Clipper Shaver
                Beard LighterHot Sale Vintage T9 Electric Cordless Hair Cutting
                Machine Professional Hair Barber Trimmer For Men Clipper Shaver
                Beard LighterHot Sale Vintage T9 Electric Cordless Hair Cutting
                Machine Professional Hair Barber Trimmer For Men Clipper Shaver
                Beard LighterHot Sale Vintage T9 Electric Cordless Hair Cutting
                Machine Professional Hair Barber Trimmer For Men Clipper Shaver
                Beard Lighter
              </p>
            </div>
          </div>
          <div className={s.image}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
              return (
                <div key={e}>
                  <img
                    className={s.img}
                    src={
                      "https://png.pngtree.com/background/20230411/original/pngtree-natural-landscape-snow-mountain-background-picture-image_2390197.jpg"
                    }
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
