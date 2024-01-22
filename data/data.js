import {RefreshCw} from "lucide-react";

export function SoftwaresData(){
    const softwares = [
        {id: 0, name: "Convertisseur", description: "Convertissez vos images en l'extension que vous souhaitez.", href: "/convert", logo: <RefreshCw size={40}/>, beta: true},
    ];

    return softwares;
}