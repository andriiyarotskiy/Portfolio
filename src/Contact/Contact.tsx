import React from 'react'
import style from './Contact.module.css'
import styleContainer from "../Common/styles/Container.module.css";


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
                                <textarea className={style.formControl}> </textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <button type="submit" className={style.contactBtn}>
                    <span>Send Message</span>
                </button>
            </div>
        </div>
    )
}

export default Contact;