import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const PROBLEMS = [
  {
    number: "01",
    title: "Falta de integração entre sistemas",
    description:
      "Órgãos, bancos e folhas de pagamento operam em silos. Cada consulta vira troca de ofícios, planilhas e e-mails — e a informação envelhece antes de chegar.",
  },
  {
    number: "02",
    title: "Processos burocráticos",
    description:
      "Averbações que dependem de etapas manuais levam dias, acumulam filas e criam experiências frustrantes para servidores e instituições.",
  },
  {
    number: "03",
    title: "Dificuldade no controle de margem",
    description:
      "Sem uma fonte única de verdade, a margem consignável diverge entre sistemas — abrindo espaço para erros de desconto e endividamento além do limite.",
  },
  {
    number: "04",
    title: "Risco operacional",
    description:
      "Operações sem trilha de auditoria e sem padronização expõem gestores públicos e instituições financeiras a falhas, fraudes e passivos.",
  },
];

export function Problem() {
  return (
    <section id="problema" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="O problema"
            title="Processos manuais geram lentidão, riscos e falta de transparência."
            lead="O consignado público ainda depende de ofícios, planilhas e sistemas que não conversam entre si. O resultado: dias de espera para o que deveria levar segundos."
          />
        </div>

        <ol className="lg:pt-2">
          {PROBLEMS.map((problem, i) => (
            <Reveal key={problem.number} delay={i * 0.08}>
              <li className="group grid grid-cols-[auto_1fr] gap-6 border-t border-ink-950/10 py-8 transition-colors duration-300 last:border-b sm:gap-10 lg:py-9">
                <span className="pt-1 font-mono text-sm text-ink-300 transition-colors duration-300 group-hover:text-brand-600">
                  {problem.number}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink-950">
                    {problem.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-ink-400">
                    {problem.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
