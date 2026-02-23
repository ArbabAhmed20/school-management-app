import React from 'react'
import {FieldError} from "react-hook-form";

type InputFieldProps = {
    label: string;
    type?: string;
    register:any;
    name:string;
    defaultValue?: string;
    error?: FieldError;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

function InputFields({label, type = "text", register, name, defaultValue, error, inputProps}: InputFieldProps) {
    return (
        <div className={"flex flex-col gap-2 w-full md:w-[30%]"}>
            <label className={"text-xs font-semibold w-full"}>{label}</label>
            <input type={type} {...register(name)} className={"ring-[2px] ring-gray-500 p-2 rounded-md text-sm"} {...inputProps} defaultValue={defaultValue} />
            {error?.message && <p className={"text-xs text-red-700 font-medium"}>{error?.message.toString()}</p>}
        </div>
    )
}

export default InputFields
