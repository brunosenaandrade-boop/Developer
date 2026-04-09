"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { trackWhatsAppClicked } from "@/lib/analytics";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5548998649898";

export function Hero() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClicked("hero");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20tenho%20interesse%20em%20desenvolver%20um%20projeto.`,
      "_blank"
    );
  };

  return (
    <section className="min-h-screen flex flex-col overflow-hidden z-10 px-6 relative items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 z-0 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-300">
            Desenvolvimento sob demanda
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-[6.5rem] font-medium tracking-tighter text-white leading-[0.95] mb-12"
        >
          <span className="mask-text">
            <span>SEU PROJETO</span>
          </span>
          <span className="mask-text">
            <span className="text-neutral-500">DIGITAL</span>
          </span>
          <span className="mask-text">
            <span>DO ZERO</span>
          </span>
        </motion.h1>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto mt-12 border-t border-white/10 pt-8"
        >
          <p className="text-neutral-400 text-sm max-w-xs text-left">
            Sites, sistemas e apps desenvolvidos com a atenção que seu negócio
            merece.
          </p>
          <div className="flex items-center gap-8 mt-6 md:mt-0">
            <div className="flex gap-12">
              <div className="text-left">
                <div className="text-2xl font-display font-bold">50+</div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-500">
                  Projetos
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-display font-bold">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-500">
                  Satisfação
                </div>
              </div>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="btn btn-whatsapp text-xs group ml-4"
            >
              Iniciar Conversa
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
