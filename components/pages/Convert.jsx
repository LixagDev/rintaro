"use client"
import Navbar from "@/components/navigation/Navbar";
import {ThemeToggle} from "@/components/theme/ThemeToggle";
import Converter from "@/components/softwares/Converter";

export default function Convert({...props}){
    const session = props.session;

    return(
        <>
            <div className={"flex flex-col gap-7"}>
                <Navbar session={session}/>
                <Converter/>
            </div>
            <ThemeToggle/>
        </>
    )
}