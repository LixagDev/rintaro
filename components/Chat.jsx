"use client"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {ConvertTime} from "@/functions/Utils";

export default function Chat({...props}){
    const chat = props.chat;

    return(
        <div className={"w-full flex items-start gap-2 border-b-2 p-4"}>
            <Avatar>
                <AvatarImage src={chat.user.image} />
                <AvatarFallback>{chat.user.name[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className={"flex flex-col"}>
                <div className={"flex gap-2 items-center"}>
                    <span>{chat.user.name}</span>
                    <span className={"text-xs text-zinc-600"}>{ConvertTime(chat.created_at)}</span>
                </div>
                <span className={"whitespace-break-spaces"}>{chat.content}</span>
            </div>
        </div>
    );
}