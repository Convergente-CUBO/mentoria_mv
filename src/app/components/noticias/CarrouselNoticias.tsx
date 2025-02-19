// NoticiaCarrousel.tsx
"use client";

import React from "react";
import Carrossel from "../UI/CarrouselGeral";
import NoticiaCard from "../UI/NoticiaCard";

export default function NoticiaCarrousel() {
    const noticias = [
        {
            id: 1,
            imagem: "/assets/noticia1.jpg",
            tema: "Melhoria na Carreira",
            descricao: "Descubra como a mentoria pode impulsionar sua trajetória profissional e abrir novas oportunidades.",
        },
        {
            id: 2,
            imagem: "/assets/noticia2.jpg",
            tema: "Networking Eficiente",
            descricao: "A importância do networking para o crescimento profissional e como a mentoria pode ajudar nisso.",
        },
        {
            id: 3,
            imagem: "/assets/noticia3.jpg",
            tema: "Desenvolvimento Pessoal",
            descricao: "Aprenda como desenvolver habilidades interpessoais e crescer profissionalmente com mentoria.",
        },
        {
            id: 4,
            imagem: "/assets/noticia4.jpg",
            tema: "Gestão e Liderança",
            descricao: "Como a mentoria pode ajudar você a se tornar um líder mais eficaz no ambiente corporativo.",
        },
        {
            id: 5,
            imagem: "/assets/noticia5.jpg",
            tema: "Equilíbrio entre Vida e Trabalho",
            descricao: "Mentores ajudam a encontrar um equilíbrio saudável entre carreira e vida pessoal.",
        },
    ];

    // Criamos uma lista de componentes NoticiaCard para passar para o Carrossel
    const itensCarrossel = noticias.map((noticia) => (
        <NoticiaCard
            key={noticia.id}
            imagem={noticia.imagem} 
            tema={noticia.tema}
            descricao={noticia.descricao}
        />
    ));

    return (
        <div className="container mx-auto max-w-[1280px] lg:max-w-[1600px] xl:max-w-[1920px] px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Benefícios da Mentoria</h2>
                <div className="w-full max-w-[1800px] h-[2px] bg-[#D9D9D9] mx-auto rounded-full"></div>
            </div>

            {/* Passamos a lista de itens para o Carrossel */}
            <Carrossel items={itensCarrossel} />
        </div>
    );
}
