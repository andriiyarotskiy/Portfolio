import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../Common/styles/Container.module.scss'
import Header from "../Header/Header";
import avatar from "../assets/image/Andriy.jpg"

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={style.mainBlockWrapper}>
                <Header/>
                <div className={`${styleContainer.container} ${style.main}`}>
                    <div className={style.mainContent}>
                        <div className={style.text}>
                            <span>Hello!</span>
                            <h1>
                                I’m
                                <span>Andrii Yarotskiy</span>
                            </h1>
                            <h2>Front-end Developer</h2>
                        </div>
                        <div className={style.photo}>
                            <img src={avatar}
                                 className={style.responsiveImg}
                                 alt="avatar"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;