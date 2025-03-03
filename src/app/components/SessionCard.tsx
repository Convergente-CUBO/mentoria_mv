interface SessionCardProps {
  date: string;
  title: string;
  mentor: string;
  status: string;
  descricao: string;
  badges: string[];
  meetLink?: string;
  imagem: string;
}

export default function SessionCard({ date, title, mentor, status, descricao, badges, meetLink, imagem }: SessionCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full mb-4 border border-gray-300 flex flex-col">
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
        <img src={imagem} alt={title} className="w-[350px] h-[223px] object-cover rounded-md flex-shrink-0 ml-4" />
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
    </div>
  );
}