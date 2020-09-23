import React from 'react';
import style from './Main.module.css'
import styleContainer from './../Common/styles/Container.module.css'
import Header from "../Header/Header";

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={style.mainBlockContent}>
                <Header/>
                <div className={`${styleContainer.container} ${style.headerWrapBlocks}`}>
                    <div className={style.text}>
                        <span>Hello!</span>
                        <h1>
                            I’m
                            <span>Andrii Yarotskiy</span>
                        </h1>
                        <h2>Front-end Developer</h2>
                    </div>
                    <div className={style.photo}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;