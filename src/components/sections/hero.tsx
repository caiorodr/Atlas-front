"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Clock } from "@/components/shared/clock";
import { HeroIllustration } from "./hero-illustration";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const TRUST_ITEMS = [
  "Criptografia de ponta a ponta",
  "Conformidade LGPD",
  "Disponibilidade 99,9%",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pb-20 pt-32 lg:pb-20 lg:pt-36">
      <div className="bg-ruled absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Linha de protocolo — cabeçalho de documento */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-wrap items-center justify-between gap-3 border-y border-emerald-800/15 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-800/70 sm:text-[11px]"
        >
          <span className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 animate-pulse-dot bg-mint-500" />
            Infraestrutura de averbação digital
          </span>
          <span className="hidden sm:block">Registro nº 001 / 2026</span>
          <span className="flex items-center gap-2">
            BRT <Clock />
          </span>
        </motion.div>

        <div className="mt-14 grid items-center gap-16 lg:mt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Tamanhos calibrados para a palavra mais longa caber na coluna
                em cada breakpoint; &shy; permite quebrar INFRA-ESTRUTURA em
                telas estreitas sem afetar o desktop */}
            <motion.h1
              variants={item}
              className="isolate font-display text-[clamp(2rem,10vw,4.5rem)] font-bold uppercase leading-[0.98] tracking-tight text-emerald-950 lg:text-[4vw] xl:text-[3.4rem]"
            >
              Infra&shy;estrutura{" "}
              <span className="text-outline">inteligente</span> para o{" "}
              <span className="relative inline-block">
                <span className="absolute inset-x-[-0.08em] inset-y-[0.04em] -z-10 bg-mint-300" />
                crédito consignado
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-relaxed text-sage lg:mt-7"
            >
              A Atlas conecta órgãos públicos, instituições financeiras e
              servidores através de uma plataforma segura, automatizada e
              preparada para o futuro.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-9"
            >
              <Button href="#plataforma" size="lg">
                Conheça nossa solução
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button href="#contato" size="lg" variant="outlineLight">
                Fale com especialistas
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-emerald-800/15 pt-6 lg:mt-12"
            >
              {TRUST_ITEMS.map((text) => (
                <span
                  key={text}
                  className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-emerald-800/70"
                >
                  <span className="h-1 w-1 flex-none bg-mint-500" />
                  {text}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
