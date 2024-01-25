import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut
} from "@/components/ui/dropdown-menu";
import {
    LogOut,
    Github, User, Settings,
} from "lucide-react";
import {signOut} from "next-auth/react";
import {useRouter} from "next/navigation";
import SettingsDialog from "@/components/SettingsDialog";
import {useState} from "react";

export default function Navbar({...props}){
    const session = props.session;
    const router = useRouter();
    const [settingsDialogOpen, setSettingsDialogOpen] = useState(false);

    return(
        <>
            <SettingsDialog settingsDialogOpen={settingsDialogOpen} setSettingsDialogOpen={setSettingsDialogOpen}/>
            <div className={"flex sticky p-4 items-center backdrop-blur-sm border-b"}>
                <div className={"flex basis-1/2"}>
                    <h1 onClick={() => router.push("/")}
                        className={"font-black text-3xl hover:text-zinc-600 transition select-none cursor-pointer"}>Rintaro</h1>
                </div>
                <div className={"flex basis-1/2 flex-row-reverse"}>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src={session.user.image} alt={session.user.name}/>
                                <AvatarFallback>{session.user.name[0].toUpperCase()}</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className={"w-56"}>
                            <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4"/>
                                Profil
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4"/>
                                Paramètres
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem onClick={() => router.push("https://github.com/LixagDev/rintaro")}>
                                <Github className="mr-2 h-4 w-4"/>
                                GitHub
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem onClick={() => signOut()}>
                                <LogOut className="mr-2 h-4 w-4"/>
                                Se déconnecter
                                <DropdownMenuShortcut></DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </>
    );
}