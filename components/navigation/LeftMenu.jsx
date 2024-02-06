"use client"
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import MenuItem from "@/components/ui/menu-item";
import {Settings, User, Github, LogOut, Home, History} from "lucide-react";
import {useRouter} from "next-nprogress-bar";
import {signOut} from "next-auth/react";
import {SoftwaresData} from "@/data/data";
import {Separator} from "@/components/ui/separator";
import {Badge} from "@/components/ui/badge";
import SettingsModal from "@/components/wrappers/modals/SettingsModal";
import {Button} from "@/components/ui/button";

export default function LeftMenu({...props}){
    const router = useRouter();
    const softwares = SoftwaresData();
    const session = props.session;

    return(
        <>
            <div className={"flex flex-col w-full border-r-2 h-full p-4 bg-background"}>
                <div className={"flex flex-col basis-1/3"}>
                    <div className={"flex gap-2 items-center"}>
                        <Avatar className={"w-12 h-12"}>
                            <AvatarImage className={"object-cover"} draggable={false} src={session.user.image}></AvatarImage>
                            <AvatarFallback>{session.user.name[0].toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className={"flex flex-col"}>
                            <Button onClick={() => router.push(`/profile/${session.user.name}`)} variant="link" className={"font-bold w-fit h-fit p-0 text-md"}>{session.user.name}</Button>
                            <span className={"text-zinc-500 text-sm"}>{session.user.email}</span>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col justify-center basis-1/3"}>
                    <MenuItem onClick={() => router.push("/")} icon={<Home className={"w-4 mr-1"}/>}>Accueil</MenuItem>
                    <MenuItem onClick={() => router.push("/history")} icon={<History className={"w-4 mr-1"}/>}>Historique <Badge>Beta</Badge></MenuItem>
                    <Separator className={"mt-1 mb-1"}/>
                    {
                        softwares.map((software) => {
                            return (
                                <MenuItem onClick={() => router.push(software.href)}
                                          icon={software.logo}>{software.name} {software.beta ?
                                    <Badge>Beta</Badge> : null}</MenuItem>
                            );
                        })
                    }
                </div>
                <div className={"flex flex-col flex-col-reverse basis-1/3"}>
                    <MenuItem onClick={() => signOut()} icon={<LogOut className={"w-4 mr-1"}/>}>Se
                        déconnecter</MenuItem>
                    <SettingsModal session={session}><MenuItem icon={<Settings className={"w-4 mr-1"}/>}>Paramètres</MenuItem></SettingsModal>
                    <MenuItem onClick={() => router.push("https://github.com/LixagDev/rintaro")}
                              icon={<Github className={"w-4 mr-1"}/>}>GitHub</MenuItem>
                    <MenuItem onClick={() => router.push(`/profile/${session.user.name}`)}
                              icon={<User className={"w-4 mr-1"}/>}>Profil</MenuItem>
                </div>
            </div>
        </>
    );
}