import React from 'react'
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import {role, subjectsData,} from "@/lib/data";
import FormModal from "@/components/FormModal";

type Subjects = {
    id: number;
    name: string;
    teachers: string[];
}

const columns = [
    {
        header: "Subject Name",
        accessor: "name",
    },
    {
        header: "Teachers",
        accessor: "teachers",
        className: "hidden md:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },
]

function SubjectsListPage() {

    const renderRow = (item: Subjects) =>{
        return (
            <tr key={item.id} className={"border-b border-gray-200 even:bg-gray-50  text-sm"}>
                <td className={"flex items-center gap-4 p-4"}>
                    <div className={"flex flex-col"}>
                        <h3 className={"font-semibold"}>{item.name}</h3>
                        {/*<p className={"text-xs"}>{item.teachers.join(",")}</p>*/}
                    </div>
                </td>
                <td className="hidden md:table-cell">{item.teachers.join(",")}</td>
                <td>
                    <div className={"flex items-center gap-2"}>
                        {role === "admin" && (
                            <>
                                <FormModal table={"subject"} type={"update"} data={item}/>
                                <FormModal table={"subject"} type={"delete"} id={item.id}/>
                            </>
                        )}
                    </div>
                </td>
            </tr>
        )
    }
    return (
        <div className={"bg-white p-4 rounded-md flex-1 m-4 mt-0"}>
           <div className={"flex items-center justify-between"}>
            <div>
            {/*TOP*/}
                <h1 className={"hidden md:block text-lg font-semibold"}>All Subjects</h1>
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
                    {role === "admin" && (
                        <FormModal table={"subject"} type={"create"}/>
                    )}
                </div>
            </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={subjectsData}/>
            <Pagination />
        </div>
    )
}

export default SubjectsListPage
