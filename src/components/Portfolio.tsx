"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Projeto Alpha",
    category: "Sistema Web",
    number: "01",
    imagePlaceholder: "Imagem: Projeto 1 (16:9)",
  },
  {
    title: "Projeto Beta",
    category: "Landing Page",
    number: "02",
    imagePlaceholder: "Imagem: Projeto 2 (16:9)",
  },
  {
    title: "Projeto Gamma",
    category: "App Mobile",
    number: "03",
    imagePlaceholder: "Imagem: Projeto 3 (16:9)",
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
              {/* Image placeholder */}
              <div className="aspect-[16/9] overflow-hidden bg-neutral-900 mb-6 rounded-xl relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[11px] font-mono text-neutral-600 uppercase tracking-widest text-center px-4">
                    {project.imagePlaceholder}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
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
