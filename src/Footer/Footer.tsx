import React from 'react'
import style from './Footer.module.css'
import styleContainer from "../Common/styles/Container.module.css";


const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <div className={`${styleContainer.container} ${style.footer}`}>
                <div className={style.footerTitle}>
                    <h2>Andrii Yarotskiy</h2>
                </div>
                <div className={style.iconContainer}>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                </div>
                <div className={style.text}>
                    <h5>2020 Все права защищены</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer;