import Link from 'next/link';
interface SessionCardMinimalProps {
    date: string;
    title: string;
    mentor: string;
    descricao: string;
    badges: string[];
    meetLink?: string;
    imagem: string;
    id: string;
}

export default function SessionCardMinimal({
    date,
    title,
    mentor,
    descricao,
    badges,
    meetLink,
    imagem,
    id,
}: SessionCardMinimalProps) {
    return (
        <div className="w-full mb-4 flex flex-col">
            <div className="flex justify-between">
                <div>
                    <p className="text-black font-semibold">{date}</p>
                    <h3 className="text-black text-2xl font-bold mb-1">{title}</h3>
                    <p className="text-black text-lg font-medium">{mentor}</p>
                    <p className="text-black mb-2">{descricao}</p>
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
                <img src={imagem} alt={title} className="w-[350px] h-[223px] object-cover rounded-md flex-shrink-0 ml-4" />
            </div>
            <div className="flex justify-between items-center mt-4">
                {typeof meetLink === 'string' && meetLink.trim() !== '' && (
                    <a href={meetLink} target="_blank" rel="noopener noreferrer">
                        <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition">
                            Google Meet
                        </button>
                    </a>
                )}
                <Link href={`/mentoria/${id}`}>
                    <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                        Mais Detalhes
                    </button>
                </Link>
            </div>
        </div>
    );
}