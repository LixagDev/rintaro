"use client"
import Navbar from "@/components/navigation/Navbar";
import {ThemeToggle} from "@/components/theme/ThemeToggle";
import SoftwareTitle from "@/components/softwares/SoftwareTitle";
import {SoftwaresData} from "@/data/data";
import SearchMenu from "@/components/SearchMenu";
import YoutubeDownloader from "@/components/softwares/YoutubeDownloader";

export default function Youtube({...props}){
    const session = props.session;
    const actualSoftwareName = SoftwaresData()[1].name;
    const actualSoftwareDescription = SoftwaresData()[1].description;

    return(
        <>
            <div className={"flex flex-col gap-7"}>
                <Navbar session={session}/>
                <SoftwareTitle title={actualSoftwareName} description={actualSoftwareDescription}/>
                <YoutubeDownloader />
            </div>
            <ThemeToggle/>
            <SearchMenu/>
        </>
    );
}