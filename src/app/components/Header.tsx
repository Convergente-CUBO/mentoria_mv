"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

export default function Header() {
  const swiperRef = useRef<any>(null);

  const mentorias = [
    { id: 1, nome: "Mentoria em Liderança", imagem: "/assets/mentoria1.webp", horario: "14:00", data: "10/02/2025", status: "Em Andamento", tag: "Liderança" },
    { id: 2, nome: "Mentoria em Produtividade", imagem: "/assets/mentoria2.jpeg", horario: "09:00", data: "15/02/2025", status: "Não Iniciada", tag: "Produtividade" },
    { id: 3, nome: "Mentoria em Gestão de Equipes", imagem: "/assets/mentoria3.jpg", horario: "11:00", data: "20/02/2025", status: "Em Andamento", tag: "Gestão" },
    { id: 4, nome: "Mentoria em Carreira", imagem: "/assets/mentoria4.jpeg", horario: "16:00", data: "25/02/2025", status: "Em Andamento", tag: "Carreira" },
    { id: 5, nome: "Mentoria em Networking", imagem: "/assets/mentoria5.jpeg", horario: "13:00", data: "28/02/2025", status: "Não Iniciada", tag: "Networking" },
    { id: 6, nome: "Mentoria em Desenvolvimento Pessoal", imagem: "/assets/mentoria6.jpg", horario: "10:00", data: "01/03/2025", status: "Em Andamento", tag: "Desenvolvimento" },
  ];

  const categorias = [
    { nome: "Liderança", mentorias: ["Mentoria Estratégica", "Gestão de Pessoas", "Técnicas de Motivação"] },
    { nome: "Carreira", mentorias: ["Planejamento de Carreira", "Transição de Carreira", "Habilidades do Futuro"] },
    { nome: "Desenvolvimento Pessoal", mentorias: ["Inteligência Emocional", "Oratória", "Gestão de Tempo"] },
    { nome: "Networking", mentorias: ["Conexões Profissionais", "LinkedIn para Negócios", "Parcerias Estratégicas"] },
    { nome: "Networking", mentorias: ["Conexões Profissionais", "LinkedIn para Negócios", "Parcerias Estratégicas"] },
    { nome: "Networking", mentorias: ["Conexões Profissionais", "LinkedIn para Negócios", "Parcerias Estratégicas"] },
    { nome: "Networking", mentorias: ["Conexões Profissionais", "LinkedIn para Negócios", "Parcerias Estratégicas"] },

  ];

  const mentoriasGerais = [
    { id: 1, nome: "Mentoria em Liderança", imagem: "/assets/mentoria1.webp", horario: "14:00", data: "10/02/2025", status: "Em Andamento", tag: "Liderança", descricao: "Desenvolva habilidades essenciais para liderar equipes com eficiência." },
    { id: 2, nome: "Mentoria em Produtividade", imagem: "/assets/mentoria2.jpeg", horario: "09:00", data: "15/02/2025", status: "Não Iniciada", tag: "Produtividade", descricao: "Aprenda técnicas para otimizar seu tempo e aumentar sua produtividade." },
    { id: 3, nome: "Mentoria em Gestão de Equipes", imagem: "/assets/mentoria3.jpg", horario: "11:00", data: "20/02/2025", status: "Em Andamento", tag: "Gestão", descricao: "Estratégias para gerenciar equipes e obter melhores resultados." },
    { id: 4, nome: "Mentoria em Gestão de Equipes", imagem: "/assets/mentoria3.jpg", horario: "11:00", data: "20/02/2025", status: "Em Andamento", tag: "Gestão", descricao: "Estratégias para gerenciar equipes e obter melhores resultados." },

  ];

  const [categoriaSelecionada, setCategoriaSelecionada] = useState(categorias[0]);

  return (
    <>
      <section className="py-12 px-4 md:px-16 bg-[#FFFFFF] text-black relative w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Suas Mentorias</h2>
          <div className="w-full max-w-[1800px] h-[2px] bg-[#D9D9D9] mx-auto rounded-full"></div>
        </div>

        <div className="relative w-full max-w-[90vw] md:max-w-[1200px] lg:max-w-[1400px] xl:max-w-[1600px] mx-auto">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-200 transition z-10"
            onClick={() => swiperRef.current?.slidePrev()}>
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <Swiper modules={[Navigation, Pagination]} spaceBetween={30} slidesPerView={4} onSwiper={(swiper) => (swiperRef.current = swiper)}
            pagination={{ clickable: true }} breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1280: { slidesPerView: 4 }, 1600: { slidesPerView: 5 } }}>
            {mentorias.map((mentoria) => (
              <SwiperSlide key={mentoria.id}>
                <div className="bg-white rounded-lg shadow-md p-1">
                  <img src={mentoria.imagem} alt={mentoria.nome} className="w-full h-52 object-cover rounded-t-lg" />
                  <h3 className="text-lg font-semibold mt-2">{mentoria.nome}</h3>
                  <p className="text-sm text-gray-500">Horário: {mentoria.horario}</p>
                  <p className="text-sm text-gray-500">Data: {mentoria.data}</p>
                  <p className={`text-sm font-semibold ${mentoria.status === "Em Andamento" ? "text-green-500" : "text-red-500"}`}>
                    Status: {mentoria.status}
                  </p>
                  <span className="inline-block bg-blue-600 text-xs text-white rounded-full px-3 py-1 mt-2">{mentoria.tag}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-200 transition z-10"
            onClick={() => swiperRef.current?.slideNext()}>
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </section>

      <section className="py-16 bg-[#ffffff] text-black">
        <div className="container mx-auto max-w-[1280px] lg:max-w-[1600px] xl:max-w-[1920px] px-4 flex flex-col md:flex-row gap-8">

          {/* Caixa reduzida */}
          <div className="md:w-1/3 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-2">Outras</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">Mentorias</h2>
            <div className="w-16 h-[2px] bg-[#D9D9D9] rounded-full mb-6"></div>

            <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">Mentorias em Destaque</h3>
              <ul className="space-y-4">
                {categorias.map((cat, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 
              ${categoriaSelecionada.nome === cat.nome ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-50"}`}
                    onClick={() => setCategoriaSelecionada(cat)}
                  >
                    {cat.nome}
                  </li>
                ))}
              </ul>

              {/* Botão "Ver as mentorias" */}
              <div className="text-center mt-8">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                  Ver as Mentorías
                </button>
              </div>
            </div>
          </div>

          {/* Cards de mentorias */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {mentoriasGerais.map((mentoria) => (
              <div key={mentoria.id} className="bg-[#F8F8F8] p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={mentoria.imagem} alt={mentoria.nome} className="w-full h-[250px] object-cover rounded-t-3xl mb-4" />
                <div className="p-4 space-y-4">
                  <h4 className="text-xl font-semibold text-gray-800">{mentoria.nome}</h4>
                  <p className="text-gray-600">{mentoria.descricao}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </>
  );
}
