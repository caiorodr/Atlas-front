"use client";

import { motion } from "framer-motion";
import {
  Building2,
  FileCheck2,
  Landmark,
  User,
  type LucideIcon,
} from "lucide-react";
import { AtlasMark } from "@/components/shared/logo";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

type FlowNode = { icon: LucideIcon; label: string; sub: string };

const BEFORE_ATLAS: FlowNode[] = [
  { icon: User, label: "Servidor", sub: "Solicita o crédito" },
  { icon: Landmark, label: "Banco", sub: "Consulta e contrata" },
];

const AFTER_ATLAS: FlowNode[] = [
  { icon: Building2, label: "Órgão público", sub: "Valida e acompanha" },
  { icon: FileCheck2, label: "Folha", sub: "Desconta automaticamente" },
];

const STEPS = [
  {
    number: "01",
    title: "Solicitação",
    description:
      "O servidor pede o crédito na instituição financeira de sua preferência.",
  },
  {
    number: "02",
    title: "Consulta em tempo real",
    description:
      "O banco consulta a margem disponível diretamente na Atlas, em milissegundos.",
  },
  {
    number: "03",
    title: "Averbação automática",
    description:
      "A Atlas valida as regras do convênio e registra a averbação sem papel.",
  },
  {
    number: "04",
    title: "Atualização na folha",
    description:
      "O desconto é enviado ao órgão e lançado na folha sem retrabalho.",
  },
  {
    number: "05",
    title: "Transparência total",
    description:
      "Todas as partes acompanham cada contrato com rastreabilidade completa.",
  },
];

function Connector({ index }: { index: number }) {
  return (
    <>
      {/* horizontal (desktop) */}
      <div className="relative hidden h-px flex-1 overflow-hidden bg-mint-300/15 lg:block">
        <motion.span
          className="absolute top-0 h-px w-16 bg-gradient-to-r from-transparent via-mint-400 to-transparent"
          initial={{ left: "-20%" }}
          animate={{ left: ["-20%", "115%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.45,
            repeatDelay: 0.8,
          }}
        />
      </div>
      {/* vertical (mobile) */}
      <div className="relative h-12 w-px overflow-hidden bg-mint-300/15 lg:hidden">
        <motion.span
          className="absolute left-0 h-8 w-px bg-gradient-to-b from-transparent via-mint-400 to-transparent"
          initial={{ top: "-40%" }}
          animate={{ top: ["-40%", "120%"] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.35,
            repeatDelay: 0.6,
          }}
        />
      </div>
    </>
  );
}

function Node({ node }: { node: FlowNode }) {
  return (
    <div className="flex w-40 flex-col items-center gap-3 text-center">
      <div className="flex h-14 w-14 items-center justify-center border border-mint-300/20 bg-mint-300/[0.06]">
        <node.icon className="h-5 w-5 text-mint-300" />
      </div>
      <div>
        <span className="block text-sm font-medium text-cream">
          {node.label}
        </span>
        <span className="mt-1 block text-xs text-mint-100/60">{node.sub}</span>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden bg-emerald-950 py-24 lg:py-32"
    >
      <div className="bg-ruled-dark absolute inset-0 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="Como funciona"
          title="A Atlas no centro de toda a operação"
          lead="Do pedido do servidor ao desconto em folha — um fluxo contínuo, auditável e sem papel."
        />

        <Reveal className="mt-16 lg:mt-20" delay={0.1}>
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-0">
            <Node node={BEFORE_ATLAS[0]} />
            <Connector index={0} />
            <Node node={BEFORE_ATLAS[1]} />
            <Connector index={1} />

            {/* Núcleo Atlas */}
            <div className="flex flex-col items-center gap-4 px-2 lg:px-4">
              <div className="relative flex h-24 w-24 items-center justify-center border border-mint-300/40 bg-emerald-900 shadow-[0_0_60px_rgba(167,243,208,0.25)]">
                <AtlasMark className="h-11 w-11 text-mint-300" />
              </div>
              <div className="text-center">
                <span className="font-display font-bold text-cream">
                  Atlas
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-mint-300">
                  núcleo de averbação
                </span>
              </div>
            </div>

            <Connector index={2} />
            <Node node={AFTER_ATLAS[0]} />
            <Connector index={3} />
            <Node node={AFTER_ATLAS[1]} />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-mint-300/15 bg-mint-300/15 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.number}
              delay={i * 0.06}
              className={
                i === STEPS.length - 1
                  ? "bg-emerald-950 p-6 sm:col-span-2 lg:col-span-1 lg:p-7"
                  : "bg-emerald-950 p-6 lg:p-7"
              }
            >
              <span className="font-display text-lg font-bold text-mint-400">
                {step.number}
              </span>
              <h3 className="mt-4 text-[15px] font-medium text-cream">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mint-100/60">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
