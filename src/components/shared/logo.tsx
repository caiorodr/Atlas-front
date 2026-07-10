import Image from "next/image";
import { cn } from "@/lib/utils";
import markSrc from "@/assets/logo-mark.png";
import wordmarkSrc from "@/assets/logo-wordmark.png";

/*
 * Marca oficial Atlas 360 Averbadora — arte original fornecida pela empresa
 * (src/assets/logo-white.png), com o fundo removido para uso sobre o site.
 * logo-mark.png: emblema (A + swoosh + 360) · logo-wordmark.png: ATLAS/AVERBADORA
 * A arte é branca; em fundos claros usamos o filtro `invert`.
 */

export function AtlasMark({ className }: { className?: string }) {
  return (
    <Image
      src={markSrc}
      alt=""
      aria-hidden="true"
      className={cn("object-contain", className)}
    />
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
        tone === "light" && "invert",
        className
      )}
    >
      <Image
        src={markSrc}
        alt=""
        aria-hidden="true"
        className="h-9 w-auto object-contain"
      />
      <Image
        src={wordmarkSrc}
        alt="Atlas Averbadora"
        className="h-7 w-auto object-contain"
      />
    </span>
  );
}
