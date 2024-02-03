import {RefreshCw, Youtube} from "lucide-react";

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
            description: "Téléchargez vos videos Youtube.",
            href: "/youtube-dl",
            logo: <Youtube className={"w-4 mr-1"}/>,
            beta: false
        },
    ];

    return softwares;
}