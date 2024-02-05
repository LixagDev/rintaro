"use client"
import {ThemeToggle} from "@/components/theme/ThemeToggle";
import {useEffect, useState} from "react";

export default function Title({children}){
    const [zIndex, setZIndex] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setZIndex(10)
        }, 750)
    }, []);
    return(
        <div className={"flex w-full p-5 items-center border-b-2 sticky top-0 bg-background"} style={{zIndex: zIndex}}>
            <h2 className={"font-bold text-lg basis-1/2"}>Rintaro - {children}</h2>
            <div className={"basis-1/2 flex justify-end"}>
                <ThemeToggle/>
            </div>
        </div>
    );
}