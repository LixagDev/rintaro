"use client"
import {Separator} from "@/components/ui/separator";
import {Skeleton} from "@/components/ui/skeleton";


export default function UserProfileSkeleton({...props}){
    return(
        <div className={"relative flex flex-col border rounded-xl mr-auto ml-auto w-1/2 backdrop-blur-sm p-4 gap-4"}>
            <div className={"flex gap-2 justify-center"}>
                <Skeleton className="w-32 h-32 rounded-full" />
                <div className={"flex flex-col gap-2 justify-center"}>
                    <Skeleton className={"w-32 h-6 text-3xl"} />
                    <Skeleton className={"w-52 h-3 text-3xl"} />
                </div>
            </div>
            <Separator/>
            <div className={"flex flex-col gap-4"}>
                <div className={"flex gap-4"}>
                    <div className={"flex flex-col border rounded-xl p-4 gap-2 w-1/2"}>
                        <div className={"flex"}>
                            <div className={"flex basis-2/3 justify-start"}>
                                <Skeleton className={"w-40 h-6"}/>
                            </div>
                            <div className={"flex basis-1/3 justify-end"}>
                                <Skeleton className={"w-6 h-6"}/>
                            </div>
                        </div>
                        <div className={"flex"}>
                            <Skeleton className={"w-12 h-8 mt-2"}/>
                        </div>
                    </div>
                    <div className={"flex flex-col border rounded-xl p-4 gap-2 w-1/2"}>
                        <div className={"flex"}>
                            <div className={"flex basis-2/3 justify-start"}>
                                <Skeleton className={"w-52 h-6"}/>
                            </div>
                            <div className={"flex basis-1/3 justify-end"}>
                                <Skeleton className={"w-6 h-6"}/>
                            </div>
                        </div>
                        <div className={"flex"}>
                            <Skeleton className={"w-8 h-8 mt-2"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}