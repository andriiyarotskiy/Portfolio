import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../Common/styles/Container.module.scss'
import avatar from "../assets/image/avatar.png"
import ReactTypingEffect from "react-typing-effect";
import Tilt from 'react-parallax-tilt';

const Fade = require('react-reveal/Fade')


function Main() {
    return (
        <Fade big>
            <div className={`${styleContainer.container} ${style.main}`}>
                <div className={style.mainContent}>
                    <div className={style.text}>
                        <span>Hello!</span>
                        <h1>I’m<span>Andrii Yarotskiy</span></h1>
                        <ReactTypingEffect
                            speed={100}
                            typingDelay={1000}
                            className={style.speciality}
                            eraseDelay={15000}
                            text={["Front-end Developer!"]}/>
                    </div>
                    <Tilt>
                        <div className={style.photo}>
                            <img src={avatar}
                                 className={style.responsiveImg}
                                 alt="avatar"/>
                        </div>
                    </Tilt>
                </div>
            </div>
         </Fade>
    );
}

export default Main;


