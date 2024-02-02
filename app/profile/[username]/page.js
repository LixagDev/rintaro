import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {init} from "@/functions/DataManager";
import {redirect} from "next/navigation";

export default async function index({params}){
    let session = await getServerSession(authOptions);
    const requestUsername = params.username;

    if (session){
        session = await init(session);
        return <div>
            {requestUsername}
        </div>;
    }
    else redirect("/");
}