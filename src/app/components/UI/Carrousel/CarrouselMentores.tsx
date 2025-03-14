"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import MentorCard from "../CardMentores";
import Carrossel from "../CarrouselGeral";

export default function MentoresCarrousel() {

    const swiperRef = useRef<any>(null);
    const swiperRefNoticias = useRef<any>(null);


    const mentores = [
        { id: 1, nome: "Carlos Silva", imagem: "/assets/mentor1.jpg", especialidade: "Liderança" },
        { id: 2, nome: "Fernanda Souza", imagem: "/assets/mentor2.jpg", especialidade: "Produtividade" },
        { id: 3, nome: "Mariana Lima", imagem: "/assets/mentor3.jpg", especialidade: "Gestão de Equipes" },
        { id: 4, nome: "Ricardo Oliveira", imagem: "/assets/mentor4.jpg", especialidade: "Carreira" },
        { id: 5, nome: "Beatriz Martins", imagem: "/assets/mentor5.jpg", especialidade: "Networking" },
        { id: 6, nome: "Gustavo Rocha", imagem: "/assets/mentor6.jpg", especialidade: "Desenvolvimento Pessoal" },
        { id: 7, nome: "Gustavo Rocha", imagem: "/assets/mentor6.jpg", especialidade: "Desenvolvimento Pessoal" },
        { id: 8, nome: "Gustavo Rocha", imagem: "/assets/mentor6.jpg", especialidade: "Desenvolvimento Pessoal" },
        { id: 9, nome: "Gustavo Rocha", imagem: "/assets/mentor6.jpg", especialidade: "Desenvolvimento Pessoal" },
        { id: 10, nome: "Gustavo Rocha", imagem: "/assets/mentor6.jpg", especialidade: "Desenvolvimento Pessoal" },
        { id: 11, nome: "Gustavo Rocha", imagem: "/assets/mentor6.jpg", especialidade: "Desenvolvimento Pessoal" },
        { id: 12, nome: "Gustavo Rocha", imagem: "/assets/mentor6.jpg", especialidade: "Desenvolvimento Pessoal" },
        { id: 13, nome: "Gustavo Rocha", imagem: "/assets/mentor6.jpg", especialidade: "Desenvolvimento Pessoal" },
        { id: 14, nome: "Gustavo Rocha", imagem: "/assets/mentor6.jpg", especialidade: "Desenvolvimento Pessoal" },
        { id: 15, nome: "Gustavo Rocha", imagem: "/assets/mentor6.jpg", especialidade: "Desenvolvimento Pessoal" },
        { id: 16, nome: "Gustavo Rocha", imagem: "/assets/mentor6.jpg", especialidade: "Desenvolvimento Pessoal" },
        { id: 17, nome: "Gustavo Rocha", imagem: "/assets/mentor6.jpg", especialidade: "Desenvolvimento Pessoal" },
        { id: 18, nome: "Gustavo Rocha", imagem: "/assets/mentor6.jpg", especialidade: "Desenvolvimento Pessoal" },
        { id: 19, nome: "Gustavo Rocha", imagem: "/assets/mentor6.jpg", especialidade: "Desenvolvimento Pessoal" },
        { id: 20, nome: "Gustavo Rocha", imagem: "/assets/mentor6.jpg", especialidade: "Desenvolvimento Pessoal" },
        { id: 21, nome: "Gustavo Rocha", imagem: "/assets/mentor6.jpg", especialidade: "Desenvolvimento Pessoal" },
        { id: 22, nome: "Gustavo Rocha", imagem: "/assets/mentor6.jpg" },
        { id: 23, nome: "Gustavo Rocha", imagem: "/assets/mentor6.jpg" },

    ];

    // Criamos uma lista de componentes NoticiaCard para passar para o Carrossel
    const itensCarrossel = mentores.map((mentores) => (
        <MentorCard
            key={mentores.id}
            imagem={mentores.imagem}
            nome={mentores.nome}
        />
    ));


    return (
        <div className="relative w-full max-w-[90vw] mx-auto">
            <Carrossel items={itensCarrossel} />
        </div>
    );
}
