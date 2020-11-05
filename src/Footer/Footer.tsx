import React from 'react'
import style from './Footer.module.scss'
import styleContainer from "../Common/styles/Container.module.scss";
import facebookIcon from "../assets/image/footer-icon/facebook.svg"
import gitHubIcon from "../assets/image/footer-icon/github.svg"
import telegramIcon from "../assets/image/footer-icon/telegram.svg"
import linkedInIcon from "../assets/image/footer-icon/linkedin.svg"


const Footer = () => {
    return (
        <div className={style.footerContainer} >
            <div className={`${styleContainer.container} ${style.footer}`}>
                <div className={style.footerTitle}>
                    <h2>Andrii Yarotskiy</h2>
                </div>
                <div className={style.iconContainer}>
                    <div className={style.item}>
                        <a href="https://www.facebook.com/andriiyarotskiy/?viewas=100000686899395">
                            <img src={facebookIcon} alt="Facebook"/>
                        </a>
                    </div>
                    <div className={style.item}>
                        <a href="https://github.com/andriiyarotskiy">
                            <img src={gitHubIcon} alt="GitHub"/>
                        </a>
                    </div>
                    <div className={style.item}>
                        <a href="https://www.linkedin.com/in/andrii-yarotskiy-5a416a1a0/">
                            <img src={linkedInIcon} alt="LinkedIn"/>
                        </a>
                    </div>
                    <div className={style.item}>
                        <a href="https://t.me/andriiyarotskiy">
                            <img src={telegramIcon} alt="Telegram"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;