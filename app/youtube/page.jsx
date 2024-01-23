import Youtube from "@/components/pages/Youtube";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {redirect} from "next/navigation";

export default async function index(){
    const session = await getServerSession(authOptions);

    if (session) return <Youtube session={session} />;
    else redirect("/");
}