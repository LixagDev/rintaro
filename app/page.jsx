import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {getProviders} from "next-auth/react";
import Welcome from "@/components/pages/Welcome";
import Home from "@/components/pages/Home";
import {init, GetUserStats} from "@/functions/DataManager";

export default async function index(){
    let session = await getServerSession(authOptions);
    const providers = await getProviders();

    if (session){
        session = await init(session);
        session.user.stats = await GetUserStats(session.user.id);
        return <Home session={session}/>;
    }
    else return <Welcome providers={providers}/>
}