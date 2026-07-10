import { cn } from "@/lib/utils";

/*
 * Marca oficial Atlas 360 Averbadora — "A" com swoosh e selo "360",
 * recriada em vetor a partir da arte original. Usa currentColor para
 * adaptar-se a fundos claros e escuros.
 */
export function AtlasMark({
  className,
  show360 = true,
}: {
  className?: string;
  show360?: boolean;
}) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      {/* "A" sem travessão, com contraforma triangular */}
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 6 L90 92 L74 92 L50 38 L26 92 L10 92 Z M50 16 L57 32 L43 32 Z"
      />
      {/* Swoosh cortando as pernas do A */}
      <path
        fill="currentColor"
        d="M8 78 C36 62 64 40 90 10 C66 50 40 70 8 78 Z"
      />
      {show360 && (
        <text
          x="58"
          y="15"
          fill="currentColor"
          fontSize="12"
          fontWeight="600"
          letterSpacing="1"
          className="font-display"
        >
          360
        </text>
      )}
    </svg>
  );
}

export function AtlasLogo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      {/* Em tamanhos pequenos o selo "360" fica ilegível — versão simplificada */}
      <AtlasMark
        show360={false}
        className={cn(
          "h-9 w-9 flex-none",
          tone === "dark" ? "text-white" : "text-ink-950"
        )}
      />
      <span className="flex flex-col">
        <span
          className={cn(
            "font-display text-[17px] font-semibold uppercase leading-none tracking-[0.32em]",
            tone === "dark" ? "text-white" : "text-ink-950"
          )}
        >
          Atlas
        </span>
        <span
          className={cn(
            "mt-1.5 flex items-center gap-1.5 font-mono text-[7.5px] uppercase leading-none tracking-[0.3em]",
            tone === "dark" ? "text-ink-300" : "text-ink-400"
          )}
        >
          <span className="h-px w-2.5 bg-current opacity-70" />
          Averbadora
          <span className="h-px w-2.5 bg-current opacity-70" />
        </span>
      </span>
    </span>
  );
}
