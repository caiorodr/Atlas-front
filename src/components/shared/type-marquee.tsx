import { cn } from "@/lib/utils";

const ITEMS = [
  "Averbação digital",
  "Margem em tempo real",
  "Folha conciliada",
  "Auditoria completa",
  "LGPD by design",
  "Zero papel",
];

/*
 * Faixa tipográfica contínua — alterna texto cheio e vazado,
 * como um carimbo repetido na margem do documento.
 */
export function TypeMarquee() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-emerald-800/15 bg-cream py-5"
    >
      <div className="flex w-max animate-marquee items-center">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span
              className={cn(
                "font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl",
                i % 2 === 0 ? "text-emerald-800" : "text-outline"
              )}
            >
              {item}
            </span>
            <span className="mx-8 h-2.5 w-2.5 flex-none bg-mint-400 sm:mx-10" />
          </span>
        ))}
      </div>
    </div>
  );
}
