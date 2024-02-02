"use client"
import {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import axios from "axios";
import FormData from "form-data";
import {useRouter} from "next/navigation";
import {toast} from "sonner";
import {Trash2} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

export default function YoutubeDownloader(){
    const router = useRouter();
    const [url, setUrl] = useState();
    const [isPlaylist, setIsPlaylist] = useState();
    const [state, setState] = useState({loading: false, finish: false, response: null, downloadLink: null});
    const [output, setOutput] = useState({videoName: null});
    const [ext, setExt] = useState();

    const download = () => {
        let data = new FormData();
        data.append("link", url);
        data.append("ext", ext);
        setState({loading: true, finish: false, response: null, downloadLink: null});
        axios.post("https://api.rintaro.fr/youtube-dl/index.php", data)
            .then((response) =>{
                if (response.data.response === true){
                    setState({loading: false, finish: true, response: response.data.response, downloadLink: response.data.link});
                    setOutput({videoName: response.data.videoName});
                    toast("C'est bon !", {
                        description: response.data.videoName,
                        action: {
                            label: "Ok",
                            onClick: () => null,
                        },
                    })
                }
                else{
                    setState({loading: false, finish: true, response: response.data.response, downloadLink: null});
                    toast("Il y a une erreur !", {
                        description: response.data.message,
                        action: {
                            label: "Ok",
                            onClick: () => null,
                        },
                    })
                }
            })
    }

    const write = (e) => {
        let text = e.target.value;
        if (text.includes("&list=")) setIsPlaylist(true);
        else setIsPlaylist(false);
        setUrl(text);
    }

    return (
        <>
            <div className={"border p-3 flex gap-3 w-2/3 backdrop-blur-sm ml-auto mr-auto rounded-xl"}>
                <Input type="email" placeholder="https://www.youtube.fr/watch?=abcd1234" value={url}
                       onChange={(e) => write(e)}/>
                <Select onValueChange={(e) => setExt(e)}>
                    <SelectTrigger className={"w-fit"}>
                        <SelectValue placeholder="Choisir une extension"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Format</SelectLabel>
                            <SelectItem disabled={true} value="mp3, mp3">mp3</SelectItem>
                            <SelectItem value="mp4, m4a">mp4</SelectItem>
                            <SelectItem value="webm, webm">webm</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {
                    state.finish && state.response && state.downloadLink ?
                        <Button onClick={() => router.push(state.downloadLink)}>Télécharger</Button> :
                        <Button disabled={(!url || state.loading || !ext || isPlaylist)}
                                onClick={download}>Convertir</Button>
                }
                <Button variant={"destructive"} disabled={state.loading} onClick={() => {
                    setState({loading: false, finish: false, response: null, downloadLink: null});
                    setUrl("");
                    setOutput({videoName: null});
                }}><Trash2/></Button>
            </div>
            {
                isPlaylist ? <span className={"text-destructive ml-auto mr-auto"}>Cette vidéo provient d'une playlist !</span> : null
            }
        </>
    );
}