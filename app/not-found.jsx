"use client"
import {useRouter} from "next-nprogress-bar";
import {Button} from "@/components/ui/button";

export default function NotFound(){
    const router = useRouter();
    return(
        <div className={"flex flex-col h-full justify-center items-center gap-4"}>
            <span className={"font-bold text-2xl"}>La page n'a pas été trouvé</span>
            <Button onClick={() => router.back()}>Retour en arrière</Button>
        </div>
    );
}