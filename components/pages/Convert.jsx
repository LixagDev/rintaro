"use client"
import {ThemeToggle} from "@/components/theme/ThemeToggle";
import Converter from "@/components/softwares/Converter";
import {SoftwaresData} from "@/data/data";
import SoftwareTitle from "@/components/softwares/SoftwareTitle";
import LeftMenu from "@/components/navigation/LeftMenu";
import Title from "@/components/Title";
import DisableContextMenu from "@/functions/DisableContextMenu";

export default function Convert({...props}){
    const session = props.session;
    const actualSoftwareName = SoftwaresData()[0].name;
    const actualSoftwareDescription = SoftwaresData()[0].description;

    DisableContextMenu();
    
    return(
        <>
            <div className={"lg:flex h-full hidden"}>
                <div className={"basis-1/6 h-full"}>
                    <LeftMenu session={session}/>
                </div>
                <div className={"basis-5/6 h-full flex flex-col overflow-y-auto overflow-x-hidden"}>
                    <Title>{actualSoftwareName}</Title>
                    <div className={"h-full w-full p-4 flex flex-col gap-5"}>
                        <SoftwareTitle title={actualSoftwareName} description={actualSoftwareDescription}/>
                        <Converter session={session}/>
                    </div>
                </div>
            </div>
            <ThemeToggle/>
        </>
    );
}