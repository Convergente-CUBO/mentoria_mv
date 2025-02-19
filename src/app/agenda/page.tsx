import Calendar from "@/app/components/Calendar";
import Filters from "@/app/components/Filters";
import SessionCard from "@/app/components/SessionCard";


export default function Control() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-gray-800 bg-opacity-10 pt-[150px]">
        <div className="min-h-screen flex flex-col bg-white text-black">
          {/* Conteúdo Principal */}
          <main className="flex-grow container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Agenda</h1>

            <div className="grid grid-cols-4 gap-4">
              {/* Coluna 1 - Calendário e Filtros */}
              <aside className="col-span-1 bg-gray-100 p-4 rounded-md">
                <Calendar />
                <Filters />
              </aside>

              {/* Coluna 2 - Sessões */}
              <section className="col-span-3">
                <h2 className="text-lg font-bold mb-4">Sexta-feira, 1 de agosto</h2>
                <div className="grid gap-4">
                  {/* Reutilizando o componente de sessões */}
                  <SessionCard
                    date="Hoje, 1 de Ago - 14h às 15h55"
                    title="Tema abordado na mentoria"
                    mentor="Nome do Mentor"
                    status="Aguardando status do mentor"
                    badges={["Mentor Confirmado"]}
                  />
                  <SessionCard
                    date="Hoje, 1 de Ago - 14h às 15h55"
                    title="Tema abordado na mentoria"
                    mentor="Nome do Mentor"
                    status="Evento Aberto"
                    badges={["Desafio", "Tempo"]}
                  />
                  <SessionCard
                    date="Hoje, 1 de Ago - 14h às 15h55"
                    title="Tema abordado na mentoria"
                    mentor="Nome do Mentor"
                    status="Evento Aberto"
                    badges={["Gestão"]}
                  />
                </div>
              </section>
            </div>
          </main>


        </div>
      </section>
    </>
  );
}
