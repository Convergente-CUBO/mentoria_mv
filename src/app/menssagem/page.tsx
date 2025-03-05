"use client";


import { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import Image from "next/image";

const messages = [
    { id: 1, name: "Nome Sobrenome", preview: "Prévia da mensagem", time: "2 min", unread: true },
    { id: 2, name: "Nome Sobrenome", preview: "Prévia da mensagem", time: "2 min", unread: false },
    { id: 3, name: "Nome Sobrenome", preview: "Prévia da mensagem", time: "2 min", unread: false },
    { id: 4, name: "Nome Sobrenome", preview: "Prévia da mensagem", time: "2 min", unread: false },
];

export default function MessagesPage() {
    const [selectedChat, setSelectedChat] = useState(messages[0]);
    const [inputMessage, setInputMessage] = useState("");
    const [chatMessages, setChatMessages] = useState([
        { text: "Lorem ipsum dolor sit amet!", sender: "other", time: "15:24" },
        { text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.", sender: "other", time: "15:24" },
        { text: "Phasellus feugiat pharetra dolor", sender: "other", time: "15:24" },
        { text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus feugiat pharetra dolor", sender: "me", time: "15:24" },
    ]);

    const sendMessage = () => {
        if (inputMessage.trim() === "") return;
        setChatMessages([...chatMessages, { text: inputMessage, sender: "me", time: "15:25" }]);
        setInputMessage("");
    };

    return (
        <div className="flex min-h-screen bg-gray-100 mt-32">
            {/* Sidebar de mensagens */}
            <div className="w-1/3 bg-white border-r p-4">
                <h2 className="text-xl text-black font-semibold mb-4">Mensagens</h2>
                <input
                    type="text"
                    placeholder="Pesquisa"
                    className="w-full p-2 mb-4 border rounded"
                />
                <div>
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex text-black items-center justify-between p-3 cursor-pointer border-b ${selectedChat.id === msg.id ? "bg-gray-200" : ""
                                }`}
                            onClick={() => setSelectedChat(msg)}
                        >
                            <div className="flex items-center">
                                <Image
                                    src="/user-avatar.png"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                    alt="User Avatar"
                                />
                                <div className="ml-3">
                                    <p className="font-semibold">{msg.name}</p>
                                    <p className="text-sm text-gray-500">{msg.preview}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500">{msg.time}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Área de conversa */}
            <div className="w-2/3 flex flex-col">
                <div className="flex-1 p-4 overflow-y-auto bg-white">
                    {chatMessages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"} mb-2`}
                        >
                            <div
                                className={`p-3 rounded-lg max-w-xs ${msg.sender === "me" ? "bg-blue-500 text-white" : "bg-gray-200"
                                    }`}
                            >
                                <p>{msg.text}</p>
                                <span className="text-xs text-gray-500 block mt-1 text-right">{msg.time}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input de mensagem */}
                <div className="border-t p-3 flex items-center bg-white">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Comece a escrever..."
                        className="flex-1 p-2 border rounded"
                    />
                    <button
                        className="ml-2 bg-blue-500 text-white p-2 rounded"
                        onClick={sendMessage}
                    >
                        <FaRegPaperPlane size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
