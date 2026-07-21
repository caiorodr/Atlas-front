import { ArrowLeft } from "lucide-react";
import { AtlasLogo } from "@/components/shared/logo";
import { Footer } from "@/components/shared/footer";

const LAST_UPDATED = "21 de julho de 2026";
const PRIVACY_EMAIL = "desenvolvimento@atlasaverbadora.com.br";

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Quem somos",
    body: (
      <p>
        A <strong>Atlas Averbadora</strong> (CNPJ 45.404.110/0001-57) é a
        controladora dos dados tratados nesta política. Operamos uma
        plataforma que conecta órgãos públicos, instituições financeiras e
        servidores públicos para a contratação e averbação de crédito
        consignado, disponível pelo site institucional, pelo portal web e
        pelo aplicativo Atlas Servidor para Android.
      </p>
    ),
  },
  {
    title: "2. Quais dados coletamos",
    body: (
      <>
        <p>Coletamos apenas os dados necessários para operar o consignado:</p>
        <ul>
          <li>
            <strong>Dados de identificação:</strong> CPF, nome completo e
            credenciais de acesso (a senha nunca é compartilhada com
            terceiros e fica armazenada de forma criptografada).
          </li>
          <li>
            <strong>Dados funcionais:</strong> matrícula, órgão/vínculo
            empregatício, cargo e situação funcional, obtidos junto ao
            convênio para viabilizar a consulta de margem consignável.
          </li>
          <li>
            <strong>Dados financeiros da operação:</strong> margem
            consignável, simulações, propostas, contratos e histórico de
            portabilidade.
          </li>
          <li>
            <strong>Dados de contato:</strong> quando você preenche o
            formulário do site (nome, empresa, cargo, e-mail e telefone).
          </li>
          <li>
            <strong>Dados técnicos do dispositivo:</strong> no aplicativo
            Android, apenas o necessário para a conexão com nossos
            servidores (o app não acessa localização, câmera, contatos,
            fotos ou qualquer outro dado sensível do aparelho).
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Como usamos os seus dados",
    body: (
      <ul>
        <li>Autenticar seu acesso e manter sua sessão segura;</li>
        <li>
          Consultar sua margem consignável e apresentar ofertas de crédito
          compatíveis;
        </li>
        <li>Processar simulações, propostas e formalização de contratos;</li>
        <li>
          Cumprir obrigações legais e regulatórias aplicáveis a operações de
          crédito consignado;
        </li>
        <li>Responder a contatos e solicitações enviadas pelo site.</li>
      </ul>
    ),
  },
  {
    title: "4. Com quem compartilhamos",
    body: (
      <>
        <p>
          Não vendemos nem alugamos seus dados para fins de marketing de
          terceiros. O compartilhamento ocorre apenas quando necessário para
          a própria operação de consignado:
        </p>
        <ul>
          <li>
            <strong>Instituições financeiras parceiras</strong> — para
            formalização da proposta e do contrato de crédito que você
            solicitar;
          </li>
          <li>
            <strong>Órgão público empregador (prefeitura/convênio)</strong> —
            para validação do vínculo funcional e efetivação do desconto em
            folha de pagamento;
          </li>
          <li>
            <strong>Prestadores de infraestrutura</strong> que processam
            dados em nosso nome (hospedagem e banco de dados), sob obrigação
            contratual de confidencialidade.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Base legal (LGPD)",
    body: (
      <p>
        Tratamos seus dados com base na execução de contrato ou
        procedimentos preliminares a seu pedido (art. 7º, V), no cumprimento
        de obrigação legal ou regulatória do setor financeiro (art. 7º, II)
        e, quando aplicável, em nosso legítimo interesse em manter a
        segurança e o bom funcionamento da plataforma (art. 7º, IX).
      </p>
    ),
  },
  {
    title: "6. Como protegemos seus dados",
    body: (
      <ul>
        <li>Toda comunicação entre app/site e nossos servidores usa HTTPS/TLS;</li>
        <li>
          No aplicativo Android, tokens de sessão ficam protegidos por
          criptografia apoiada no Android Keystore;
        </li>
        <li>
          A sessão é encerrada automaticamente após período de inatividade;
        </li>
        <li>
          O acesso aos sistemas internos é restrito e registrado por
          controles de autenticação e autorização.
        </li>
      </ul>
    ),
  },
  {
    title: "7. Por quanto tempo guardamos os dados",
    body: (
      <p>
        Mantemos os dados enquanto durar o relacionamento contratual e, após
        seu término, pelo prazo exigido por obrigações legais, regulatórias
        (incluindo normas do setor financeiro) ou para exercício regular de
        direitos em processos administrativos ou judiciais.
      </p>
    ),
  },
  {
    title: "8. Seus direitos",
    body: (
      <>
        <p>Nos termos do art. 18 da LGPD, você pode solicitar a qualquer momento:</p>
        <ul>
          <li>Confirmação da existência de tratamento e acesso aos seus dados;</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
          <li>Informação sobre com quem compartilhamos seus dados;</li>
          <li>Revogação do consentimento, quando aplicável.</li>
        </ul>
        <p>
          Para exercer qualquer um desses direitos, escreva para{" "}
          <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.
        </p>
      </>
    ),
  },
  {
    title: "9. Cookies e tecnologias similares",
    body: (
      <p>
        Nosso site institucional não utiliza cookies de rastreamento
        publicitário de terceiros. Eventuais tecnologias de análise de
        audiência, se adotadas no futuro, serão descritas nesta política
        antes de entrarem em uso.
      </p>
    ),
  },
  {
    title: "10. Público",
    body: (
      <p>
        Nossos serviços são destinados a servidores públicos ativos ou
        aposentados maiores de 18 anos e não são direcionados a crianças ou
        adolescentes.
      </p>
    ),
  },
  {
    title: "11. Alterações desta política",
    body: (
      <p>
        Esta política pode ser atualizada periodicamente para refletir
        mudanças em nossos serviços ou na legislação aplicável. A data da
        última atualização está indicada no topo desta página.
      </p>
    ),
  },
  {
    title: "12. Contato",
    body: (
      <p>
        Dúvidas sobre esta política ou sobre o tratamento dos seus dados
        podem ser enviadas para{" "}
        <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.
      </p>
    ),
  },
];

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-paper text-ink-950">
      <header className="border-b border-ink-950/[0.08]">
        <div className="mx-auto flex h-[72px] max-w-3xl items-center justify-between px-6 lg:px-0">
          <a href="/" aria-label="Atlas — voltar ao início">
            <AtlasLogo tone="light" />
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-ink-500 transition-colors hover:text-ink-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao site
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 lg:px-0 lg:py-24">
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-brand-600">
          Legal
        </span>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
          Política de Privacidade
        </h1>
        <p className="mt-3 text-sm text-ink-400">
          Última atualização: {LAST_UPDATED}
        </p>
        <p className="mt-6 text-base leading-relaxed text-ink-500">
          Esta política explica quais dados a Atlas Averbadora coleta, como
          usamos, com quem compartilhamos e quais direitos você tem sobre
          seus dados pessoais, em conformidade com a Lei Geral de Proteção
          de Dados (Lei nº 13.709/2018 — LGPD).
        </p>

        <div className="mt-14 space-y-12 [&_a]:text-brand-600 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-brand-500 [&_li]:mb-2 [&_li]:leading-relaxed [&_p]:leading-relaxed [&_p:not(:last-child)]:mb-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-xl font-semibold text-ink-950">
                {section.title}
              </h2>
              <div className="mt-4 text-[15px] text-ink-500">{section.body}</div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
