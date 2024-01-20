"use client"
import {Button} from "@/components/ui/button";
import {signIn} from "next-auth/react";

export default function AuthButton({...props}){
    const providers = props.providers;
    return(
        <div className={"flex flex-col"}>
            <Button onClick={() => signIn(providers.discord.id)}>Se connecter avec {providers.discord.name}</Button>
        </div>
    );
}