import { ArrowLeft } from "lucide-react";
import { AtlasLogo } from "@/components/shared/logo";
import { Footer } from "@/components/shared/footer";

const LAST_UPDATED = "21 de julho de 2026";
const DELETION_EMAIL = "desenvolvimento@atlasaverbadora.com.br";

export function AccountDeletionPage() {
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
          Exclusão de Conta e Dados
        </h1>
        <p className="mt-3 text-sm text-ink-400">
          Última atualização: {LAST_UPDATED}
        </p>
        <p className="mt-6 text-base leading-relaxed text-ink-500">
          Esta página explica como você, usuário do <strong>Atlas Servidor</strong>{" "}
          (aplicativo da <strong>Atlas Averbadora</strong>), pode solicitar a
          exclusão da sua conta e dos seus dados pessoais, quais dados são
          removidos, quais são mantidos e por quanto tempo.
        </p>

        <div className="mt-14 space-y-12 [&_a]:text-brand-600 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-brand-500 [&_li]:mb-2 [&_li]:leading-relaxed [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-5 [&_p]:leading-relaxed [&_p:not(:last-child)]:mb-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
          <section>
            <h2 className="font-display text-xl font-semibold text-ink-950">
              1. Como solicitar a exclusão
            </h2>
            <div className="mt-4 text-[15px] text-ink-500">
              <p>
                Hoje a exclusão é feita mediante solicitação (ainda não há um
                botão de autoatendimento dentro do app). Para solicitar:
              </p>
              <ol>
                <li>
                  Envie um e-mail para{" "}
                  <a href={`mailto:${DELETION_EMAIL}?subject=Solicita%C3%A7%C3%A3o%20de%20exclus%C3%A3o%20de%20conta%20-%20Atlas%20Servidor`}>
                    {DELETION_EMAIL}
                  </a>{" "}
                  com o assunto <strong>“Solicitação de exclusão de conta — Atlas Servidor”</strong>.
                </li>
                <li>
                  Informe seu <strong>nome completo</strong> e <strong>CPF</strong>{" "}
                  cadastrados no app, para que possamos localizar e confirmar
                  sua conta com segurança.
                </li>
                <li>
                  Nossa equipe confirma o recebimento e, após validar sua
                  identidade, processa a exclusão em até{" "}
                  <strong>15 dias úteis</strong>, informando por e-mail quando
                  for concluída.
                </li>
              </ol>
              <p className="mt-4">
                Se você tiver um contrato de crédito consignado{" "}
                <strong>ativo</strong>, a exclusão completa da conta só pode
                ocorrer após a quitação ou encerramento formal do contrato —
                mas você pode solicitar a remoção dos demais dados pessoais
                não vinculados a essa obrigação a qualquer momento.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink-950">
              2. Quais dados são excluídos
            </h2>
            <div className="mt-4 text-[15px] text-ink-500">
              <ul>
                <li>Credenciais de acesso (login e senha);</li>
                <li>E-mail e telefone de contato cadastrados;</li>
                <li>Sessão e tokens de autenticação armazenados no aparelho;</li>
                <li>
                  Simulações de empréstimo não contratadas e propostas que não
                  avançaram para um contrato firmado.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink-950">
              3. Quais dados são mantidos, e por quê
            </h2>
            <div className="mt-4 text-[15px] text-ink-500">
              <p>
                Por se tratar de uma plataforma de crédito consignado,
                algumas informações não podem ser apagadas imediatamente,
                mesmo após a exclusão da conta, por exigência legal e
                regulatória:
              </p>
              <ul>
                <li>
                  <strong>Contratos, propostas contratadas e histórico de
                  operações</strong> vinculados a empréstimos consignados —
                  mantidos pelo prazo exigido pelas normas do Banco Central do
                  Brasil e pela legislação civil e tributária aplicável,
                  atualmente de até <strong>5 (cinco) anos</strong> após o
                  encerramento do contrato ou do relacionamento;
                </li>
                <li>
                  <strong>CPF e dados de identificação</strong> associados a
                  essas operações, pelo mesmo período, para fins de auditoria,
                  prevenção a fraude e cumprimento de obrigações perante
                  órgãos reguladores e o órgão público empregador;
                </li>
                <li>
                  Registros que precisem ser preservados para cumprimento de
                  obrigação legal, exercício regular de direitos em processos
                  administrativos/judiciais, ou por determinação de
                  autoridade competente.
                </li>
              </ul>
              <p className="mt-4">
                Encerrado esse prazo de retenção, os dados remanescentes são
                eliminados ou anonimizados.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink-950">
              4. Dúvidas
            </h2>
            <div className="mt-4 text-[15px] text-ink-500">
              <p>
                Para dúvidas sobre este processo ou sobre o tratamento dos
                seus dados, consulte também nossa{" "}
                <a href="/privacy">Política de Privacidade</a> ou escreva para{" "}
                <a href={`mailto:${DELETION_EMAIL}`}>{DELETION_EMAIL}</a>.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
