import { AtlasLogo, AtlasWordmark } from "@/components/shared/logo";

const COLUMNS = [
  {
    title: "Plataforma",
    links: [
      { label: "Soluções", href: "#plataforma" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Números", href: "#numeros" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Tecnologia", href: "#tecnologia" },
      { label: "Segurança", href: "#seguranca" },
      { label: "Contato", href: "#contato" },
      { label: "Política de Privacidade", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-mint-300/10 bg-emerald-950">
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <AtlasLogo tone="dark" />
            <p className="mt-5 text-sm leading-relaxed text-mint-100/70">
              Tecnologia que conecta pessoas, instituições e oportunidades.
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-mint-300/60">
              Infraestrutura de averbação · Brasil
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-mint-300/60">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-mint-100/80 transition-colors duration-200 hover:text-mint-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-mint-300/10 pt-8 text-xs text-mint-100/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Atlas Averbadora · CNPJ 45.404.110/0001-57</span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 bg-mint-400" />
            Feito no Brasil · Dados protegidos pela LGPD
          </span>
        </div>

        {/* Assinatura tipográfica — wordmark gigante vazado no rodapé */}
        <div className="mt-14 opacity-[0.35]" aria-hidden="true">
          <AtlasWordmark className="h-auto w-full text-mint-300/40" />
        </div>
      </div>
    </footer>
  );
}
