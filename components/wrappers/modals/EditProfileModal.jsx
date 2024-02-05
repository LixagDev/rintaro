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
import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {useRef, useState} from "react";
import FormData from "form-data";
import {Input} from "@/components/ui/input";
import axios from "axios";
import {EditProfile} from "@/functions/DataManager";
import {useRouter} from "next/navigation";
import {Toast} from "@/functions/Utils";

export default function EditProfileModal({children, ...props}){
    const router = useRouter();
    const session = props.session;
    const [image, setImage] = useState(session.user.image);
    const [file, setFile] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const close = useRef();

    const editProfile = async () => {
        setIsLoading(true);
        let data = new FormData();
        data.append("file", file);
        data.append("oldFile", session.user.image);
        axios.post("https://api.rintaro.fr/users/avatar/upload.php", data, {headers: {'Content-Type': `multipart/form-data;`,}})
            .then(async (response) => {
                if (response.data.response){
                    await EditProfile({session, image: response.data.link})
                        .then(() => {
                            if (close.current) close.current.click();
                            Toast({title: "Profil édité avec succès !", description: response.data.message});
                            setFile(null);
                            router.refresh();
                        })
                }
                else{
                    Toast({title: "Il y a une erreur !", description: response.data.message});
                }
                setIsLoading(false);
            });
    }

    const change = (e) => {
        let file = e.target.files[0];
        setImage(URL.createObjectURL(file));
        setFile(file);
    }

    return(
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Éditer votre profil</DialogTitle>
                    <DialogDescription>
                        <div className={"flex flex-col items-center justify-center gap-4"}>
                            <Avatar className={"w-32 h-32"}>
                                <AvatarImage draggable={false} src={image} className={"object-cover"}/>
                                <AvatarFallback>{session.user.name[0].toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <Input type={"file"} onChange={(e) => change(e)} accept={"image/png, image/jpeg, image/webp, image/gif"} />
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose>
                        <Button ref={close} variant={"secondary"}>Fermer</Button>
                    </DialogClose>
                    <Button disabled={(isLoading || !file)} onClick={editProfile}>{isLoading ? <><Loader2 className={"w-4 mr-2 animate-spin"}/> Édition</> : "Éditer"}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}