import React from "react";
import Link from "next/link";

interface SessionCardProps {
    id: string;
    date: string;
    title: string;
    mentor: string;
    status: string;
    descricao: string;
    badges: string[];
    meetLink?: string;
    imagem: string;
    imagemClassName?: string;
    containerClassName?: string;
    dateClassName?: string;
    titleClassName?: string;
    mentorClassName?: string;
    statusClassName?: string;
    descricaoClassName?: string;
    badgesContainerClassName?: string;
    badgeClassName?: string;
    meetButtonClassName?: string;
    detailsButtonClassName?: string;
}

export default function SessionCard({
    id,
    date,
    title,
    mentor,
    status,
    descricao,
    badges,
    meetLink,
    imagem,
    imagemClassName = "",
    containerClassName = "",
    dateClassName = "",
    titleClassName = "",
    mentorClassName = "",
    statusClassName = "",
    descricaoClassName = "",
    badgesContainerClassName = "",
    badgeClassName = "",
    meetButtonClassName = "",
    detailsButtonClassName = "",
}: SessionCardProps) {
    return (
        <div className={`flex flex-col rounded-lg shadow-md overflow-hidden ${containerClassName}`}>
            <img src={imagem} alt={title} className={`w-full h-1/2 object-cover ${imagemClassName}`} />
            <div className="p-4 flex flex-col justify-between">
                <div>
                    <p className={`text-sm font-semibold mb-1 ${statusClassName}`}>{status}</p>
                    <h3 className={`text-lg font-semibold mb-2 ${titleClassName}`}>{title}</h3>
                    <p className={`text-sm mb-2 ${descricaoClassName}`}>{descricao}</p>
                    <p className={`text-sm mb-1 ${mentorClassName}`}>{mentor}</p>
                    <div className={`flex flex-wrap gap-2 mb-2 ${badgesContainerClassName}`}>
                        {badges.map((badge, index) => (
                            <span key={index} className={`px-2 py-1 text-xs rounded-full bg-gray-200 ${badgeClassName}`}>
                                {badge}
                            </span>
                        ))}
                    </div>
                    <p className={`text-xs mb-2 ${dateClassName}`}>{date}</p>
                    {meetLink && (
                        <a href={meetLink} target="_blank" rel="noopener noreferrer" className={`inline-block mb-2 ${meetButtonClassName}`}>
                            Google Meet
                        </a>
                    )}
                </div>
                <div className="flex justify-end">
                    <Link href={`/detalhes/${id}`}>
                        <button className={`px-4 py-2 text-sm font-semibold rounded-md ${detailsButtonClassName}`}>
                            Mais Detalhes
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}