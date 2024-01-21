"use client"
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuTrigger,
    ContextMenuLabel
} from "@/components/ui/context-menu"
import {useRouter} from "next/navigation";

export default function ConvertContextMenuWrapper({children, ...props}){
    const file = props.file;

    return (
        <ContextMenu>
            <ContextMenuTrigger className={"w-full"}>
                {children}
            </ContextMenuTrigger>
            <ContextMenuContent className="w-56">
                <ContextMenuLabel>
                    {file.name}
                </ContextMenuLabel>
                <ContextMenuSeparator/>
            </ContextMenuContent>
        </ContextMenu>
    )
}
