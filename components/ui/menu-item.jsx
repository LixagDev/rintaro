"use client"

export default function MenuItem({children, ...props}){
    return <button {...props}
        className={"relative p-1 flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"}>
        {props.icon}{children}
    </button>
}