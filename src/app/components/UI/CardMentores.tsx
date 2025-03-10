import React from "react";

interface MentorProps {
    nome: string;
    imagem: string;
    cargo?: string; // Cargo é opcional
}

const MentorCard: React.FC<MentorProps> = ({ nome, imagem, cargo }) => {
    return (
        <div className="flex flex-col items-center">
            <img
                src={imagem}
                alt={nome}
                className="w-36 h-36 object-cover rounded-full border-4 border-gray-200 shadow-lg"
            />
            <h3 className="text-lg font-semibold mt-4 text-gray-800">{nome}</h3>
            {cargo && <p className="text-sm text-gray-600 mt-1">{cargo}</p>} {/* Exibe o cargo se existir */}
        </div>
    );
};

export default MentorCard;