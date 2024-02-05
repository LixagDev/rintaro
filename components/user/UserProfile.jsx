"use client"
import {
    Avatar,
    AvatarImage,
    AvatarFallback
} from "@/components/ui/avatar";
import {Separator} from "@/components/ui/separator";
import {GetRintaroJoinDate} from "@/functions/Utils";
import {Button} from "@/components/ui/button";
import {Pencil, Youtube, RefreshCw} from "lucide-react";
import EditProfileModal from "@/components/wrappers/modals/EditProfileModal";


export default function UserProfile({...props}){
    const session = props.session;
    const userData = props.userData;
    const imageConvert = userData.stats.imageConvert;
    const youtubeDl = userData.stats.youtubeDl;

    return(
        <div className={"relative flex flex-col border rounded-xl mr-auto ml-auto w-1/2 backdrop-blur-sm p-4 gap-4"}>
            {
                session.user.name === userData.name ? <EditProfileModal session={session}><Button className={"absolute right-4"} size={"icon"} variant={"outline"}><Pencil className={"w-5"}/></Button></EditProfileModal>
                    : null
            }
            <div className={"flex gap-2 justify-center"}>
                <Avatar className={"w-32 h-32"}>
                    <AvatarImage draggable={false} src={userData.image} className={"object-cover"}/>
                    <AvatarFallback>{userData.name[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className={"flex flex-col justify-center"}>
                    <span className={"font-bold text-3xl"}>{userData.name}</span>
                    <span
                        className={"text-zinc-500"}>À rejoint Rintaro en {GetRintaroJoinDate(userData.created_at)}</span>
                </div>
            </div>
            <Separator/>
            <div className={"flex flex-col gap-4"}>
                <div className={"flex gap-4"}>
                    <div className={"flex flex-col border rounded-xl p-4 gap-2 w-1/2"}>
                        <div className={"flex"}>
                            <span className={"flex basis-2/3 font-semibold justify-start"}>Images converties</span>
                            <div className={"flex basis-1/3 justify-end"}>
                                <RefreshCw className={"text-zinc-500"}/>
                            </div>
                        </div>
                        <div className={"flex"}>
                            <span className={"font-bold text-3xl"}>{imageConvert}</span>
                        </div>
                    </div>
                    <div className={"flex flex-col border rounded-xl p-4 gap-2 w-1/2"}>
                        <div className={"flex"}>
                            <span className={"flex basis-2/3 font-semibold justify-start"}>Vidéos Youtube téléchargés</span>
                            <div className={"flex basis-1/3 justify-end"}>
                                <Youtube className={"text-zinc-500"}/>
                            </div>
                        </div>
                        <div className={"flex"}>
                            <span className={"font-bold text-3xl"}>{youtubeDl}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}