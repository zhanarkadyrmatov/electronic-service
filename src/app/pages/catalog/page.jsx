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
import {IoIosCheckmarkCircle, IoMdReturnLeft } from 'react-icons/io'
import NothingFound from '@/components/NothingFound/NothingFound';
import { Loader } from '@/components/Loader/Loader';
import { useEffectOnce, useEventListener } from 'usehooks-ts';

const page = () => {
    const [expanded, setExpanded] = useState(false);
    const [isAccordion, setIsAccordion] = useState(false);
    const [categoryId, setCategoryId] = useState(null)
    const [datas, setDatas] = useState([])
    const [page , setPage] = useState(1)
    const [min_price, setMin_price] = useState(null)
    const [max_price, setMax_price] = useState(null)    
    const [reachedLimit, setReachedLimit] = useState(true);
    const dispatch = useDispatch()

    useEffect(()=> {
      console.log('useEffect', categoryId?.id);
      dispatch(fetchCatalogData2(page)),
      dispatch(fetchCategoryListData())
    },[])

    useEffectOnce(() => {
      console.log('useEffectOnce', 'test');
    })

    const {data,status ,error,categoryData,dataFilter} = useSelector((state) => state.catalog);
    
    const onSubmit = (event) =>  {
      event.preventDefault();
      const pages  = 1

      console.log(min_price,max_price, categoryId?.id);
      const dats = [min_price,max_price, categoryId?.id , pages]
console.log('asdasd', dats);
      if (min_price !== null || max_price !== null || categoryId !== undefined ) {
        console.log('asdasd', dats);
        dispatch(fetchCatalogData(dats))
      }
      setDatas([])
    }

    const handleScroll = () => {
        if (status === 'loading' || datas.isEmpty || reachedLimit) return;
        const resultsIndex = Math.round(data.count / 15)
         if (resultsIndex <= page) return;

         console.log(resultsIndex);
         if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight ) {
          const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
          const isBottomReached = scrollTop + clientHeight >= scrollHeight - 30;
          setPage(page + 1);
          const dats = [min_price,max_price, categoryId?.id , page + 1]

          dispatch(fetchCatalogData(dats))
        }
    
     }

    useEffect(() => {
      console.log('status', status);
      if (status === 'succeeded') {
        console.log('data', data);
        setDatas((prevData) => {
          return [...prevData, ...(data?.results ?? [])];
        })
        setReachedLimit(data?.next === null);
      }
    }, [data])

    useEventListener('scroll', handleScroll);

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