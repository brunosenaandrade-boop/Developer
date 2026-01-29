"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { trackWhatsAppClicked } from "@/lib/analytics";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5548998649898";

export function WhatsAppButton() {
  const handleClick = () => {
    trackWhatsAppClicked("floating_button");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais.`,
      "_blank"
    );
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[var(--whatsapp)] text-white flex items-center justify-center shadow-lg hover:bg-[var(--whatsapp-hover)] hover:scale-110 transition-all"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle size={24} />
    </motion.button>
  );
}
