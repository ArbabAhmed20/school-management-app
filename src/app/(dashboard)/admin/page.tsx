import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import AttendanceChart from "@/components/AttendanceChart";
import FinanceChart from "@/components/FinanceChart";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";

function AdminPage() {
    return (
        <div className={"p-4 flex flex-col gap-4 md:flex-row"}>
            <div className={"w-full lg:w-2/3 flex flex-col gap-8 "}>
                {/*left*/}
                {/*User Cards*/}
                <div className={"flex gap-4 justify-between flex-wrap"}>
                    <UserCard type={"student"}/>
                    <UserCard type={"teacher"}/>
                    <UserCard type={"parent"}/>
                    <UserCard type={"staff"}/>
                </div>
                <div className={"flex gap-4 flex-col lg:flex-row"}>
                    {/*Middle Charts*/}
                    <div className={"w-full lg:w-1/3 h-[450px]"}>
                        {/*CountCharts*/}
                        <CountChart/>
                    </div>
                    <div className={"w-full lg:w-2/3 h-[450px]"}>
                        {/*AttendanceCharts*/}
                        <AttendanceChart/>
                    </div>
                </div>
                <div className={"w-full h-[500px]"}>
                    {/*Bottom Charts*/}
                    <FinanceChart/>
                </div>
            </div>
            <div className={"w-full lg:w-1/3 flex flex-col gap-8"}>
                {/*right*/}
                <EventCalendar/>
                <Announcements />
            </div>
        </div>
    )
}

export default AdminPage
