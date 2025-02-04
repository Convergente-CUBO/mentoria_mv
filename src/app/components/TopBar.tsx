'use client'; // Adicione essa linha no topo do arquivo

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../assets/Ativo 11 1.png'; // Verifique o caminho da imagem

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  /*
    // Função para verificar a rolagem
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true); // Barra deve mudar de cor
      } else {
        setScrolled(false); // Barra volta ao estado original
      }
    };
  
    // Adiciona e remove o ouvinte de evento quando o componente é montado/desmontado
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      // Remove o ouvinte de evento ao desmontar o componente
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  */
  return (
    <div className={`absolute top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-600' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo usando o componente Image */}
        <div className="flex items-center mt-2 ml-4"> {/* Adicionando margem para mover mais para a esquerda */}
          <Image
            src={logo} // Caminho da imagem
            alt="Logo do Projeto"
            height={59} // Altura da imagem
            width={110}  // Largura da imagem
            priority // Para priorizar o carregamento dessa imagem
          />
        </div>

        {/* Menu ou Ações */}
        <div className="flex-1 flex justify-center space-x-6"> {/* Centralizando o menu */}
          <button className="relative px-3 py-1 transition text-white hover: after:content-[''] after:block after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            Home
          </button>
          <button className="relative px-3 py-1 transition text-white hover: after:content-[''] after:block after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            Sobre
          </button>
          <button className="relative px-3 py-1 transition text-white hover:after:content-[''] after:block after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            Contato
          </button>
        </div>
      </div>
    </div>
  );
}
