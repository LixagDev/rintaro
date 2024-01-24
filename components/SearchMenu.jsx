"use client"
import {useEffect, useState} from "react";
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
import {SoftwaresData, MenuItemsData} from "@/data/data";

export default function SearchMenu() {
    const softwares = SoftwaresData();
    const menuItems = MenuItemsData();
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
                <CommandGroup heading="Menu">
                    {
                        menuItems.map((item) => {
                            return(
                                <CommandItem>
                                    <div className="flex justify-center items-center mr-2 h-4 w-4">
                                        {item.logo}
                                    </div>
                                    <span>{item.name}</span>
                                </CommandItem>
                            );
                        })
                    }
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
