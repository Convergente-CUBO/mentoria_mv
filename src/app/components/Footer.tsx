import Image from "next/image";
import logoFooter from "../../assets/image.png"; // Verifique o caminho da imagem

export default function Footer() {
  return (
    <footer className="bg-[#00365F] text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <Image src={logoFooter} alt="Logo MV" width={449.82} height={445.91} />
        </div>

        {/* Sobre */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h4 className="text-lg font-semibold">Sobre</h4>
          <p>Aqui temos um site voltado para você...</p>
        </div>

        {/* Comentário */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h4 className="text-lg font-semibold">Comente</h4>
          <textarea
            className="w-full bg-gray-700 text-gray-300 p-2 rounded"
            placeholder="Deixe um feedback"
          ></textarea>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
            Enviar
          </button>
        </div>

        {/* Contato */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold">Contate-me</h4>
          <p>brena.barros@mv.com.br</p>
          <p><a href="https://mv.com.br" className="text-blue-400 hover:underline">https://mv.com.br</a></p>
        </div>

      </div>
      <div className="w-full max-w-[1800px] h-[1px] bg-[#F8F8F8] mx-auto rounded-full -mt-10"></div>

    </footer>
  );
}
