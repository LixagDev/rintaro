"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {useRouter} from "next-nprogress-bar";

export default function ConvertHelp(){
    const router = useRouter();
    return(
        <Accordion type={"single"} collapsible className="w-2/3 backdrop-blur-sm rounded-xl p-2 border mr-auto ml-auto">
            <AccordionItem value="item-2" className={"border-none"}>
                <AccordionTrigger>À propos des téléchargements</AccordionTrigger>
                <AccordionContent className={"flex flex-col"}>
                    <span>Après le téléchargement de votre image, elle sera automatiquement supprimée du serveur. Auquel cas ou, par inadvertance vous oubliez de télécharger la vidéo, le lien de téléchargement sera dans votre <a
                        onClick={() => router.push("/history")} className={"underline cursor-pointer"}>historique</a>.</span>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}