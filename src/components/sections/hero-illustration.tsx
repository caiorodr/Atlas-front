import { motion } from "framer-motion";
import {
  Building2,
  FileSpreadsheet,
  Landmark,
  Users,
  type LucideIcon,
} from "lucide-react";
import { AtlasMark } from "@/components/shared/logo";

type Node = {
  icon: LucideIcon;
  label: string;
  sub: string;
  x: number;
  y: number;
};

const NODES: Node[] = [
  { icon: Building2, label: "Órgão público", sub: "Margem e folha", x: 50, y: 10 },
  { icon: Landmark, label: "Instituição financeira", sub: "APIs em tempo real", x: 88, y: 46 },
  { icon: Users, label: "Servidor público", sub: "Serviços digitais", x: 54, y: 90 },
  { icon: FileSpreadsheet, label: "Folha de pagamento", sub: "Desconto automático", x: 12, y: 56 },
];

/* Trajetórias das conexões — mesmas coordenadas percentuais dos nós (viewBox 600) */
const PATHS = [
  "M300,60 C300,150 300,225 300,300",
  "M528,276 C450,282 378,292 300,300",
  "M324,540 C316,455 308,375 300,300",
  "M72,336 C150,326 222,312 300,300",
];

export function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="relative mx-auto aspect-square w-full max-w-[560px]"
    >
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="hero-flow-gradient"
            x1="0"
            y1="0"
            x2="600"
            y2="600"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2F63F7" />
            <stop offset="1" stopColor="#3FE4AC" />
          </linearGradient>
        </defs>

        {/* Anéis orbitais */}
        <circle cx="300" cy="300" r="110" stroke="rgba(255,255,255,0.06)" />
        <circle cx="300" cy="300" r="215" stroke="rgba(255,255,255,0.05)" />
        <g
          className="animate-spin-slower"
          style={{ transformOrigin: "300px 300px" }}
        >
          <circle
            cx="300"
            cy="300"
            r="160"
            stroke="rgba(133,168,255,0.18)"
            strokeDasharray="3 10"
          />
        </g>

        {/* Conexões com fluxo animado */}
        {PATHS.map((d, i) => (
          <g key={d}>
            <path d={d} stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
            <path
              d={d}
              stroke="url(#hero-flow-gradient)"
              strokeWidth="1.5"
              strokeDasharray="5 15"
              className="animate-dash"
              opacity={0.65}
            />
            <circle r="3.5" fill="#3FE4AC" opacity="0.9">
              <animateMotion
                dur={`${3.2 + i * 0.9}s`}
                repeatCount="indefinite"
                path={d}
                keyPoints={i % 2 ? "1;0" : "0;1"}
                keyTimes="0;1"
                begin={`${i * 0.7}s`}
              />
            </circle>
          </g>
        ))}
      </svg>

      {/* Núcleo Atlas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative flex h-32 w-32 flex-col items-center justify-center gap-1.5 rounded-[1.8rem] border border-white/[0.12] bg-ink-900/90 shadow-[0_0_90px_rgba(47,99,247,0.4)] backdrop-blur-md sm:h-36 sm:w-36 sm:rounded-[2rem]">
          <span className="absolute inset-0 animate-ring-pulse rounded-[1.8rem] border border-brand-400/40 sm:rounded-[2rem]" />
          <AtlasMark className="h-11 w-11 text-white sm:h-12 sm:w-12" />
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-ink-300">
            núcleo
          </span>
        </div>
      </motion.div>

      {/* Nós da rede */}
      {NODES.map((node, i) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 + i * 0.12 }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-ink-900/95 py-2 pl-2 pr-3.5 shadow-[0_16px_48px_-16px_rgba(0,0,0,0.8)] sm:gap-3 sm:py-2.5 sm:pl-2.5 sm:pr-4">
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] sm:h-9 sm:w-9">
              <node.icon className="h-4 w-4 text-brand-300" />
            </span>
            <span>
              <span className="block whitespace-nowrap text-xs font-medium text-white sm:text-[13px]">
                {node.label}
              </span>
              <span className="hidden whitespace-nowrap text-[11px] text-ink-300 sm:block">
                {node.sub}
              </span>
            </span>
          </div>
        </motion.div>
      ))}

      {/* Selos flutuantes de operação */}
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[68%] top-[23%] hidden sm:block"
      >
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/90 px-3.5 py-2 font-mono text-[10px] tracking-wide text-ink-200 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-neon-400" />
          consulta de margem · 84 ms
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute left-[63%] top-[74%] hidden sm:block"
      >
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/90 px-3.5 py-2 font-mono text-[10px] tracking-wide text-ink-200 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
          averbação nº 58.291 · confirmada
        </div>
      </motion.div>
    </motion.div>
  );
}
