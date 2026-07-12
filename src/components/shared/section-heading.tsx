import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type Tone = "dark" | "light";

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.28em]",
        tone === "dark" ? "text-mint-300" : "text-emerald-700",
        className
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 flex-none",
          tone === "dark" ? "bg-mint-300" : "bg-emerald-700"
        )}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "left",
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  tone?: Tone;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-5 font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl lg:text-[2.9rem]",
          tone === "dark" ? "text-cream" : "text-emerald-950"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-mint-100/70" : "text-sage"
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
