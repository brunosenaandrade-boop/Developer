"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { trackWhatsAppClicked } from "@/lib/analytics";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5548998649898";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-white">BS</span>
            <span className="text-blue-500">Developer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-sm text-[var(--muted-foreground)] hover:text-white transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("processo")}
              className="text-sm text-[var(--muted-foreground)] hover:text-white transition-colors"
            >
              Como Funciona
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="btn btn-whatsapp text-sm"
            >
              Falar no WhatsApp
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[var(--muted-foreground)] hover:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-[var(--border)]"
          >
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left text-[var(--muted-foreground)] hover:text-white transition-colors py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("processo")}
                className="text-left text-[var(--muted-foreground)] hover:text-white transition-colors py-2"
              >
                Como Funciona
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="btn btn-whatsapp text-sm w-full mt-2"
              >
                Falar no WhatsApp
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
