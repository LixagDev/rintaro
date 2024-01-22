"use client"

export default function SoftwareTitle({...props}){
    const softwareTitle = props.title;
    const softwareDescription = props.description;

    return(
        <div className={"flex flex-col items-center justify-center w-full"}>
            <h2 className={"font-bold text-5xl"}>{softwareTitle}</h2>
            <h2 className={"font-medium textt-3xl"}>{softwareDescription}</h2>
        </div>
    );
}