import React from 'react';
import style from './Skills.module.scss';
import styleContainer from "../Common/styles/Container.module.scss";
import Skill from "./skill/Skill";
import reduxIcon from "../assets/image/skills-icon/redux_icon.svg";
import jsIcon from "../assets/image/skills-icon/js_icon.svg";
import reactIcon from "../assets/image/skills-icon/react_icon.svg";
import ts2Icon from "../assets/image/skills-icon/ts2_icon.svg";
import jestIcon from "../assets/image/skills-icon/jest_icon.svg";
import storyIcon from "../assets/image/skills-icon/storybook_icon.svg";
import axiosIcon from "../assets/image/skills-icon/axios_icon.svg";
import sassIcon from "../assets/image/skills-icon/sass_icon.svg";
import htmlIcon from "../assets/image/skills-icon/html5_icon.svg";


const Skills = () => {

    const skilElement = skillsElements.map((el, i) => {
        return <Skill key={i} title={el.title} style={el.icon}/>
    })

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    {skilElement}
                </div>
            </div>
        </div>
    );
}

export default Skills;

const skillsElements = [
    {
        title: 'redux',
        icon: {
            backgroundImage: 'url(' + reduxIcon + ')',
        },
    },
    {
        title: 'javascript',
        icon: {
            backgroundImage: 'url(' + jsIcon + ')',
        },
    },
    {
        title: 'react',
        icon: {
            backgroundImage: 'url(' + reactIcon + ')',
        },
    },
    {
        title: 'jest',
        icon: {
            backgroundImage: 'url(' + jestIcon + ')',
        },
    },
    {
        title: 'typescript',
        icon: {
            backgroundImage: 'url(' + ts2Icon + ')',
        },
    },
    {
        title: 'storybook',
        icon: {
            backgroundImage: 'url(' + storyIcon + ')',
        },
    }, {
        title: 'axios',
        icon: {
            backgroundImage: 'url(' + axiosIcon + ')',
        },
    }, {
        title: 'sass/scss',
        icon: {
            backgroundImage: 'url(' + sassIcon + ')',
        },
    }, {
        title: 'html',
        icon: {
            backgroundImage: 'url(' + htmlIcon + ')',
        },
    },
]