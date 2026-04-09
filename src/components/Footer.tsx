"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#050509] border-t border-white/5 pt-24 pb-12">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

      {/* Glow */}
      <div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[80px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm overflow-hidden">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="font-display font-bold tracking-tight text-lg text-white">
                BS<span className="font-light text-neutral-500">Developer</span>
              </span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Desenvolvimento web sob demanda para empresas e empreendedores.
              Tubarão, SC.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
                Navegação
              </h4>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li>
                  <button
                    onClick={() => scrollToSection("servicos")}
                    className="hover:text-white transition-colors"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("processo")}
                    className="hover:text-white transition-colors"
                  >
                    Processo
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
                Contato
              </h4>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li>
                  <a
                    href="mailto:contato@bsdeveloper.com.br"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Mail size={14} />
                    contato@bsdeveloper.com.br
                  </a>
                </li>
                <li>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} className="shrink-0" />
                    Tubarão/SC
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
                Legal
              </h4>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li>
                  <Link
                    href="/privacidade"
                    className="hover:text-white transition-colors"
                  >
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="/termos"
                    className="hover:text-white transition-colors"
                  >
                    Termos de Uso
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Newsletter placeholder */}
          <div className="lg:col-span-1">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
              Fique por dentro
            </h4>
            <div className="relative">
              <input
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="Seu email"
                type="email"
              />
              <button className="absolute right-2 top-2 p-1 bg-white text-black rounded hover:bg-neutral-200 transition-colors">
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] text-neutral-600 uppercase tracking-widest">
            &copy; {currentYear} BS Developer. Todos os direitos reservados.
          </div>
          <div className="text-[10px] text-neutral-600 uppercase tracking-widest">
            CNPJ: 26.630.862/0001-91
          </div>
        </div>
      </div>
    </footer>
  );
}
