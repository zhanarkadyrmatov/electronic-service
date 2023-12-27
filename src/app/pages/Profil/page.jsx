"use client";
import React, { useState, useEffect } from 'react'
import s from './page.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import cm from "classnames";
import { usePathname } from "next/navigation";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useForm } from 'react-hook-form'


const data = [
  {
    id: 1,
    title: 'Заявка Баланчаева Тукунчо одобрено',
    productName: 'Название товара:',
    price: 'Цена:',
    model: 'Nike Men Model    (3 )',
    money: '2000 с',
    quantity: 'Количетво:  1 200',
    TotalPrice: 'Общяя Цена: 1 200 000',
    sent: 'Отправлено:  12.02.2022'
  }
]
const data_Base = [
  {
    id: 1,
    title: 'Заявка Баланчаева Тукунчо одобрено',
    productName: 'Название товара:',
    price: 'Цена:',
    model: 'Nike Men Model    (3 )',
    money: '2000 с',
    quantity: 'Количетво:  1 200',
    TotalPrice: 'Общяя Цена: 1 200 000',
    sent: 'Отправлено:  12.02.2022',
    approved: 'Одобрено: 12.02.2023  20:13'
  }
]

const wrapper = [
  {
    id: 1,
    title: 'Заявка Баланчаева Тукунчо одобрено',
    productName: 'Название товара:',
    price: 'Цена:',
    model: 'Nike Men Model    (3 )',
    money: '2000 с',
    quantity: 'Количетво:  1 200',
    TotalPrice: 'Общяя Цена: 1 200 000',
    sent: 'Отправлено:  12.02.2022',
    rejected: 'Отклонено: 12.02.2023  20:13'
  }
]


