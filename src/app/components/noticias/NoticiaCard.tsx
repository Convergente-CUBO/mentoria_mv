// NoticiaCard.tsx
import React from "react";

interface NoticiaCardProps {
    imagem: string;
    tema: string;
    descricao: string;
}

const NoticiaCard: React.FC<NoticiaCardProps> = ({ imagem, tema, descricao }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={imagem} alt={tema} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{tema}</h3>
                <p className="text-sm text-gray-500 mt-2">{descricao}</p>
            </div>
        </div>
    );
};

export default NoticiaCard;
