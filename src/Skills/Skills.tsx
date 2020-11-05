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

const Fade = require('react-reveal/Fade')


const Skills = () => {

    const skilElement = skillsElements.map((el, i) => {
        return <Skill key={i} title={el.title} style={el.icon}/>
    })

    return (
        <div className={style.skillsBlock} id="Skills">


            <div className={`${styleContainer.container} ${style.skillsContainer}`}>

                <Fade big>
                    <h2 className={style.title}>Skills</h2>
                    <div className={style.skills}>
                        {skilElement}
                    </div>
                </Fade>
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
        title: 'html',
        icon: {
            backgroundImage: 'url(' + htmlIcon + ')',
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
    },
    {
        title: 'react',
        icon: {
            backgroundImage: 'url(' + reactIcon + ')',
        },
    },
]
// let params: { [key: string]: any } = {
//     "particles": {
//         "number": {
//             "value": 100,
//             "density": {
//                 "enable": false
//             }
//         },
//         "size": {
//             "value": 3,
//             "random": true,
//             "anim": {
//                 "speed": 4,
//                 "size_min": 0.3
//             }
//         },
//         "color": {
//             "value": ["#eb4d4b", "#e056fd", "#f9ca24", "#686de0", "#badc58", "#7ed6df"],
//         },
//         "opacity": {
//             "value": 0,
//             "random": false,
//             "anim": {
//                 "enable": 0.5,
//                 "speed": 1,
//                 "opacity_min": 0.8,
//                 "sync": false,
//             },
//         },
//         "line_linked": {
//             "enable": false
//         },
//         "move": {
//             "enable": true,
//             "speed": 20,
//             "direction": "none",
//             "random": false,
//             "straight": false,
//             "out_mode": "out",
//             "attract": {
//                 "enable": false,
//                 "rotateX": 600,
//                 "rotateY": 1200,
//             }
//         }
//     },
//     "interactivity": {
//         "detect_on": "canvas",
//         "events": {
//             "onhover": {
//                 "enable": true,
//                 "mode": "bubble"
//             },
//             "onclick": {
//                 "enable": true,
//                 "mode": "push"
//             },
//             "resize": true
//         },
//         "modes": {
//             "grab": {
//                 "distance": 400,
//                 "line_linked": {
//                     "opacity": 1
//                 },
//             },
//             "bubble": {
//                 "distance": 200,
//                 "duration": 2,
//                 "size": 40,
//                 "opacity": 8,
//                 "speed": 3
//             },
//             "repulse": {
//                 "distance": 400,
//                 "duration": 4
//             }
//         }
//     }
// }