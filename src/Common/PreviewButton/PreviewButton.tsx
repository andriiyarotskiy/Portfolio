import React from "react";
import style from "./PreviewButton.module.scss"

type PreviewButtonType = {
    link: string
    name: string
}

export const PreviewButton: React.FC<PreviewButtonType> = ({link, name, ...props}) => {
    return (
        <>
            <a className={style.previewBtn} href={link} {...props}>{name}</a>
        </>
    )
}