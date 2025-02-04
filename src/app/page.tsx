import Header from "./components/Header";
import TopBar from "./components/TopBar";
import WelcomeMessage from "./components/WelcomeMessage";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Barra Superior */}
      <TopBar />
      {/* Conteúdo da Página */}
      <WelcomeMessage />
      <Header />
    </div>
  );
}
