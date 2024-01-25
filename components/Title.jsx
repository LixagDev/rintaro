"use client"

export default function Title({children, ...props}){
    return(
        <div className={"flex w-full p-5 items-center border-b-2 sticky top-0 bg-background z-10"}>
            <h2 className={"font-bold text-lg"}>Rintaro - {children}</h2>
        </div>
    );
}