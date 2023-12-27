"use client";
import React, { useEffect } from "react";
import s from "./page.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrandsData } from "@/app/store/slice/brandsSlice";
import BrandCard from "@/components/Cards/BrandCard/BrandCard";
import { fetchBrandsFilterData } from "@/app/store/slice/brandFilterSlice";
import Card from "@/components/Cards/Card/Card";

export default function page({ params: { id } }) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.brand);
  const { product } = useSelector((state) => state.brandFilter);
  const cartData = data?.results;

  useEffect(() => {
    dispatch(fetchBrandsData());
  }, []);

  useEffect(() => {
    dispatch(fetchBrandsFilterData(id));
  }, []);

  const filterCard = product?.results;

  console.log(filterCard);

  return (
    <div className={s.brand}>
      <div className="container">
        <h2 className={s.title}>Бренды</h2>
        <div className={s.wrapper}>
          <div className={s.letf}>
            <button>Все</button>
            <div className={s.left_wrapper}>
              {cartData?.map((item) => {
                return <BrandCard item={item} />;
              })}
            </div>
          </div>
          <div>
            {filterCard?.length > 0 ? (
              <div className={s.rigth}>
                {filterCard?.map((item) => {
                  return <Card item={item} />;
                })}
              </div>
            ) : (
              <div className={s.brandNone}>
                <img src="/img/brandNone.svg" alt="" />
                {/* <h4>Ничего не найдено</h4>
                <p>
                  По вашему запросу ничего не найдено, вы можете повторить поиск
                  с другими словами.
                </p> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
