// MentoriaCard.tsx
import React from "react";

type MentoriaProps = {
    nome: string;
    imagem: string;
    horario: string;
    data: string;
    status: string;
    tag: string;
};

const MentoriaCard: React.FC<MentoriaProps> = ({ nome, imagem, horario, data, status, tag }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img src={imagem} alt={nome} className="w-full h-52 object-cover rounded-t-lg" />
            <h3 className="text-lg font-semibold mt-2">{nome}</h3>
            <p className="text-sm text-gray-500">Horário: {horario}</p>
            <p className="text-sm text-gray-500">Data: {data}</p>
            <p
                className={`text-sm font-semibold ${status === "Em Andamento" ? "text-green-500" : "text-red-500"}`}
            >
                Status: {status}
            </p>
            <span className="inline-block bg-blue-600 text-xs text-white rounded-full px-3 py-1 mt-2">
                {tag}
            </span>
        </div>
    );
};

export default MentoriaCard;
