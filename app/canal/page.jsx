import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {init, getChats} from "@/functions/DataManager";
import Canal from "@/components/pages/Canal";
import {redirect} from "next/navigation";

export default async function index(){
    let session = await getServerSession(authOptions);

    if (session){
        session = await init(session);
        const chats = await getChats();
        return <Canal session={session} chats={chats}/>
    }
    else redirect("/");
}