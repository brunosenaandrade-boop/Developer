"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { trackWhatsAppClicked } from "@/lib/analytics";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5548998649898";

export function CTA() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClicked("cta_section");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.`,
      "_blank"
    );
  };

  return (
    <section className="py-32 md:py-40 px-6 border-t border-white/5 relative">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[80px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-display font-medium text-white mb-8 tracking-tight">
            Pronto para tirar sua
            <br />
            <span className="text-neutral-500">ideia do papel?</span>
          </h2>

          <p className="text-neutral-400 uppercase tracking-widest text-xs mb-12">
            Vamos conversar sobre seu projeto. Sem compromisso.
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="btn btn-whatsapp text-sm group"
          >
            Chamar no WhatsApp
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          <p className="text-[10px] text-neutral-600 uppercase tracking-widest mt-8">
            Respondemos em até 2 horas em horário comercial
          </p>
        </motion.div>
      </div>
    </section>
  );
}
