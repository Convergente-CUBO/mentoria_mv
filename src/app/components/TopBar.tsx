"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../assets/Ativo 11 1.png";
import { Bell, User } from "lucide-react";

export default function TopBar() {
  const pathname = usePathname();
  const activePage = pathname === "/" ? "home" : pathname.replace("/", "");
  const isHome = activePage === "home";

  return (
    <div className={`absolute top-0 w-full z-50 transition-colors ${isHome ? "bg-transparent" : "bg-[#00365F]"}`}>
      <div className="max-w-screen mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center cursor-pointer">
            <Image src={logo} alt="Logo do Projeto" height={59} width={110} priority />
          </Link>
        </div>

        {/* Menu */}
        <div className="flex-1 flex justify-center space-x-8">
          {["Home", "Agenda", "Menssagem"].map((item, index) => {
            const path = item.toLowerCase();
            return (
              <Link
                key={index}
                href={`/${path === "home" ? "" : path}`}
                className="relative px-3 py-1 text-white no-underline after:block after:content-[''] after:w-full after:h-0.5 after:bg-[#F76D82] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-white"
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* Ícones */}
        <div className="flex items-center space-x-6">
          <Bell className="text-white w-6 h-6 cursor-pointer" />
          <Link href="/mentorando" className="flex items-center cursor-pointer">
            <User className="text-white w-10 h-10 cursor-pointer border-2 border-white rounded-full p-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}