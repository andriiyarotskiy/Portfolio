import React from 'react';
import style from './Project.module.scss'
import {PreviewButton} from "../../Common/PreviewButton/PreviewButton";

function Project(props: any) {
    return (
        <div className={style.project}>
            <div className={style.hoverEffect}></div>
            <div className={style.projectImg} style={props.style}>
                <div className={style.watchBtn}>
                    <PreviewButton link={props.link} name={'live preview'}/>
                </div>
            </div>
            <div className={style.projectText}>
                <h2 className={style.title}>{props.title}</h2>
            </div>
        </div>
    );
}

export default Project;