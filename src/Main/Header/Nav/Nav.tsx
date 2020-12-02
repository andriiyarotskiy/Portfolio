import React from 'react';
import style from './Nav.module.scss';

const {Link} = require('react-scroll')

function Nav() {
    return (
        <div className={style.nav}>
            <Link
                to="Home"
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
                offset={-60}
            >Skills</Link>
            <Link
                activeClass={style.active}
                to="Projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
            >Projects</Link>
            <Link
                activeClass={style.active}
                to="Footer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
            >Contact</Link>
        </div>
    );
}

export default Nav;