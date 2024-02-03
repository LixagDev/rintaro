"use client"

export default function Debug({children}){
    return(
        <div className={"border p-3 backdrop-blur-sm rounded-xl"}>
            <span className={"font-mono"}>DEBUG_{children}</span>
        </div>
    );
}