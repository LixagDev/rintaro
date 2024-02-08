"use client"
import Debug from "@/components/Debug";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {SoftwaresData} from "@/data/data";
import {DeleteHistory, UpdateHistoryDownloaded} from "@/functions/DataManager";
import {useState} from "react";
import {Loader2} from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {ConvertTime} from "@/functions/Utils";

export default function HistoryTable({...props}){
    const router = useRouter();
    const softwares = SoftwaresData();
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
            <div className={"flex flex-col w-full gap-4 mr-auto ml-auto"}>
                <Button disabled={(isLoading || userHistory.length === 0)} onClick={deleteHistory} className={"w-fit ml-auto"}>{isLoading ? <><Loader2 className={"animate-spin w-4 mr-2"}/> Suppression</> : "Supprimer"}</Button>
                <Table className={"backdrop-blur-sm border rounded-xl overflow-hidden border-separate border-spacing-0"}>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Logiciel</TableHead>
                            <TableHead>Nom</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            userHistory.map((history) => {
                                return(
                                    <TableRow key={history.id}>
                                        <TableCell>{softwares[history.softwareId].logo}</TableCell>
                                        <TableCell>{history.name}</TableCell>
                                        <TableCell>{ConvertTime(history.created_at)}</TableCell>
                                        <TableCell className={"flex flex-row-reverse"}><Button disabled={history.isDownloaded} onClick={(e) => download(e, {downloadLink: history.downloadLink, historyId: history.id})}>Télécharger</Button></TableCell>
                                    </TableRow>
                                );
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        </>
    );
}