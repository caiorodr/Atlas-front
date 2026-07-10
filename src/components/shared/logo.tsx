import { cn } from "@/lib/utils";
import { LOGO_MARK, LOGO_WORDMARK } from "./logo-paths";

/*
 * Marca oficial Atlas 360 Averbadora — vetorizada a partir da arte original
 * fornecida pela empresa (src/assets/logo-white.png). Os paths ficam em
 * logo-paths.ts (gerado); os SVGs standalone estão em src/assets/logo-*.svg.
 */

export function AtlasMark({ className }: { className?: string }) {
  return (
    <svg viewBox={LOGO_MARK.viewBox} className={className} aria-hidden="true">
      <path d={LOGO_MARK.d} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

export function AtlasWordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox={LOGO_WORDMARK.viewBox}
      className={className}
      role="img"
      aria-label="Atlas Averbadora"
    >
      <path d={LOGO_WORDMARK.d} fill="currentColor" fillRule="evenodd" />
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
    <span
      className={cn(
        "inline-flex items-center gap-3",
        tone === "dark" ? "text-white" : "text-ink-950",
        className
      )}
    >
      {/* proporções reais: emblema 491x402, wordmark 748x206 */}
      <AtlasMark className="h-9 w-11 flex-none" />
      <AtlasWordmark className="h-[26px] w-[94px] flex-none" />
    </span>
  );
}
