import React from "react";
import style from "./PreviewButton.module.scss"

type PreviewButtonType = {
    link?: string
    name: string
    type?: "button" | "submit" | "reset" | undefined
    disabled?: boolean
}

export const PreviewButton: React.FC<PreviewButtonType> = ({link, name,type, ...props}) => {
    return (
        <>
            {/*<a className={style.previewBtn} href={link} {...props}>{name}</a>*/}
            <button disabled={props.disabled}
                    type={type}
                    className={!props.disabled ? style.previewBtn : `${style.previewBtn} ${style.disabled}`}
                    {...props}>
                <a href={link}>{name}</a>
            </button>
        </>
    )
}