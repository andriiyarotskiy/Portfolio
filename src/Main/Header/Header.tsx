import React, {useEffect, useState} from 'react';
import style from './Header.module.scss';
import styles from '../../Common/styles/Container.module.scss'
import Nav from "./Nav/Nav";


function Header() {

    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const scrollCallBack: any = window.addEventListener("scroll", () => {
            if (window.pageYOffset > 0){
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    });

    return (
        <div className={isSticky ? `${style.header} ${style.headerFixed}` : style.header}>
            <div className={isSticky ? `${style.headerContainer} ${style.headContFixed}` :style.headerContainer}>
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