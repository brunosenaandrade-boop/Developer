"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Empresa */}
          <div>
            <div className="text-lg font-bold tracking-tight mb-3">
              <span className="text-white">BS</span>
              <span className="text-[var(--accent)]">Developer</span>
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Desenvolvimento web sob demanda para empresas e empreendedores.
            </p>
          </div>

          {/* Contato */}
          <div>
            <p className="text-sm font-semibold text-white mb-3">Contato</p>
            <div className="space-y-2">
              <a
                href="mailto:contato@bsdeveloper.com.br"
                className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors"
              >
                <Mail size={14} />
                contato@bsdeveloper.com.br
              </a>
              <div className="flex items-start gap-2 text-sm text-[var(--muted)]">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>
                  Rua João Rodrigues Martins, 101
                  <br />
                  Capivari de Baixo/SC
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold text-white mb-3">Legal</p>
            <div className="space-y-2">
              <Link
                href="/privacidade"
                className="block text-sm text-[var(--muted)] hover:text-white transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="block text-sm text-[var(--muted)] hover:text-white transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[var(--muted)]">
            &copy; {currentYear} BS Developer. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[var(--muted)]">
            CNPJ: 26.630.862/0001-91
          </p>
        </div>
      </div>
    </footer>
  );
}
