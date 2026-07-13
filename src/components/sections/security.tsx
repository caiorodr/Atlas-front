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
    <section
      id="tecnologia"
      className="relative overflow-hidden border-t border-white/[0.05] bg-ink-950 py-24 lg:py-32"
    >
      {/* âncora para o link "Segurança" */}
      <span id="seguranca" className="absolute -top-20" aria-hidden="true" />

      <div className="pointer-events-none absolute -top-40 right-[10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(36,77,216,0.18),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Tecnologia e segurança"
          title="Construída para operar dados financeiros sensíveis"
          lead="Arquitetura de nível bancário, auditável de ponta a ponta — porque confiança não se promete, se comprova."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.05}
              className="group bg-ink-950 p-8 transition-colors duration-300 hover:bg-ink-900"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] transition-colors duration-300 group-hover:border-brand-400/40">
                <item.icon className="h-[18px] w-[18px] text-brand-300" />
              </span>
              <h3 className="mt-6 font-medium text-white">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-300">
                {item.description}
              </p>
              <span className="mt-5 block font-mono text-[10px] uppercase tracking-[0.18em] text-neon-400/80">
                {item.tag}
              </span>
            </Reveal>
          ))}
        </div>

        {/* Trilha de auditoria em tempo real */}
        <Reveal delay={0.15} className="mt-14">
          <div className="relative overflow-hidden border-y border-white/[0.07] py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="flex w-max animate-marquee gap-14">
              {[...LOG_LINES, ...LOG_LINES].map((line, i) => (
                <span
                  key={i}
                  className="flex items-center gap-3 whitespace-nowrap font-mono text-xs text-ink-300"
                >
                  <span className="h-1 w-1 flex-none bg-neon-400" />
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
