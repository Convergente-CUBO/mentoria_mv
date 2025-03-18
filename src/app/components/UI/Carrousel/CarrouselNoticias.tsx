// NoticiaCarrousel.tsx
"use client";

import React from "react";
import NoticiaCard from "../NoticiaCard";
import Carrossel from "../CarrouselGeral";

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
        <div key={noticia.id} className="mx-2 p-1">
            <NoticiaCard
                key={noticia.id}
                imagem={noticia.imagem}
                tema={noticia.tema}
                descricao={noticia.descricao}
            />
        </div>

    ));

    return (
        <div className="relative p-4 md:p-10 w-full ">
            <Carrossel items={itensCarrossel} />
        </div>
    );
}
