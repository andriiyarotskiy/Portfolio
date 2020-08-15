import React from 'react'
import style from './Remoting.module.css'
import styleContainer from "../Common/styles/Container.module.css";


const Remoting = () => {
    return (
        <div className={style.remoteContainer}>
            <div className={`${styleContainer.container} ${style.remote}`}>
                <h2 className={style.remoteTitle}>I am available for Freelancer</h2>
                <div className={style.remoteBtn}>
                    <span>Watching</span>
                </div>
            </div>
        </div>
    )
}

export default Remoting;