function Profil() {
  let page = usePathname();

  const [time, setTime] = useState(false);
  const [pages, setPage] = useState(1)


  useEffect(() => {
    if (time) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [time])



  const [pen, setPen] = useState(false);

  useEffect(() => {
    if (pen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [pen])



  const [password, setPass] = useState(false);

  useEffect(() => {
    if (password) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [password])



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSubmitDara = (data) => {
    console.log(data);
  }

  return (
    <div className={s.profil}>
      {time && <h6>
        <div className={`${s.modal} center`}>
          <div className={s.wrapper}>
            <div className="column">
              <Image style={{ margin: '0 auto' }} src={'/img/exit.svg'} alt="" width={32} height={32} />
              <h3>Выйти?</h3>
              <h6 id='center'>Выйти из учётной <br /> записи</h6>
              <div className={s.border}></div>
            </div>
            <div className="between" style={{ padding: '0 35px' }}>
              <p onClick={() => setTime(!time)}>Нет</p>
              <p className={s.yes}>Да</p>
            </div>
          </div>
        </div>
      </h6>}
      {pen && <div id='prof' className={`${s.modal} flex center`}>
        <div className={s.wrappers}>

          <form className={s.block} onSubmit={handleSubmit((data) => handleSubmitDara(data))}>
            <div className="between">
              <h3>Настройки профиля</h3>
              <h1 onClick={() => setPen(!pen)}>x</h1>
            </div>
            <label htmlFor="">Фамилия</label>
            <input {...register('firstName')} placeholder="Конкин" />
            <label htmlFor="">Имя</label>
            <input {...register('lastName', { required: true })} placeholder="Артём" />
            <label htmlFor="">Отчество</label>
            <input type="text" placeholder='Анатольевич' />
            <label htmlFor="">Номер телефона</label>
            {/* {errors.lastName && <p>Last name is required.</p>} */}
            <input {...register('age',)} placeholder="+996-###-###" />
            {/* {errors.age && <p>Please enter number for age.</p>} */}
            {/* <input type="submit" /> */}


            <button className={s.btn_orange}>Сохранить</button>
          </form>
        </div>
      </div>}

      {password && <div id={s.password} className={`${s.modal} `}>
        <div className={`${s.wrappers}`}>
          <form className={s.block} onSubmit={handleSubmit((data) => handleSubmitDara(data))}>
            <div className="between">
              <h3>Смена пароля</h3>
              <h1 onClick={() => setPass(!password)}>x</h1>
            </div>
            <label htmlFor="">старый пароль</label>
            <input type='password' {...register('firstName')} placeholder="*************" />
            <label htmlFor="">Новый пароль</label>
            <input type='password'   {...register('lastName', { required: true })} placeholder="*************" />
            <label htmlFor="">повторите Новый пароль</label>
            {/* {errors.lastName && <p>Last name is required.</p>} */}
            <input type='password' {...register('age',)} placeholder="asdasdasdasdasd" />
            {/* {errors.age && <p>Please enter number for age.</p>} */}
            {/* <input type="submit" /> */}
            <button className={s.btn_orange}>Сохранить</button>
          </form>
        </div>
      </div>}


      <div className="container">
        <h2 id='center'>Личный кабинет</h2>
        <div className={s.blog} >
          <div className={`${s.flexes} flex`} style={{ gap: '24px' }}>
            <div className={`${s.adam} center`}>

              <Image src={'/img/adam.svg'} alt='/' width={40} height={40} />
            </div>
            <div className={s.centerAdap}>
              <h4>Елена Воронова</h4>
              <div className={s.flexe}>
                <p>+996 777 438 992</p>
                <p>username@mail.com</p>
              </div>
              <h6 className={s.none} onClick={() => setTime(!time)}>Выйти из учётной записи</h6>
            </div>
          </div>

          <div className={s.zoom}>
            <h3 className={s.setting}>Настройки приложения</h3>

            <div id={s.prof} className={`${s.ret} flex`} style={{
              gap: '13px', marginBottom: '16px',
              cursor: 'pointer'
            }} onClick={() => setPen(!pen)}>
              <div className={`${s.images} center`}>
                <Image src={'/img/pen3.svg'} alt='' width={16} height={16} />
                <Image className={s.none} src={'/img/app1.svg'} alt='' width={24} height={24} />
              </div>
              <p>Редактировать личные данны</p>
            </div>

            <div className={`${s.ret} flex`} style={{
              gap: '13px', marginBottom: '16px', cursor: 'pointer'
            }}>
              <div className={`${s.images} center`}>
                <Image src={'/img/pen2.svg'} alt='' width={16} height={16} />
                <Image className={s.none} src={'/img/app2.svg'} alt='' width={24} height={24} />
              </div>
              <p>Сменить фото профиля</p>
            </div>

            <div id={s.password} className={`${s.ret} flex`} style={{
              gap: '13px', marginBottom: '16px', cursor: 'pointer'
            }}
              onClick={() => setPass(!password)}
            >
              <div className={`${s.images} center`}>
                <Image src={'/img/pen1.svg'} alt='' width={16} height={16} />
                <Image className={s.none} src={'/img/app3.svg'} alt='' width={24} height={24} />
              </div>
              <p>Сменить пароль</p>
            </div>

            <div className={s.zakazy}>
              <h3 className={s.setting}>Заказы и товары</h3>

              <Link href={'/pages/ApplicationHistory'}>
                <div className={`${s.none} flex`} style={{
                  gap: '8px', marginBottom: '16px', cursor: 'pointer'
                }}
                  onClick={() => setPass(!password)}
                >
                  <div className={`${s.images} center`}>
                    <Image src={'/img/app4.svg'} alt='' width={24} height={24} />
                  </div>
                  <p>История заявок</p>
                </div>
              </Link>

              <div id={s.password} className={`${s.none} flex`} style={{
                gap: '8px', marginBottom: '16px', cursor: 'pointer'
              }}
                onClick={() => setPass(!password)}
              >
                <div className={`${s.images} center`}>
                  <Image src={'/img/app5.svg'} alt='/' width={24} height={24} />
                </div>
                <p>Избранные товары</p>
              </div>

              <div id={s.password} className={`${s.none} flex`} style={{
                gap: '8px', marginBottom: '16px', cursor: 'pointer'
              }}
                onClick={() => setTime(!time)}
              >
                <div className={`${s.images} center`}>
                  <Image src={'/img/app6.svg'} alt='/' width={24} height={24} />
                </div>
                <p>Выйти из учётной записи</p>
              </div>

            </div>
          </div>
        </div>

        <div className={s.border}></div>
        <div className={s.btnsol}>
          <div className={`${s.btns} flex`}>

            <button
              onClick={() => setPage(1)} className={cm(s.isActive, {
                [s.countrysUlActive]: pages === 1
              })}
            >

              {pages === 1 ? <p><Image src={'/img/aas.svg'} alt='/' width={21} height={21} /></p> : <p> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.245 2H16.755C17.914 2 18.493 2 18.961 2.163C19.4023 2.31939 19.8015 2.57541 20.1277 2.91118C20.454 3.24695 20.6984 3.65342 20.842 4.099C21 4.581 21 5.177 21 6.37V20.374C21 21.232 20.015 21.688 19.392 21.118C19.2172 20.9565 18.988 20.8668 18.75 20.8668C18.512 20.8668 18.2828 20.9565 18.108 21.118L17.625 21.56C17.3188 21.8432 16.9171 22.0004 16.5 22.0004C16.0829 22.0004 15.6812 21.8432 15.375 21.56C15.0688 21.2768 14.6671 21.1196 14.25 21.1196C13.8329 21.1196 13.4312 21.2768 13.125 21.56C12.8188 21.8432 12.4171 22.0004 12 22.0004C11.5829 22.0004 11.1812 21.8432 10.875 21.56C10.5688 21.2768 10.1671 21.1196 9.75 21.1196C9.33293 21.1196 8.93121 21.2768 8.625 21.56C8.31879 21.8432 7.91707 22.0004 7.5 22.0004C7.08293 22.0004 6.68121 21.8432 6.375 21.56L5.892 21.118C5.71721 20.9565 5.48798 20.8668 5.25 20.8668C5.01202 20.8668 4.78279 20.9565 4.608 21.118C3.985 21.688 3 21.232 3 20.374V6.37C3 5.177 3 4.58 3.158 4.1C3.458 3.187 4.153 2.471 5.039 2.163C5.507 2 6.086 2 7.245 2ZM7 6.75C6.80109 6.75 6.61032 6.82902 6.46967 6.96967C6.32902 7.11032 6.25 7.30109 6.25 7.5C6.25 7.69891 6.32902 7.88968 6.46967 8.03033C6.61032 8.17098 6.80109 8.25 7 8.25H7.5C7.69891 8.25 7.88968 8.17098 8.03033 8.03033C8.17098 7.88968 8.25 7.69891 8.25 7.5C8.25 7.30109 8.17098 7.11032 8.03033 6.96967C7.88968 6.82902 7.69891 6.75 7.5 6.75H7ZM10.5 6.75C10.3011 6.75 10.1103 6.82902 9.96967 6.96967C9.82902 7.11032 9.75 7.30109 9.75 7.5C9.75 7.69891 9.82902 7.88968 9.96967 8.03033C10.1103 8.17098 10.3011 8.25 10.5 8.25H17C17.1989 8.25 17.3897 8.17098 17.5303 8.03033C17.671 7.88968 17.75 7.69891 17.75 7.5C17.75 7.30109 17.671 7.11032 17.5303 6.96967C17.3897 6.82902 17.1989 6.75 17 6.75H10.5ZM7 10.25C6.80109 10.25 6.61032 10.329 6.46967 10.4697C6.32902 10.6103 6.25 10.8011 6.25 11C6.25 11.1989 6.32902 11.3897 6.46967 11.5303C6.61032 11.671 6.80109 11.75 7 11.75H7.5C7.69891 11.75 7.88968 11.671 8.03033 11.5303C8.17098 11.3897 8.25 11.1989 8.25 11C8.25 10.8011 8.17098 10.6103 8.03033 10.4697C7.88968 10.329 7.69891 10.25 7.5 10.25H7ZM10.5 10.25C10.3011 10.25 10.1103 10.329 9.96967 10.4697C9.82902 10.6103 9.75 10.8011 9.75 11C9.75 11.1989 9.82902 11.3897 9.96967 11.5303C10.1103 11.671 10.3011 11.75 10.5 11.75H17C17.1989 11.75 17.3897 11.671 17.5303 11.5303C17.671 11.3897 17.75 11.1989 17.75 11C17.75 10.8011 17.671 10.6103 17.5303 10.4697C17.3897 10.329 17.1989 10.25 17 10.25H10.5ZM7 13.75C6.80109 13.75 6.61032 13.829 6.46967 13.9697C6.32902 14.1103 6.25 14.3011 6.25 14.5C6.25 14.6989 6.32902 14.8897 6.46967 15.0303C6.61032 15.171 6.80109 15.25 7 15.25H7.5C7.69891 15.25 7.88968 15.171 8.03033 15.0303C8.17098 14.8897 8.25 14.6989 8.25 14.5C8.25 14.3011 8.17098 14.1103 8.03033 13.9697C7.88968 13.829 7.69891 13.75 7.5 13.75H7ZM10.5 13.75C10.3011 13.75 10.1103 13.829 9.96967 13.9697C9.82902 14.1103 9.75 14.3011 9.75 14.5C9.75 14.6989 9.82902 14.8897 9.96967 15.0303C10.1103 15.171 10.3011 15.25 10.5 15.25H17C17.1989 15.25 17.3897 15.171 17.5303 15.0303C17.671 14.8897 17.75 14.6989 17.75 14.5C17.75 14.3011 17.671 14.1103 17.5303 13.9697C17.3897 13.829 17.1989 13.75 17 13.75H10.5Z" fill="#EE5922" />
              </svg></p>}

              История заявок</button>

            <button onClick={() => setPage(2)} className={cm(s.isActive, {
              [s.countrysUlActive]: pages === 2
            })} >
              {pages === 2 ? <p><Image src={'/img/zvezd1.svg'} alt='/' width={21} height={21} /></p> : <p> <Image src={'/img/historyA.svg'} alt='/' width={21} height={21} /></p>}
              Избранные
            </button>

          </div>
        </div>
        <div className={s.cards}>
          <div className='flex' style={{ gap: '24px' }}>
            <Accordion sx={{
              maxWidth: '190px',
              width: '100%',
              borderRadius: '10px'
            }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Сначала новые</Typography>
              </AccordionSummary>
              <AccordionDetails >
                <Typography>
                  По умолчанию
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography>
                  Сначала новые
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography>
                  Сначала старые
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography>
                  Сначала цена меньше
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography>
                  Сначала цена больше
                </Typography>
              </AccordionDetails>
            </Accordion>
            <button id={s.btn_orange} className={cm( s.PageCountrys, {
              [s.testActive]: pages === 1
            })}
            >Заявки</button>
            <button id={s.btn_row}
             className={cm( s.PageCountrys, {
              [s.testActive]: pages === 1
            })} >В ожидании (3)</button>
          </div>
          <div className={cm(s.PageCountrys, {
            [s.testActive]: pages === 1
          })}>
            <div className={s.grid}>
              {
                data.map((el) => (
                  <div className={s.card}>
                    <h3>{el.title}</h3>
                    <div className="between">
                      <p>{el.productName}</p>
                      <p>{el.price}</p>
                    </div>
                    <div className="between">
                      <p>{el.model}</p>
                      <p>{el.money}</p>
                    </div>
                    <div className="between">
                      <p>{el.model}</p>
                      <p>{el.money}</p>
                    </div>
                    <div className="between">
                      <p>{el.model}</p>
                      <p>{el.money}</p>
                    </div>
                    <div className="between" style={{ paddingTop: '8px' }}>
                      <p>{el.quantity}</p>
                      <p>{el.TotalPrice}</p>
                    </div>
                    <div className={s.border_grey}></div>
                    <div className="between">
                      <p>{el.sent}</p>
                    </div>
                  </div>
                ))
              }
              {
                data_Base.map((el) => (
                  <div className={s.card}>
                    <h3>{el.title}</h3>
                    <div className="between">
                      <p>{el.productName}</p>
                      <p>{el.price}</p>
                    </div>
                    <div className="between">
                      <p>{el.model}</p>
                      <p>{el.money}</p>
                    </div>
                    <div className="between">
                      <p>{el.model}</p>
                      <p>{el.money}</p>
                    </div>
                    <div className="between">
                      <p>{el.model}</p>
                      <p>{el.money}</p>
                    </div>
                    <div className="between" style={{ paddingTop: '8px' }}>
                      <p>{el.quantity}</p>
                      <p>{el.TotalPrice}</p>
                    </div>
                    <div className={s.border_grey}></div>
                    <div className="between">
                      <p>{el.sent}</p>
                      <h5>{el.approved}</h5>
                    </div>
                  </div>
                ))
              }
              {
                wrapper.map((el) => (
                  <div className={s.card}>
                    <h3>{el.title}</h3>
                    <div className="between">
                      <p>{el.productName}</p>
                      <p>{el.price}</p>
                    </div>
                    <div className="between">
                      <p>{el.model}</p>
                      <p>{el.money}</p>
                    </div>
                    <div className="between">
                      <p>{el.model}</p>
                      <p>{el.money}</p>
                    </div>
                    <div className="between">
                      <p>{el.model}</p>
                      <p>{el.money}</p>
                    </div>
                    <div className="between" style={{ paddingTop: '8px' }}>
                      <p>{el.quantity}</p>
                      <p>{el.TotalPrice}</p>
                    </div>
                    <div className={s.border_grey}></div>
                    <div className="between">
                      <p>{el.sent}</p>
                      <h4>{el.rejected}</h4>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className={cm( s.PageCountrys, {
            [s.testActive]: pages === 2
          })}>
            k;sdjgbsjknsbl
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profil