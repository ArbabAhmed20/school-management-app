"use client"

import React from 'react'

function Announcements() {
    return (
        <div className={"bg-white rounded-lg p-4 h-full"}>
            <div className={"flex items-center justify-between"}>
                <h1 className={"text-xl font-semibold"}>Announcements</h1>
                <span className={"text-xs"}>View All</span>
            </div>
            <div className={"flex flex-col gap-4 mt-4"}>
                <div className={"bg-[#bfdbfe] rounded-md p-4"}>
                <div className={"flex items-center justify-between"}>
                     <h2 className={"font-medium "}>Lorem ipsum dolor sit amet, consectetur.</h2>
                    <span className={"text-sm bg-white rounded-md px-1 py-1"}>
                        Date
                    </span>
                </div>
                    <p className={"text-xs mt-1"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className={"bg-[#bfdbfe] rounded-md p-4"}>
                    <div className={"flex items-center justify-between"}>
                        <h2 className={"font-medium "}>Lorem ipsum dolor sit amet, consectetur.</h2>
                        <span className={"text-sm bg-white rounded-md px-1 py-1"}>
                        Date
                    </span>
                    </div>
                    <p className={"text-xs mt-1"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className={"bg-[#bfdbfe] rounded-md p-4"}>
                    <div className={"flex items-center justify-between"}>
                        <h2 className={"font-medium "}>Lorem ipsum dolor sit amet, consectetur.</h2>
                        <span className={"text-sm bg-white rounded-md px-1 py-1"}>
                        Date
                    </span>
                    </div>
                    <p className={"text-xs mt-1"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}

export default Announcements
