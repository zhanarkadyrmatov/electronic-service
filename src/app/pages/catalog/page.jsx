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
    const [datas, setDatas] = useState()
    const [page , setPage] = useState(1)
    const [min_price, setMin_price] = useState(null)
    const [max_price, setMax_price] = useState(null)    
    const [firstRun, setFirstRun] = useState(true);
    const dispatch = useDispatch()
    console.log(datas, 'data');
    useEffect(()=> {
      dispatch(fetchCatalogData2(page)),
      dispatch(fetchCategoryListData())

    },[])
    const {data,status ,error,categoryData,dataFilter} = useSelector((state) => state.catalog);
    
    const onSubmit = (event) =>  {
    event.preventDefault();
     const pages  =1
    console.log(min_price,max_price, categoryId?.id);
    const dats = [min_price,max_price, categoryId?.id , pages]

    if (min_price !== null || max_price !== null || categoryId !== null) {
      dispatch(fetchCatalogData(dats))
    }
    setDatas(null )
  }
    const handleScroll = () => {
      
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const isBottomReached = scrollTop + clientHeight >= scrollHeight - 30;
    
      setPage(page + 1);
      if (min_price !==  null) {
        dispatch(fetchCatalogData([min_price,max_price, categoryId?.id , page]))
        setDatas((data1) => {
          setPage(page + 3);
          if (Array.isArray(data1)) {
            
            const newData = data?.results?.filter((item) =>  !data1.some(prevItem => prevItem.id === item.id));
            return [...data1, ...newData];
          } else {
            return [...data?.results];
          }
        }
        );
        console.log('data1');
      }
      if (categoryId !== null) {
        dispatch(fetchCatalogData([categoryId?.id , page]))
        console.log('data2');
        setPage(page + 3);
        setDatas((data1) => {
          if (Array.isArray(data1)) {
            const newData = data.results?.filter((item) =>  !data1.some(prevItem => prevItem.id === item.id));
            
            return [...data1, ...newData];
          } else {
            return [...data?.results];
          }
        }
        );
      }
      if (max_price !== null) {
        dispatch(fetchCatalogData([min_price,max_price, categoryId?.id , page]))
        console.log('data3');
        setPage(page + 3);
        setDatas((data1) => {
          if (Array.isArray(data1)) {
            const newData = data?.results?.filter((item) =>  !data1.some(prevItem => prevItem.id === item.id));
            return [...data1, ...newData];
          } else {
            return [...data?.results];
          }
        }
        );
      }
      if (min_price === null && max_price === null && categoryId === null) {
        dispatch(fetchCatalogData2(page))
        setDatas((data1) => {
          if (Array.isArray(data1)) {
            const newData = data?.results?.filter((item) =>  !data1.some(prevItem => prevItem.id === item.id));
            return [...data1, ...newData];
          } else {
            return [...data?.results];
          }
        }
        );
      }
      setFirstRun(false);   
    }
  }
useEffect(() => {
  const resuit = data?.count / 15;
  console.log(data?.count  , 'resuit');
  if (page <= resuit) {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
}, [data?.count, page, firstRun]);
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
    <form className={`${s.block} between`} >
            <input  type='number' value={min_price} onChange={(e)=>setMin_price(e.target.value)} placeholder="Цена от: 1 000" />
            <input value={max_price} onChange={(e)=>setMax_price(e.target.value)} type='number' placeholder="Цена до: 1 000" />
            <button onClick={onSubmit}>ПОКАЗАТЬ</button>
        </form>
        <div>
       
        <div className={s.Cards}>
        
        {datas?.map((res)=> (
          <Card item={res} />
        ))}
       {status === 'succeeded' && datas?.length >= 30 ? null : data?.results?.map((res)=> (
        <Card item={res} />
      )) }  
        
       
        </div>
        
        {status === 'loading' && (
          <div className={s.NothingFound}><Loader/></div>
          
        )}
        {data?.results?.length === 0 && <div className={s.NothingFound}> <NothingFound/></div>}
        </div>
          {status === null && (
            <NothingFound/>
          )} 
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