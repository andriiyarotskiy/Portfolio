import React from 'react';
import style from './Header.module.scss';
import styles from '../../Common/styles/Container.module.scss'
import Nav from "./Nav/Nav";


function Header() {

    return (
        <div className={style.header}>
            <div className={style.headerContainer}>
                <div className={styles.container}>
                    <div className={style.navigation}>
                        <Nav/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;