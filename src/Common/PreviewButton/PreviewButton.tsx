import React from "react";
import style from "./PreviewButton.module.scss"
import preloader from "../../assets/image/loading/loading.svg"

type PreviewButtonType = {
    link?: string
    name: string
    type?: "button" | "submit" | "reset" | undefined
    disabled?: boolean
}

export const PreviewButton: React.FC<PreviewButtonType> = ({link, name, type, ...props}) => {

    return (
        <div className={style.btn}>
            <button disabled={props.disabled}
                    type={type}
                    className={!props.disabled ? style.previewBtn : `${style.previewBtn} ${style.disabled}`}
                    {...props}>
                <a href={link}>{name}</a>
            </button>
            {props.disabled && <div className={style.btnLoader}>
                <img src={preloader} alt="preloader"/>
            </div>}
        </div>
    )
}