// NoticiaCarrousel.tsx
"use client";

import React from "react";
import NoticiaCard from "../NoticiaCard";
import Carrossel from "../CarrouselGeral";
import SessionCard from "../Session/SessionCard";

export default function NoticiaCarrousel() {
    const mentoriasGerais = [
        {
            id: "1",
            nome: "Mentoria em Liderança",
            imagem: "/assets/mentoria1.webp",
            horario: "14:00",
            data: "10/02/2025",
            status: "Em Andamento",
            tag: "Liderança",
            descricao: "Desenvolva habilidades essenciais para liderar equipes com eficiência.",
        },
        {
            id: "2",
            nome: "Mentoria em Produtividade",
            imagem: "/assets/mentoria2.jpeg",
            horario: "09:00",
            data: "15/02/2025",
            status: "Não Iniciada",
            tag: "Produtividade",
            descricao: "Aprenda técnicas para otimizar seu tempo e aumentar sua produtividade.",
        },
        {
            id: "3",
            nome: "Mentoria em Gestão de Equipes",
            imagem: "/assets/mentoria3.jpg",
            horario: "11:00",
            data: "20/02/2025",
            status: "Em Andamento",
            tag: "Gestão",
            descricao: "Estratégias para gerenciar equipes e obter melhores resultados.",
        },
        {
            id: "4",
            nome: "Mentoria em Gestão de Equipes",
            imagem: "/assets/mentoria3.jpg",
            horario: "11:00",
            data: "20/02/2025",
            status: "Em Andamento",
            tag: "Gestão",
            descricao: "Estratégias para gerenciar equipes e obter melhores resultados.",
        },
        {
            id: "5",
            nome: "Mentoria em Gestão de Equipes",
            imagem: "/assets/mentoria3.jpg",
            horario: "11:00",
            data: "20/02/2025",
            status: "Em Andamento",
            tag: "Gestão",
            descricao: "Estratégias para gerenciar equipes e obter melhores resultados.",
        },
        {
            id: "6",
            nome: "Mentoria em Gestão de Equipes",
            imagem: "/assets/mentoria3.jpg",
            horario: "11:00",
            data: "20/02/2025",
            status: "Em Andamento",
            tag: "Gestão",
            descricao: "Estratégias para gerenciar equipes e obter melhores resultados.",
        },
        {
            id: "7",
            nome: "Mentoria em Gestão de Equipes",
            imagem: "/assets/mentoria3.jpg",
            horario: "11:00",
            data: "20/02/2025",
            status: "Em Andamento",
            tag: "Gestão",
            descricao: "Estratégias para gerenciar equipes e obter melhores resultados.",
        },
        {
            id: "8",
            nome: "Mentoria em Gestão de Equipes",
            imagem: "/assets/mentoria3.jpg",
            horario: "11:00",
            data: "20/02/2025",
            status: "Em Andamento",
            tag: "Gestão",
            descricao: "Estratégias para gerenciar equipes e obter melhores resultados.",
        },
    ];

    // Criamos uma lista de componentes NoticiaCard para passar para o Carrossel
    const mentoriasCarrossel = mentoriasGerais.map((mentoria) => (
        <div key={mentoria.id} className="mx-2 p-2 "> {/* Adiciona margem horizontal */}

            <SessionCard
                key={mentoria.id}
                id={mentoria.id}
                date={`Data: ${mentoria.data}`}
                title={mentoria.nome}
                mentor={`Horário: ${mentoria.horario}`}
                status={mentoria.status}
                descricao={mentoria.descricao}
                badges={[mentoria.tag]}
                imagem={mentoria.imagem}
                imagemClassName="h-[153px] object-cover" // Ajuste o tamanho da imagem aqui
                containerClassName="bg-white rounded-lg max-h-screen max-w-screen shadow-md flex flex-col"
                statusClassName="text-sm font-semibold"
                titleClassName="text-lg font-semibold"
                mentorClassName="text-sm"
                descricaoClassName="text-sm"
                badgeClassName="px-2 py-1 text-xs rounded-full bg-gray-200"
                dateClassName="text-xs"
                meetButtonClassName="inline-block text-sm"
                detailsButtonClassName="px-3 py-1 text-xs rounded-md"
                meetLink="https://meet.google.com/xyz"
            />
        </div>
    ));

    return (
        <div className="relative w-full max-w-[90vw] mx-auto ">
            <Carrossel items={mentoriasCarrossel} />
        </div>
    );
}
