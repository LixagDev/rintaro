import {RefreshCw, Youtube, MessagesSquare} from "lucide-react";

export function SoftwaresData() {
    const softwares = [
        {
            id: 0,
            name: "Convertisseur",
            description: "Convertissez vos images en l'extension que vous souhaitez.",
            href: "/convert",
            logo: <RefreshCw className={"w-4 mr-1"}/>,
            beta: true
        },
        {
            id: 1,
            name: "Youtube DL",
            description: "Téléchargez vos videos Youtube au format MP4 ou WEBM.",
            href: "/youtube-dl",
            logo: <Youtube className={"w-4 mr-1"}/>,
            beta: false
        },
        {
            id: 2,
            name: "Canal",
            description: "Canal est un lieu de discussion pour les membres de Rintaro.",
            href: "/canal",
            logo: <MessagesSquare className={"w-4 mr-1"}/>,
            beta: false
        },
    ];

    return softwares;
}