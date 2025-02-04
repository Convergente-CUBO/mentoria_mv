export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold">Sobre</h4>
          <p>Aqui temos um site voltado para você...</p>
        </div>

        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold">Comente</h4>
          <textarea className="w-full bg-gray-700 text-gray-300 p-2 rounded" placeholder="Deixe um feedback"></textarea>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Enviar</button>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Contate-me</h4>
          <p>brena.barros@mv.com.br</p>
          <p>https://mv.com.br</p>
        </div>
      </div>
    </footer>
  );
}