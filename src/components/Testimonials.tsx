"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Entregou exatamente o que foi combinado, no prazo e com qualidade impecável. Recomendo sem pensar duas vezes.",
    name: "Cliente 1",
    role: "CEO, Empresa A",
    avatarPlaceholder: "Avatar 1",
  },
  {
    quote:
      "Profissionalismo raro. O sistema que ele desenvolveu transformou a operação da nossa empresa.",
    name: "Cliente 2",
    role: "Diretor, Empresa B",
    avatarPlaceholder: "Avatar 2",
  },
  {
    quote:
      "Comunicação clara, código limpo e resultado que superou nossas expectativas. Parceiro de confiança.",
    name: "Cliente 3",
    role: "CTO, Empresa C",
    avatarPlaceholder: "Avatar 3",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 md:py-40 px-6 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Fade masks */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">
            O que dizem
          </h2>
          <p className="text-neutral-500 uppercase tracking-widest text-xs">
            Depoimentos de quem confiou no nosso trabalho
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:border-white/30 group"
            >
              <p className="text-lg text-neutral-300 font-light mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 bg-neutral-800 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                  <span className="text-[8px] font-mono text-neutral-500 uppercase">
                    {testimonial.avatarPlaceholder}
                  </span>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">
                    {testimonial.name}
                  </div>
                  <div className="text-neutral-600 text-xs uppercase tracking-wider">
                    {testimonial.role}
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
