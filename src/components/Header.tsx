"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { trackWhatsAppClicked } from "@/lib/analytics";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5548998649898";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    trackWhatsAppClicked("header");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.`,
      "_blank"
    );
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5 transition-transform duration-300"
    >
      <div
        className={`max-w-[1400px] mx-auto flex items-center justify-between rounded-full px-8 py-4 transition-all duration-300 ${
          isScrolled
            ? "glass"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm overflow-hidden">
            <svg
              className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500"
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
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <button
            onClick={() => scrollToSection("servicos")}
            className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
          >
            Servicos
          </button>
          <button
            onClick={() => scrollToSection("processo")}
            className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
          >
            Processo
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
          >
            Iniciar Projeto
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mt-2 mx-auto max-w-[1400px] glass rounded-2xl p-6"
        >
          <nav className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-left text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors py-2"
            >
              Servicos
            </button>
            <button
              onClick={() => scrollToSection("processo")}
              className="text-left text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors py-2"
            >
              Processo
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors mt-2"
            >
              Iniciar Projeto
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
