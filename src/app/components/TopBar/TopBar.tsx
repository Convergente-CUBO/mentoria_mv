// components/TopBar.tsx
export default function TopBar() {
    return (
      <div className="fixed top-0 left-0 right-0 z-10 bg-transparent py-4 px-8 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <a href="#" className="text-white font-semibold hover:text-gray-300">Home</a>
          <a href="#" className="text-white font-semibold hover:text-gray-300">Agenda</a>
          <a href="#" className="text-white font-semibold hover:text-gray-300">Mensagem</a>
        </div>
      </div>
    );
  }
  