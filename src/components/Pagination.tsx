import React from 'react'

function Pagination() {
    return (
        <div className={"p-4 flex items-center justify-between "}>
            <button disabled className={"px-2 py-2 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"}>
                Previous
            </button>
            <div className={""}>
                <button className={"px-2 rounded-sm bg-[#bfdbfe] text-xs"}>1</button>
                <button className={"px-2 rounded-sm text-xs"}>2</button>
                <button className={"px-2 rounded-sm text-xs"}>3</button>
                ...
                <button className={"px-2 rounded-sm text-xs"}>10</button>
            </div>
            <button className={"px-2 py-2 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"}>
                Next
            </button>
        </div>
    )
}

export default Pagination
