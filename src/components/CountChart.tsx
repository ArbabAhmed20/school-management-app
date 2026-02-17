"use client"

import {Legend, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip} from "recharts";
import Image from "next/image";

// #region Sample data
const data = [
    {
        name: 'Total',
        count: 106,
        fill: 'white',
    },
    {
        name: 'Girls',
        count: 50,
        fill: '#fef08a',
    },
    {
        name: 'Boys',
        count: 50,
        fill: '#bfdbfe',
    },
];

// #endregion
const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

const CountChart = () => {
    return (
        <div className={"w-full h-full rounded-xl bg-white p-4"}>
            <div className={"flex justify-between items-center"}>
                <h1 className={"text-lg font-semibold"}>Students</h1>
                <Image src={"/moreDark.png"} alt={"moreDark.png"} width={20} height={20} />
            </div>
            <div className="relative w-full h-[75%]">
                <ResponsiveContainer>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={32}
                        data={data}
                    >
                        <RadialBar background dataKey="count" />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image
                    src="/maleFemale.png"
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>
            <div className={"flex justify-center gap-16"}>
                <div className={"flex flex-col gap-1"}>
                    <div className={"w-5 h-5 bg-blue-200 rounded-full"}/>
                    <h1 className={"font-bold"}>count</h1>
                    <h2 className={"text-sm text-gray-500"}>Boys%</h2>
                </div>
                <div className={"flex flex-col gap-1"}>
                    <div className={"w-5 h-5 bg-yellow-200 rounded-full"}/>
                    <h1 className={"font-bold"}>count</h1>
                    <h2 className={"text-sm text-gray-500"}>Girls%</h2>
                </div>
            </div>

        </div>
    );
};
export default CountChart;