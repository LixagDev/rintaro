import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import Convert from "@/components/pages/Convert";
import {redirect} from "next/navigation";

export default async function index(){
    const session = await getServerSession(authOptions);

    if (session) return <Convert session={session} />;
    else redirect("/");
}