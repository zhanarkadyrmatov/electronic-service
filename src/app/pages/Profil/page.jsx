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
  const  [pages , setPage] = useState(1)


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

            <div 
             onClick={()=>setPage(1)} className={cm( s.isActive, {
              [s.countrysUlActive]: pages === 1
          })}
            >
              <button className={`${s.btn_orange} center`}>
                <Image src={'/img/aas.svg'} alt='/' width={21} height={21} />
                История заявок</button>
            </div>

            <div 
             onClick={()=>setPage(2)} className={cm( s.isActive, {
              [s.countrysUlActive]: pages === 2
          })}
            >
              <button className={`${s.btn_white} center`}>
                <Image src={'/img/historyA.svg'} alt='/' width={21} height={21} />
                Избранные</button>
            </div>

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
            <button id={s.btn_orange} className={cm(s.s, {
              [s.active]: page === "/",
            })}
            >Заявки</button>
            <button className={s.btn_row}>В ожидании (3)</button>
          </div>
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
      </div>
    </div>
  )
}

export default Profil