import {ReactNode} from "react";

export interface InputProps{
    input: {
        type: string,
        name: string,
        value?: string,
        label: string,
        icon?: ReactNode
    },
    onInputChange: (value: string, field: string)=>void
}