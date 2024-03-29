"use client"

export default function SoftwareTitle({...props}){
    const softwareTitle = props.title;
    const softwareDescription = props.description;

    return(
        <div className={"flex flex-col items-center justify-center"}>
            <h2 className={"font-bold text-5xl"}>{softwareTitle}</h2>
            <h2 className={"font-medium text-xl text-center"}>{softwareDescription}</h2>
        </div>
    );
}