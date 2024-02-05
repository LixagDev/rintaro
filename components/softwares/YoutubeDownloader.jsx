"use client"
import {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import axios from "axios";
import FormData from "form-data";
import {useRouter} from "next/navigation";
import {Toast} from "@/functions/Utils";
import {Loader2} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Separator} from "@/components/ui/separator";
import {UpdateYoutubeDlStat} from "@/functions/DataManager";
import Debug from "@/components/Debug";

export default function YoutubeDownloader({...props}){
    const session = props.session;
    const router = useRouter();
    const [url, setUrl] = useState();
    const [isPlaylist, setIsPlaylist] = useState();
    const [state, setState] = useState({loading: false, finish: false, response: null, downloadLink: null});
    const [output, setOutput] = useState({videoName: null});
    const [format, setFormat] = useState();

    const download = () => {
        let data = new FormData();
        data.append("link", url);
        data.append("format", format);
        setState({loading: true, finish: false, response: null, downloadLink: null});
        axios.post("https://api.rintaro.fr/youtube-dl/index.php", data)
            .then(async (response) =>{
                if (response.data.response === true){
                    setState({loading: false, finish: true, response: response.data.response, downloadLink: response.data.link});
                    setOutput({videoName: response.data.videoName});
                    Toast({title: "Vidéo convertie !", description: response.data.videoName})
                    await UpdateYoutubeDlStat(session);
                }
                else{
                    setState({loading: false, finish: true, response: response.data.response, downloadLink: null});
                    Toast({title: "Il y a une erreur !", description: response.data.message})
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
            {session.user.settings.devMode ? <Debug>STATE : {JSON.stringify(state)}</Debug> : null}
            <div className={"border p-3 flex gap-3 w-2/3 backdrop-blur-sm ml-auto mr-auto rounded-xl"}>
                <Input type="email" placeholder="https://www.youtube.fr/watch?=abcd1234" value={url}
                       onChange={(e) => write(e)}/>
                <Select onValueChange={(e) => setFormat(e)}>
                    <SelectTrigger className={"w-fit"}>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Qualité</SelectLabel>
                            <SelectItem value="best">Meilleur</SelectItem>
                            <SelectItem value="high">Haute</SelectItem>
                            <SelectItem value="normal">Normal</SelectItem>
                            <SelectItem value="low">Basse</SelectItem>
                            <SelectItem value="worst">Horrible</SelectItem>
                            <Separator></Separator>
                            <SelectLabel>Format</SelectLabel>
                            <SelectItem value="mp4++">mp4++</SelectItem>
                            <SelectItem value="mp4">mp4</SelectItem>
                            <Separator></Separator>
                            <SelectLabel>Encodage</SelectLabel>
                            <SelectItem value="codec:h">h264 | h265</SelectItem>
                            <Separator></Separator>
                            <SelectLabel>Autre</SelectLabel>
                            <SelectItem value="audio">Audio</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {
                    state.finish && state.response && state.downloadLink ?
                        <Button onClick={() => {
                            router.push(state.downloadLink);
                            setState({loading: false, finish: false, response: null, downloadLink: null});
                            setUrl("");
                            setOutput({videoName: null});
                        }}>Télécharger</Button> :
                        <Button disabled={(!url || state.loading || !format || isPlaylist)}
                                onClick={download}>{state.loading ? <><Loader2 className={"animate-spin w-4 mr-2"}/>Conversion</>  : "Convertir"}</Button>
                }
            </div>
            {
                isPlaylist ? <span
                    className={"text-destructive ml-auto mr-auto"}>Les vidéos prevenant d'une playlist ne peuvent pas être convertie !</span> : null
            }
        </>
    );
}