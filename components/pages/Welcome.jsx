"use client"
import AuthButton from "@/components/AuthButton";
import {DisableContextMenu} from "@/functions/UI";

export default function Welcome({...props}){
    DisableContextMenu();

    return(
        <div className={"flex h-full"}>
            <div className={"flex flex-col basis-1/2 justify-center items-center"}>
                <h1 className={"font-black text-7xl"}>Rintaro</h1>
                <h2 className={"font-medium text-xl"}>Votre application toute en un.</h2>
            </div>
            <div className={"flex basis-1/2 justify-center items-center"}>
                <AuthButton session={props.session} providers={props.providers}></AuthButton>
            </div>
        </div>
    );
}
