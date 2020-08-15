import React from 'react';
import style from './MyProjects.module.css';
import styleContainer from '../Common/styles/Container.module.css'
import Project from './Project/Project';


function MyProjects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={'Social Network'} description={'Social network on TS!Social network on TS!'}/>
                    <Project title={'Social Network'} description={'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur '}/>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;