import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import Convert from "@/components/pages/Convert";
import {redirect} from "next/navigation";
import {init} from "@/functions/DataManager";

export default async function index(){
    let session = await getServerSession(authOptions);

    if (session){
        session = await init(session);
        return <Convert session={session} />;
    }
    else redirect("/");
}