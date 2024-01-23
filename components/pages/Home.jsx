"use client"
import Navbar from "@/components/navigation/Navbar";
import WelcomeText from "@/components/WelcomeText";
import {DisableContextMenu} from "@/functions/UI";
import Softwares from "@/components/softwares/Softwares";
import {ThemeToggle} from "@/components/theme/ThemeToggle";
import SearchMenu from "@/components/SearchMenu";

export default function Home({...props}){
    const session = props.session;
    DisableContextMenu();

    return(
        <>
            <div className={"flex flex-col gap-7"}>
                <Navbar session={session}/>
                <WelcomeText session={session}/>
                <Softwares/>
            </div>
            <ThemeToggle/>
            <SearchMenu/>
        </>
    );
}