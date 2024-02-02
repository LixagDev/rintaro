"use client"
import AuthButton from "@/components/AuthButton";
import {ThemeToggle} from "@/components/theme/ThemeToggle";

export default function Welcome({...props}){
    return(
        <>
            <div className={"flex h-full"}>
                <div className={"flex flex-col basis-1/2 justify-center items-center"}>
                    <h1 className={"font-black text-7xl"}>Rintaro</h1>
                    <h2 className={"font-medium text-xl"}>Une application simple, efficace, toute en un.</h2>
                </div>
                <div className={"flex basis-1/2 justify-center items-center"}>
                    <AuthButton providers={props.providers}></AuthButton>
                </div>
            </div>
            <ThemeToggle/>
        </>
    );
}
