import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {init, GetUserHistory} from "@/functions/DataManager";
import {redirect} from "next/navigation";
import History from "@/components/pages/History";

export default async function index({params}){
    let session = await getServerSession(authOptions);

    if (session){
        const userHistory = await GetUserHistory(session);
        session = await init(session);
        return <History session={session} userHistory={userHistory}/>
    }
    else redirect("/");
}