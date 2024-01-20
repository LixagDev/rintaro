"use client"
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuTrigger,
    ContextMenuLabel
} from "@/components/ui/context-menu"
import {ArrowUpRightSquare} from "lucide-react";
import {useRouter} from "next/navigation";

export function SoftwareContextMenuWrapper({children, ...props}){
    const software = props.software;
    const router = useRouter();

    return (
        <ContextMenu>
            <ContextMenuTrigger>
                {children}
            </ContextMenuTrigger>
            <ContextMenuContent className="w-56">
                <ContextMenuLabel>
                    {software.name}
                </ContextMenuLabel>
                <ContextMenuSeparator/>
                <ContextMenuItem onClick={() => router.push(software.href)}>
                    <ArrowUpRightSquare className="mr-2 h-4 w-4"/>
                    Ouvrir
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    )
}
