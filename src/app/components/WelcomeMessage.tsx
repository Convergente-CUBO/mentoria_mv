export default function WelcomeMessage() {
  return (
    <section
      className="relative bg-cover bg-center bg-gray-800 bg-opacity-70 pt-[150px]" // Adicionando padding-top
      style={{ backgroundImage: 'url("../assets/image 2.png")' }} // Caminho relativo ao diretório public
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-20 max-w-3xl px-6 py-16 md:py-22 text-white">
        <div className="flex items-center justify-start px-28">
          <div className="w-full max-w-xl ">
            <p className="text-lg md:text-3xl leading-relaxed mb-2">
              Olá mentorando
            </p>
            <h2 className="text-7xl font-bold leading-tight mb-4 text-left md:text-8xl">
              Seja bem-vindo
            </h2>
            <p className="text-lg md:text-3xl leading-relaxed mb-6">
              Aqui você encontrará ferramentas e informações para melhorar sua eficiência. Aproveite ao máximo as nossas soluções.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
