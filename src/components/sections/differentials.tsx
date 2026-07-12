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
    <section id="diferenciais" className="bg-parch py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-px overflow-hidden border border-emerald-800/15 bg-emerald-800/15 sm:grid-cols-2 lg:grid-cols-3">
            {/* Célula de título ocupa o primeiro espaço da grade */}
            <div className="flex min-h-[240px] flex-col justify-between bg-parch p-8 lg:p-10">
              <Eyebrow>Diferenciais</Eyebrow>
              <div>
                <h2 className="font-display text-2xl font-bold leading-snug tracking-tight text-emerald-950 sm:text-[1.7rem]">
                  Por que escolher a Atlas?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-sage">
                  Não somos mais um sistema. Somos a infraestrutura que faz o
                  consignado público funcionar como deveria.
                </p>
              </div>
            </div>

            {DIFFERENTIALS.map((item) => (
              <div
                key={item.number}
                className="group flex min-h-[240px] flex-col justify-between bg-parch p-8 transition-colors duration-300 hover:bg-cream lg:p-10"
              >
                <span className="font-display text-xl font-bold text-emerald-800/25 transition-colors duration-300 group-hover:text-emerald-700">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-emerald-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-sage">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Destaque: app mobile em desenvolvimento */}
            <div className="relative flex flex-col justify-between gap-8 overflow-hidden bg-emerald-950 p-8 sm:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:p-10">
              <div className="bg-ruled-dark absolute inset-0" />

              <div className="relative max-w-xl">
                <div className="flex items-center gap-3.5">
                  <span className="font-display text-xl font-bold text-mint-400">
                    06
                  </span>
                  <span className="border border-mint-300/40 bg-mint-300/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-mint-300">
                    Em desenvolvimento
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-cream sm:text-2xl">
                  App mobile para servidores
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mint-100/70">
                  A experiência Atlas na palma da mão: consulta de margem,
                  contratos e autorizações direto do celular — em breve nas
                  lojas oficiais.
                </p>
              </div>

              <div className="relative flex flex-wrap gap-3">
                <span className="flex items-center gap-3 border border-mint-300/25 bg-mint-300/[0.06] px-4 py-2.5">
                  <Apple className="h-5 w-5 flex-none text-cream" />
                  <span>
                    <span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-mint-100/60">
                      Em breve na
                    </span>
                    <span className="block text-sm font-medium text-cream">
                      App Store
                    </span>
                  </span>
                </span>
                <span className="flex items-center gap-3 border border-mint-300/25 bg-mint-300/[0.06] px-4 py-2.5">
                  <Play className="h-5 w-5 flex-none text-cream" />
                  <span>
                    <span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-mint-100/60">
                      Em breve no
                    </span>
                    <span className="block text-sm font-medium text-cream">
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
