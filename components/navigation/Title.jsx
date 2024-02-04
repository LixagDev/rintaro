"use client"
import {ThemeToggle} from "@/components/theme/ThemeToggle";

export default function Title({children}){
    return(
        <div className={"flex w-full p-5 items-center border-b-2 sticky top-0 bg-background z-10"}>
            <h2 className={"font-bold text-lg basis-1/2"}>Rintaro - {children}</h2>
            <div className={"basis-1/2 flex justify-end"}>
                <ThemeToggle/>
            </div>
        </div>
    );
}