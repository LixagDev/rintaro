"use client"
import {useEffect, useState} from "react";
import {
    Settings,
    User,
} from "lucide-react";

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import {useRouter} from "next/navigation";
import {SoftwaresData} from "@/data/data";

export default function SearchMenu() {
    const softwares = SoftwaresData();
    const router = useRouter();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    });

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Tapez une recherche..." />
            <CommandList>
                <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>
                <CommandGroup heading="Applications">
                    {
                        softwares.map((software) => {
                            return(
                                <CommandItem onSelect={() => router.push(software.href)}>
                                    <div className="flex justify-center items-center mr-2 h-4 w-4">
                                        {software.logo}
                                    </div>
                                    <span>{software.name}</span>
                                </CommandItem>
                            );
                        })
                    }
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Interface">
                    <CommandItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profil</span>
                    </CommandItem>
                    <CommandItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Paramètres</span>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
