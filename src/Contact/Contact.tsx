import React from 'react';
import style from './Contact.module.scss';
import styleContainer from "../Common/styles/Container.module.scss";
import {PreviewButton} from "../Common/PreviewButton/PreviewButton";
import axios from 'axios';
import {useFormik} from "formik";

const Pulse = require('react-reveal/Pulse')


const Contact = () => {


    const onSubmit = (values: any) => {
        const {message, contacts, name} = formik.values
        axios.post('https://gmail-server-portfolio.herokuapp.com/sendMessage', {
            name: name,
            contacts: contacts,
            message: message
        }).then(()=>{
            formik.resetForm()
        })
        values.preventDefault() // от перезагрузки страницы
    }


    const formik = useFormik({
        initialValues: {
            name: "",
            contacts: "",
            message: "",
        },
        onSubmit
    })


    return (
        <div className={style.contactContainer} id="Contact">
            <div className={`${styleContainer.container} ${style.contact}`}>
                <h2 className={style.contactTitle}>Contact</h2>
                <div className={style.contactForm}>
                    <Pulse>
                        <form onSubmit={onSubmit} id={"contactForm"}>
                            <div className={style.wrapperForm}>
                                <div className={style.formGroup}>
                                    <input
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        type="text" className={style.formControl}
                                        placeholder="Name"/>
                                </div>
                                <div className={style.formGroup}>
                                    <input
                                        value={formik.values.contacts}
                                        onChange={formik.handleChange}
                                        name="contacts"
                                        type="text"
                                        className={style.formControl}
                                        placeholder="E-mail"/>
                                </div>
                                <div className={style.formGroup}>
                                <textarea
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    name="message"
                                    className={style.formControl}
                                    placeholder="Description">

                                </textarea>
                                </div>
                                <div className={style.contactBtn}>
                                    <PreviewButton type="submit" name={"Send Message"}/>
                                </div>
                            </div>
                        </form>
                    </Pulse>
                </div>
            </div>
        </div>
    )
}

export default Contact;