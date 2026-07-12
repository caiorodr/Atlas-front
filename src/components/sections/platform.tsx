"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ---------- Mocks de produto ---------- */

function StatusPill({
  children,
  tone,
}: {
  children: ReactNode;
  tone: "green" | "blue" | "gray";
}) {
  return (
    <span
      className={cn(
        "px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide",
        tone === "green" && "bg-mint-300/50 text-emerald-800",
        tone === "blue" && "bg-emerald-800/10 text-emerald-800",
        tone === "gray" && "bg-emerald-950/[0.05] text-sage"
      )}
    >
      {children}
    </span>
  );
}

function OrgaoMock() {
  const contracts = [
    { id: "#58.291", bank: "Banco Alfa", value: "R$ 412,00", status: "Averbado", tone: "green" as const },
    { id: "#58.292", bank: "Banco Beta", value: "R$ 210,50", status: "Em análise", tone: "blue" as const },
    { id: "#57.994", bank: "Banco Gama", value: "—", status: "Quitado", tone: "gray" as const },
  ];
  return (
    <div className="overflow-hidden border border-emerald-800/20 bg-paper shadow-[0_32px_80px_-40px_rgba(3,35,26,0.4)]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-800/15 px-5 py-4">
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-950">
          Painel do convênio
        </span>
        <span className="flex items-center gap-1.5 bg-mint-300/50 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-800">
          <span className="h-1 w-1 bg-emerald-700" />
          Folha 07/2026 · sincronizada
        </span>
      </div>
      <div className="space-y-5 p-4 sm:p-5">
        <div>
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-sage">
              Margem consignável utilizada
            </span>
            <span className="font-display text-xl font-bold text-emerald-950">
              62,4%
            </span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden bg-emerald-800/10">
            <div className="h-full w-[62%] bg-emerald-800" />
          </div>
        </div>
        <div className="divide-y divide-emerald-800/10 border border-emerald-800/15">
          {contracts.map((contract) => (
            <div
              key={contract.id}
              className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 px-3 py-3 sm:px-4"
            >
              <div className="flex min-w-0 items-baseline gap-2.5">
                <span className="font-mono text-xs text-sage">
                  {contract.id}
                </span>
                <span className="truncate text-sm text-emerald-950">
                  {contract.bank}
                </span>
              </div>
              <div className="flex min-w-0 items-center gap-3">
                <span className="hidden font-mono text-xs text-sage sm:block">
                  {contract.value}
                </span>
                <StatusPill tone={contract.tone}>{contract.status}</StatusPill>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border border-dashed border-emerald-800/25 px-3 py-3 sm:px-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-sage">
            Trilha de auditoria
          </span>
          <span className="font-mono text-[11px] text-emerald-800">
            sha-256 · 9f3a…c21b
          </span>
        </div>
      </div>
    </div>
  );
}

function BancoMock() {
  return (
    <div className="overflow-hidden border border-mint-300/20 bg-emerald-950 shadow-[0_32px_80px_-40px_rgba(3,35,26,0.7)]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-mint-300/15 px-5 py-4">
        <span className="font-mono text-xs text-mint-100/80">
          <span className="text-mint-400">POST</span> /v1/margens/consulta
        </span>
        <span className="bg-mint-300/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-mint-300">
          200 OK · 84 ms
        </span>
      </div>
      <div className="px-5 py-5 font-mono text-[12.5px] leading-[1.95]">
        <div className="text-mint-100/40">{"{"}</div>
        <div className="pl-4">
          <span className="text-mint-300">&quot;cpf&quot;</span>
          <span className="text-mint-100/40">: </span>
          <span className="text-mint-100/80">&quot;***.457.890-**&quot;</span>
          <span className="text-mint-100/40">,</span>
        </div>
        <div className="pl-4">
          <span className="text-mint-300">&quot;convenio&quot;</span>
          <span className="text-mint-100/40">: </span>
          <span className="text-mint-100/80">&quot;prefeitura-0042&quot;</span>
          <span className="text-mint-100/40">,</span>
        </div>
        <div className="pl-4">
          <span className="text-mint-300">&quot;margem_disponivel&quot;</span>
          <span className="text-mint-100/40">: </span>
          <span className="text-cream">812.44</span>
          <span className="text-mint-100/40">,</span>
        </div>
        <div className="pl-4">
          <span className="text-mint-300">&quot;margem_total&quot;</span>
          <span className="text-mint-100/40">: </span>
          <span className="text-cream">1450.00</span>
          <span className="text-mint-100/40">,</span>
        </div>
        <div className="pl-4">
          <span className="text-mint-300">&quot;atualizado_em&quot;</span>
          <span className="text-mint-100/40">: </span>
          <span className="text-mint-100/80">&quot;2026-07-10T14:32:07Z&quot;</span>
        </div>
        <div className="text-mint-100/40">{"}"}</div>
      </div>
      <div className="flex items-center gap-2 border-t border-mint-300/15 px-5 py-3.5 font-mono text-[11px] text-mint-100/60">
        <span className="h-1.5 w-1.5 flex-none animate-pulse-dot bg-mint-400" />
        webhook · averbacao.confirmada · entregue em 120 ms
      </div>
    </div>
  );
}

function ServidorMock() {
  return (
    <div className="mx-auto w-full max-w-[340px] overflow-hidden border border-emerald-800/20 bg-paper shadow-[0_32px_80px_-40px_rgba(3,35,26,0.4)]">
      <div className="border-b border-emerald-800/15 px-6 py-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-sage">
          Margem disponível
        </span>
        <div className="mt-1 flex flex-wrap items-baseline gap-2">
          <span className="font-display text-3xl font-bold text-emerald-950">
            R$ 812,44
          </span>
          <span className="bg-mint-300/50 px-2 py-0.5 font-mono text-[10px] text-emerald-800">
            atualizado agora
          </span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden bg-emerald-800/10">
          <div className="h-full w-[56%] bg-emerald-800" />
        </div>
      </div>
      <div className="space-y-3 px-6 py-5">
        <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-sage">
          Contratos ativos
        </span>
        {[
          { bank: "Banco Alfa", detail: "36 de 96 parcelas", value: "R$ 412,00" },
          { bank: "Banco Delta", detail: "12 de 48 parcelas", value: "R$ 189,90" },
        ].map((contract) => (
          <div
            key={contract.bank}
            className="flex items-center justify-between border border-emerald-800/15 px-4 py-3"
          >
            <div>
              <span className="block text-sm font-medium text-emerald-950">
                {contract.bank}
              </span>
              <span className="text-xs text-sage">{contract.detail}</span>
            </div>
            <span className="font-mono text-sm text-emerald-800">
              {contract.value}
            </span>
          </div>
        ))}
        <button
          type="button"
          className="mt-1 w-full bg-emerald-800 py-3 font-mono text-xs uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-emerald-950"
        >
          Autorizar nova averbação
        </button>
      </div>
    </div>
  );
}

/* ---------- Conteúdo das abas ---------- */

type Tab = {
  id: string;
  tab: string;
  module: string;
  title: string;
  description: string;
  features: { title: string; description: string }[];
  mock: ReactNode;
};

const TABS: Tab[] = [
  {
    id: "orgaos",
    tab: "Órgãos públicos",
    module: "Módulo 01 — Gestão para prefeituras e órgãos",
    title: "Gestão completa da consignação, do contrato à folha.",
    description:
      "Uma central única para o gestor público acompanhar margem, contratos e descontos — com transparência para auditoria e fiscalização.",
    features: [
      {
        title: "Controle de margem consignável",
        description:
          "Margem calculada e atualizada automaticamente, sem planilhas paralelas.",
      },
      {
        title: "Gestão de contratos",
        description:
          "Ciclo de vida completo: averbação, portabilidade, quitação e histórico.",
      },
      {
        title: "Integração com a folha",
        description:
          "Descontos lançados de forma automática, sem digitação e sem retrabalho.",
      },
      {
        title: "Auditoria e transparência",
        description:
          "Cada operação registrada, rastreável e disponível para fiscalização.",
      },
    ],
    mock: <OrgaoMock />,
  },
  {
    id: "bancos",
    tab: "Instituições financeiras",
    module: "Módulo 02 — Solução para bancos",
    title: "Integração direta com a margem, em tempo real.",
    description:
      "APIs pensadas para o time de tecnologia do banco: homologação rápida, resposta em milissegundos e segurança em cada chamada.",
    features: [
      {
        title: "APIs de integração",
        description:
          "REST e webhooks versionados, com documentação viva e ambiente sandbox.",
      },
      {
        title: "Consulta de margem em tempo real",
        description:
          "Resposta em milissegundos, direto da fonte oficial do convênio.",
      },
      {
        title: "Segurança operacional",
        description:
          "Autenticação forte, criptografia e trilha de auditoria em cada requisição.",
      },
      {
        title: "Automação de processos",
        description:
          "Da simulação à averbação confirmada, sem intervenção manual.",
      },
    ],
    mock: <BancoMock />,
  },
  {
    id: "servidores",
    tab: "Servidores",
    module: "Módulo 03 — Experiência do servidor",
    title: "Autonomia e clareza na palma da mão.",
    description:
      "O servidor acompanha sua vida financeira consignada sem filas, sem guichês e sem depender de terceiros.",
    features: [
      {
        title: "Consulta de margem",
        description: "Saldo disponível sempre atualizado, em qualquer canal.",
      },
      {
        title: "Acompanhamento de contratos",
        description:
          "Parcelas, saldo devedor e histórico completo em um só lugar.",
      },
      {
        title: "Serviços digitais",
        description:
          "Autorizações, portabilidade e documentos resolvidos em poucos toques.",
      },
    ],
    mock: <ServidorMock />,
  },
];

export function Platform() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section id="plataforma" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Nossa plataforma"
          title="Três experiências. Uma única infraestrutura."
          lead="Cada elo do consignado tem seu próprio módulo — todos operando sobre os mesmos dados, em tempo real."
        />

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <div className="no-scrollbar flex max-w-full gap-1 overflow-x-auto border border-emerald-800/20 bg-parch p-1.5">
            {TABS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "relative whitespace-nowrap px-5 py-2.5 font-mono text-xs uppercase tracking-[0.1em] transition-colors duration-300",
                  i === active
                    ? "text-cream"
                    : "text-emerald-900/60 hover:text-emerald-950"
                )}
              >
                {i === active && (
                  <motion.span
                    layoutId="platform-active-pill"
                    className="absolute inset-0 bg-emerald-800"
                    transition={{ type: "spring", bounce: 0.18, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{t.tab}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 lg:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
            >
              <div className="min-w-0">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-emerald-700">
                  {tab.module}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-emerald-950 sm:text-3xl">
                  {tab.title}
                </h3>
                <p className="mt-4 leading-relaxed text-sage">
                  {tab.description}
                </p>
                <ul className="mt-9 space-y-5">
                  {tab.features.map((feature) => (
                    <li key={feature.title} className="flex gap-4">
                      <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center border border-emerald-800/25 bg-mint-300/40">
                        <Check className="h-3.5 w-3.5 text-emerald-800" />
                      </span>
                      <div>
                        <span className="font-medium text-emerald-950">
                          {feature.title}
                        </span>
                        <p className="mt-1 text-sm leading-relaxed text-sage">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-ruled relative min-w-0 border border-emerald-800/15 bg-parch p-4 sm:p-8 lg:p-10">
                <div className="relative">{tab.mock}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
