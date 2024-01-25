import {RefreshCw, Youtube, User, Settings} from "lucide-react";

export function SoftwaresData(){
    const softwares = [
        {id: 0, name: "Convertisseur", description: "Convertissez vos images en l'extension que vous souhaitez.", href: "/convert", logo: <RefreshCw className={"w-4 mr-1"}/>, beta: true},
        {id: 1, name: "Youtube DL", description: "Téléchargez vos videos Youtube au format MP4 ou WEBM.", href: "/youtube-dl", logo: <Youtube className={"w-4 mr-1"}/>, beta: false},
    ];

    return softwares;
}

export function MenuItemsData(){
    const menuItems = [
        {id: 0, name: "Profil", href: "/profil", logo: <User className={"w-4 mr-1"}/>, disabled: true},
        {id: 1, name: "Paramètres", href: "/settings", logo: <Settings/>, disabled: false}
    ]

    return menuItems;
}