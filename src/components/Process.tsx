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
    <section
      id="processo"
      className="py-32 md:py-40 px-6 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left - Sticky header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-8">
              Como
              <br />
              funciona
            </h2>
            <p className="text-neutral-400 text-lg max-w-md mb-12">
              Processo simples e transparente do início ao fim. Sem surpresas,
              sem enrolação.
            </p>
            <ul className="space-y-4">
              {steps.map((step, idx) => (
                <li
                  key={step.number}
                  className={`flex items-center gap-4 ${
                    idx === 0 ? "text-white" : "text-neutral-500"
                  }`}
                >
                  <span
                    className={`h-[1px] w-8 ${
                      idx === 0 ? "bg-white" : "bg-neutral-800"
                    }`}
                  />
                  {step.title}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Step cards */}
          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-10 transition-all duration-300 hover:border-white/20 overflow-hidden">
                  {/* Background grid */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",
                      backgroundSize: "100% 40px",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Step header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center">
                        <step.icon
                          size={22}
                          className="text-white/70 group-hover:text-white transition-colors"
                        />
                      </div>
                      <span className="text-lg font-display text-white/20">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-display font-medium text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-neutral-500 leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
