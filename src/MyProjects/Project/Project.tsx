import React from 'react';
import style from './Project.module.css'

function Project(props: any) {
    return (
        <div className={style.project}>
            <div className={style.watchImgBack}>
                <div className={style.watchBtn}>
                    <span>Watching</span>
                </div>
            </div>
            <div className={style.projectText}>
                <h4 className={style.title}>{props.title}</h4>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
}

export default Project;