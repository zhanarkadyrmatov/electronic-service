'use client'

import React, { useEffect, useState } from 'react'
import s from "./page.module.scss";
import { set, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogData, fetchCatalogData2, fetchCategoryListData, filterData } from '@/app/store/slice/catalog-slice';
import Card from '@/components/Cards/Card/Card';
import cm from 'classnames'
import { BiChevronUp } from "react-icons/bi";
import { FaRegCircle,  } from "react-icons/fa6";
import {IoIosCheckmarkCircle } from 'react-icons/io'
import NothingFound from '@/components/NothingFound/NothingFound';
import { Loader } from '@/components/Loader/Loader';
const page = () => {
    const [expanded, setExpanded] = useState(false);
    const [isAccordion, setIsAccordion] = useState(false);
    const [categoryId, setCategoryId] = useState(null)
    const [datas, setDatas] = useState([])
    const [page , setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [min_price, setMin_price] = useState(null)
    const [max_price, setMax_price] = useState(null)
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    const dispatch = useDispatch()
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    useEffect(()=> {
  
      dispatch(fetchCatalogData2(page)),
  
    dispatch(fetchCategoryListData())
    setLoading(false)
    },[])
    const {data,status ,error,categoryData} = useSelector((state) => state.catalog);
    
    

    useState(()=> {
      setDatas(data?.results)
    },[dispatch])
    const onSubmit = (res) =>  {
      const data = [res,categoryId?.id]
      dispatch(fetchCatalogData(data))
      setDatas(undefined)
      setMin_price(res.min_price,)
      setMax_price(res.max_price)
  }
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setPage(page + 1);
      if (Array.isArray(datas)) {   
      //    const newData = Array.isArray(data?.results) ? { ...data?.results } : data?.results;
      //  setDatas([...datas, newData]);
      if (max_price !== null ) {
        const res ={
          min_price,
          max_price
        }
        const datas = [res,categoryId?.id]
        dispatch(fetchCatalogData(datas));
        setDatas((prev) => {
          const newResults = data?.results.filter(item => !prev.some(prevItem => prevItem.id === item.id));
          return [...prev, ...newResults];
        });
      }
      if (min_price !== null ) {
        const res ={
          min_price,
          max_price
        }
        const datas = [res,categoryId?.id]
        dispatch(fetchCatalogData(datas))
        setDatas((prev) => {
          const newResults = data?.results.filter(item => !prev.some(prevItem => prevItem.id === item.id));
          return [...prev, ...newResults];
        });
      }
      setDatas((prev) => {
        const newResults = data?.results.filter(item => !prev.some(prevItem => prevItem.id === item.id));
        return [...prev, ...newResults];
      });
      if ( max_price === null && min_price === null) {
      dispatch(fetchCatalogData2(page)),
        setDatas((prev) => {
          const newResults = data?.results.filter(item => !prev.some(prevItem => prevItem.id === item.id));
          return [...prev, ...newResults];
        });
        
      }
      setLoading(true)
    dispatch(filterData(datas))
  } else {
        setDatas(data?.results);
        setLoading(true)
        
      }
      console.log(data, 'test');
    }
  }
  
  useEffect(()=> {
    const resuit = data?.count / 15
    if (page <= resuit) {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
     }
  })
    return (
    <div className={`${s.filter} container`}>
    <div className={s.accordion} onClick={()=>setIsAccordion(!isAccordion)}>
    <h2>

    {categoryId ===null &&('Выберите категорию товаров')}
    {categoryId?.title}
    </h2>
    <div className={cm(s.accordionIcon, {
        [s.isAccordionAcc]: isAccordion === true,
    })}>
    <BiChevronUp />
    </div>
    {
        isAccordion && (
          <div className={s.catalogModal}>
          <span>
           <p> Выберите категорию товаров</p>
           <BiChevronUp />
          </span>
       
          <div className={s.catalogBlock}>
          {categoryData.data?.results?.map((res) => (
            <div className={s.catalogCard} onClick={() => setCategoryId(res)}>
            <h2>{res.title}</h2>
          {categoryId?.id === res.id ? ( <div className={s.FaRegCircleCheck}><IoIosCheckmarkCircle /></div> ):(<div className={s.FaRegCircle}><FaRegCircle  /></div>  )}
            </div>
          ))}
          </div>
          </div>
        )
    }
</div>
    <form className={`${s.block} between`} onSubmit={handleSubmit(onSubmit)}>
            <input {...register('min_price')} type='number' placeholder="Цена от: 1 000" />
            <input {...register('max_price', { required: true })} type='number' placeholder="Цена до: 1 000" />
            <button>ПОКАЗАТЬ: 10000</button>
        </form>
        <div>
      
        {status === null && (
          <NothingFound/>
        )} 
        <div className={s.Cards}>
      
        {datas !==  undefined ?  datas?.map((item) => (
          <Card item={item} />
        )) :  data?.results.map((item) => (
          <Card item={item} />
        )) } 
    
      </div>
      {data?.results?.length === 0 &&  <NothingFound/>}
      
               </div>
  </div>
  )
}

export default page

// {status === 'succeeded' && (
          
//   )}

// {data.results.length === 0 && <NothingFound/>}

// {status === 'failed' && <div>{error}</div>}
// {status == null && (
//   <NothingFound/>

// )}
