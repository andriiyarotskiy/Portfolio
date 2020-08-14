import React from 'react';
import style from './Skills.module.css';
import styleContainer from "../Common/styles/Container.module.css";
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'js'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, nostrum?'}/>
                    <Skill title={'html'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, nostrum?'}/>
                    <Skill title={'react'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, nostrum?'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;