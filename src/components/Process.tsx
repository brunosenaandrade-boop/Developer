"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MessageSquare, FileText, Rocket } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Conversa",
    description:
      "Entendemos sua necessidade, seus objetivos e o contexto do seu negócio. Sem compromisso.",
    image: "/images/process_conversa_3d.png",
  },
  {
    icon: FileText,
    number: "02",
    title: "Proposta",
    description:
      "Apresentamos uma proposta clara com escopo, prazo e investimento. Você decide se faz sentido.",
    image: "/images/process_proposta_3d.png",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Desenvolvimento",
    description:
      "Colocamos a mão na massa. Você acompanha o progresso e recebe seu projeto funcionando.",
    image: "/images/process_desenvolvimento_3d.png",
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        },
        { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

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
                  className={`flex items-center gap-4 transition-colors duration-300 ${
                    idx === activeStep ? "text-white" : "text-neutral-500"
                  }`}
                >
                  <span
                    className={`h-[1px] transition-all duration-300 ${
                      idx === activeStep
                        ? "w-8 bg-white"
                        : "w-4 bg-neutral-800"
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
                ref={(el) => { cardRefs.current[index] = el; }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-[#0a0a0a] border border-white/5 rounded-2xl transition-all duration-300 hover:border-white/20 overflow-hidden">
                  {/* Image */}
                  <div className="relative aspect-[16/9] bg-neutral-900 overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-10 relative">
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",
                        backgroundSize: "100% 40px",
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center">
                          <step.icon
                            size={20}
                            className="text-white/70 group-hover:text-white transition-colors"
                          />
                        </div>
                        <span className="text-lg font-display text-white/20">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="text-2xl font-display font-medium text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-neutral-500 leading-relaxed max-w-sm">
                        {step.description}
                      </p>
                    </div>
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
