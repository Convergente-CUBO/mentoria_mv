"use client";

import { SetStateAction, useState } from "react";
import Link from "next/link";
import SessionCard from "../components/UI/Session/SessionCard";
import MentoresCarrousel from "../components/UI/Carrousel/CarrouselMentores";
import CarrosselMentorias from "../components/UI/Carrousel/CarrouselMentorias";
import Carrossel from "../components/UI/CarrouselGeral";
import CarrouselNoticias from "../components/UI/Carrousel/CarrouselNoticias";

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);

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

  const categorias = [
    { nome: "Liderança", mentorias: ["Mentoria Estratégica", "Gestão de Pessoas", "Técnicas de Motivação"] },
    { nome: "Carreira", mentorias: ["Planejamento de Carreira", "Transição de Carreira", "Habilidades do Futuro"] },
    { nome: "Desenvolvimento Pessoal", mentorias: ["Inteligência Emocional", "Oratória", "Gestão de Tempo"] },
    { nome: "Networking", mentorias: ["Conexões Profissionais", "LinkedIn para Negócios", "Parcerias Estratégicas"] },
    { nome: "Networking", mentorias: ["Conexões Profissionais", "LinkedIn para Negócios", "Parcerias Estratégicas"] },
    { nome: "Networking", mentorias: ["Conexões Profissionais", "LinkedIn para Negócios", "Parcerias Estratégicas"] },
    { nome: "Networking", mentorias: ["Conexões Profissionais", "LinkedIn para Negócios", "Parcerias Estratégicas"] },
  ];

  const [categoriaSelecionada, setCategoriaSelecionada] = useState(categorias[0]);

  const itemsPerPage = 4; // Número de cards por página

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mentoriasGerais.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(mentoriasGerais.length / itemsPerPage);

  const handlePageChange = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };



  return (
    <>
      <section
        className="relative bg-cover bg-center bg-gray-800 bg-opacity-10 pt-[100px] md:pt-[150px]"
        style={{ backgroundImage: 'url("../assets/image 2.png")' }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-20 max-w-3xl px-6 py-10 md:py-16 text-white">
          <div className="flex items-center justify-start px-4 md:px-10">
            <div className="w-full max-w-xl">
              <p className="text-lg md:text-3xl leading-relaxed mb-2">
                Olá mentorando
              </p>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-4 text-left">
                Seja bem-vindo
              </h2>
              <p className="text-base md:text-xl leading-relaxed mb-6">
                Aqui você encontrará ferramentas e informações para melhorar sua eficiência. Aproveite ao máximo as nossas soluções.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-16 bg-[#FFFFFF] text-black relative w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Suas Mentorias</h2>
          <div className="w-full max-w-screen h-[2px] bg-[#D9D9D9] rounded-full"></div>
        </div>
        <div className="w-full">
          <CarrosselMentorias />
        </div>
      </section>

      <section className="py-16 bg-[#ffffff] text-black relative">
        <div className="container mx-auto max-w-[1280px] lg:max-w-[1600px] xl:max-w-[1920px] px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-2">Outras</h2>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">Mentorias</h2>
              <div className="w-16 h-[2px] bg-[#D9D9D9] rounded-full mb-6"></div>
              <div className="bg-[#FAFAFA] p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">Mentorias em Destaque</h3>
                <div className="w-full max-w-[1800px] h-[2px] bg-[#D9D9D9] mx-auto rounded-full"></div>
                <ul className="space-y-4">
                  {categorias.map((cat, index) => (
                    <li
                      key={index}
                      className={`cursor-pointer px-6 py-3 text-lg font-semibold transition-colors duration-300
                                    ${categoriaSelecionada.nome === cat.nome ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-50"}`}
                      onClick={() => setCategoriaSelecionada(cat)}
                    >
                      {cat.nome}
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-8">
                  <Link href="/mentoriasGerais">
                    <button className="bg-[#DA5461] text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300">
                      Ver todas as reuniões
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Ajusta para 1 coluna em telas menores */}
              {currentItems.map((mentoria) => (
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
                  imagemClassName="h-32 object-cover"
                  containerClassName="bg-white rounded-lg shadow-md"
                  statusClassName={`text-sm font-semibold ${mentoria.status === "Em Andamento" ? "text-green-500" : "text-red-500"}`}
                  badgeClassName="inline-block bg-blue-600 text-xs text-white rounded-full px-3 py-1 mt-2"
                  meetButtonClassName="bg-blue-500 text-white px-3 rounded text-xs"
                  detailsButtonClassName="bg-gray-200 text-xs px-2 py-1"
                  meetLink="https://meet.google.com/xyz"
                />
              ))}
            </div>
            <div className="flex justify-end mt-8 absolute bottom-0 right-0">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  className={`mx-1 px-3 py-1 rounded ${currentPage === pageNumber ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-black">
        <div className="container mx-auto max-w-[1280px] lg:max-w-[1600px] xl:max-w-[1920px] px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Nossos Mentores</h2>
            <div className="w-full max-w-[1800px] h-[2px] bg-[#D9D9D9] mx-auto rounded-full"></div>
          </div>
          <MentoresCarrousel />
        </div>
      </section>

      <section className="py-2 bg-white text-black">
        <CarrouselNoticias />
      </section>
    </>
  );
}