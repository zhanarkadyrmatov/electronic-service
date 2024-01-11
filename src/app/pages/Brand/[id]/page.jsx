"use client";
import React, { useEffect, useState } from "react";
import s from "./page.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrandsData } from "@/app/store/slice/brandsSlice";
import BrandCard from "@/components/Cards/BrandCard/BrandCard";
import { fetchBrandsFilterData } from "@/app/store/slice/brandFilterSlice";
import Card from "@/components/Cards/Card/Card";
import { fetchBrandAllData } from "@/app/store/slice/brandAllSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cm from "classnames";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { fetchCategoryData } from "@/app/store/slice/categorySlice";
import CategoryCard from "@/components/Cards/CategoryCard/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

export default function page({ params: { id } }) {
  const dispatch = useDispatch();
  const page = usePathname();
  const [count, setCount] = useState(1);

  const { data, loading, error } = useSelector((state) => state.brand);
  const { product } = useSelector((state) => state.brandFilter);
  const { productAll, status } = useSelector((state) => state.all);
  const cartData = data?.results;
  const filterCard = product?.results;
  useEffect(() => {
    dispatch(fetchBrandsData());
  }, []);

  useEffect(() => {
    dispatch(fetchBrandsFilterData(id));
  }, [id]);

  useEffect(() => {
    dispatch(fetchBrandAllData(count));
  }, [id, count]);

  const { category } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategoryData());
  }, []);
  const customPaginationClass = "custom_pagination";

  const handlePaginationRef = (pagination) => {
    if (pagination && pagination.el) {
      pagination.el.classList.add(customPaginationClass);
    }
  };

  const filter = id === "all" ? productAll : filterCard;
  return (
    <div className={s.brand}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.letf}>
            <h2 className={s.title}>Бренды</h2>
            <Link
              className={cm(s.btn, s.s, {
                [s.active]: page === `/pages/Brand/all`,
              })}
              href={`/pages/Brand/all`}
            >
              Все
            </Link>
            <Swiper
              slidesPerView={3}
              spaceBetween={16}
              freeMode={true}
              pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class=${className}>
                  <div class='border'></div>
                  </span>`;
                },
                bulletClass: "bullet",
                bulletActiveClass: "swiperactive",
              }}
              onSwiper={(swiper) => {
                handlePaginationRef(swiper.pagination);
              }}
              modules={[FreeMode, Pagination]}
              className={s.mySwiper}
            >
              {cartData?.map((item) => {
                return (
                  <SwiperSlide>
                    <div key={item.id} className={s.card}>
                      <Link
                        className={`${s.cart} ${
                          page === `/pages/Brand/${item.id}` ? s.active : ""
                        }`}
                        href={`/pages/Brand/${item.id}`}
                      >
                        <BrandCard item={item} />
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className={s.left_wrapper}>
              {cartData?.map((item) => {
                return (
                  <Link
                    className={`${s.cart} ${
                      page === `/pages/Brand/${item.id}` ? s.active : ""
                    }`}
                    href={`/pages/Brand/${item.id}`}
                  >
                    <BrandCard item={item} />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className={s.rigth_wrapper}>
            {filter?.length > 0 ? (
              <div>
                <h2 className={s.title}>Категории</h2>
                <div className={s.category}>
                  {category?.map((item, index) => {
                    return (
                      <div key={index}>
                        <CategoryCard item={item} />
                      </div>
                    );
                  })}
                </div>
                <div className={s.rigth}>
                  {filter?.map((item) => {
                    return <Card item={item} />;
                  })}
                </div>
                {status === "loading" && (
                  <Box className={s.btn_all}>
                    <CircularProgress />
                  </Box>
                )}
                {id === "all" && (
                  <div className={s.btn_all}>
                    <button
                      onClick={() => setCount(count + 1)}
                      className={s.button}
                    >
                      Показать все
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className={s.brandNone}>
                <img src="/img/brandNone.svg" alt="" />
                <h4>Ничего не найдено</h4>
                <p>
                  По вашему запросу ничего не найдено, вы можете повторить поиск
                  с другими словами.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
