"use client"
import {Button} from "@/components/ui/button";
import {signIn} from "next-auth/react";
import {Separator} from "@/components/ui/separator";

export default function AuthButton({...props}){
    const providers = props.providers;
    return(
        <div className={"flex flex-col gap-2"}>
            <Button onClick={() => signIn(providers.google.id)}>Continuer avec {providers.google.name}</Button>
            <span className={"text-center m-0"}>ou</span>
            <Button onClick={() => signIn(providers.discord.id)}>Continuer avec {providers.discord.name}</Button>
        </div>
    );
}