import { MouseEventHandler } from "react";

export interface CustomButtonPorps{
    title:string,
    containerStyles?:string
    handleClick?:MouseEventHandler<HTMLButtonElement>,
    btnType?:'button'|'submit',
}