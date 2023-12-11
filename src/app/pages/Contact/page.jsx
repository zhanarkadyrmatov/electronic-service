import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import Image from 'next/image'
import { YandexMap } from '@/components/maps/yandexMap'
import s from '../pages.module.scss'


const data = [
  {
    id: 1,
    img: '/img/t1.svg'
  },
  {
    id: 2,
    img: '/img/t2.svg'
  },
  {
    id: 3,
    img: '/img/t3.svg'
  },
  {
    id: 4,
    img: '/img/t4.svg'
  },
  {
    id: 5,
    img: '/img/t5.svg'
  },
]

const data_Base = [
  {
    id: 1,
    title: 'Центральный офис',
    mest: '/img/mesto.svg',
    address: '114 просп. Чуй',
    number: '0777 438 992',
    data: '09:00 - 18:00 ПН-ПТ',
    tovar: 'Пункт получения товара'
  },
  {
    id: 2,
    title: 'Отделение Бишкек',
    mest: '/img/mesto.svg',
    address: '114 просп. Чуй',
    number: '0777 438 992',
    data: '09:00 - 18:00 ПН-ПТ',
    tovar: 'Пункт получения товара'
  }
]

function page() {
  return (
    <>
      <div className='container'>
        <Header />

        <div className="between">
          <div className={s.contact}>
            <h3>Контакты</h3>
            <div className="flex" style={{ gap: '20px' }}>
              {
                data.map((el) => (
                  <div className={`${s.kontact_img} flex`}>
                    <Image src={el.img} alt='' width={30} height={30} />
                  </div>
                ))
              }
            </div>
            {
              data_Base.map((el) => (
                <div className={s.ofice}>
                  <h4>{el.title}</h4>
                  <div className="between">
                    <div className="flex" style={{ padding: '10px 0' }}>
                      <Image src={el.mest} alt='' width={20} height={20} />
                      <h6>{el.address}</h6>
                    </div>
                    <a href="tel:0777 438 992">
                      {el.number}
                    </a>
                  </div>
                  <div className="flex" style={{ gap: '10px' }}>
                    <p>{el.data}</p>
                    <p>{el.tovar}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <YandexMap />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default page
