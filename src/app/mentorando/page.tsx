"use client";

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import MentorCard from "../components/UI/CardMentores";
import { FaBriefcase, FaEnvelope } from "react-icons/fa"; // Importar os ícones

export default function MentorandoPage() {
    const events = [
        { title: "Sessão: Mentor XX", date: "2025-03-02", time: "14H", color: "#3182ce" },
        { title: "Evento Aberto: Nome do Evento", date: "2025-05-05", time: "16H", color: "#4A5568" },
        { title: "Sessão: Mentor XX", date: "2025-03-09", time: "14H", color: "#3182ce" },
        { title: "Sessão: Mentor XX", date: "2025-05-15", time: "14H", color: "#3182ce" },
        { title: "Evento Aberto: Nome do Evento", date: "2025-05-16", time: "16H", color: "#4A5568" },
        { title: "Sessão: Mentor XX", date: "2025-03-22", time: "14H", color: "#3182ce" },
        { title: "Evento Aberto: Nome do Evento", date: "2025-05-26", time: "16H", color: "#4A5568" },
        { title: "Sessão: Mentor XX", date: "2025-05-30", time: "14H", color: "#3182ce" },
    ];

    return (
        <section className="min-h-screen mt-28">
            {/* Seção de Perfil */}
            <section className="bg-white p-6 mb-8">
                <div className="flex items-center space-x-6">
                    <MentorCard nome={""} imagem={"Foto do mentor"} />
                    <div>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">MENTORANDO</span>
                        <h1 className="text-3xl font-bold text-black">Nome Sobrenome</h1>
                        <div className="flex space-x-2 mt-2 items-center">
                            <FaBriefcase className="text-gray-600" /> {/* Ícone de cargo */}
                            <p className="text-gray-600">Nome do Cargo</p>
                            <FaEnvelope className="text-gray-500" /> {/* Ícone de e-mail */}
                            <p className="text-gray-500">nome.sobrenome@mv.com.br</p>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex space-x-2 mt-2">
                        <h3 className="text-lg font-semibold text-black">Pilares assistidos do mentorado:</h3>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Carreira</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Liderança</span>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Soft-Skills</span>
                    </div>
                </div>
            </section>

            {/* Seção de Biografia */}
            <section className="bg-white p-6 mb-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-4">Biografia</h2>
                    <div className="w-full max-w-[1800px] h-[2px] bg-[#D9D9D9] mx-auto rounded-full"></div>
                </div>
                <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat pharetra dolor, at eleifend tortor scelerisque non.
                </p>
            </section>

            {/* Seção de Calendário */}
            <section className="bg-white p-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-4">Planos</h2>
                    <div className="w-full max-w-[1800px] h-[2px] bg-[#D9D9D9] mx-auto rounded-full"></div>
                </div>
                <div className="text-black text-transform: uppercase">
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        events={events.map((event) => ({
                            title: `${event.time} ${event.title}`,
                            start: event.date,
                            color: event.color,
                        }))}
                        height="auto"
                        locale="pt-br"
                        headerToolbar={{
                            left: '',
                            center: 'title',
                            right: 'prev,next',
                        }}
                    />
                </div>
            </section>
        </section>
    );
}