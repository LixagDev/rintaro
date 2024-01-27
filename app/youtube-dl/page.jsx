import Youtube from "@/components/pages/Youtube";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {redirect} from "next/navigation";
import {init} from "@/functions/DataManager";

export default async function index(){
    let session = await getServerSession(authOptions);

    if (session){
        session = await init(session);
        return <Youtube session={session} />;
    }
    else redirect("/");
}