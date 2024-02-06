"use client"
import {
    Avatar,
    AvatarImage,
    AvatarFallback
} from "@/components/ui/avatar";

export default function WelcomeText({...props}){
    const session = props.session;
    const getTime = () => {
        const today = new Date();
        const hour = today.getHours();
        return hour < 18;
    }
    const isDay = getTime();

    return(
        <div className={"flex justify-center items-center gap-1"}>
            <div className={"flex flex-col items-center"}>
                <h2 className={"font-bold text-5xl"}>{isDay ? "Bonjour" : "Bonsoir"} {session.user.name} !</h2>
                <h3 className={"font-medium text-xl"}>On fait quoi {isDay ? "aujourd'hui" : "ce soir"} ?</h3>
            </div>
            <Avatar className={"w-28 h-28"}>
                <AvatarImage draggable={false} src={session.user.image} className={"object-cover"}/>
                <AvatarFallback>{session.user.name[0].toUpperCase()}</AvatarFallback>
            </Avatar>
        </div>
    );
}