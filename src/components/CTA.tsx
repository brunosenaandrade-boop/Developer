"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { trackWhatsAppClicked } from "@/lib/analytics";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5548998649898";

export function CTA() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClicked("cta_section");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.`,
      "_blank"
    );
  };

  return (
    <section className="py-24 md:py-32 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Pronto para tirar sua ideia do papel?
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-[var(--muted-foreground)] mb-10 max-w-2xl mx-auto">
            Vamos conversar sobre seu projeto. Sem compromisso, sem enrolação.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleWhatsAppClick}
            className="btn btn-whatsapp text-base group"
          >
            Chamar no WhatsApp
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Trust note */}
          <p className="text-sm text-[var(--muted)] mt-6">
            Respondemos em até 2 horas em horário comercial
          </p>
        </motion.div>
      </div>
    </section>
  );
}
