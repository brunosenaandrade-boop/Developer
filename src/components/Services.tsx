"use client";

import { motion } from "framer-motion";
import { Globe, Database, Smartphone, Zap, Plug, Rocket } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    description:
      "Páginas otimizadas para conversão. Design moderno, carregamento rápido e responsivo em todos os dispositivos.",
  },
  {
    icon: Database,
    title: "Sistemas Web",
    description:
      "Aplicações robustas para gerenciar seu negócio. Dashboards, CRMs, ERPs e soluções personalizadas.",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description:
      "Aplicativos para iOS e Android. Soluções nativas ou híbridas pensadas para a melhor experiência do usuário.",
  },
  {
    icon: Rocket,
    title: "SaaS & MVPs",
    description:
      "Produtos digitais escaláveis. Do MVP à plataforma completa, com arquitetura preparada para crescer.",
  },
  {
    icon: Plug,
    title: "APIs & Integrações",
    description:
      "Conecte seus sistemas. Integrações com gateways de pagamento, ERPs, CRMs e serviços de terceiros.",
  },
  {
    icon: Zap,
    title: "Automações",
    description:
      "Elimine tarefas repetitivas. Fluxos automatizados que economizam tempo e reduzem erros operacionais.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32">
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
            O que desenvolvemos
          </h2>
          <p className="text-[var(--muted-foreground)] max-w-xl mx-auto">
            Soluções digitais completas para empresas que querem resultados
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--accent)]/20 transition-colors">
                <service.icon size={24} className="text-[var(--accent)]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
