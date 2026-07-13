import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <section className="relative overflow-hidden bg-ink-950 pb-20 pt-36 lg:pb-28 lg:pt-44">
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_20%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-64 left-1/2 h-[640px] w-[960px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(36,77,216,0.30),transparent)]" />
      <div className="pointer-events-none absolute right-[-12%] top-1/2 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgba(30,207,148,0.10),transparent)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-neon-400" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-200">
              Infraestrutura de averbação digital
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-8 font-display text-[2.6rem] font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.9rem]"
          >
            Infraestrutura inteligente para transformar o{" "}
            <span className="bg-gradient-to-r from-brand-300 to-neon-300 bg-clip-text text-transparent">
              crédito consignado
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300"
          >
            A Atlas conecta órgãos públicos, instituições financeiras e
            servidores através de uma plataforma segura, automatizada e
            preparada para o futuro.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#plataforma" size="lg">
              Conheça nossa solução
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href="#contato" size="lg" variant="outline">
              Fale com especialistas
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/[0.07] pt-7"
          >
            {TRUST_ITEMS.map((text) => (
              <span
                key={text}
                className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-300"
              >
                <span className="h-1 w-1 flex-none bg-neon-400" />
                {text}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <HeroIllustration />
      </div>
    </section>
  );
}
