"use client"
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import MenuItem from "@/components/ui/menu-item";
import {Settings, User, Github, LogOut, Home} from "lucide-react";
import {useRouter} from "next/navigation";
import {signOut} from "next-auth/react";
import {SoftwaresData} from "@/data/data";
import {Separator} from "@/components/ui/separator";
import {Badge} from "@/components/ui/badge";

export default function LeftMenu({...props}){
    const router = useRouter();
    const softwares = SoftwaresData();
    const session = props.session;

    return(
        <div className={"flex flex-col w-full border-r-2 h-full p-4 bg-background"}>
            <div className={"flex flex-col basis-1/3"}>
                <div className={"flex gap-2 items-center"}>
                    <Avatar className={"w-12 h-12"}>
                        <AvatarImage draggable={false} src={session.user.image}></AvatarImage>
                        <AvatarFallback>{session.user.name[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className={"flex flex-col"}>
                        <span className={"font-bold"}>{session.user.name}</span>
                        <span className={"text-zinc-500 text-sm"}>{session.user.email}</span>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col justify-center basis-1/3"}>
                <MenuItem onClick={() => router.push("/")} icon={<Home className={"w-4 mr-1"}/>}>Accueil</MenuItem>
                <Separator/>
                {
                    softwares.map((software) => {
                        return(
                            <MenuItem onClick={() => router.push(software.href)} icon={software.logo}>{software.name}</MenuItem>
                        );
                    })
                }
            </div>
            <div className={"flex flex-col flex-col-reverse basis-1/3"}>
                <MenuItem onClick={() => signOut()} icon={<LogOut className={"w-4 mr-1"}/>}>Se déconnecter</MenuItem>
                <MenuItem icon={<Settings className={"w-4 mr-1"}/>}>Paramètres</MenuItem>
                <MenuItem onClick={() => router.push("https://github.com/LixagDev/rintaro")} icon={<Github className={"w-4 mr-1"}/>}>GitHub</MenuItem>
                <MenuItem icon={<User className={"w-4 mr-1"}/>}>Profil</MenuItem>
            </div>
        </div>
    )
}