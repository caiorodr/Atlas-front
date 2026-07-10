"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

/* TODO: substituir pelos números oficiais da Atlas antes da publicação */
const METRICS = [
  { prefix: "+", value: 100, decimals: 0, suffix: "", label: "municípios conectados à plataforma" },
  { prefix: "R$ ", value: 2.4, decimals: 1, suffix: " bi", label: "em operações processadas" },
  { prefix: "+", value: 30, decimals: 0, suffix: "", label: "instituições financeiras integradas" },
  { prefix: "+", value: 500, decimals: 0, suffix: " mil", label: "servidores públicos atendidos" },
];

function CountUp({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(
    new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(0)
  );

  useEffect(() => {
    if (!inView) return;
    const formatter = new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(formatter.format(v)),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return <span ref={ref}>{display}</span>;
}

export function Metrics() {
  return (
    <section
      id="numeros"
      className="relative overflow-hidden bg-ink-950 py-24 lg:py-32"
    >
      <div className="absolute -bottom-48 left-[15%] h-[420px] w-[560px] rounded-full bg-brand-600/15 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Números"
          title="Uma operação que cresce em escala nacional"
        />

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {METRICS.map((metric, i) => (
            <Reveal
              key={metric.label}
              delay={i * 0.08}
              className="border-l border-white/10 pl-6"
            >
              <div className="font-display text-[2.6rem] font-semibold leading-none tracking-tight text-white lg:text-5xl">
                {metric.prefix}
                <CountUp value={metric.value} decimals={metric.decimals} />
                {metric.suffix && (
                  <span className="text-brand-300">{metric.suffix}</span>
                )}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-300">
                {metric.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
