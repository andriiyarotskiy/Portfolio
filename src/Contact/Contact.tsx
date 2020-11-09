import React, {useState} from 'react';
import style from './Contact.module.scss';
import styleContainer from "../Common/styles/Container.module.scss";
import {PreviewButton} from "../Common/PreviewButton/PreviewButton";
import axios from 'axios';
import {useFormik} from "formik";

const Jump = require('react-reveal/Jump');

const Pulse = require('react-reveal/Pulse')


type formikValues = {
    name: string,
    contacts: string,
    message: string
}


const Contact = () => {

    const [isDisable, setIsDisable] = useState<boolean>(false)
    const [status, setStatus] = useState<any | null>(null)

    const onSubmit = (values: any) => {
        setIsDisable(true)
        const {message, contacts, name} = formik.values
        axios.post('https://gmail-server-portfolio.herokuapp.com/sendMessage', {
            name: name,
            contacts: contacts,
            message: message
        }).then(() => {
            formik.resetForm()
            setIsDisable(false)
            setStatus(`Дякую, ${name} я звяжусь з вами у найближчий час:)`)
        })
        values.preventDefault() // от перезагрузки страницы
    }

    const validate = (values: formikValues) => {
        const errors: any = {};

        if (!values.contacts) {
            errors.contacts = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.contacts)) {
            errors.contacts = 'Invalid email address';
        }
        if (!values.name) {
            errors.name = 'Required';
        }
        if (!values.message) {
            errors.message = 'Required';
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            contacts: "",
            message: "",
        },
        onSubmit,
        validate
    })

    return (
        <div className={style.contactContainer} id="Contact">
            <div className={`${styleContainer.container} ${style.contact}`}>
                <h2 className={style.contactTitle}>Contact</h2>
                <div className={style.contactForm}>
                    <Pulse>
                        <form onSubmit={formik.handleSubmit} id={"contactForm"}>
                            <div className={style.wrapperForm}>
                                <div className={style.formGroup}>
                                    <input
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        type="text" className={style.formControl}
                                        placeholder="Name"/>
                                    {formik.touched.name && formik.errors.name ?
                                        <div className={style.error}>{formik.errors.name}</div> : null}

                                </div>
                                <div className={style.formGroup}>
                                    <input
                                        name="contacts"
                                        value={formik.values.contacts}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        type="email"
                                        className={style.formControl}
                                        placeholder="E-mail"/>
                                    {formik.touched.contacts && formik.errors.contacts ?
                                        <div className={style.error}>{formik.errors.contacts}</div> : null}
                                </div>

                                <div className={style.formGroup}>
                                <textarea
                                    name="message"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={style.formControl}
                                    placeholder="Description">

                                </textarea>
                                    {formik.touched.message ?
                                        <div className={style.error}>{formik.errors.message}</div> : null}
                                </div>

                                {status === null
                                    ? <div className={style.contactBtn}>
                                        <PreviewButton disabled={isDisable} type="submit" name={"Send Message"}/>
                                    </div>
                                    :
                                    <Jump>
                                        <div className={style.contactBtn}>
                                            <span className={style.statusMessage}>{status}</span>
                                        </div>
                                    </Jump>
                                }
                            </div>
                        </form>
                    </Pulse>
                </div>
            </div>
        </div>
    )
}

export default Contact;