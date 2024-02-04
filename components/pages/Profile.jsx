"use client"
import LeftMenu from "@/components/navigation/LeftMenu";
import Title from "@/components/navigation/Title";
import Debug from "@/components/Debug"
import UserProfile from "@/components/user/UserProfile";

export default function Profile({...props}){
    const session = props.session;
    const userData = props.userData;

    return (
        <div className={"lg:flex h-full hidden"}>
            <div className={"basis-1/6 h-full"}>
                <LeftMenu session={session}/>
            </div>
            <div className={"basis-5/6 h-full flex flex-col overflow-y-auto overflow-x-hidden"}>
                <Title>Profil de {userData.name}</Title>
                <div className={"h-full w-full p-4 flex flex-col gap-5"}>
                    {session.user.settings.devMode ? <Debug>REQUEST_USER : {JSON.stringify(userData)}</Debug> : null}
                    <UserProfile session={session} userData={userData}/>
                </div>
            </div>
        </div>
    );
}