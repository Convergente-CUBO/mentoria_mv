// components/Header.tsx
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative flex items-center justify-between py-4 px-8 z-20">
      {/* Foto de fundo */}
      <div className="absolute inset-0">
        <Image
          src={require('../../../assets/FOTO_PLUX.png')}  // Caminho relativo correto
          alt="Imagem de fundo"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-60"
        />
      </div>

      {/* Conteúdo do Header */}
      <div className="relative z-10 flex w-full justify-between items-center">
        {/* Logo à esquerda */}
        <div className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={120} height={40} />
        </div>

        {/* Ícone de notificação e foto do usuário à direita */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <button className="text-white">
              <i className="fas fa-bell"></i> {/* Ícone do sino */}
            </button>
          </div>

          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/path-to-user-photo.jpg"
              alt="Foto do usuário"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
