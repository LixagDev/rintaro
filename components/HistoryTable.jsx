"use client"
import Debug from "@/components/Debug";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {SoftwaresData} from "@/data/data";
import {DeleteHistory, UpdateHistoryDownloaded} from "@/functions/DataManager";
import {useState} from "react";
import {Loader2} from "lucide-react";

export default function HistoryTable({...props}){
    const router = useRouter();
    const software = SoftwaresData();
    const session = props.session;
    const [userHistory, setUserHistory] = useState(props.userHistory);
    const [isLoading, setIsLoading] = useState(false);

    const deleteHistory = async () => {
        setIsLoading(true);
        await DeleteHistory(session)
            .then(() => {
                setUserHistory([]);
                setIsLoading(false);
            });
    }

    const download = async (e, {downloadLink, historyId}) => {
        e.target.disabled = true;
        await UpdateHistoryDownloaded(historyId)
            .then(() => {
                router.push(downloadLink);
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
                                    <div className={"flex items-center gap-2"}>
                                        {software[history.softwareId].logo}
                                        <span className={"basis-2/3"}>{history.name}</span>
                                        <div className={"basis-1/3 flex justify-end"}>
                                            <Button onClick={(e) => download(e, {downloadLink: history.downloadLink, historyId: history.id})} disabled={history.isDownloaded}>Télécharger</Button>
                                        </div>
                                    </div>
                                );
                            })
                    }
                </div>
            </div>
        </>
    );
}