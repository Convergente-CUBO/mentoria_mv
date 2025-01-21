// pages/index.tsx ou seu componente principal
import TopBar from './components/TopBar/TopBar';
import Header from './components/TopBar/Header';
import WelcomeMessage from './components/Welcome/WelcomeMessage';

export default function Home() {
  return (
    <div>
      {/* TopBar */}
      <TopBar />

      {/* Header com imagem de fundo */}
      <Header />

      {/* Frase de Boas-Vindas */}
      <WelcomeMessage />
    </div>
  );
}
