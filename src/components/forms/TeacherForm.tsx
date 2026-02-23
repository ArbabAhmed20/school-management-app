"use client"

import React from 'react'
import {any, z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import InputFields from "@/components/InputFields";
import Image from "next/image";

const schema = z.object({
    username: z.string().min(3, { message: "Username must be at least 3 characters" })
                        .max(20, {message: "Max characters must be greater than 20 characters"}),
    email: z.string().email({ message: "Email must be Valid!" }),
    password: z.string().min(8, { message: "Username must be at least 8 characters" })
                        .max(25, {message: "Max characters must be greater than 25 characters"}),
    firstname: z.string().min(2, { message: "First name must be at least 2 characters" }),
    lastname: z.string().min(2, { message: "Last name must be at least 2 characters" }),
    phone: z.string().min(10, { message: "Enter a valid phone number" }),
    address: z.string().min(1, { message: "Address Required" }),
    bloodType: z.string().min(1, { message: "Blood Type is required!" }),
    dob: z.date({ message: "Enter a valid Date" }),
    gender: z.enum(["Male", "Female", "Other"], {message: "Gender Required"}),
    img: z.instanceof(File, {message: "Image is required"}),
});

type Inputs = z.infer<typeof schema>


function TeacherForm({type}: {type: "create" | "update"; data?:any}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit = handleSubmit(data => {
        console.log(data);
    });
    return (
        <form className={"flex flex-col gap-8"} onSubmit={onSubmit}>
            <h1 className={"text-xl font-semibold"}>Create A New Teacher</h1>
            <span className={"text-xs font-medium"}>Authentication Information</span>
            <div className={"flex justify-between gap-4 flex-wrap"}>
                <InputFields label="Username" name="username" register={register} error={errors?.username}/>
                <InputFields label="Email" name="email" register={register} error={errors?.email}/>
                <InputFields label="Password" name="password" register={register} error={errors?.password} type={"password"}/>
            </div>
            <span className={"text-xs font-medium"}>Personal Information</span>
            <div className={"flex justify-between gap-6 flex-wrap"}>
                <InputFields label="First Name" name="firstname" register={register} error={errors?.firstname}/>
                <InputFields label="Last Name" name="lastname" register={register} error={errors?.lastname}/>
                <InputFields label="Phone" name="phone" register={register} error={errors?.phone} />
                <InputFields label="Address" name="address" register={register} error={errors?.address} />
                <InputFields label="Blood Type" name="bloodType" register={register} error={errors?.bloodType} />
                <InputFields label="Date of Birth" name="dob" register={register} error={errors?.dob} type="date" />
            <div className={"flex flex-col gap-2 w-full md:w-[30%]"}>
                <label className={"text-xs font-semibold w-full"}>Gender</label>
                <select className={"ring-[2px] ring-gray-500 p-2 rounded-md text-sm"} {...register("gender")}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                {errors.gender && <p className={"text-xs text-red-700 font-medium"}>{errors.gender.message}</p>}
            </div>
            <div className={"flex flex-col gap-2 w-full md:w-[30%] justify-center"}>
                <label className={"text-xs font-semibold w-full flex items-center gap-2 cursor-pointer"} htmlFor={"img"}>
                    <Image src={"/upload.png"} alt={"upload.png"} width={28} height={28} className={"bg-transparent"}/>
                    <span>Upload Image</span>
                </label>
                <input className={"hidden"} type={"file"} id={"img"} {...register("img")}/>
                {errors.img && <p className={"text-xs text-red-700 font-medium"}>{errors.img.message}</p>}
            </div>
            </div>
            <button className={"bg-black text-white p-2 rounded-md"}>{type === "create" ? "Create" : "Update"}</button>
        </form>
    )
}

export default TeacherForm
