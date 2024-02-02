import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {getProviders} from "next-auth/react";
import Welcome from "@/components/pages/Welcome";
import Home from "@/components/pages/Home";
import {init} from "@/functions/DataManager";

export default async function index(){
    let session = await getServerSession(authOptions);
    const providers = await getProviders();

    if (session){
        session = await init(session);
        console.log(session);
        return <Home session={session}/>;
    }
    else return <Welcome providers={providers}/>
}