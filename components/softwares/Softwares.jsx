"use client"
import {Rotate3D, TestTube} from "lucide-react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {useRouter} from "next/navigation";
import {SoftwareContextMenuWrapper} from "@/components/wrappers/SoftwareContextMenuWrapper";

export default function Softwares(){
    const router = useRouter();

    const softwares = [
        {id: 0, name: "Konvertissor", description: "Convertissez vos images en l'extension que vous souhaitez.", href: "/convert", logo: <Rotate3D size={40}/>},
        {id: 1, name: "Test", description: "Description", href: "/tes", logo: <TestTube size={40}/>},
    ];

    return(
        <div className={"flex flex-wrap justify-center gap-7"}>
            {
                softwares.map((software) => {
                    return(
                        <SoftwareContextMenuWrapper software={software}>
                            <HoverCard key={software.id}>
                                <HoverCardTrigger>
                                    <div onClick={() => router.push(software.href)} className={"flex flex-col items-center justify-center cursor-pointer"}>
                                        <div
                                            className={"flex items-center justify-center p-5 backdrop-blur-sm border rounded-xl"}>
                                            {software.logo}
                                        </div>
                                        <h2>{software.name}</h2>
                                    </div>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <div className={"flex"}>
                                        <div className={"basis-1/3 flex items-center"}>{software.logo}</div>
                                        <div className={"flex flex-col basis-2/3"}>
                                            <h2 className={"font-bold text-md"}>{software.name}</h2>
                                            <h2 className={"text-sm"}>{software.description}</h2>
                                        </div>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </SoftwareContextMenuWrapper>
                    );
                })
            }
        </div>
    );
}