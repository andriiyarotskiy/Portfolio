import React from 'react';
import style from './MyProjects.module.scss';
import styleContainer from '../Common/styles/Container.module.scss';
import Project from './Project/Project';
import todoImage from '../assets/image/todolist_img.svg'
import snImage from '../assets/image/sn_img.png'
import countImage from '../assets/image/count_img.jpg'


function MyProjects() {
    let projectElement = projectsElements.map((el, i) => {
        return <Project key={i} style={el.image} title={el.title}/>
    })
    return (
        <div className={style.projectsBlock}>
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
        link: "https://andriiyarotskiy.github.io/SN-TypeScript/#/profile",
        image: {
            backgroundImage: 'url(' + snImage + ')',
        },
        title: 'social network',
    }, {
        link: "https://andriiyarotskiy.github.io/SN-TypeScript/#/profile",
        image: {
            backgroundImage: 'url(' + todoImage + ')',
        },
        title: 'todolist',
    }, {
        image: {
            backgroundImage: 'url(' + countImage + ')',
        },
        title: 'count',
    },
]