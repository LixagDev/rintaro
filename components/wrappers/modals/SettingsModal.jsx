"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Switch} from "@/components/ui/switch";
import {useRef, useState} from "react";
import {useRouter} from "next/navigation";
import {SaveSettings} from "@/functions/DataManager";
import {Toast} from "@/functions/Utils";
import {Loader2} from "lucide-react";

export default function SettingsModal({children, ...props}){
    const router = useRouter();
    const session = props.session;
    const close = useRef();
    const [devMode, setDevMode] = useState(session.user.settings.devMode);
    const [isLoading, setIsLoading] = useState(false);

    const saveSettings = async () => {
        setIsLoading(true);
        await SaveSettings({session, devMode})
            .then(() => {
                if (close.current) close.current.click();
                setIsLoading(false);
                Toast({title: "Paramètres enregistrés avec succès !"})
                router.refresh();
            });
    }

    return(
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Paramètres</DialogTitle>
                    <DialogDescription>
                        <div className={"flex flex-col"}>
                            <div className={"flex"}>
                                <span className={"flex basis-1/2 justify-start"}>Mode développeur</span>
                                <div className={"flex basis-1/2 justify-end"}><Switch onClick={() => setDevMode(!devMode)} checked={devMode} /></div>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose>
                        <Button ref={close} variant={"secondary"}>Fermer</Button>
                    </DialogClose>
                    <Button disabled={isLoading} onClick={saveSettings}>{isLoading ? <Loader2 className={"w-4 mr-2 animate-spin"}/> : null} Enregistrer</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}