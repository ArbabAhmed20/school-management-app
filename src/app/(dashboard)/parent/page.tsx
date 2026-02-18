import React from 'react'
import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";

function ParentPage() {
    return (
        <div className={"p-4 flex flex-col flex-1 gap-4 xl:flex-row"}>
            <div className={"w-full xl:w-2/3"}>
                {/*left*/}
                <div className={"h-full bg-white p-4 rounded-md"}>
                    <h1 className={"text-xl font-semibold"}>Schedule (Name)</h1>
                    <BigCalendar/>
                </div>
            </div>
            {/*Right*/}
            <div className="w-full xl:w-1/3 flex flex-col gap-8">
                <Announcements />
            </div>
        </div>
    )
}

export default ParentPage
