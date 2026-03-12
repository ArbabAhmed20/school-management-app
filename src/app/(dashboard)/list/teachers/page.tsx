import React from 'react'
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import {role, teachersData} from "@/lib/data";
import FormModal from "@/components/FormModal";
import {Class, Subject, Teacher} from "@/generated/prisma/client";
import {prisma} from "@/lib/prisma";

type TeacherList = Teacher & {subjects:Subject[]} & {classes:Class[]}

const columns = [
    {
        header: "Info",
        accessor: "info",
    },
    {
        header: "Teacher ID",
        accessor: "teacherId",
        className: "hidden md:table-cell",
    },
    {
        header: "Subjects",
        accessor: "subjects",
        className: "hidden md:table-cell",
    },
    {
        header: "Classes",
        accessor: "classes",
        className: "hidden md:table-cell",
    },
    {
        header: "Phone",
        accessor: "phone",
        className: "hidden lg:table-cell",
    },
    {
        header: "Address",
        accessor: "address",
        className: "hidden lg:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },
]

async function TeacherListPage() {

    const renderRow = (item: TeacherList) =>{
        return (
            <tr key={item.id} className={"border-b border-gray-200 even:bg-gray-50 text-sm"}>
                <td className={"flex items-center gap-4 p-4"}>
                    <Image src={item.img || "/Profile-Male-Transparent.png"} alt={"photo"} height={40} width={40} className={"md:hidden xl:block w-10 h-10 rounded-full object-cover"}/>
                    <div className={"flex flex-col"}>
                        <h3 className={"font-semibold"}>{item.name}</h3>
                        <p className={"text-xs"}>{item?.email}</p>
                    </div>
                </td>
                <td className="hidden md:table-cell">{item.id}</td>
                <td className="hidden md:table-cell">{item.subjects.map(subject=>subject.name).join(",")}</td>
                <td className="hidden md:table-cell">{item.classes.map(classes=>classes.name).join(",")}</td>
                <td className="hidden md:table-cell">{item.phone}</td>
                <td className="hidden md:table-cell">{item.address}</td>
                <td>
                    <div className={"flex items-center gap-2"}>
                        {role === "admin" && (
                            <>
                                <FormModal table={"teacher"} type={"update"} data={item}/>
                                <FormModal table={"teacher"} type={"delete"} id={item.id}/>
                            </>
                        )}
                    </div>
                </td>
            </tr>
        )
    }

    const  teacher = await prisma.teacher.findMany({
        include: {
            subjects:true,
            classes:true,
        }
    });
    console.log(teacher);
    return (
        <div className={"bg-white p-4 rounded-md flex-1 m-4 mt-0"}>
           <div className={"flex items-center justify-between"}>
            <div>
            {/*TOP*/}
                <h1 className={"hidden md:block text-lg font-semibold"}>All Teachers</h1>
            </div>
            <div className={"flex flex-col md:flex-row items-center gap-4 w-full md:w-auto"}>
            {/*list*/}
                <TableSearch />
                <div className={"flex items-center gap-4 self-end"}>
                    <button className={"w-8 h-8 flex items-center justify-center rounded-full "}>
                        <Image src={"/filter.png"} alt={"filter.png"} width={20} height={20}/>
                    </button>
                    <button className={"w-8 h-8 flex items-center justify-center rounded-full "}>
                        <Image src={"/sort.png"} alt={"sort.png"} width={20} height={20}/>
                    </button>
                    {/*<button className={"w-8 h-8 flex items-center justify-center rounded-full bg-[#fef08a]"}>*/}
                    {/*    <Image src={"/create.png"} alt={"create.png"} width={14} height={14}/>*/}
                    {/*</button>*/}
                    {role === "admin" && (
                        <FormModal table={"teacher"} type={"create"}/>
                    )}
                </div>
            </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={teacher}/>
            <Pagination />
        </div>
    )
}

export default TeacherListPage
