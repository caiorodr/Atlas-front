import type { ReactNode } from "react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-64px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
