import SessionCard from "../components/SessionCard";

export default function MentoriaDetalhe() {
  const mentoria = {
    date: "06/08/2025 - 14h00 às 15h55",
    title: "Evento Aberto: Tema Abordado",
    mentor: "Nome do Mentor",
    status: "A INICIAR",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat pharetra dolor, at eleifend tortor scelerisque non.",
    badges: ["Carreira", "Liderança", "Soft-Skills"],
    meetLink: "https://meet.google.com/sua-reuniao",
    imagem: "/mentor.jpg",
    formato: "Híbrido",
    publicoAlvo: "Lorem ipsum dolor sit amet",
    atividadesProgramadas: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    anexos: ["Nome do arquivo aq... .pdf", "Nome do arquivo aq... .pdf"],
  };

  return (
    <section className="bg-white max-h-screen mt-28 flex flex-col px-2 sm:px-4 max-w-screen-3xl mx-auto">
      <div className="w-full flex flex-col gap-6 text-black">
        {/* Cabeçalho */}
        <div className="flex justify-between items-center border-b pb-4">
          <span className="text-gray-500">{mentoria.status}</span>
          <span className="text-gray-600">{mentoria.date}</span>
        </div>

        {/* Título */}
        <h1 className="text-2xl font-bold">{mentoria.title}</h1>

        {/* Mentor */}
        <div className="flex items-center gap-4">
          <img src={mentoria.imagem} alt="Mentor" className="w-24 h-24 rounded-full" />
          <div>
            <h2 className="text-lg font-semibold">{mentoria.mentor}</h2>
            <p className="text-gray-600">NOME DO CARGO</p>
          </div>
        </div>

        {/* Tags e Link */}
        <div className="flex justify-between items-center flex-wrap gap-2">
          <div className="flex gap-2 flex-wrap">
            <h2 className="text-xl font-bold">TAGS: </h2>
            {mentoria.badges.map((badge, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {badge}
              </span>
            ))}
          </div>
          <a
            href={mentoria.meetLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
          >
            Acessar Reunião
          </a>
        </div>
        <div className="w-full max-w-full h-[1px] bg-[#D9D9D9]  rounded-full"></div>

        {/* Descrição */}
        <p className="text-gray-700 leading-relaxed">{mentoria.descricao}</p>

        {/* Tópicos */}
        <div>
          <h3 className="font-semibold text-lg">Temas abordados:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {mentoria.atividadesProgramadas.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Formato e Público-alvo */}
        <div className="flex flex-col gap-2">
          <p>
            <strong>Formato:</strong> <span className="block mt-1">{mentoria.formato}</span>
          </p>
          <p>
            <strong>Voltado para:</strong> <span className="block mt-1">{mentoria.publicoAlvo}</span>
          </p>
        </div>

        {/* Anexos */}
        <div>
          <h3 className="font-semibold text-lg">Anexos</h3>
          <div className="flex flex-wrap gap-4">
            {mentoria.anexos.map((anexo, index) => (
              <div key={index} className="bg-gray-100 p-3 rounded flex items-center gap-2">
                📄 {anexo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
