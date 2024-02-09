import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {init, GetUserData, GetUserStats} from "@/functions/DataManager";
import {redirect} from "next/navigation";
import Profile from "@/components/pages/Profile";

export default async function index({params}){
    let session = await getServerSession(authOptions);
    const requestUsername = decodeURI(params.username);

    if (session){
        session = await init(session);
        const userData = await GetUserData(requestUsername);
        if (userData){
            userData.stats = await GetUserStats(userData.id);
            return <Profile session={session} userData={userData}/>;
        }
        else redirect("/");
    }
    else redirect("/");
}