import React from 'react'
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import {role, subjectsData,} from "@/lib/data";

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
            <tr key={item.id} className={"border-b border-gray-200 even:bg-gray-50 hover:bg-yellow-200 text-sm"}>
                <td className={"flex items-center gap-4 p-4"}>
                    <div className={"flex flex-col"}>
                        <h3 className={"font-semibold"}>{item.name}</h3>
                        {/*<p className={"text-xs"}>{item.teachers.join(",")}</p>*/}
                    </div>
                </td>
                <td className="hidden md:table-cell">{item.teachers.join(",")}</td>
                <td>
                    <div className={"flex items-center gap-2"}>
                        <Link href={`/list/teachers/${item.id}`}>
                            <button className={"w-12 h-10 flex items-center justify-center rounded-md bg-blue-200 text-black text-xs font-semibold "}>
                                View
                            </button>
                        </Link>
                        {role === "admin" &&  <button className={"w-14 h-10 flex items-center justify-center rounded-md bg-red-700 text-white text-xs font-semibold"}>
                            Delete
                        </button>}
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
                    <button className={"w-8 h-8 flex items-center justify-center rounded-full bg-[#fef08a]"}>
                        <Image src={"/filter.png"} alt={"filter.png"} width={14} height={14}/>
                    </button>
                    <button className={"w-8 h-8 flex items-center justify-center rounded-full bg-[#fef08a]"}>
                        <Image src={"/sort.png"} alt={"sort.png"} width={14} height={14}/>
                    </button>
                    <button className={"w-8 h-8 flex items-center justify-center rounded-full bg-[#fef08a]"}>
                        <Image src={"/plus.png"} alt={"plus.png"} width={14} height={14}/>
                    </button>
                </div>
            </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={subjectsData}/>
            <Pagination />
        </div>
    )
}

export default SubjectsListPage
