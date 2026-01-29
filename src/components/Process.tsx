"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Conversa",
    description:
      "Entendemos sua necessidade, seus objetivos e o contexto do seu negócio. Sem compromisso.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Proposta",
    description:
      "Apresentamos uma proposta clara com escopo, prazo e investimento. Você decide se faz sentido.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Desenvolvimento",
    description:
      "Colocamos a mão na massa. Você acompanha o progresso e recebe seu projeto funcionando.",
  },
];

export function Process() {
  return (
    <section id="processo" className="py-24 md:py-32 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como funciona
          </h2>
          <p className="text-[var(--muted-foreground)] max-w-xl mx-auto">
            Processo simples e transparente do início ao fim
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-3rem)] h-px bg-[var(--border)]" />
              )}

              <div className="text-center">
                {/* Icon */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--card)] border border-[var(--border)] mb-6">
                  <step.icon size={24} className="text-[var(--accent)]" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--accent)] text-white text-xs font-bold flex items-center justify-center">
                    {step.number.replace("0", "")}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
