"use client"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {Badge} from "@/components/ui/badge";
import {useRouter} from "next/navigation";
import SoftwareContextMenuWrapper from "@/components/wrappers/ContextMenu/SoftwareContextMenuWrapper";
import {SoftwaresData} from "@/data/data";

export default function Softwares(){
    const router = useRouter();
    const softwares = SoftwaresData();

    return(
        <div className={"flex flex-col gap-4"}>
            {
                softwares.map((software) => {
                    return(
                        <div className={"p-4 rounded-md flex bg-zinc-500 items-center"}>
                            <div className={"w-10"}>
                                {software.logo}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}