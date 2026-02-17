import Image from "next/image";

const UserCard = ({type}: {type: string}) => {
    return (
        <div className={"rounded-2xl odd:bg-purple-200 even:bg-yellow-200 p-4 flex-1 min-w-[130px]"}>
            <div className={"flex justify-between align-items-center"}>
                <span className={"text-[10px] bg-white px-2 py-1 rounded-full text-green-700"}>
                    date
                </span>
                <Image src={"/more.png"} alt={"more.png"} height={20} width={20}/>
            </div>
            <h1 className={"text-2xl font-semibold my-4"}>User Count</h1>
            <h2 className={"capitalize text-sm font-medium text-gray-500"}>{type}</h2>

        </div>

    )
}
export default UserCard;