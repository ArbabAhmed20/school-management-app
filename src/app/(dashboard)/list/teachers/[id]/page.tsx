import React from 'react'
import Image from "next/image";
import BigCalendar from "@/components/BigCalender";
import Announcements from "@/components/Announcements";
import Link from "next/link";
import Performance from "@/components/Performance";
import FormModal from "@/components/FormModal";

function SingleTeacherPage() {
    return (
        <div className={"flex-1 p-4 flex flex-col xl:flex-row gap-4 "}>
            {/*Left*/}
            <div className={"w-full xl:w-2/3 "}>
               {/*Top Section*/}
                <div className={"flex flex-col lg:flex-row gap-4 "}>
                    <div className={"bg-blue-200 py-6 px-4 rounded-md flex-1 flex gap-4"}>
                        {/*User Card*/}
                        <div className={"w-1/3"}>
                            <Image src={"/Profile-Male-Transparent.png"} alt={"Profile-Male-Transparent.png"} width={144} height={144} className={"rounded-full object-cover"}/>
                        </div>
                        <div className={"w-2/3 flex flex-col justify-between gap-4"}>
                            <h1 className={"text-xl font-semibold"}>Teacher Name</h1>
                            <FormModal table={"teacher"} type={"update"} />
                            <p className={"text-sm"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ducimus!</p>
                            <div className={"flex items-center justify-between gap-2 flex-wrap text-xs font-medium"}>
                                <div className={"w-full md:w-1/3 flex items-center gap-2 lg:w-full 2xl:w-1/3"}>
                                    <Image src={"/blood.png"} alt={"blood.png"} width={14} height={14}/>
                                    <span>Blood Type</span>
                                </div>
                                <div className={"w-full md:w-1/3 flex items-center gap-2 lg:w-full 2xl:w-1/3"}>
                                    <Image src={"/date.png"} alt={"date.png"} width={14} height={14}/>
                                    <span>DOB</span>
                                </div>
                                <div className={"w-full md:w-1/3 flex items-center gap-2 lg:w-full 2xl:w-1/3"}>
                                    <Image src={"/mail.png"} alt={"mail.png"} width={14} height={14}/>
                                    <span>E-Mail</span>
                                </div>
                                <div className={"w-full md:w-1/3 flex items-center gap-2 lg:w-full 2xl:w-1/3"}>
                                    <Image src={"/phone.png"} alt={"phone.png"} width={14} height={14}/>
                                    <span>Phone</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"flex-1 flex gap-4 justify-between flex-wrap"}>
                        {/*Small Cards*/}
                        <div className={"w-full bg-white p-4 rounded-md flex gap-4 md:w-[47%] xl:w-[47%] 2xl:w-[47%]"}>
                            <Image src={"/singleAttendance.png"} alt={"singleAttendance.png"} width={24} height={24} className={"w-6 h-6"}/>
                            <div>
                                <h1 className={"text-xl font-semibold "}>90%</h1>
                                <span className={"text-sm"}>Attendance</span>
                            </div>
                        </div>
                        <div className={"w-full bg-white p-4 rounded-md flex gap-4 md:w-[47%] xl:w-[47%] 2xl:w-[47%]"}>
                            <Image src={"/singleLesson.png"} alt={"singleLesson.png"} width={24} height={24} className={"w-6 h-6"}/>
                            <div>
                                <h1 className={"text-xl font-semibold "}>6</h1>
                                <span className={"text-sm"}>Lessons</span>
                            </div>
                        </div>
                        <div className={"w-full bg-white p-4 rounded-md flex gap-4 md:w-[47%] xl:w-[47%] 2xl:w-[47%]"}>
                            <Image src={"/singleBranch.png"} alt={"singleBranch.png"} width={24} height={24} className={"w-6 h-6"}/>
                            <div>
                                <h1 className={"text-xl font-semibold "}>2</h1>
                                <span className={"text-sm"}>Branch</span>
                            </div>
                        </div>
                        <div className={"w-full bg-white p-4 rounded-md flex gap-4 md:w-[47%] xl:w-[47%] 2xl:w-[47%]"}>
                            <Image src={"/singleClass.png"} alt={"singleClass.png"} width={24} height={24} className={"w-6 h-6"}/>
                            <div>
                                <h1 className={"text-xl font-semibold "}>6</h1>
                                <span className={"text-sm"}>Classes</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Bottom*/}
                <div>
                    <div className={"mt-4 bg-white rounded-md p-4 h-[800px]"}>
                        {/*Teacher Schedule*/}
                        <h1 className={"text-xl font-semibold"}>Teacher Schedule</h1>
                        <BigCalendar/>
                    </div>
                </div>
            </div>
            {/*Right*/}
            <div className={"w-full xl:w-1/3 flex flex-col gap-4"}>
                <div className={"bg-white p-4 rounded-md"}>
                    <h1 className={"text-xl font-semibold"}>Quick Access</h1>
                    <div className={"mt-4 flex gap-4 flex-wrap text-xs font-medium"}>
                        <Link href={"#"} className={"p-4 rounded-md bg-blue-200"}>Classes</Link>
                        <Link href={"#"} className={"p-4 rounded-md bg-yellow-200"}>Students</Link>
                        <Link href={"#"} className={"p-4 rounded-md bg-blue-200"}>Lessons</Link>
                        <Link href={"#"} className={"p-4 rounded-md bg-yellow-200"}>Exams</Link>
                        <Link href={"#"} className={"p-4 rounded-md bg-blue-200"}>Assignments</Link>

                    </div>
                </div>
                <Performance/>
                <Announcements/>
            </div>
        </div>

    )
}

export default SingleTeacherPage
