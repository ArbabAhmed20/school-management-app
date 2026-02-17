"use client"
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import React from 'react'
import Image from "next/image";

const data = [
    {
        name: 'Monday',
        present: 40,
        absent: 24,
    },
    {
        name: 'Tuesday',
        present: 30,
        absent: 13,
    },
    {
        name: 'Wednesday',
        present: 20,
        absent: 98,
    },
    {
        name: 'Thursday',
        present: 27,
        absent: 39,
    },
    {
        name: 'Friday',
        present: 18,
        absent: 48,
    },
    {
        name: 'Saturday',
        present: 23,
        absent: 38,
    },
];

function AttendanceChart() {
    return (
        <div className={"bg-white rounded-lg p-4 h-full"}>
            <div className={"flex flex-row items-center justify-between"}>
                <h1 className={"text-lg font-semibold"}>Attendance</h1>
                <Image src={"/moreDark.png"} alt={"moreDark.png"} width={20} height={20} />
            </div>
            <BarChart
                style={{ width: '100%', height: "90%", maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={data}
                barSize={20}
            >
                {/*<CartesianGrid strokeDasharray="3 3" />*/}
                <XAxis dataKey="name" tickLine={false} />
                <YAxis width="auto" tickLine={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="present" fill="#bfdbfe" radius={[10, 10, 0, 0]} legendType={"circle"} />
                <Bar dataKey="absent" fill="#fef08a"  radius={[10, 10, 0, 0]} legendType={"circle"} />
            </BarChart>
        </div>
    )
}

export default AttendanceChart
