"use client";

import { useState } from "react";
import Filters from "@/app/components/Filters";
import SessionCard from "@/app/components/SessionCard";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

// Importe os estilos CSS do PrimeReact
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Ou outro tema
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function AgendaPage() {
  const [selectedDate, setSelectedDate] = useState<Nullable<Date>>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <section className="relative pt-[100px] bg-white max-h-screen ">
      <div className="container mx-auto px-4 py-8 flex gap-20">
        {/* Sidebar com Calendário e Filtros */}
        <aside className="w-1/2 flex flex-col gap-4">
          <div className="p-4"> {/* Removendo classes de layout flexível */}
            <div className="card text-black " style={{ width: '350px' }}> {/* Adicionando tamanho fixo */}
              <Calendar
                value={selectedDate}
                onChange={(e) => handleDateChange(e.value)}
                inline
                showWeek
              />
            </div>
          </div>
          <Filters />
          <button className="w-full mt-4 bg-green-500 text-[#00000] py-2 rounded-lg">
            Ver todas as reuniões
          </button>
        </aside>

        {/* Conteúdo das Sessões */}
        <section className="w-3/4">
          {selectedDate && (
            <p className="mt-4 text-lg text-black ">
              Data selecionada:{" "}
              <span className="font-bold text-black">
                {selectedDate.toLocaleDateString("pt-BR")}
              </span>
            </p>
          )}
          <h2 className="text-xl font-bold mb-4">
            {selectedDate
              ? selectedDate.toLocaleDateString("pt-BR", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })
              : "Selecione uma data"}
          </h2>

          <div className="space-y-4">
            <SessionCard
              date="14h às 15h55"
              title="Tema abordado na mentoria"
              mentor="Nome do Mentor"
              status="Aguardando status do mentor"
              badges={["Cancelar Reunião", "Link Google"]}
            />
            <SessionCard
              date="14h às 15h55"
              title="Tema abordado na mentoria"
              mentor="Nome do Mentor"
              status="Mentor Confirmado"
              badges={["Cancelar Reunião", "Link Google"]}
            />
            <SessionCard
              date="14h às 15h55"
              title="Tema abordado na mentoria"
              mentor="Nome do Mentor"
              status="Evento Aberto"
              badges={["Desafio", "Tempo", "Link Google"]}
            />
            <SessionCard
              date="14h às 15h55"
              title="Tema abordado na mentoria"
              mentor="Nome do Mentor"
              status="Evento Aberto"
              badges={["Desafio", "Gestão", "Link Google"]}
            />
          </div>
        </section>
      </div>
    </section>
  );
}