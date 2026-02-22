"use client"

import React from 'react'
import Image from "next/image";

function FormModal({
                       table,
                       type,
                       data,
                       id,
                   }: {
    table:
        | "teacher"
        | "student"
        | "parent"
        | "subject"
        | "class"
        | "lesson"
        | "exam"
        | "assignment"
        | "result"
        | "attendance"
        | "event"
        | "announcement";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number;
}){

    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor =
        type === "create"
            ? "#fef08a"
                : "#b91c1c";

    const [open, setOpen] = React.useState(false);

    const Form = () => {
        return type === "delete" && id ?
            <form action={""} className={"p-4 flex flex-col gap-4 "}>
                <span className={"text-center font-medium text-xl"}>Are Your Sure, Delete {table}?</span>
                <button className={"bg-red-700 text-white p-4 rounded-md border-none w-max self-center"}>Delete</button>
            </form>
            : "create or update form";
    }

    return (
        <>
            <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
            onClick={()=>setOpen(true)}
            >
                <Image src={`/${type}.png`} alt={"png"} width={20} height={20} className={"bg-transparent"}/>
            </button>
            {open && <div className={"w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"}>
                <div className={"bg-white p-4 rounded-md relative  w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]"}>
                    <Form/>
                    <div className={"absolute top-4 right-4 cursor-pointer"} onClick={()=>setOpen(false)}>
                        <Image src={"/close.png"} alt={"close.png"} width={16} height={16} className={"bg-transparent"}/>
                    </div>
                </div>

            </div>}
        </>
    )
}

export default FormModal
