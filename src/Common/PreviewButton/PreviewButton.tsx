import React from "react";
import style from "./PreviewButton.module.scss"

type PreviewButtonType = {
    href: string
    name: string
}

export const PreviewButton: React.FC<PreviewButtonType> = ({href, name,...props}) => {
    return (
        <>
            <a className={style.previewBtn} href={href} {...props}>{name}</a>
        </>
    )
}