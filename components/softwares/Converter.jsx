"use client"
import {Button} from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {toast} from "sonner";
import {useCallback, useState} from "react";
import axios from "axios";
import FormData from "form-data";
import {useRouter} from "next/navigation";
import {DisableContextMenu} from "@/functions/UI";
import {MoreVertical, Trash2} from "lucide-react";
import {useDropzone} from "react-dropzone";

export default function Converter(){
    const router = useRouter();
    const [files, setFiles] = useState([]);
    DisableContextMenu();

    const addExt = (e, id) => {
        const filesCopy = files.slice();
        filesCopy[id].ext = e;
        setFiles(filesCopy);
    }

    const convertSize = (size) => {
        if (size < 1000000) return (size/1000).toFixed(1)+"Ko";
        else return (size/1000000).toFixed(1)+"Mo";
    }

    const convertFile = (id, file) => {
        const filesCopy = files.slice();
        filesCopy[id].isLoading = true;
        setFiles(filesCopy);

        const ext = filesCopy[id].ext;

        let data = new FormData();
        data.append("file", file);
        data.append("ext", ext)
        axios.post("https://api.rintaro.fr/convert/index.php", data, {headers: {'Content-Type': `multipart/form-data;`,}})
            .then((response) => {
                if (response.data.response === true){
                    const filesCopy = files.slice();
                    filesCopy[id].convertLink = response.data.link;
                    filesCopy[id].isConvert = true;
                    filesCopy[id].isLoading = false;
                    setFiles(filesCopy);
                }
                else{
                    const filesCopy = files.slice();
                    filesCopy[id].convertLink = response.data.link;
                    filesCopy[id].isConvert = false;
                    filesCopy[id].error = true;
                    filesCopy[id].errorText = response.data.message;
                    filesCopy[id].isLoading = false;
                    setFiles(filesCopy);
                    toast("Il y a une erreur !", {
                        description: response.data.message,
                        action: {
                            label: "Ok",
                            onClick: () => null,
                        },
                    })
                }
            });
    }

    const deleteFile = (id) => {
        const filesCopy = files.slice();
        const filesUpdate = filesCopy.filter((file) => file.id !== id);
        setFiles(filesUpdate);
    }

    const onDrop = useCallback(dropFiles => {
        const filesCopy = files.slice()
        dropFiles.map((dropFile) => {
            dropFile.id = filesCopy.length;
            dropFile.isConvert = false;
            dropFile.isLoading = false;

            filesCopy.push(dropFile);
            setFiles(filesCopy);
        })
    })
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return(
        <div className={"flex flex-col gap-4 items-center"}>
            {
                files.length !== 0 ?
                    <Table className={"backdrop-blur-sm border rounded-xl overflow-hidden border-separate border-spacing-0 w-11/12 h-11/12 m-auto"}>
                        <TableHeader className={"sticky top-0"}>
                            <TableRow>
                                <TableHead className={"w-1/4"}>Nom</TableHead>
                                <TableHead className={"w-1/4"}>Taille</TableHead>
                                <TableHead className={"w-1/4"}>Type</TableHead>
                                <TableHead className={"w-1/4"}>Status</TableHead>
                                <TableHead className={"w-1/4"}>Convertir en...</TableHead>
                                <TableHead className={"w-1/4"}></TableHead>
                                <TableHead className={"w-1/4"}></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {files.map((file) => (
                                <TableRow key={file.id}>
                                    <TableCell className="font-medium">{file.name}</TableCell>
                                    <TableCell>{convertSize(file.size)}</TableCell>
                                    <TableCell>{file.type}</TableCell>
                                    <TableCell>{file.isConvert ? "Terminé" : file.error ? "Erreur" : "Prêt"}</TableCell>
                                    <TableCell>
                                        <Select onValueChange={(e) => addExt(e, file.id)}>
                                            <SelectTrigger className={"w-fit"}>
                                                <SelectValue placeholder="Choisir une extension"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Extensions</SelectLabel>
                                                    <SelectItem value="jpg">JPG</SelectItem>
                                                    <SelectItem value="png">PNG</SelectItem>
                                                    <SelectItem value="webp">WEBP</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </TableCell>
                                    <TableCell>
                                        {
                                            file.convertLink ? <Button onClick={() => router.push(file.convertLink)}>Télécharger</Button>
                                                : <Button disabled={(file.isLoading || !file.ext)} onClick={() => convertFile(file.id, file)}>Convertir</Button>
                                        }
                                    </TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger><MoreVertical></MoreVertical></DropdownMenuTrigger>
                                            <DropdownMenuContent className={"w-56"}>
                                                <DropdownMenuItem onClick={() => deleteFile(file.id)}>
                                                    <Trash2 className="mr-2 h-4 w-4"/>
                                                    Effacer
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    : null
            }
            <div {...getRootProps()} className={"w-80 h-80 border rounded-xl flex justify-center items-center backdrop-blur-sm p-5"}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <h2>Nickel !</h2> :
                        <h2 className={"text-center"}>Glissez et déposez vos images ici ou juste cliquez.</h2>
                }
            </div>
        </div>
    );
}