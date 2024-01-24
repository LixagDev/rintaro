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
                console.log(response.data)
                if (response.data.response === true){
                    setState({loading: false, finish: true, response: response.data.response, downloadLink: response.data.link});
                    setOutput({videoName: response.data.videoName});
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

    return(
        <>
            <div className={"border p-3 flex xl:w-2/5 gap-3 w-2/3 backdrop-blur-sm m-auto rounded-xl"}>
                <Input type="email" placeholder="https://www.youtube.fr/watch?=abcd1234" value={url}
                       onChange={(e) => setUrl(e.target.value)}/>
                <Select onValueChange={(e) => setExt(e)}>
                    <SelectTrigger className={"w-fit"}>
                        <SelectValue placeholder="Choisir une extension"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Format</SelectLabel>
                            <SelectItem value="mp4, m4a">mp4</SelectItem>
                            <SelectItem value="webm, webm">webm</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {
                    state.finish && state.response && state.downloadLink ?
                        <Button onClick={() => router.push(state.downloadLink)}>Télécharger</Button> :
                        <Button disabled={(!url || state.loading || !ext)} onClick={download}>Convertir</Button>
                }
                <Button variant={"destructive"} disabled={state.loading} onClick={() => {
                    setState({loading: false, finish: false, response: null, downloadLink: null});
                    setUrl("");
                    setOutput({videoName: null});
                }}><Trash2/></Button>
            </div>
            <h2 className={"font-bold text-xl text-center"}>{output.videoName}</h2>
        </>
    );
}