"use client";

import { motion } from "framer-motion";
import { AtlasMark } from "@/components/shared/logo";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Linhas do registro — pontilhado de ficha contábil entre rótulo e valor */
const ROWS = [
  { label: "Convênio", value: "Prefeitura 0042" },
  { label: "Servidor", value: "***.457.890-**" },
  { label: "Margem disponível", value: "R$ 812,44" },
  { label: "Parcela mensal", value: "R$ 412,00" },
  { label: "Prazo", value: "96 meses" },
];

function LedgerRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-sage">
        {label}
      </span>
      <span className="mb-[3px] flex-1 border-b border-dotted border-emerald-800/30" />
      <span className="font-mono text-[13px] text-emerald-950">{value}</span>
    </div>
  );
}

/*
 * Ficha de averbação — o "documento financeiro impresso" que dá nome
 * à direção visual do site.
 */
export function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: EASE }}
      className="relative mx-auto w-full max-w-[480px]"
    >
      {/* Segunda folha do bloco, deslocada atrás */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 border border-emerald-800/15 bg-parch" />

      <div className="relative border border-emerald-800/25 bg-paper shadow-[0_32px_80px_-48px_rgba(3,35,26,0.45)]">
        {/* Cabeçalho da ficha */}
        <div className="flex items-center justify-between border-b border-emerald-800/15 px-6 py-4">
          <span className="flex items-center gap-3">
            <AtlasMark className="h-6 w-7 text-emerald-800" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-950">
              Ficha de averbação
            </span>
          </span>
          <span className="font-mono text-[11px] text-sage">Nº 58.291</span>
        </div>

        <div className="space-y-4 px-6 py-6">
          {ROWS.map((row) => (
            <LedgerRow key={row.label} label={row.label} value={row.value} />
          ))}

          {/* Barra de margem utilizada */}
          <div className="pt-2">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-sage">
                Margem utilizada
              </span>
              <span className="font-display text-lg font-bold text-emerald-950">
                62,4%
              </span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden bg-emerald-800/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "62%" }}
                transition={{ duration: 1.4, delay: 0.9, ease: EASE }}
                className="h-full bg-emerald-800"
              />
            </div>
          </div>
        </div>

        {/* Picote + rodapé de auditoria */}
        <div className="border-t border-dashed border-emerald-800/25 px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-sage">
            <span>sha-256 · 9f3a…c21b</span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 animate-pulse-dot bg-mint-500" />
              2026-07-10 · 14:32:07
            </span>
          </div>
        </div>

        {/* Carimbo AVERBADO */}
        <motion.div
          initial={{ opacity: 0, scale: 1.6, rotate: -16 }}
          animate={{ opacity: 1, scale: 1, rotate: -8 }}
          transition={{ duration: 0.45, delay: 1.3, ease: EASE }}
          className="absolute -right-4 top-24 sm:-right-7"
        >
          <span className="block border-[3px] border-emerald-700 bg-mint-300/80 px-5 py-2.5 font-display text-xl font-bold uppercase tracking-[0.14em] text-emerald-800 shadow-[0_12px_32px_-16px_rgba(3,35,26,0.5)]">
            Averbado
          </span>
          <span className="mt-1 block text-right font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-700">
            em 84 ms
          </span>
        </motion.div>
      </div>

      {/* Selo flutuante de operação */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 bottom-14 hidden sm:block"
      >
        <div className="flex items-center gap-2 border border-emerald-800/20 bg-cream px-3.5 py-2 font-mono text-[10px] tracking-wide text-emerald-800 shadow-[0_16px_40px_-24px_rgba(3,35,26,0.4)]">
          <span className="h-1.5 w-1.5 animate-pulse-dot bg-mint-500" />
          consulta de margem · 84 ms
        </div>
      </motion.div>
    </motion.div>
  );
}
