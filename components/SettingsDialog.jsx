"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose
} from "@/components/ui/dialog"

export default function SettingsDialog({...props}){
    const open = props.settingsDialogOpen;
    const setOpen = props.setSettingsDialogOpen;

    return(
        <Dialog open={open}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Paramètres</DialogTitle>
                    <DialogDescription>
                        Effectuer des petits changements.
                    </DialogDescription>
                </DialogHeader>
                //Content
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary" onClick={() => setOpen(false)}>
                            Fermer
                        </Button>
                    </DialogClose>
                    <Button>Enregistrer</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}