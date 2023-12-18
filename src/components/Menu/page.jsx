import React from "react";
import s from './page.module.scss'
import Image from "next/image";
import Link from "next/link";
import cm from "classnames";
import { usePathname } from "next/navigation";


export const BurgerMenu = ({time, setTime}) => {
  const page = usePathname();
//   const handleOpen = () => setOpen(!time);


    return (
        <div>
            <div className={s.burger_menu}>
                <div className={`${s.menu} `}>
                    <div className="between" style={{paddingBottom:'44px'}}>
                        <Image src={'/img/servis.svg'} className={s.logo} alt="" width={120} height={50} />
                        <h3 onClick={() => setTime(!time)}>x</h3>
                    </div>
                        <nav className={s.nav_bar}>
                            <Link
                                href={"/"}
                                className={cm(s.s, {
                                    [s.active]: page === "/",
                                })}
                            >
                                Главная
                            </Link>
                            <Link
                                href={"/pages/AboutUs"}
                                className={cm(s.s, {
                                    [s.active]: page === "/pages/AboutUs",
                                })}
                            >
                                О нас
                            </Link>
                            <Link href={""}>Условия покупки</Link>
                            <Link href={""}>Условия доставки</Link>
                            <Link
                                href={"/pages/Questionnaire"}
                                className={cm(s.s, {
                                    [s.active]: page === "/pages/Questionnaire",
                                })}
                            >
                                Анкета</Link>
                            <Link
                                href={"/pages/Contact"}
                                className={cm(s.s, {
                                    [s.active]: page === "/pages/Contact",
                                })}
                            >
                                Контакты
                            </Link>
                        </nav>
                </div>
            </div>
        </div>
    )
}