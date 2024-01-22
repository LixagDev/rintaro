"use client"
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuTrigger,
    ContextMenuLabel
} from "@/components/ui/context-menu"

export default function ConvertContextMenuWrapper({children, ...props}){
    const file = props.file;

    return(
        <ContextMenu>
            <ContextMenuTrigger>
                {children}
            </ContextMenuTrigger>
            <ContextMenuContent className="w-56">
                <ContextMenuLabel>
                    {file.name}
                </ContextMenuLabel>
                <ContextMenuSeparator/>
            </ContextMenuContent>
        </ContextMenu>
    );
}