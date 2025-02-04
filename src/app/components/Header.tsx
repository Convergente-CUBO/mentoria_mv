"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function Header() {
  const mentorias = [
    { id: 1, nome: "Mentoria em Liderança", imagem: "/assets/mentoria1.webp", horario: "14:00", data: "10/02/2025", status: "Em Andamento", tag: "Liderança" },
    { id: 2, nome: "Mentoria em Produtividade", imagem: "/assets/mentoria2.jpeg", horario: "09:00", data: "15/02/2025", status: "Não Iniciada", tag: "Produtividade" },
    { id: 3, nome: "Mentoria em Gestão de Equipes", imagem: "/assets/mentoria3.jpg", horario: "11:00", data: "20/02/2025", status: "Em Andamento", tag: "Gestão" },
    { id: 4, nome: "Mentoria em Carreira", imagem: "/assets/mentoria4.jpeg", horario: "16:00", data: "25/02/2025", status: "Em Andamento", tag: "Carreira" },
    { id: 5, nome: "Mentoria em Networking", imagem: "/assets/mentoria5.jpeg", horario: "13:00", data: "28/02/2025", status: "Não Iniciada", tag: "Networking" },
    { id: 6, nome: "Mentoria em Desenvolvimento Pessoal", imagem: "/assets/mentoria6.jpg", horario: "10:00", data: "01/03/2025", status: "Em Andamento", tag: "Desenvolvimento" },
  ];

  return (
    <section className="py-16 bg-[#F2F2F2] text-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Suas Mentorias</h2>
        <div className="w-full max-w-8xl h-1 bg-gray-500 mx-auto rounded-full"></div>
      </div>
      <div className="carousel-container px-52">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            1280: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
        >
          {mentorias.map((mentoria) => (
            <SwiperSlide key={mentoria.id}>
              <div className="bg-[#F8F8F8] rounded-xl shadow-lg p-4 space-y-4">
                <img src={mentoria.imagem} alt={mentoria.nome} className="w-full h-32 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold">{mentoria.nome}</h3>
                <p className="text-sm text-gray-400">Horário: {mentoria.horario}</p>
                <p className="text-sm text-gray-400">Data: {mentoria.data}</p>
                <p className={`text-sm font-semibold ${mentoria.status === "Em Andamento" ? "text-green-500" : "text-red-500"}`}>
                  Status: {mentoria.status}
                </p>
                <span className="inline-block bg-blue-600 text-xs text-white rounded-full px-3 py-1">
                  {mentoria.tag}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx>{`
          .swiper-button-next, .swiper-button-prev {
            color: black;
            background: linear-gradient(to bottom, white, gray);
            padding: 15px;
            border-radius: 50%;
            transition: background 0.3s;
          }
          .swiper-button-next:hover, .swiper-button-prev:hover {
            background: linear-gradient(to bottom, gray, white);
          }
          .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 18px;
            font-weight: bold;
            border-radius: 50%;
          }
        `}</style>
      </div>
    </section>
  );
}
