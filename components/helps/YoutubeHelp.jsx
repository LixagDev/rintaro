"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function YoutubeHelp(){
    return(
        <Accordion type={"single"} collapsible className="w-2/3 backdrop-blur-sm rounded-xl p-2 border mr-auto ml-auto">
            <AccordionItem value="item-1" className={"border-none"}>
                <AccordionTrigger>À propos de la sortie vidéo</AccordionTrigger>
                <AccordionContent className={"flex flex-col"}>
                    <span className={"font-bold"}><u>Qualité :</u></span>
                    <span>Meilleur : Télécharge la vidéo avec la meilleur qualité possible et le meilleur format.</span>
                    <span>Haute : Télécharge la vidéo en qualité HD (1080p) avec le meilleur format.</span>
                    <span>Normal : Télécharge la vidéo en qualité HD (720p) avec le meilleur format.</span>
                    <span>Basse : Télécharge la vidéo en qualité SD (480p) avec le meilleur format.</span>
                    <span>Horrible : Télécharge la vidéo avec la qualité la plus basse possible ({"<"}480p) avec le meilleur format.</span>
                    <span className={"font-bold"}><u>Format :</u></span>
                    <span>mp4++ : Télécharge la vidéo avec la meilleur qualité possible au format mp4.</span>
                    <span>mp4 : Télécharge la vidéo en qualité HD (720p) au format mp4.</span>
                    <span className={"font-bold"}><u>Encodage :</u></span>
                    <span>h264 | h265 : Télécharge la vidéo avec la meilleur qualité possible encodé soit en h264 ou h265.</span>
                    <span className={"font-bold"}><u>Autre :</u></span>
                    <span>Audio : Télécharge l'audio de la vidéo avec la meilleur qualité son possible au format mp3.</span>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}