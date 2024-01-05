'use client'

import React, { useEffect, useState } from 'react'
import s from "./page.module.scss";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogData, fetchCategoryListData } from '@/app/store/slice/catalog-slice';
import Card from '@/components/Cards/Card/Card';
import cm from 'classnames'
import { CiCircleCheck } from "react-icons/ci";
import { BiChevronUp } from "react-icons/bi";
import { FaRegCircle, FaRegCircleCheck } from "react-icons/fa6";
import {IoIosCheckmarkCircle } from 'react-icons/io'
const page = () => {
    const [expanded, setExpanded] = useState(false);
    const [isAccordion, setIsAccordion] = useState(false);
    const [categoryId, setCategoryId] = useState(null)
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
    const data = null 
    dispatch(fetchCatalogData(data)),
    dispatch(fetchCategoryListData())
    },[])
    
    const {data,status ,error,categoryData} = useSelector((state) => state.catalog);
 
    
    const onSubmit = (res) =>  {
        
      const data = [res,categoryId?.id]
      dispatch(fetchCatalogData(data))
  }
    return (
    <div className={`${s.filter} container`}>
    <div className={s.accordion} onClick={()=>setIsAccordion(!isAccordion)}>
    <h2>

    {categoryId ===null &&('    Выберите категорию товаров')}
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
            <input {...register('min_price')} placeholder="Цена от: 1 000" />
            <input {...register('max_price', { required: true })} placeholder="Цена до: 1 000" />
            <button>ПОКАЗАТЬ: 10000</button>
        </form>
        <div>
        {status === 'loading' && <div>Загрузка...</div>}
        {status === 'succeeded' && (
            <div>
            {data.results?.map((item) => (
                <Card item={item} />
              ))}
            </div>
            )}
        {status === 'failed' && <div>{error}</div>}
        
        </div>
  </div>
  )
}

export default page
