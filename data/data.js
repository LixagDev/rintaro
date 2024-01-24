import {RefreshCw, Youtube, User, Settings} from "lucide-react";

export function SoftwaresData(){
    const softwares = [
        {id: 0, name: "Convertisseur", description: "Convertissez vos images en l'extension que vous souhaitez.", href: "/convert", logo: <RefreshCw size={40}/>, beta: true},
        {id: 1, name: "Youtube DL", description: "Téléchargez vos videos Youtube au format MP4 ou WEBM.", href: "/youtube-dl", logo: <Youtube size={40}/>, beta: false},
    ];

    return softwares;
}

export function MenuItemsData(){
    const menuItems = [
        {name: "Profil", href: "/profil", logo: <User/>, disabled: true},
        {name: "Paramètres", href: "/settings", logo: <Settings/>, disabled: true}
    ]

    return menuItems;
}