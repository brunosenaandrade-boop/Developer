import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso | BS Developer",
  description: "Termos de uso da BS Developer.",
};

export default function Termos() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="text-sm text-[#71717A] hover:text-white transition-colors mb-8 inline-block"
        >
          &larr; Voltar ao site
        </Link>

        <h1 className="text-3xl font-bold mb-2">Termos de Uso</h1>
        <p className="text-sm text-[#71717A] mb-10">
          Última atualização: Janeiro de 2026
        </p>

        <div className="space-y-8 text-[#A1A1AA] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              1. Aceitação dos termos
            </h2>
            <p>
              Ao acessar e utilizar o site da BS Developer, você concorda com
              estes Termos de Uso. Caso não concorde com algum dos termos, por
              favor, não utilize o site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              2. Serviços oferecidos
            </h2>
            <p>
              A BS Developer oferece serviços de desenvolvimento web sob
              demanda, incluindo:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Criação de sites e landing pages.</li>
              <li>Desenvolvimento de sistemas web e dashboards.</li>
              <li>Desenvolvimento de produtos digitais (SaaS, apps).</li>
            </ul>
            <p className="mt-2">
              Os valores, prazos e escopo de cada projeto são definidos
              individualmente após conversa com o cliente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              3. Atendimento via chat
            </h2>
            <p>
              O site dispõe de um sistema de auto-atendimento (Ana) para
              auxiliar visitantes com informações gerais sobre os serviços. O
              atendimento via chat não constitui proposta comercial, contrato ou
              compromisso de prestação de serviço. Para formalização de
              projetos, o contato deve ser feito diretamente com o responsável
              via WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              4. Propriedade intelectual
            </h2>
            <p>
              Todo o conteúdo do site, incluindo textos, imagens, design e
              código-fonte, é de propriedade da BS Developer e está protegido
              pelas leis de direitos autorais. É proibida a reprodução,
              distribuição ou modificação do conteúdo sem autorização prévia.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              5. Limitação de responsabilidade
            </h2>
            <p>
              A BS Developer se esforça para manter o site funcionando
              corretamente, mas não garante disponibilidade ininterrupta. Não
              nos responsabilizamos por:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Indisponibilidade temporária do site por motivos técnicos.
              </li>
              <li>
                Decisões tomadas com base em informações fornecidas pelo chat de
                atendimento.
              </li>
              <li>
                Danos decorrentes do uso de links externos presentes no site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              6. Uso adequado
            </h2>
            <p>O visitante se compromete a:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Utilizar o site de forma ética e legal.</li>
              <li>
                Não enviar conteúdo ofensivo, ilegal ou spam pelo chat de
                atendimento.
              </li>
              <li>
                Não tentar acessar áreas restritas ou comprometer a segurança
                do site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              7. Alterações nos termos
            </h2>
            <p>
              A BS Developer reserva-se o direito de alterar estes Termos de Uso
              a qualquer momento. As alterações entram em vigor assim que
              publicadas no site. Recomendamos que revise esta página
              periodicamente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              8. Legislação aplicável
            </h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do
              Brasil. Qualquer disputa será resolvida no foro da Comarca de
              Capivari de Baixo/SC.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              9. Contato
            </h2>
            <p>
              Para dúvidas sobre estes termos, entre em contato pelo WhatsApp:{" "}
              <a
                href="https://wa.me/5548998649898"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563EB] hover:underline"
              >
                (48) 99864-9898
              </a>
            </p>
            <p className="mt-2">
              BS Developer — Rua João Rodrigues Martins, 101 — Capivari de
              Baixo/SC
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
