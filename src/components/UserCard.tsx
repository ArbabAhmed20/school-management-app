import Image from "next/image";

const UserCard = ({type}: {type: string}) => {
    return (
        <div className={"rounded-2xl odd:bg-gray-700 odd:text-white even:text-white even:bg-gray-500 p-4 flex-1 min-w-[130px]"}>
            <div className={"flex justify-between align-items-center"}>
                <span className={"text-[10px] bg-white px-2 py-1 rounded-full text-black"}>
                    date
                </span>
                <Image src={"/more.png"} alt={"more.png"} height={20} width={20}/>
            </div>
            <h1 className={"text-2xl font-semibold my-4"}>User Count</h1>
            <h2 className={"capitalize text-sm font-medium text-white"}>{type}</h2>

        </div>

    )
}
export default UserCard;