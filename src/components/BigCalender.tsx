"use client"

import {Calendar, momentLocalizer, View, Views} from 'react-big-calendar'
import moment from 'moment'
import {calendarEvents, eventsData} from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React from "react";
const localizer = momentLocalizer(moment)


const BigCalendar = () => {
    const [view, setView] = React.useState<View>(Views.WORK_WEEK);

    const handleOnChaneView = (selectedView:View)=> {
        setView(selectedView);
    }

    return (
    <div className={"h-full"}>
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            views={["work_week", "day"]}
            view={view}
            style={{height: "98%"}}
            onView={handleOnChaneView}
            min={new Date(2026,1,0,8,0,0)}
            max={new Date(2026,1,0,17,0,0)}

        />
    </div>
    )}
export default BigCalendar;