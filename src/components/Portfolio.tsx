"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Projeto Alpha",
    category: "Sistema Web",
    number: "01",
    image: "/images/case_alpha_3d.png",
  },
  {
    title: "Projeto Beta",
    category: "Landing Page",
    number: "02",
    image: "/images/case_beta_3d.png",
  },
  {
    title: "Projeto Gamma",
    category: "App Mobile",
    number: "03",
    image: "/images/case_gamma_3d.png",
  },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-32 md:py-40 px-6 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-4">
              Projetos
              <br />
              <span className="text-neutral-500">selecionados</span>
            </h2>
          </div>
          <span className="hidden md:block text-xs uppercase tracking-[0.3em] text-neutral-500">
            Cases recentes
          </span>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden bg-neutral-900 mb-6 rounded-xl relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Info */}
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <h4 className="text-2xl font-display font-medium text-white">
                    {project.title}
                  </h4>
                  <p className="text-neutral-500 text-sm mt-1">
                    {project.category}
                  </p>
                </div>
                <div className="text-white/20 text-lg font-display">
                  {project.number}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
