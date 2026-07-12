import {
  Activity,
  Code2,
  Fingerprint,
  KeyRound,
  Lock,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

type SecurityItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
};

const ITEMS: SecurityItem[] = [
  {
    icon: Code2,
    title: "APIs modernas",
    description:
      "REST e webhooks versionados, documentação viva e sandbox de homologação para integrar em dias, não em meses.",
    tag: "REST · Webhooks · Sandbox",
  },
  {
    icon: Activity,
    title: "Alta disponibilidade",
    description:
      "Arquitetura redundante em nuvem, com monitoramento contínuo e plano de contingência testado.",
    tag: "SLA 99,9% · Multirregião",
  },
  {
    icon: Lock,
    title: "Criptografia de ponta a ponta",
    description:
      "Dados protegidos em trânsito e em repouso, com gestão dedicada de chaves criptográficas.",
    tag: "TLS 1.3 · AES-256",
  },
  {
    icon: KeyRound,
    title: "Controle de acesso",
    description:
      "Permissões granulares por perfil, autenticação multifator e SSO corporativo.",
    tag: "RBAC · MFA · SSO",
  },
  {
    icon: ShieldCheck,
    title: "Conformidade LGPD",
    description:
      "Privacidade desde a concepção: minimização de dados, consentimento e governança auditável.",
    tag: "Privacy by design",
  },
  {
    icon: Fingerprint,
    title: "Rastreabilidade total",
    description:
      "Cada operação gera trilha de auditoria imutável, com hash e carimbo de tempo.",
    tag: "Audit trail · Hash",
  },
];

const LOG_LINES = [
  "14:32:07 · averbação nº 58.291 confirmada · hash 9f3a…c21b",
  "14:32:09 · consulta de margem · convênio 0042 · 78 ms",
  "14:32:11 · webhook entregue · contrato atualizado",
  "14:32:14 · acesso auditado · perfil órgão gestor",
  "14:32:18 · backup verificado · região secundária",
  "14:32:23 · folha 07/2026 conciliada · 12.408 rubricas",
];

export function Security() {
  return (
    <section id="tecnologia" className="relative bg-cream py-24 lg:py-32">
      {/* âncora para o link "Segurança" */}
      <span id="seguranca" className="absolute -top-20" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tecnologia e segurança"
          title="Construída para operar dados financeiros sensíveis"
          lead="Arquitetura de nível bancário, auditável de ponta a ponta — porque confiança não se promete, se comprova."
        />

        <div className="mt-16 grid gap-px overflow-hidden border border-emerald-800/15 bg-emerald-800/15 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <Reveal
              key={item.title}
              className="group bg-cream p-8 transition-colors duration-300 hover:bg-paper"
            >
              <span className="flex h-10 w-10 items-center justify-center border border-emerald-800/20 bg-mint-300/30 transition-colors duration-300 group-hover:border-emerald-800/50">
                <item.icon className="h-[18px] w-[18px] text-emerald-800" />
              </span>
              <h3 className="mt-6 font-display text-lg font-bold tracking-tight text-emerald-950">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-sage">
                {item.description}
              </p>
              <span className="mt-5 block font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-700">
                {item.tag}
              </span>
            </Reveal>
          ))}
        </div>

        {/* Trilha de auditoria em tempo real */}
        <Reveal delay={0.15} className="mt-14">
          <div className="relative overflow-hidden border-y border-emerald-800/15 py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="flex w-max animate-ticker gap-14">
              {[...LOG_LINES, ...LOG_LINES].map((line, i) => (
                <span
                  key={i}
                  className="flex items-center gap-3 whitespace-nowrap font-mono text-xs text-emerald-800/70"
                >
                  <span className="h-1 w-1 flex-none bg-mint-500" />
                  {line}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
