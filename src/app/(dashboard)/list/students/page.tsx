import React from 'react'
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import {role, studentsData,} from "@/lib/data";
import FormModal from "@/components/FormModal";

type Student = {
    id: number;
    studentId: number;
    name: string;
    email?: string;
    photo: string;
    phone?: string;
    grade: number;
    class: string;
    addresses: string[];
}

const columns = [
    {
        header: "Info",
        accessor: "info",
    },
    {
        header: "Student ID",
        accessor: "studentId",
        className: "hidden md:table-cell",
    },
    {
        header: "Grade",
        accessor: "grade",
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

function StudentListPage() {

    const renderRow = (item: Student) =>{
        return (
            <tr key={item.id} className={"border-b border-gray-200 even:bg-gray-50 text-sm"}>
                <td className={"flex items-center gap-4 p-4"}>
                    <Image src={item.photo} alt={"photo"} height={40} width={40} className={"md:hidden xl:block w-10 h-10 rounded-full object-cover"}/>
                    <div className={"flex flex-col"}>
                        <h3 className={"font-semibold"}>{item.name}</h3>
                        <p className={"text-xs"}>{item?.email}</p>
                    </div>
                </td>
                <td className="hidden md:table-cell">{item.studentId}</td>
                <td className="hidden md:table-cell">{item.grade}</td>
                <td className="hidden md:table-cell">{item.class}</td>
                <td className="hidden md:table-cell">{item.addresses}</td>
                <td>
                    <div className={"flex items-center gap-2"}>
                        {role === "admin" && (
                            <>
                                <FormModal table={"student"} type={"update"} data={item}/>
                                <FormModal table={"student"} type={"delete"} id={item.id}/>
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
                <h1 className={"hidden md:block text-lg font-semibold"}>All Students</h1>
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
                        <FormModal table={"student"} type={"create"}/>
                    )}
                </div>
            </div>
            </div>
            <Table columns={columns} renderRow={renderRow} data={studentsData}/>
            <Pagination />
        </div>
    )
}

export default StudentListPage
