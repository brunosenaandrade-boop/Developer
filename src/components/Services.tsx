"use client";

import { motion } from "framer-motion";
import { Globe, Database, Smartphone, Zap, Plug, Rocket } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    description:
      "Páginas otimizadas para conversão. Design moderno, carregamento rápido e responsivo em todos os dispositivos.",
    detail: "HTML · React · Next.js",
    image: "/images/sites_landing_pages_3d.png",
  },
  {
    icon: Database,
    title: "Sistemas Web",
    description:
      "Aplicações robustas para gerenciar seu negócio. Dashboards, CRMs, ERPs e soluções personalizadas.",
    detail: "Full-Stack · PostgreSQL",
    image: "/images/web_systems_3d.png",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description:
      "Aplicativos para iOS e Android. Soluções nativas ou híbridas pensadas para a melhor experiência do usuário.",
    detail: "React Native · Flutter",
    image: "/images/mobile_apps_3d.png",
  },
  {
    icon: Rocket,
    title: "SaaS & MVPs",
    description:
      "Produtos digitais escaláveis. Do MVP à plataforma completa, com arquitetura preparada para crescer.",
    detail: "Cloud · Escalável",
    image: "/images/saas_mvp_3d.png",
  },
  {
    icon: Plug,
    title: "APIs & Integrações",
    description:
      "Conecte seus sistemas. Integrações com gateways de pagamento, ERPs, CRMs e serviços de terceiros.",
    detail: "REST · Webhooks",
    image: "/images/api_integrations_3d.png",
  },
  {
    icon: Zap,
    title: "Automações",
    description:
      "Elimine tarefas repetitivas. Fluxos automatizados que economizam tempo e reduzem erros operacionais.",
    detail: "N8N · Scripts · IA",
    image: "/images/automation_3d.png",
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="py-32 md:py-40 px-6 relative z-10 bg-[#050509] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">
            O que
            <br />
            desenvolvemos
          </h2>
          <p className="text-neutral-400 text-lg max-w-md">
            Soluções digitais completas para empresas que querem resultados
            reais e mensuráveis.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card-3d-wrap group"
            >
              <div className="card-3d-inner relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20">
                {/* Image */}
                <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 pt-4 relative">
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  <div className="relative z-10 flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-white/20 transition-colors shrink-0">
                      <service.icon
                        size={18}
                        className="text-white/70 group-hover:text-white transition-colors"
                      />
                    </div>
                    <div className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest">
                      {service.detail}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-display font-medium text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
