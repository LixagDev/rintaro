"use client"
import {ThemeToggle} from "@/components/theme/ThemeToggle";
import SoftwareTitle from "@/components/softwares/SoftwareTitle";
import {SoftwaresData} from "@/data/data";
import YoutubeDownloader from "@/components/softwares/YoutubeDownloader";
import DisableContextMenu from "@/functions/DisableContextMenu";
import LeftMenu from "@/components/navigation/LeftMenu";
import Title from "@/components/Title";

export default function Youtube({...props}){
    const session = props.session;
    const actualSoftwareName = SoftwaresData()[1].name;
    const actualSoftwareDescription = SoftwaresData()[1].description;

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
                        <YoutubeDownloader/>
                    </div>
                </div>
            </div>
            <ThemeToggle/>
        </>
    );
}