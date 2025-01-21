// components/WelcomeMessage.tsx
export default function WelcomeMessage() {
    return (
      <section className="relative z-10 text-white flex justify-center items-center py-32 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-20 max-w-3xl px-6">
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Olá mentorando, <br />
            Seja bem-vindo
          </h2>
          <p className="text-lg">
            Aqui você irá alavancar sua carreira com mentores especializados no que você necessita para ser desenvolvido.
          </p>
        </div>
      </section>
    );
  }
  