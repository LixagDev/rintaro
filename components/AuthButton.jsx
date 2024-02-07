"use client"
import {Button} from "@/components/ui/button";
import {signIn} from "next-auth/react";

export default function AuthButton({...props}){
    const providers = props.providers;
    return(
        <div className={"flex flex-col gap-2"}>
            <Button onClick={() => signIn(providers.discord.id)}>Continuer avec {providers.discord.name}</Button>
            <Button onClick={() => signIn(providers.google.id)}>Continuer avec {providers.google.name}</Button>
        </div>
    );
}