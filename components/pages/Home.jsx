"use client"
import WelcomeText from "@/components/WelcomeText";
import {ThemeToggle} from "@/components/theme/ThemeToggle";
import LeftMenu from "@/components/navigation/LeftMenu";
import Title from "@/components/Title"

export default function Home({...props}){
    const session = props.session;

    return(
        <>
            <div className={"lg:flex h-full hidden"}>
                <div className={"basis-1/6 h-full"}>
                    <LeftMenu session={session}/>
                </div>
                <div className={"basis-5/6 h-full flex flex-col overflow-y-auto overflow-x-hidden"}>
                    <Title>Acceuil</Title>
                    <div className={"h-full w-full p-4 flex flex-col gap-5"}>
                        <WelcomeText session={session}/>
                    </div>
                </div>
            </div>
            <ThemeToggle/>
        </>
    );
}