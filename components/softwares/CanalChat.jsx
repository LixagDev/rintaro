"use client"
import Chat from "@/components/Chat";
import {Input} from "@/components/ui/input";
import {useEffect, useRef, useState} from "react";
import {sendChat} from "@/functions/DataManager";
import {io} from "socket.io-client";

export default function CanalChat({...props}){
    const socket = io("http://api.rintaro.fr:8080")
    const session = props.session;
    const [chats, setChats] = useState(props.chats);
    const chat = useRef();
    const [content, setContent] = useState();

    useEffect( () => {
        chat.current.scrollTo({top: chat.current.scrollHeight});
        socket.on("chat",  async (chatSocket) => {
            if (session.user.id !== chatSocket.user.id){
                console.log(chatSocket)
                let chatsCopy = await chats.slice();
                await chatsCopy.push({
                    id: chatSocket.id,
                    content: chatSocket.content,
                    created_at: new Date(chatSocket.created_at).getTime(),
                    user: {
                        id: chatSocket.user.id,
                        name: chatSocket.user.name,
                        image: chatSocket.user.image,
                    },
                });
                await setChats(chatsCopy);
                await chat.current.scrollTo({top: chat.current.scrollHeight, behavior: "smooth"});
                await console.log(chatsCopy)
            }
            else{
                console.log("non c toi")
            }
        })
    }, [chats]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (content) {
            let id = "local";
            setContent("");
            let chatsCopy = await chats.slice();

            await chatsCopy.push({
                id: id,
                content: content,
                created_at: new Date().getTime(),
                user: {
                    id: session.user.id,
                    name: session.user.name,
                    image: session.user.image,
                },
            });

            await setChats(chatsCopy);
            chat.current.scrollTo({top: chat.current.scrollHeight, behavior: "smooth"});
            await sendChat(session, content)
                .then((response) => {
                    let chatContent = {
                        user:{
                            id: session.user.id,
                            name: session.user.name,
                            image: session.user.image,
                        },
                        content: content,
                        created_at: response.created_at,
                    }
                    socket.emit("chat", chatContent);
                });
        }
    }

    return(
        <>
            <div ref={chat} className={"flex flex-col bg-background w-full h-full border-2 rounded-md overflow-y-auto"}>
                {
                    chats.map((chat) => {
                        return(
                            <Chat chat={chat} session={session}/>
                        );
                    })
                }
            </div>
            <form onSubmit={handleSubmit}>
                <Input placeholder={"daron"} value={content} onChange={(e) => setContent(e.target.value)}/>
            </form>
        </>
    )
}