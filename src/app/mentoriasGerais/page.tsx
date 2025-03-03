"use client";

import SessionCard from "../components/SessionCard";

const sessions = [
    { date: "2025-05-02", title: "Sessão de Mentoria 1", mentor: "Mentor A", status: "Próxima", descricao: "Descrição da sessão 1", badges: ["Carreira", "Liderança"], meetLink: "https://meet.google.com/abc-defg-hij", imagem: "/assets/mentoria1.webp" },
    { date: "2025-05-05", title: "Sessão de Mentoria 2", mentor: "Mentor B", status: "Finalizada", descricao: "Descrição da sessão 2", badges: ["Desenvolvimento"], meetLink: "https://meet.google.com/ijkl-mnop-qrs", imagem: "/images/mentoria2.jpg" },
    { date: "2025-05-10", title: "Sessão de Mentoria 3", mentor: "Mentor C", status: "Próxima", descricao: "Descrição da sessão 3", badges: ["Autoconhecimento"], meetLink: "https://meet.google.com/tuvw-xyz-123", imagem: "/images/mentoria3.jpg" },
    { date: "2025-05-12", title: "Sessão de Mentoria 4", mentor: "Mentor D", status: "Finalizada", descricao: "Descrição da sessão 4", badges: ["Liderança"], meetLink: "https://meet.google.com/456-7890-abc", imagem: "/images/mentoria4.jpg" }
];

const MentoriasList = () => {
    const proximaSessions = sessions.filter(session => session.status === "Próxima");
    const finalizadasSessions = sessions.filter(session => session.status === "Finalizada");

    return (
        <section className="max-w-full mx-auto px-4 mt-28">
            <div className="mb-10">
                <h3 className="text-4xl text-center font-bold mb-4 text-black">Próximas Sessões</h3>
                <div className="space-y-4">
                    {proximaSessions.map((session, index) => (
                        <SessionCard key={index} {...session} />
                    ))}
                </div>
            </div>

            <div className="mb-10">
                <h3 className="text-4xl text-center font-bold mb-4 text-black">Finalizadas</h3>
                <div className="space-y-4">
                    {finalizadasSessions.map((session, index) => (
                        <SessionCard key={index} {...session} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MentoriasList;