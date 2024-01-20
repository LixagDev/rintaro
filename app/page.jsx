import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {getProviders} from "next-auth/react";
import Welcome from "@/components/pages/Welcome";
import Home from "@/components/pages/Home";
export default async function index(){
    const session = await getServerSession(authOptions);
    const providers = await getProviders();

    if (!session) return <Welcome session={session} providers={providers}/>;
    else return <Home session={session}/>;
}