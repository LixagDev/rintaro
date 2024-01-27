"use client"
import DisableContextMenu from "@/functions/DisableContextMenu";
import LeftMenu from "@/components/navigation/LeftMenu";
import CanalChat from "@/components/softwares/CanalChat";

export default function Canal({...props}){
    const session = props.session;
    const chats = props.chats;

    DisableContextMenu();

    return (
        <div className={"lg:flex h-full hidden"}>
            <div className={"basis-1/6 h-full"}>
                <LeftMenu session={session}/>
            </div>
            <div className={"basis-5/6 h-full flex flex-col overflow-x-hidden"}>
                <div className={"h-full w-full p-4 flex flex-col gap-5"}>
                    <CanalChat chats={chats} session={session}/>
                </div>
            </div>
        </div>
    );
}