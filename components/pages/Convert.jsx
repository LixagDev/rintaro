"use client"
import Navbar from "@/components/navigation/Navbar";
import {ThemeToggle} from "@/components/theme/ThemeToggle";
import Converter from "@/components/softwares/Converter";
import {SoftwaresData} from "@/data/data";
import SoftwareTitle from "@/components/softwares/SoftwareTitle";
import SearchMenu from "@/components/SearchMenu";

export default function Convert({...props}){
    const session = props.session;
    const actualSoftwareName = SoftwaresData()[0].name;
    const actualSoftwareDescription = SoftwaresData()[0].description;

    return(
        <>
            <div className={"flex flex-col gap-7"}>
                <Navbar session={session}/>
                <SoftwareTitle title={actualSoftwareName} description={actualSoftwareDescription}/>
                <Converter/>
            </div>
            <ThemeToggle/>
            <SearchMenu/>
        </>
    )
}