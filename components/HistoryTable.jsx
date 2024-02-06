"use client"
import Debug from "@/components/Debug";
import {Button} from "@/components/ui/button";
import {useRouter} from "next-nprogress-bar";
import {SoftwaresData} from "@/data/data";
import {DeleteHistory} from "@/functions/DataManager";
import {useState} from "react";
import {Loader2} from "lucide-react";

export default function HistoryTable({...props}){
    const router = useRouter();
    const software = SoftwaresData();
    const session = props.session;
    const userHistory = props.userHistory;
    const [isLoading, setIsLoading] = useState(false);

    const deleteHistory = async () => {
        setIsLoading(true);
        await DeleteHistory(session)
            .then(() => {
                router.refresh();
                setIsLoading(false);
            });
    }

    return(
        <>
            {session.user.settings.devMode ? <Debug>HISTORY : {JSON.stringify([userHistory, `SIZE : ${userHistory.length}`])}</Debug> : null}
            <div className={"flex flex-col w-11/12 gap-4 mr-auto ml-auto"}>
                <Button disabled={(isLoading || userHistory.length === 0)} onClick={deleteHistory} className={"w-fit ml-auto"}>{isLoading ? <><Loader2 className={"animate-spin w-4 mr-2"}/> Suppression</> : "Supprimer"}</Button>
                <div className={"flex flex-col border rounded-xl p-4 gap-2 backdrop-blur-sm"}>
                    {
                        userHistory.length === 0 ? <span className={"text-center"}>L'historique est vide.</span>
                            : userHistory.map((history) => {
                                return(
                                    <div className={"flex items-center"}>
                                        {software[history.softwareId].logo}
                                        <span>{history.name}</span>
                                    </div>
                                );
                            })
                    }
                </div>
            </div>
        </>
    );
}