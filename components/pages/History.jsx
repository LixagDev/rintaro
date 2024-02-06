"use client"
import LeftMenu from "@/components/navigation/LeftMenu";
import Title from "@/components/navigation/Title";
const HistoryTable = dynamic(() => import("@/components/HistoryTable"), {loading: () => <span>CHARGEMENT HISTORIQUE</span>})
import dynamic from "next/dynamic";

export default function History({...props}){
    const session = props.session;
    const userHistory = props.userHistory;

    return(
        <div className={"lg:flex h-full hidden"}>
            <div className={"basis-1/6 h-full"}>
                <LeftMenu session={session}/>
            </div>
            <div className={"basis-5/6 h-full flex flex-col overflow-y-auto overflow-x-hidden"}>
                <Title>Historique</Title>
                <div className={"h-full w-full p-4 flex flex-col gap-5"}>
                    <HistoryTable session={session} userHistory={userHistory} />
                </div>
            </div>
        </div>
    );
}