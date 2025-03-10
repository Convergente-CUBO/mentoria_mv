"use client";

import { useState } from "react";
import Filters from "@/app/components/Filters";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import SessionCardMinimal from "../components/UI/Session/SessionCardMin";

export default function AgendaPage() {
  const [selectedDate, setSelectedDate] = useState<Nullable<Date>>(null);

  const handleDateChange = (date: Nullable<Date>) => {
    setSelectedDate(date);
  };

  const sessions = [
    {
      id: "1",
      date: "14h às 15h55",
      title: "Tema abordado na mentoria 1",
      mentor: "Nome do Mentor 1",
      descricao: "Descrição da sessão 1",
      badges: ["Cancelar Reunião", "Link Google"],
      imagem: "/assets/mentoria1.webp",
      meetLink: "https://meet.google.com/exemplo1",
    },
    {
      id: "2",
      date: "14h às 15h55",
      title: "Tema abordado na mentoria 1",
      mentor: "Nome do Mentor 1",
      descricao: "Descrição da sessão 1",
      badges: ["Cancelar Reunião", "Link Google"],
      imagem: "/assets/mentoria1.webp",
      meetLink: "https://meet.google.com/exemplo1",
    },
    {
      id: "3",
      date: "14h às 15h55",
      title: "Tema abordado na mentoria 1",
      mentor: "Nome do Mentor 1",
      descricao: "Descrição da sessão 1",
      badges: ["Cancelar Reunião", "Link Google"],
      imagem: "/assets/mentoria1.webp",
      meetLink: "https://meet.google.com/exemplo1",
    },
    {
      id: "4",
      date: "14h às 15h55",
      title: "Tema abordado na mentoria 1",
      mentor: "Nome do Mentor 1",
      descricao: "Descrição da sessão 1",
      badges: ["Cancelar Reunião", "Link Google"],
      imagem: "/assets/mentoria1.webp",
      meetLink: "https://meet.google.com/exemplo1",
    },
  ];

  return (
    <section className="relative pt-[100px] bg-white min-h-screen ">
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
          <div className="max-h-[700px] overflow-y-auto"> {/* Adicionado o container com scroll */}
            <div className="space-y-4">
              {sessions.map((session, index) => (
                <div key={index} className="bg-[#FAFAFA] rounded-lg p-4">
                  <SessionCardMinimal {...session} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}