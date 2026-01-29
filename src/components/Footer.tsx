"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-lg font-bold tracking-tight">
            <span className="text-white">BS</span>
            <span className="text-[var(--accent)]">Developer</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[var(--muted)]">
            {currentYear} BS Developer. Todos os direitos reservados.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="/privacidade"
              className="text-sm text-[var(--muted)] hover:text-white transition-colors"
            >
              Privacidade
            </a>
            <a
              href="/termos"
              className="text-sm text-[var(--muted)] hover:text-white transition-colors"
            >
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
