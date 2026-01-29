import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | BS Developer",
  description: "Política de privacidade da BS Developer.",
};

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="text-sm text-[#71717A] hover:text-white transition-colors mb-8 inline-block"
        >
          &larr; Voltar ao site
        </Link>

        <h1 className="text-3xl font-bold mb-2">Política de Privacidade</h1>
        <p className="text-sm text-[#71717A] mb-10">
          Última atualização: Janeiro de 2026
        </p>

        <div className="space-y-8 text-[#A1A1AA] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              1. Informações que coletamos
            </h2>
            <p>
              A BS Developer pode coletar as seguintes informações quando você
              utiliza nosso site:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Mensagens enviadas pelo chat de atendimento (Ana) para fins de
                atendimento ao cliente.
              </li>
              <li>
                Dados de navegação como páginas visitadas, tempo de permanência e
                origem do acesso, coletados via ferramentas de análise.
              </li>
              <li>
                Informações fornecidas voluntariamente ao entrar em contato via
                WhatsApp, como nome e descrição do projeto.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              2. Como usamos suas informações
            </h2>
            <p>As informações coletadas são utilizadas para:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Responder suas perguntas e fornecer atendimento.</li>
              <li>Melhorar a experiência de navegação no site.</li>
              <li>
                Elaborar propostas e orçamentos quando solicitado pelo
                visitante.
              </li>
              <li>Analisar métricas de uso do site para melhorias contínuas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              3. Compartilhamento de dados
            </h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais
              com terceiros para fins comerciais. Podemos compartilhar dados
              apenas com ferramentas essenciais para o funcionamento do site,
              como serviços de hospedagem e análise de dados, sempre respeitando
              esta política.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              4. Cookies e tecnologias de rastreamento
            </h2>
            <p>
              Utilizamos cookies e tecnologias semelhantes para melhorar a
              experiência de navegação e coletar dados analíticos. Você pode
              desativar cookies nas configurações do seu navegador, mas isso pode
              afetar algumas funcionalidades do site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              5. Segurança dos dados
            </h2>
            <p>
              Adotamos medidas de segurança para proteger suas informações
              contra acesso não autorizado, alteração ou destruição. No entanto,
              nenhum método de transmissão pela internet é 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              6. Seus direitos (LGPD)
            </h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (Lei nº
              13.709/2018), você tem direito a:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Solicitar acesso aos dados pessoais que temos sobre você.</li>
              <li>Solicitar correção de dados incompletos ou desatualizados.</li>
              <li>
                Solicitar a exclusão dos seus dados pessoais, quando aplicável.
              </li>
              <li>Revogar o consentimento para o tratamento de dados.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              7. Contato
            </h2>
            <p>
              Para dúvidas sobre esta política ou para exercer seus direitos,
              entre em contato pelo WhatsApp:{" "}
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
              BS Developer — Tubarão/SC
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
