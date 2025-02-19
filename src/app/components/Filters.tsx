export default function Filters() {
    return (
      <div className="bg-white p-4 rounded-md">
        <h3 className="text-lg font-bold mb-2">Filtrar</h3>
        <div className="flex flex-col space-y-2">
          <label>
            <input type="checkbox" className="mr-2" /> Canceladas
          </label>
          <label>
            <input type="checkbox" className="mr-2" checked /> Minhas sessões
          </label>
          <label>
            <input type="checkbox" className="mr-2" /> Liderança
          </label>
          <label>
            <input type="checkbox" className="mr-2" /> Evento Aberto
          </label>
          <label>
            <input type="checkbox" className="mr-2" /> Desafio
          </label>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
          Ver todas as reuniões
        </button>
      </div>
    );
  }
  