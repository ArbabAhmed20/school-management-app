"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import React from 'react'
import Image from "next/image";

const data = [
    {
        name: "Jan",
        income: 4000,
        expense: 2400,
    },
    {
        name: "Feb",
        income: 3000,
        expense: 1398,
    },
    {
        name: "Mar",
        income: 2000,
        expense: 9800,
    },
    {
        name: "Apr",
        income: 2780,
        expense: 3908,
    },
    {
        name: "May",
        income: 1890,
        expense: 4800,
    },
    {
        name: "Jun",
        income: 2390,
        expense: 3800,
    },
    {
        name: "Jul",
        income: 3490,
        expense: 4300,
    },
    {
        name: "Aug",
        income: 3490,
        expense: 4300,
    },
    {
        name: "Sep",
        income: 3490,
        expense: 4300,
    },
    {
        name: "Oct",
        income: 3490,
        expense: 4300,
    },
    {
        name: "Nov",
        income: 3490,
        expense: 4300,
    },
    {
        name: "Dec",
        income: 3490,
        expense: 4300,
    },
];

function FinanceChart() {
    return (
        <div className={"bg-white rounded-lg p-4 h-full"}>
            <div className={"flex flex-row items-center justify-between"}>
                <h1 className={"text-lg font-semibold"}>Finance</h1>
                <Image src={"/moreDark.png"} alt={"moreDark.png"} width={20} height={20} />
            </div>
            <LineChart
                style={{ width: '100%', maxWidth: '1000px', height: '90%', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                {/*<CartesianGrid strokeDasharray="3 3" />*/}
                <XAxis dataKey="name" tickLine={false} />
                <YAxis width="auto" tickLine={false} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="income" stroke="#bfdbfe" strokeWidth={5} />
                <Line type="monotone" dataKey="expense" stroke="#fef08a" strokeWidth={5} />
            </LineChart>
        </div>
    )
}

export default FinanceChart
