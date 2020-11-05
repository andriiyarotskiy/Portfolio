import React from 'react';
import style from './Nav.module.scss';

const {Link} = require('react-scroll')

function Nav() {
    return (
        <div className={style.nav}>
            <Link
                activeClass={style.active}
                to=""
                spy={true}
                smooth={true}
                duration={500}
            >Home</Link>
            <Link
                activeClass={style.active}
                to="Skills"
                spy={true}
                smooth={true}
                duration={500}
            >Skills</Link>
            <Link
                activeClass={style.active}
                to="Projects"
                spy={true}
                smooth={true}
                duration={500}
            >Projects</Link>
            <Link
                activeClass={style.active}
                to="Contact"
                spy={true}
                smooth={true}
                duration={500}
            >Contact</Link>
        </div>
    );
}

export default Nav;