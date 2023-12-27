import React from 'react'
import s from  './ApplicationHistory.module.scss'

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

function page() {
  return (
    <div className='container'>
     <div className={s.story}>
     <h2>История заявок</h2>
       <div className={s.grid}>
            {
              data.map((el) => (
                <div className={s.card}>
                  <h3>{el.title}</h3>
                  <div className="flex" style={{ gap:'8px', opacity:'0.5' }}>
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
                  <div className="flex" style={{ gap:'8px', opacity:'0.5' }}>
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
                  <div className="flex" style={{ gap:'8px', opacity:'0.5' }}>
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
  )
}

export default page