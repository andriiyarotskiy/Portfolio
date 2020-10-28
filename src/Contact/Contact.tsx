import React from 'react'
import style from './Contact.module.scss'
import styleContainer from "../Common/styles/Container.module.scss";
import {PreviewButton} from "../Common/PreviewButton/PreviewButton";


const Contact = () => {


    return (
        <div className={style.contactContainer}>
            <div className={`${styleContainer.container} ${style.contact}`}>
                <h2 className={style.contactTitle}>Contact</h2>
                <div className={style.contactForm}>
                    <form action="#">
                        <div className={style.wrapperForm}>
                            <div className={style.formGroup}>
                                <input type="text" className={style.formControl} placeholder="Name"/>
                            </div>
                            <div className={style.formGroup}>
                                <input type="text" className={style.formControl} placeholder="E-mail"/>
                            </div>
                            <div className={style.formGroup}>
                                <textarea className={style.formControl} placeholder="Description">

                                </textarea>
                            </div>
                            <div className={style.contactBtn}>
                                <PreviewButton href={''} name={'Send Message'}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;