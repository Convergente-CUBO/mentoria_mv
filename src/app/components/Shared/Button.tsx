// components/Shared/Button.tsx
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
}

export default function Button({ children, href }: ButtonProps) {
  return (
    <a
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
