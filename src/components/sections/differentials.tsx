import { Apple, Play } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Eyebrow } from "@/components/shared/section-heading";

const DIFFERENTIALS = [
  {
    number: "01",
    title: "Tecnologia desenvolvida para escala",
    description:
      "Arquitetura em nuvem preparada para milhões de operações — do município pequeno ao estado inteiro.",
  },
  {
    number: "02",
    title: "Integração simples",
    description:
      "Conectamos diferentes sistemas de folha e de core bancário sem projetos intermináveis de TI.",
  },
  {
    number: "03",
    title: "Experiência digital moderna",
    description:
      "Interfaces pensadas para gestores, instituições e servidores — sem manual de instruções.",
  },
  {
    number: "04",
    title: "Segurança em cada operação",
    description:
      "Criptografia, auditoria e conformidade embutidas no fluxo, não adicionadas depois.",
  },
  {
    number: "05",
    title: "Dados e indicadores em tempo real",
    description:
      "Relatórios vivos para decisões baseadas em evidência, não em retrabalho.",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-950/10 bg-ink-950/10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Célula de título ocupa o primeiro espaço da grade */}
            <div className="flex min-h-[240px] flex-col justify-between bg-paper p-8 lg:p-10">
              <Eyebrow>Diferenciais</Eyebrow>
              <div>
                <h2 className="font-display text-2xl font-semibold leading-snug tracking-tight text-ink-950 sm:text-[1.7rem]">
                  Por que escolher a Atlas?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-400">
                  Não somos mais um sistema. Somos a infraestrutura que faz o
                  consignado público funcionar como deveria.
                </p>
              </div>
            </div>

            {DIFFERENTIALS.map((item) => (
              <div
                key={item.number}
                className="group flex min-h-[240px] flex-col justify-between bg-paper p-8 transition-colors duration-300 hover:bg-white lg:p-10"
              >
                <span className="font-mono text-sm text-ink-300 transition-colors duration-300 group-hover:text-brand-600">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Destaque: app mobile em desenvolvimento */}
            <div className="relative flex flex-col justify-between gap-8 overflow-hidden bg-ink-950 p-8 sm:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:p-10">
              <div className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(36,77,216,0.30),transparent)]" />
              <div className="pointer-events-none absolute -bottom-32 left-1/3 h-56 w-56 rounded-full bg-[radial-gradient(closest-side,rgba(30,207,148,0.12),transparent)]" />

              <div className="relative max-w-xl">
                <div className="flex items-center gap-3.5">
                  <span className="font-mono text-sm text-neon-400">06</span>
                  <span className="rounded-full border border-neon-400/30 bg-neon-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neon-300">
                    Em desenvolvimento
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  App mobile para servidores
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">
                  A experiência Atlas na palma da mão: consulta de margem,
                  contratos e autorizações direto do celular — em breve nas
                  lojas oficiais.
                </p>
              </div>

              <div className="relative flex flex-wrap gap-3">
                <span className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5">
                  <Apple className="h-5 w-5 flex-none text-white" />
                  <span>
                    <span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-ink-300">
                      Em breve na
                    </span>
                    <span className="block text-sm font-medium text-white">
                      App Store
                    </span>
                  </span>
                </span>
                <span className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5">
                  <Play className="h-5 w-5 flex-none text-white" />
                  <span>
                    <span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-ink-300">
                      Em breve no
                    </span>
                    <span className="block text-sm font-medium text-white">
                      Google Play
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
