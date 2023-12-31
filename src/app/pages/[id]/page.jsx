"use client";
import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "@/app/store/slice/productSlice";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function page({ params: { id } }) {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductData(id));
  }, []);

  console.log(product);

  return (
    <div className={s.blog}>
      <div className="container">
        {loading ? (
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "50px 0",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
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
              {product?.product_variation.map((item) => {
                return (
                  <>
                    {item.images.length > 0 ? (
                      <Slider item={item} />
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src="https://bitsofco.de/img/Qo5mfYDE5v-350.png" />
                      </div>
                    )}
                  </>
                );
              })}
              <div className={s.info}>
                <h3>
                  {product?.title}
                  {product?.product_variation.map((el) => {
                    return (
                      <span>
                        {el?.product_price}
                        {el?.currency_unit?.currency}
                      </span>
                    );
                  })}
                </h3>
                <p>{product?.description}</p>
                {product?.product_variation.map((el) => {
                  return (
                    <div className={s.title}>
                      <p>
                        <span>Артикул:</span>
                        <span className={s.bold}>9379992</span>
                      </p>
                      <p>
                        <span>Цвет:</span>
                        <span className={s.bold}>{el.color?.title}</span>
                      </p>
                      <p>
                        <span>Наличие:</span>
                        {el?.color_amount > 0 ? (
                          <span className={s.bold}>Есть в наличии</span>
                        ) : (
                          <span className={s.bold}>Нет в наличии</span>
                        )}
                      </p>
                    </div>
                  );
                })}
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
                    <span className={s.bold}>
                      {product?.product_variation[0].color?.title}
                    </span>
                  </p>
                </li>
                <li className={s.center}>
                  <p>
                    <span>Размер:</span>
                    <span className={s.bold}>SM</span>
                  </p>
                  <p>
                    <span>Наличие:</span>
                    {product?.product_variation[0]?.color_amount > 0 ? (
                      <span className={s.bold}>Есть в наличии</span>
                    ) : (
                      <span className={s.bold}>Нет в наличии</span>
                    )}
                  </p>
                </li>
                <li className={s.rigth}>
                  <p>
                    <span>Артикул:</span>
                    <span className={s.bold}>9379992</span>
                  </p>
                  <p>
                    <span>Цвет:</span>
                    <span className={s.bold}>
                      {product?.product_variation[0].color?.title}
                    </span>
                  </p>
                </li>
              </ul>
              <p className={s.title}>
                Если у вас возникли вопросы об этом товаре или вы желаете купить
                продукцию ТМ VISA оптом, свяжитесь с нами по телефонам…
              </p>
            </div>
            <div className={s.blog}>
              {product?.product_variation.map((el) => {
                console.log(el.images.length);
                return (
                  <>
                    {el.images.length > 0 ? (
                      <div
                        style={{
                          backgroundImage: `url(${el.images[0]?.image})`,
                        }}
                        className={s.img}
                      ></div>
                    ) : (
                      <div
                        style={{
                          backgroundImage: `url('https://bitsofco.de/img/Qo5mfYDE5v-350.png')`,
                        }}
                        className={s.img}
                      ></div>
                    )}
                    {/* <div
                    style={{
                      backgroundImage: `url(${el.images[0]?.image})`,
                    }}
                    className={s.img}
                  ></div> */}
                  </>
                );
              })}
              <div className={s.text}>
                <h3>Описание</h3>
                <p>{product?.description}</p>
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
        )}
      </div>
    </div>
  );
}
