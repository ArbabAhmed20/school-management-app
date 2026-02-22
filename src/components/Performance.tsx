"use client"
import { Pie, PieChart } from 'recharts';

const data = [
    { name: 'Group A', value: 90, fill: "#bfdbfe"},
    { name: 'Group B', value: 10, fill: "#fef08a"},
];

import React from 'react'
import Image from "next/image";

function PerformanceChart() {
    return (
        <div className={"bg-white p-4 rounded-md h-80 relative"}>
            <div className={"flex flex-row items-center justify-between"}>
                <h1 className={"text-xl font-semibold"}>Performance</h1>
                <Image src={"/moreDark.png"} alt={"moreDark.png"} width={16} height={16} />
            </div>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 2 }} responsive>
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={data}
                    cx="50%"
                    cy="60%"
                    outerRadius="90%"
                    innerRadius={70}
                    fill="#8884d8"
                />
            </PieChart>
            <div className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"}>
                <h1 className={"text-3xl font-bold"}>9.2</h1>
                <p className={"text-xs"}>of 10 Max TS</p>
            </div>
            <div>
                <h2 className={"font-medium absolute bottom-[3rem] left-0 right-0 m-auto text-center"}>1st Semester - 2nd Semester</h2>
            </div>
        </div>
    )
}

export default PerformanceChart
