"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import MentoriaCard from "../UI/Card"; // Importando o componente de card
import Carrossel from "../UI/CarrouselGeral";

export default function CarrouselMentorias() {

    const swiperRef = useRef<any>(null);

    const mentorias = [
        { id: 1, nome: "Mentoria em Liderança", imagem: "/assets/mentoria1.webp", horario: "14:00", data: "10/02/2025", status: "Em Andamento", tag: "Liderança" },
        { id: 2, nome: "Mentoria em Produtividade", imagem: "/assets/mentoria2.jpeg", horario: "09:00", data: "15/02/2025", status: "Não Iniciada", tag: "Produtividade" },
        { id: 3, nome: "Mentoria em Gestão de Equipes", imagem: "/assets/mentoria3.jpg", horario: "11:00", data: "20/02/2025", status: "Em Andamento", tag: "Gestão" },
        { id: 4, nome: "Mentoria em Carreira", imagem: "/assets/mentoria4.jpeg", horario: "16:00", data: "25/02/2025", status: "Em Andamento", tag: "Carreira" },
        { id: 5, nome: "Mentoria em Networking", imagem: "/assets/mentoria5.jpeg", horario: "13:00", data: "28/02/2025", status: "Não Iniciada", tag: "Networking" },
        { id: 6, nome: "Mentoria em Desenvolvimento Pessoal", imagem: "/assets/mentoria6.jpg", horario: "10:00", data: "01/03/2025", status: "Em Andamento", tag: "Desenvolvimento" },
    ];

    const itensCarrossel = mentorias.map((mentorias) => (
        <MentoriaCard
            key={mentorias.id}
            nome={mentorias.nome}
            imagem={mentorias.imagem}
            horario={mentorias.horario}
            data={mentorias.data}
            status={mentorias.status}
            tag={mentorias.tag}
        />
    ));

    return (
        <div className="relative w-full max-w-[90vw] md:max-w-[1200px] lg:max-w-[1400px] xl:max-w-[1600px] mx-auto">
            <Carrossel items={itensCarrossel} />
        </div>
    );
}
