import {ReactNode} from "react";

export interface FormProps<T>{
    inputs: T[],
    onSubmit: (data: Record<string, string>)=>void,
    className: string,
    buttons: ReactNode
}