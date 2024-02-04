"use client"
import {
    Avatar,
    AvatarImage,
    AvatarFallback
} from "@/components/ui/avatar";
import {Separator} from "@/components/ui/separator";
import {GetRintaroJoinDate} from "@/functions/Utils";

export default function UserProfile({...props}){
    const userData = props.userData;
    const imageConvert = userData.stats.imageConvert;
    const youtubeDl = userData.stats.youtubeDl;

    return(
        <div className={"flex flex-col border rounded-xl mr-auto ml-auto w-1/2 backdrop-blur-sm p-4 gap-4"}>
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
                    <div className={"flex border rounded-xl p-4 w-1/2 items-center"}>
                        <span className={"flex basis-2/3 justify-start"}>Images converties</span>
                        <span className={"flex basis-1/3 justify-end font-bold"}>{imageConvert}</span>
                    </div>
                    <div className={"flex border rounded-xl p-4 w-1/2 items-center"}>
                        <span className={"flex basis-2/3 justify-start"}>Vidéo Youtube téléchargées</span>
                        <span className={"flex basis-1/3 justify-end font-bold"}>{youtubeDl}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}