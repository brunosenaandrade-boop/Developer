"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="py-24 md:py-32 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card text-center py-12 px-8"
        >
          <div className="w-14 h-14 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-6">
            <ShieldCheck size={28} className="text-[var(--accent)]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Compromisso com o resultado
          </h2>
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
            Todo projeto é desenvolvido com escopo claro, alinhamento constante
            e transparência total. Se o que for entregue não estiver de acordo
            com o que foi combinado, ajustamos sem custo adicional até estar
            conforme o escopo aprovado.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
