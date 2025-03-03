import MentorCard from "../components/UI/CardMentores";

export default function MentoriaDetalhe() {
  return (
    <section className="bg-white mt-28 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8">

          <div className="w-full md:w-3/4">

            <div className="p-6 bg-white shadow-lg rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs">A INICIAR</span>

                <p className="text-sm text-gray-500">06/08/2025 - 14h00 às 15h55</p>

              </div>
              <h1 className="text-3xl font-bold mb-4">Evento Aberto: Tema Abordado</h1>
              <div className="flex items-center mb-4">
                {/* MentorCard */}
                <div className="w-full md:w-1/4">
                  <MentorCard nome="Nome do Mentor" imagem="/mentor.jpg" />
                </div>
                {/* Conteúdo Principal */}
                <div className="ml-4">
                  <p className="font-semibold">Nome Sobrenome</p>
                  <p className="text-sm text-gray-500">NOME DO CARGO</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs">Carreira</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs">Liderança</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs">Soft-Skills</span>
              </div>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mb-4">Google Meet</button>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat pharetra dolor, at eleifend tortor scelerisque non.
              </p>
              <h2 className="text-lg font-semibold mb-2">Temas abordados:</h2>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              <h2 className="text-lg font-semibold mb-2">Formato:</h2>
              <p className="text-gray-600 mb-4">Híbrido</p>
              <h2 className="text-lg font-semibold mb-2">Voltado para:</h2>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet</p>
              <h2 className="text-lg font-semibold mb-2">Atividades programadas:</h2>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              <h2 className="text-lg font-semibold mb-2">Anexos</h2>
              <div className="flex flex-wrap gap-2">
                <div className="border border-gray-300 p-2 rounded text-sm"> Nome do arquivo aq... .pdf</div>
                <div className="border border-gray-300 p-2 rounded text-sm"> Nome do arquivo aq... .pdf</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}