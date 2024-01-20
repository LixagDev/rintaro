"use client"
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCaption,
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
import {useState} from "react";
import axios from "axios";
import FormData from "form-data";
import {useRouter} from "next/navigation";

export default function Converter(){
    const router = useRouter();
    const [files, setFiles] = useState([]);
    const handleFiles = (e) => {
        const filesCopy = files.slice();
        if (e.target.files[0]){
            e.target.files[0].id = files.length;
            e.target.files[0].isLoading = false;

            filesCopy.push(e.target.files[0]);
            setFiles(filesCopy);
        }
    }
    const convertSize = (size) => {
        if (size < 1000000) return (size/1000).toFixed(1)+"Ko";
        else return (size/1000000).toFixed(1)+"Mo";
    }
    const convertFile = (id, file) => {
        const filesCopy = files.slice();
        filesCopy[id].isLoading = true;
        setFiles(filesCopy);

        let data = new FormData();
        data.append("file", file);
        axios.post("http://valserveur.ovh/convert", data, {headers: {'Content-Type': `multipart/form-data;`,}})
            .then((response) => {
                const filesCopy = files.slice();
                filesCopy[id].convertLink = "http://valserveur.ovh/download?img="+response.data;
                filesCopy[id].isLoading = false;
                setFiles(filesCopy);

                console.log(response);
            });
    }

    return(
        <div className={"flex flex-col gap-4 items-center"}>
            <Table>
                <TableCaption>Liste de vos images importés</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className={"w-1/4"}>Nom</TableHead>
                        <TableHead className={"w-1/4"}>Taille</TableHead>
                        <TableHead className={"w-1/4"}>Type</TableHead>
                        <TableHead className={"w-1/4"}>Convertir en...</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {files.map((file) => (
                        <TableRow key={file.name}>
                            <TableCell className="font-medium">{file.name}</TableCell>
                            <TableCell>{convertSize(file.size)}</TableCell>
                            <TableCell>{file.type}</TableCell>
                            <TableCell>
                                <Select>
                                    <SelectTrigger className={"w-fit"}>
                                        <SelectValue placeholder="Choisir une extension"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Extensions</SelectLabel>
                                            <SelectItem value="jpg">JPG</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </TableCell>
                            <TableCell>
                                {
                                    file.convertLink ? <Button onClick={() => router.push(file.convertLink)}>Télécharger</Button>
                                        : <Button disabled={file.isLoading} onClick={() => convertFile(file.id, file)}>Convertir</Button>
                                }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Input onChange={(e) => handleFiles(e)} className={"w-57"} type={"file"}/>
        </div>
    );
}