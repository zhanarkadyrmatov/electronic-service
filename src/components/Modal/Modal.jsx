
'use client'
import React, { useState } from 'react'
import s from './page.module.scss'
import Image from 'next/image'


export default function Modal({ handleOpen }) {
  const [modal, setModal] = useState(1);
  const handleModal = (id) => {
    setModal(id);
  };

    return (
        <div>
            {
                modal === 1 &&
                <div className={`${s.modal} center`}>
                    <div className={s.wrapper}>
                        <h2 id='center'>Авторизация</h2>
                        <div style={{ paddingTop: '24px' }}>
                            <label htmlFor="">Телефон</label>
                            <input type="text" placeholder='+996-###-###' />
                            <label htmlFor="">Пароль</label>
                            <input type="password" placeholder='******' />
                            <div className="between" style={{ margin: '21px 0' }}>
                                <span onClick={() => handleModal(3)}>Забыл пароль</span>
                                <div className="flex" style={{ gap: '5px' }}>
                                    <p>Запомнить</p>
                                    <input className={s.chek} type="checkbox" />
                                </div>
                            </div>
                            <div className={`${s.btns} between`} style={{ gap: '16px' }}>
                                <button onClick={() => handleOpen()}>Отмена</button>
                                <button>Войти</button>
                            </div>
                        </div>
                        <button className={s.btn_grey} onClick={() => handleModal(2)}>Зарегистрироваться</button>
                    </div>
                </div>
            }
            {
                modal === 2 &&
                <div className={`${s.modal} center`}>
                    <div className={`${s.wrappers} ${s.wrapper}`}>
                        <h2 id='center'>Регистрация</h2>
                        <div style={{ paddingTop: '24px' }}>
                            <label htmlFor="">Фамилия</label>
                            <input type="text" placeholder='Напишите свою фамилию' />
                            <label htmlFor="">Имя</label>
                            <input type="text" placeholder='Напишите свою Имю' />
                            <label htmlFor="">Номер телефона</label>
                            <input type="text" placeholder='+996-###-###' />
  return (
    <div>
      {modal === 1 && (
        <div className={`${s.modal} center`}>
          <div className={s.wrapper}>
            <h2 id="center">Авторизация</h2>
            <div style={{ paddingTop: "24px" }}>
              <label htmlFor="">Телефон</label>
              <input type="text" placeholder="+996-###-###" />
              <label htmlFor="">Пароль</label>
              <input type="password" placeholder="******" />
              <div className="between" style={{ margin: "21px 0" }}>
                <button onClick={() => handleModal(3)}>Забыл пароль</button>
                <div className="flex" style={{ gap: "5px" }}>
                  <p>Запомнить</p>
                  <input className={s.chek} type="checkbox" />
                </div>
              </div>
              <div className={`${s.btns} between`} style={{ gap: "16px" }}>
                <button onClick={() => handleOpen()}>Отмена</button>
                <button>Войти</button>
              </div>
            </div>
            <button className={s.btn_grey} onClick={() => handleModal(2)}>
              Зарегистрироваться
            </button>
          </div>
        </div>
      )}
      {modal === 2 && (
        <div className={`${s.modal} center`}>
          <div className={s.wrapper}>
            <h2 id="center">Регистрация</h2>
            <div style={{ paddingTop: "24px" }}>
              <label htmlFor="">Фамилия</label>
              <input type="text" placeholder="Напишите свою фамилию" />
              <label htmlFor="">Имя</label>
              <input type="text" placeholder="Напишите свою Имю" />
              <label htmlFor="">Номер телефона</label>
              <input type="text" placeholder="+996-###-###" />
              <label htmlFor="">Пароль</label>
              <input type="password" placeholder="**********" />

                            <label htmlFor="">Повторите пароль</label>
                            <input type="password" placeholder='***************' />
                            <div className="between" style={{ margin: '21px 0' }}>
                                <div className='flex' style={{ gap: '3px' }}>
                                    <p>Принимаю</p> <span href="">условия соглашения</span>
                                </div>
                                <input className={s.chek} type="checkbox" />
                            </div>
                            <div className={`${s.btns} between`} style={{ gap: '16px' }}>
                                <button onClick={() => handleOpen()}>Отмена</button>
                                <button>Зарегистрироваться</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                modal === 3 &&
                <div className={`${s.modal} center`}>
                    <div className={`${s.wrappers} ${s.wrapper}`}>
                        <div className="column">
                            <Image src={'/img/password.svg'} alt='' width={100} height={100} />
                            <h3 style={{ padding: '24px 0' }}>Востановить пароль</h3>
                            <p id='center'>Мы вышлем вам на номер телефона код подтверждения и ссылку <br />
                                для того чтобы вы могли пройдя по ссылке восстановить свой <br />
                                пароль.</p>
                        </div>
                        <div style={{ padding: '24px 0' }}>
                            <label htmlFor="">Номер телефона</label>
                            <input type="text" placeholder='+996-###-###' />
                        </div>
                        <div className={`${s.btns} between`} style={{ gap: '16px' }}>
                            <button onClick={() => handleOpen()}>Отмена</button>
                            <button onClick={() => handleModal(4)}>Сбросить пароль</button>
                        </div>
                    </div>
                </div>
            }
            {
                modal === 4 &&
                <div className={`${s.modal} center`}>
                    <div className={`${s.wrappers} ${s.wrapper}`}>
                        <div className="column">
                            <Image src={'/img/password.svg'} alt='' width={100} height={100} />
                            <h3 style={{ padding: '24px 0' }}>Сброс пароля</h3>
                            <p id='center'>Мы вышлем вам на номер телефона код подтверждения и ссылку <br />
                                для того чтобы вы могли пройдя по ссылке восстановить свой <br />
                                пароль.</p>
                        </div>
                        <div id="center" style={{ padding: '10px 0' }}>
                            123
                        </div>
                        <div style={{ padding: '24px 0' }}>
                            <label htmlFor="">Номер телефона</label>
                            <input type="text" placeholder='+996-###-###' />
                        </div>
                        <div className={`${s.btns} between`} style={{ gap: '16px' }}>
                            <button onClick={() => handleOpen()}>Отмена</button>
                            <button onClick={() => handleModal(5)}>Сбросить пароль</button>
                        </div>
                    </div>
                </div>
            }
            {
                modal === 5 &&
                <div className={`${s.modal} center`}>
                    <div className={`${s.wrappers} ${s.wrapper}`}>
                        <div className="column">
                            <Image src={'/img/password.svg'} alt='' width={100} height={100} />
                            <h3 style={{ padding: '24px 0' }}>Новый пароль</h3>
                            <p id='center'>Мы вышлем вам на номер телефона код подтверждения и ссылку <br />
                                для того чтобы вы могли пройдя по ссылке восстановить свой <br />
                                пароль.</p>
                        </div>

                        <div style={{ padding: '24px 0' }}>
                            <label htmlFor="">Пароль</label>
                            <input type="password" placeholder='**********' />

                            <label htmlFor="">Повторите пароль</label>
                            <input type="password" placeholder='***************' />
                        </div>
                        <div className={`${s.btns} between`} style={{ gap: '16px' }}>
                            <button onClick={() => handleOpen()}>Отмена</button>
                            <button>Сбросить пароль</button>
                        </div>
                    </div>

              <label htmlFor="">Повторите пароль</label>
              <input type="password" placeholder="***************" />
              <div className="between" style={{ margin: "21px 0" }}>
                <div>
                  <span>Принимаю</span> <a href="">условия соглашения</a>
                </div>
                <input className={s.chek} type="checkbox" />
              </div>
              <div className={`${s.btns} between`} style={{ gap: "16px" }}>
                <button onClick={() => handleOpen()}>Отмена</button>
                <button>Зарегистрироваться</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {modal === 3 && (
        <div className={`${s.modal} center`}>
          <div className={s.wrapper}>
            <h3>sdger</h3>
          </div>
        </div>
      )}
    </div>
  );
}
