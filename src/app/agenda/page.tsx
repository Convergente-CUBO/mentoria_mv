"use client";

import { useState } from "react";
import Filters from "@/app/components/Filters";
import SessionCard from "@/app/components/SessionCard";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function AgendaPage() {
  const [selectedDate, setSelectedDate] = useState<Nullable<Date>>(null);

  const handleDateChange = (date: Nullable<Date>) => {
    setSelectedDate(date);
  };

  const sessions = [
    {
      date: "14h às 15h55",
      title: "Tema abordado na mentoria 1",
      mentor: "Mentor A",
      status: "Aguardando status do mentor",
      badges: ["Cancelar Reunião"],
      descricao: "Descrição da mentoria 1",
      meetLink: "https://meet.google.com/abc-defg-hij",
      imagem: "/assets/mentoria1.webp"
    },
    {
      date: "14h às 15h55",
      title: "Tema abordado na mentoria 2",
      mentor: "Mentor B",
      status: "Mentor Confirmado",
      badges: ["Cancelar Reunião"],
      descricao: "Descrição da mentoria 2",
      meetLink: "https://meet.google.com/ijkl-mnop-qrs",
      imagem: "/images/mentoria2.jpg"
    },
    {
      date: "14h às 15h55",
      title: "Tema abordado na mentoria 3",
      mentor: "Mentor C",
      status: "Evento Aberto",
      badges: ["Desafio", "Tempo"],
      descricao: "Descrição da mentoria 3",
      meetLink: "https://meet.google.com/tuvw-xyz-123",
      imagem: "/images/mentoria3.jpg"
    },
    {
      date: "14h às 15h55",
      title: "Tema abordado na mentoria 4",
      mentor: "Mentor D",
      status: "Evento Aberto",
      badges: ["Desafio", "Gestão"],
      descricao: "Descrição da mentoria 4",
      meetLink: "https://meet.google.com/456-7890-abc",
      imagem: "/images/mentoria4.jpg"
    }
  ];

  return (
    <section className="relative pt-[100px] bg-white mixn-h-screen ">
      <div className="container mx-auto px-4 py-8 flex gap-20">
        <aside className="w-1/4 flex flex-col gap-4">
          <div className="p-4">
            <div className="card text-black " style={{ width: '350px' }}>
              <Calendar
                value={selectedDate}
                onChange={(e) => handleDateChange(e.value)}
                inline
                showWeek
              />
            </div>
          </div>
          <Filters />
        </aside>

        <section className="w-3/4">
          <h2 className="text-xl text-black font-medium mb-4">
            {selectedDate
              ? selectedDate.toLocaleDateString("pt-BR", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })
              : "Selecione uma data"}
          </h2>
          <h2 className="text-black text-5xl font-bold">SESSÕES</h2>

          <div className="space-y-4">
            {sessions.map((session, index) => (
              <SessionCard key={index} {...session} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}