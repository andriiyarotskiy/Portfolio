import React from 'react'
import style from './Remoting.module.scss'
import styleContainer from "../Common/styles/Container.module.scss";


const Remoting = () => {
    return (
        <div className={style.wrapperRemote}>
            <div className={style.remoteContainer}>
                <div className={`${styleContainer.container} ${style.remote}`}>
                    <div className={style.remoteTitle}>
                        <h2>I am available for Freelance</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Remoting;