"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="py-24 md:py-32 px-6 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-12 md:p-16 text-center transition-all duration-300 hover:border-white/20 relative overflow-hidden"
        >
          {/* Subtle grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10">
            <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShieldCheck size={28} className="text-white/70" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">
              Compromisso com o resultado
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Todo projeto é desenvolvido com escopo claro, alinhamento
              constante e transparência total. Se o que for entregue não estiver
              de acordo com o que foi combinado, ajustamos sem custo adicional
              até estar conforme o escopo aprovado.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
