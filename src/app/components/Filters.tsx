export default function Filters() {
  return (
    <div className="bg-[#FAFAFA] p-4 rounded-md">
      <h3 className="text-lg font-bold mb-2 text-black">Filtrar</h3>
      <div className="flex flex-col space-y-2 text-black">
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
      <div className="flex justify-center mt-4">
        <button className="bg-[#599BA0] text-white px-4 py-2 mt-4 rounded-lg w-full h-full max-w-[250px] ">
          Ver todas as reuniões
        </button>
      </div>
    </div>
  );
}
