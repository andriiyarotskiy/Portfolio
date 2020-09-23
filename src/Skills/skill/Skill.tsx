import React from 'react';
import style from './Skill.module.css'

function Skill(props: any) {
    return (
        <div className={style.skill}>
            <div className={style.icon} style={props.style}>

            </div>
            <h2>{props.title}</h2>
            <p className={style.description}>
            </p>
        </div>
    );
}

export default Skill;