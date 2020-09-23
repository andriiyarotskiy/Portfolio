import React from "react";
import style from "./PreviewButton.module.css"

type PreviewButtonType = {
    href: string
}

export const PreviewButton: React.FC<PreviewButtonType> = ({href}) => {
    return (
        <>
            <a className={style.previewBtn} href={href}>live preview</a>
        </>
    )
}