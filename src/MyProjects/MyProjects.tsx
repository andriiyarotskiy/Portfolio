import React from 'react';
import style from './MyProjects.module.scss';
import styleContainer from '../Common/styles/Container.module.scss';
import Project from './Project/Project';
import todoImage from '../assets/image/projects-img/todolist_img.svg'
import snImage from '../assets/image/projects-img/sn_img.png'
import countImage from '../assets/image/projects-img/count_img.jpg'
import expressImage from '../assets/image/projects-img/develop-node-js-server.png'
import userAuth from '../assets/image/projects-img/userAuth.jpg'
import miniShop from '../assets/image/projects-img/miniShop.png'
import Particles from "react-particles-js";
import {paramsBubble} from "./bubleOptions";

const Fade = require('react-reveal/Fade')


function MyProjects() {
    let projectElement = projectsElements.map((el, i) => {
        return <Project key={i} style={el.image} title={el.title} link={el.link}/>
    })
    return (
        <div id="Projects" className={style.projectsBlock}>
            <Particles className={style.particles} params={paramsBubble}/>

            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    {projectElement}
                </div>
            </div>
        </div>
    );
}

export default MyProjects;


const projectsElements = [
    {
        link: "https://andriiyarotskiy.github.io/SN-TypeScript/#/",
        image: {
            backgroundImage: 'url(' + snImage + ')',
        },
        title: 'social network',
    }, {
        link: "https://andriiyarotskiy.github.io/TodoList-tsx/#/",
        image: {
            backgroundImage: 'url(' + todoImage + ')',
        },
        title: 'todolist',
    }, {
        link: "https://andriiyarotskiy.github.io/counter/",
        image: {
            backgroundImage: 'url(' + countImage + ')',
        },
        title: 'count',
    }, {
        link: "https://infinite-shelf-52438.herokuapp.com/",
        image: {
            backgroundImage: 'url(' + expressImage + ')',
        },
        title: 'Node.js/Express Store',
    }, {
        link: "https://andriiyarotskiy.github.io/cards",
        image: {
            backgroundImage: 'url(' + userAuth + ')',
        },
        title: 'Sign in / Sign up / Forgot',
    }, {
        link: "https://andriiyarotskiy.github.io/mini-shop/#/",
        image: {
            backgroundImage: 'url(' + miniShop + ')',
        },
        title: 'mini app shop',
    },
]
