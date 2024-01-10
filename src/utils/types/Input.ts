import {ReactNode} from "react";

export interface Input{
    type: string,
    name: string,
    value?: string,
    label: string,
    icon?: ReactNode
}