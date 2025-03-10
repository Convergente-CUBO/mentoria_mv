import MentorCard from "../CardMentores";

interface SessionCardProps {
    date: string;
    title: string;
    mentor: string;
    status: string;
    descricao: string;
    badges: string[];
    meetLink?: string;
    imagem: string;
    formato?: string;
    publicoAlvo?: string;
    atividadesProgramadas?: string[];
    anexos?: string[];
}

export default function SessionCard({
    date,
    title,
    mentor,
    status,
    descricao,
    badges,
    meetLink,
    imagem,
    formato,
    publicoAlvo,
    atividadesProgramadas,
    anexos,
}: SessionCardProps) {
    return (
        <div className=" w-full mb-4 flex flex-col">
            <div className="flex justify-between">
                <div>
                    <p className="text-black font-semibold">{date}</p>
                    <h3 className="text-black text-2xl font-bold mb-1">{title}</h3>
                    <p className="text-black text-lg font-medium">{mentor}</p>
                    <p className="text-black mb-2">{descricao}</p>
                    <p className="text-black">{status}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {badges.map((badge, index) => (
                            <span
                                key={index}
                                className="bg-blue-200 text-blue-800 px-3 py-1 text-sm rounded-full font-medium"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Use o MentorCard aqui */}
                <MentorCard nome={mentor} imagem={imagem} />
            </div>
            <div className="flex justify-end items-center mt-4">
                {typeof meetLink === 'string' && meetLink.trim() !== '' && (
                    <a href={meetLink} target="_blank" rel="noopener noreferrer">
                        <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition">
                            Google Meet
                        </button>
                    </a>
                )}
            </div>
            {/* Novas seções */}
            {formato && (
                <div className="mt-4">
                    <h2 className="text-lg text-black font-semibold mb-2">Formato:</h2>
                    <p className="text-gray-600 text-black mb-4">{formato}</p>
                </div>
            )}
            {publicoAlvo && (
                <div className="mt-4">
                    <h2 className="text-lg text-black font-semibold mb-2">Voltado para:</h2>
                    <p className="text-gray-600 mb-4">{publicoAlvo}</p>
                </div>
            )}
            {atividadesProgramadas && atividadesProgramadas.length > 0 && (
                <div className="mt-4">
                    <h2 className="text-lg text-black font-semibold mb-2">Atividades programadas:</h2>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                        {atividadesProgramadas.map((atividade, index) => (
                            <li key={index}>{atividade}</li>
                        ))}
                    </ul>
                </div>
            )}
            {anexos && anexos.length > 0 && (
                <div className="mt-4">
                    <h2 className="text-lg text-black font-semibold mb-2">Anexos</h2>
                    <div className="flex flex-wrap gap-2">
                        {anexos.map((anexo, index) => (
                            <div key={index} className="border border-gray-300 text-black p-2 rounded text-sm">{anexo}</div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}