import {Rotate3D, TestTube} from "lucide-react";

export function SoftwaresData(){
    const softwares = [
        {id: 0, name: "Convertisseur", description: "Convertissez vos images en l'extension que vous souhaitez.", href: "/convert", logo: <Rotate3D size={40}/>},
        {id: 1, name: "Test", description: "Description", href: "/tes", logo: <TestTube size={40}/>},
        {id: 1, name: "Toto", description: "Description", href: "/tes", logo: <TestTube size={40}/>},
    ];

    return softwares;
}